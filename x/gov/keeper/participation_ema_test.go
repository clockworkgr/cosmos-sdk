package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/assert"

	"cosmossdk.io/math"

	sdk "github.com/cosmos/cosmos-sdk/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	v1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
)

func TestGetSetParticipationEma(t *testing.T) {
	k, _, _, _, _, _, ctx := setupGovKeeper(t)
	assert := assert.New(t)

	participationEMA, _ := k.ParticipationEMA.Get(ctx)
	constitutionParticipationEMA, _ := k.ConstitutionAmendmentParticipationEMA.Get(ctx)
	lawParticipationEMA, _ := k.LawParticipationEMA.Get(ctx)

	assert.Equal(v1.DefaultParticipationEma, participationEMA.String())
	assert.Equal(v1.DefaultParticipationEma, constitutionParticipationEMA.String())
	assert.Equal(v1.DefaultParticipationEma, lawParticipationEMA.String())

	assert.NoError(k.ParticipationEMA.Set(ctx, math.LegacyNewDecWithPrec(1, 2)))
	assert.NoError(k.ConstitutionAmendmentParticipationEMA.Set(ctx, math.LegacyNewDecWithPrec(2, 2)))
	assert.NoError(k.LawParticipationEMA.Set(ctx, math.LegacyNewDecWithPrec(3, 2)))

	participationEMA, _ = k.ParticipationEMA.Get(ctx)
	constitutionParticipationEMA, _ = k.ConstitutionAmendmentParticipationEMA.Get(ctx)
	lawParticipationEMA, _ = k.LawParticipationEMA.Get(ctx)

	assert.Equal(math.LegacyNewDecWithPrec(1, 2).String(), participationEMA.String())
	assert.Equal(math.LegacyNewDecWithPrec(2, 2).String(), constitutionParticipationEMA.String())
	assert.Equal(math.LegacyNewDecWithPrec(3, 2).String(), lawParticipationEMA.String())

	assert.Equal(math.LegacyNewDecWithPrec(104, 3).String(), k.GetQuorum(ctx).String())
	assert.Equal(math.LegacyNewDecWithPrec(108, 3).String(), k.GetConstitutionAmendmentQuorum(ctx).String())
	assert.Equal(math.LegacyNewDecWithPrec(112, 3).String(), k.GetLawQuorum(ctx).String())
}

func TestGetQuorumWithoutParticipationEma(t *testing.T) {
	// State written before the dynamic quorum existed has no participation EMA.
	// Historical queries read such state with the current code, which used to
	// multiply by a nil decimal and panic.
	k, _, _, _, _, _, ctx := setupGovKeeper(t)
	assert := assert.New(t)
	assert.NoError(k.ParticipationEMA.Remove(ctx))
	assert.NoError(k.ConstitutionAmendmentParticipationEMA.Remove(ctx))
	assert.NoError(k.LawParticipationEMA.Remove(ctx))

	params, err := k.Params.Get(ctx)
	assert.NoError(err)
	params.QuorumRange = &v1.QuorumRange{Min: "0.100000000000000000", Max: "0.500000000000000000"}
	params.ConstitutionAmendmentQuorumRange = &v1.QuorumRange{Min: "0.200000000000000000", Max: "0.600000000000000000"}
	params.LawQuorumRange = &v1.QuorumRange{Min: "0.300000000000000000", Max: "0.700000000000000000"}
	assert.NoError(k.Params.Set(ctx, params))

	// Without an EMA the quorum is the range minimum
	assert.Equal("0.100000000000000000", k.GetQuorum(ctx).String())
	assert.Equal("0.200000000000000000", k.GetConstitutionAmendmentQuorum(ctx).String())
	assert.Equal("0.300000000000000000", k.GetLawQuorum(ctx).String())

	// A range pinned to one value (how pre-dynamic-quorum params are converted)
	// resolves to exactly that value
	params.QuorumRange = &v1.QuorumRange{Min: "0.250000000000000000", Max: "0.250000000000000000"}
	assert.NoError(k.Params.Set(ctx, params))
	assert.Equal("0.250000000000000000", k.GetQuorum(ctx).String())
}

