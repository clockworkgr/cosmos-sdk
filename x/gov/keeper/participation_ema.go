package keeper

import (
	"context"
	"errors"
	"fmt"

	"cosmossdk.io/collections"
	"cosmossdk.io/math"

	v1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
)

// UpdateParticipationEMA updates the governance participation EMA
func (keeper Keeper) UpdateParticipationEMA(ctx context.Context, proposal v1.Proposal, participation math.LegacyDec) {
	formula := func(oldValue, newValue math.LegacyDec) math.LegacyDec {
		return oldValue.Mul(math.LegacyNewDecWithPrec(8, 1)).Add(newValue.Mul(math.LegacyNewDecWithPrec(2, 1)))
	}

	kinds := keeper.ProposalKinds(proposal)
	if kinds.HasKindConstitutionAmendment() {
		current, err := keeper.ConstitutionAmendmentParticipationEMA.Get(ctx)
		if err != nil {
			panic(err)
		}

		if err := keeper.ConstitutionAmendmentParticipationEMA.Set(ctx, formula(current, participation)); err != nil {
			panic(err)
		}
	}
	if kinds.HasKindLaw() {
		current, err := keeper.LawParticipationEMA.Get(ctx)
		if err != nil {
			panic(err)
		}

		if err := keeper.LawParticipationEMA.Set(ctx, formula(current, participation)); err != nil {
			panic(err)
		}
	}
	if kinds.HasKindAny() {
		current, err := keeper.ParticipationEMA.Get(ctx)
		if err != nil {
			panic(err)
		}

		if err := keeper.ParticipationEMA.Set(ctx, formula(current, participation)); err != nil {
			panic(err)
		}
	}
}

// GetQuorum returns the dynamic quorum for governance proposals calculated
// based on the participation EMA
func (keeper Keeper) GetQuorum(ctx context.Context) math.LegacyDec {
	params, err := keeper.Params.Get(ctx)
	if err != nil {
		panic(fmt.Errorf("failed to get params: %w", err))
	}
	return keeper.dynamicQuorum(ctx, keeper.ParticipationEMA, params.QuorumRange, params.Quorum)
}

// GetConstitutionAmendmentQuorum returns the dynamic quorum for constitution
// amendment governance proposals calculated based on the participation EMA
func (keeper Keeper) GetConstitutionAmendmentQuorum(ctx context.Context) math.LegacyDec {
	params, err := keeper.Params.Get(ctx)
	if err != nil {
		panic(fmt.Errorf("failed to get params: %w", err))
	}
	return keeper.dynamicQuorum(ctx, keeper.ConstitutionAmendmentParticipationEMA, params.ConstitutionAmendmentQuorumRange, params.ConstitutionAmendmentQuorum)
}

// GetLawQuorum returns the dynamic quorum for law governance proposals
// calculated based on the participation EMA
func (keeper Keeper) GetLawQuorum(ctx context.Context) math.LegacyDec {
	params, err := keeper.Params.Get(ctx)
	if err != nil {
		panic(fmt.Errorf("failed to get params: %w", err))
	}
	return keeper.dynamicQuorum(ctx, keeper.LawParticipationEMA, params.LawQuorumRange, params.LawQuorum)
}

// dynamicQuorum resolves a quorum from its range and participation EMA.
//
// State written before the dynamic quorum existed carries neither, and it is
// still read by historical queries (a TallyResult or Params query at a height
// before the upgrade that introduced them). Rather than dereferencing a nil
// range or multiplying by a nil EMA, such state resolves to the quorum the chain
// applied then: a nil range falls back to the static quorum stored next to it,
// and a missing EMA yields the range's minimum. On state that has both, the
// result is unchanged.
func (keeper Keeper) dynamicQuorum(ctx context.Context, ema collections.Item[math.LegacyDec], quorumRange *v1.QuorumRange, staticQuorum string) math.LegacyDec {
	if quorumRange == nil {
		if staticQuorum == "" {
			panic(fmt.Errorf("gov params define neither a quorum range nor a static quorum"))
		}
		return math.LegacyMustNewDecFromStr(staticQuorum)
	}

	participation, err := ema.Get(ctx)
	if err != nil && !errors.Is(err, collections.ErrNotFound) {
		panic(err)
	}

	minQuorum := math.LegacyMustNewDecFromStr(quorumRange.Min)
	maxQuorum := math.LegacyMustNewDecFromStr(quorumRange.Max)
	if participation.IsNil() {
		return minQuorum
	}
	return computeQuorum(participation, minQuorum, maxQuorum)
}

// computeQuorum returns the dynamic quorum for governance proposals calculated
// based on the participation EMA, min and max quorum.
func computeQuorum(participationEma, minQuorum, maxQuorum math.LegacyDec) math.LegacyDec {
	// quorum = min_quorum + (max_quorum - min_quorum) * participationEma
	return minQuorum.Add(maxQuorum.Sub(minQuorum).Mul(participationEma))
}