func TestGetQuorumWithoutQuorumRange(t *testing.T) {
	// Params without any range fall back to the static quorum stored next to it
	// instead of dereferencing a nil range.
	k, _, _, _, _, _, ctx := setupGovKeeper(t)
	assert := assert.New(t)

	params, err := k.Params.Get(ctx)
	assert.NoError(err)
	params.QuorumRange = nil
	params.ConstitutionAmendmentQuorumRange = nil
	params.LawQuorumRange = nil
	params.Quorum = "0.250000000000000000"
	params.ConstitutionAmendmentQuorum = "0.350000000000000000"
	params.LawQuorum = "0.450000000000000000"
	assert.NoError(k.Params.Set(ctx, params))

	assert.Equal("0.250000000000000000", k.GetQuorum(ctx).String())
	assert.Equal("0.350000000000000000", k.GetConstitutionAmendmentQuorum(ctx).String())
	assert.Equal("0.450000000000000000", k.GetLawQuorum(ctx).String())

	params.Quorum = ""
	assert.NoError(k.Params.Set(ctx, params))
	assert.Panics(func() { k.GetQuorum(ctx) })
}

func TestUpdateParticipationEma(t *testing.T) {
	tests := []struct {
		name                                        string
		proposal                                    v1.Proposal
		expectedParticipationEma                    string
		expectedConstitutionAmdmentParticipationEma string
		expectedLawParticipationEma                 string
	}{
		{
			name:                     "proposal w/o message",
			proposal:                 v1.Proposal{},
			expectedParticipationEma: math.LegacyNewDecWithPrec(41, 2).String(),
			expectedConstitutionAmdmentParticipationEma: v1.DefaultParticipationEma,
			expectedLawParticipationEma:                 v1.DefaultParticipationEma,
		},
		{
			name:                     "proposal with propose law message",
			proposal:                 v1.Proposal{Messages: setMsgs(t, []sdk.Msg{&v1.MsgProposeLaw{}})},
			expectedParticipationEma: v1.DefaultParticipationEma,
			expectedConstitutionAmdmentParticipationEma: v1.DefaultParticipationEma,
			expectedLawParticipationEma:                 math.LegacyNewDecWithPrec(41, 2).String(),
		},
		{
			name:                     "proposal with propose constitution amendment message",
			proposal:                 v1.Proposal{Messages: setMsgs(t, []sdk.Msg{&v1.MsgProposeConstitutionAmendment{}})},
			expectedParticipationEma: v1.DefaultParticipationEma,
			expectedConstitutionAmdmentParticipationEma: math.LegacyNewDecWithPrec(41, 2).String(),
			expectedLawParticipationEma:                 v1.DefaultParticipationEma,
		},
		{
			name: "proposal with all kinds of messages",
			proposal: v1.Proposal{Messages: setMsgs(t, []sdk.Msg{
				&v1.MsgProposeConstitutionAmendment{},
				&v1.MsgProposeLaw{},
				&banktypes.MsgSend{},
			})},
			expectedParticipationEma:                    math.LegacyNewDecWithPrec(41, 2).String(),
			expectedConstitutionAmdmentParticipationEma: math.LegacyNewDecWithPrec(41, 2).String(),
			expectedLawParticipationEma:                 math.LegacyNewDecWithPrec(41, 2).String(),
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			assert := assert.New(t)
			k, _, _, _, _, _, ctx := setupGovKeeper(t)

			participationEMA, _ := k.ParticipationEMA.Get(ctx)
			constitutionParticipationEMA, _ := k.ConstitutionAmendmentParticipationEMA.Get(ctx)
			lawParticipationEMA, _ := k.LawParticipationEMA.Get(ctx)

			assert.Equal(v1.DefaultParticipationEma, participationEMA.String())
			assert.Equal(v1.DefaultParticipationEma, constitutionParticipationEMA.String())
			assert.Equal(v1.DefaultParticipationEma, lawParticipationEMA.String())
			newParticipation := math.LegacyNewDecWithPrec(5, 2) // 5% participation

			k.UpdateParticipationEMA(ctx, tt.proposal, newParticipation)

			participationEMA, _ = k.ParticipationEMA.Get(ctx)
			constitutionParticipationEMA, _ = k.ConstitutionAmendmentParticipationEMA.Get(ctx)
			lawParticipationEMA, _ = k.LawParticipationEMA.Get(ctx)

			assert.Equal(tt.expectedParticipationEma, participationEMA.String())
			assert.Equal(tt.expectedConstitutionAmdmentParticipationEma, constitutionParticipationEMA.String())
			assert.Equal(tt.expectedLawParticipationEma, lawParticipationEMA.String())
		})
	}
}
