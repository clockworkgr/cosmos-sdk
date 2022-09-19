package keeper_test

import (
	"encoding/hex"
	"sort"
	"testing"

	"github.com/cosmos/cosmos-sdk/baseapp"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	"github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"
	moduletestutil "github.com/cosmos/cosmos-sdk/types/module/testutil"
	"github.com/cosmos/cosmos-sdk/x/auth"
	"github.com/cosmos/cosmos-sdk/x/auth/keeper"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
	"github.com/stretchr/testify/suite"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
	"pgregory.net/rapid"
)

type DeterministicTestSuite struct {
	suite.Suite

	ctx           sdk.Context
	queryClient   types.QueryClient
	accountKeeper keeper.AccountKeeper
	encCfg        moduletestutil.TestEncodingConfig
}

func TestDeterministicTestSuite(t *testing.T) {
	suite.Run(t, new(DeterministicTestSuite))
}

func (suite *DeterministicTestSuite) SetupTest() {
	suite.encCfg = moduletestutil.MakeTestEncodingConfig(auth.AppModuleBasic{})

	key := sdk.NewKVStoreKey(types.StoreKey)
	testCtx := testutil.DefaultContextWithDB(suite.T(), key, sdk.NewTransientStoreKey("transient_test"))
	suite.ctx = testCtx.Ctx.WithBlockHeader(tmproto.Header{})

	// maccPerms := map[string][]string{
	// 	"fee_collector":          nil,
	// 	"mint":                   {"minter"},
	// 	"bonded_tokens_pool":     {"burner", "staking"},
	// 	"not_bonded_tokens_pool": {"burner", "staking"},
	// 	multiPerm:                {"burner", "minter", "staking"},
	// 	randomPerm:               {"random"},
	// }

	suite.accountKeeper = keeper.NewAccountKeeper(
		suite.encCfg.Codec,
		key,
		types.ProtoBaseAccount,
		nil,
		"cosmos",
		types.NewModuleAddress("gov").String(),
	)

	queryHelper := baseapp.NewQueryServerTestHelper(suite.ctx, suite.encCfg.InterfaceRegistry)
	types.RegisterQueryServer(queryHelper, suite.accountKeeper)
	suite.queryClient = types.NewQueryClient(queryHelper)
}

func (suite *DeterministicTestSuite) runAccountIterations(addr sdk.AccAddress, prevRes types.AccountI) {
	for i := 0; i < 1000; i++ {
		acc, err := suite.queryClient.Account(suite.ctx, &types.QueryAccountRequest{Address: addr.String()})
		suite.Require().NoError(err)
		suite.Require().NotNil(acc)

		var account types.AccountI
		err = suite.encCfg.InterfaceRegistry.UnpackAny(acc.Account, &account)
		suite.Require().NoError(err)
		suite.Require().Equal(account.GetAddress(), addr)

		if prevRes != nil {
			any, err := codectypes.NewAnyWithValue(prevRes)
			suite.Require().NoError(err)

			suite.Require().Equal(acc.Account, any)
			suite.Require().Equal(account, prevRes)
		}

		prevRes = account
	}
}

func (suite *DeterministicTestSuite) TestGRPCQueryAccount() {
	rapid.Check(suite.T(), func(t *rapid.T) {
		pub := pubkeyGenerator(t).Draw(t, "pubkey")
		addr := sdk.AccAddress(pub.Address())
		accNum := rapid.Uint64().Draw(t, "account-number")
		seq := rapid.Uint64().Draw(t, "sequence")

		acc1 := types.NewBaseAccount(addr, &pub, accNum, seq)
		suite.accountKeeper.SetAccount(suite.ctx, acc1)

		suite.runAccountIterations(addr, acc1)
	})

	// Regression test
	addr1 := sdk.MustAccAddressFromBech32("cosmos1j364pjm8jkxxmujj0vp2xjg0y7w8tyveuamfm6")
	pub, err := hex.DecodeString("01090C02812F010C25200ED40E004105160196E801F70005070EA21603FF06001E")
	suite.Require().NoError(err)

	accNum := uint64(10087)
	seq := uint64(0)

	acc1 := types.NewBaseAccount(addr1, &secp256k1.PubKey{Key: pub}, accNum, seq)

	suite.accountKeeper.SetAccount(suite.ctx, acc1)
	suite.runAccountIterations(addr1, acc1)
}

// pubkeyGenerator creates and returns a random pubkey generator using rapid.
func pubkeyGenerator(t *rapid.T) *rapid.Generator[secp256k1.PubKey] {
	return rapid.Custom(func(t *rapid.T) secp256k1.PubKey {
		pkBz := rapid.SliceOfN(rapid.Byte(), 33, 33).Draw(t, "hex")
		return secp256k1.PubKey{Key: pkBz}
	})
}

func (suite *DeterministicTestSuite) runAccountsIterations(prevRes []types.AccountI) {
	for i := 0; i < 1000; i++ {
		res, err := suite.queryClient.Accounts(suite.ctx, &types.QueryAccountsRequest{})
		suite.Require().NoError(err)
		suite.Require().NotNil(res)
		suite.Require().NotNil(res.Accounts)
		suite.Require().Len(res.Accounts, len(prevRes))

		unpackedAccs := make([]types.AccountI, len(res.Accounts))
		for i := 0; i < len(res.Accounts); i++ {
			var account types.AccountI
			err = suite.encCfg.InterfaceRegistry.UnpackAny(res.Accounts[i], &account)
			suite.Require().NoError(err)

			unpackedAccs[i] = account
		}

		sort.Slice(unpackedAccs, func(i2, j int) bool {
			return unpackedAccs[i2].GetAccountNumber() < unpackedAccs[j].GetAccountNumber()
		})

		sort.Slice(prevRes, func(i2, j int) bool {
			return prevRes[i2].GetAccountNumber() < prevRes[j].GetAccountNumber()
		})

		if prevRes != nil {
			suite.Require().Equal(unpackedAccs, prevRes)
		}

		prevRes = unpackedAccs
	}

	for i := 0; i < len(prevRes); i++ {
		suite.accountKeeper.RemoveAccount(suite.ctx, prevRes[i])
	}
}

func (suite *DeterministicTestSuite) TestGRPCQueryAccounts() {

	rapid.Check(suite.T(), func(t *rapid.T) {
		numAccs := rapid.IntRange(1, 10).Draw(t, "accounts")
		accs := make([]types.AccountI, numAccs)

		for i := 0; i < numAccs; i++ {
			pub := pubkeyGenerator(t).Draw(t, "pubkey")
			addr := sdk.AccAddress(pub.Address())
			accNum := rapid.Uint64Range(uint64(i*10+1), uint64(i*10+10)).Draw(t, "account-number") // to avoid collisions
			seq := rapid.Uint64().Draw(t, "sequence")

			acc1 := types.NewBaseAccount(addr, &pub, accNum, seq)
			suite.accountKeeper.SetAccount(suite.ctx, acc1)
			accs[i] = acc1
		}

		suite.runAccountsIterations(accs)
	})

	// Regression test
	addr1 := sdk.MustAccAddressFromBech32("cosmos1892yr6fzlj7ud0kfkah2ctrav3a4p4n060ze8f")
	pub1, err := hex.DecodeString("D1002E1B019000010BB7034500E71F011F1CA90D5B000E134BFB0F3603030D0303")
	suite.Require().NoError(err)
	accNum1 := uint64(107)
	seq1 := uint64(0)

	addr2 := sdk.MustAccAddressFromBech32("cosmos1j364pjm8jkxxmujj0vp2xjg0y7w8tyveuamfm6")
	pub2, err := hex.DecodeString("01090C02812F010C25200ED40E004105160196E801F70005070EA21603FF06001E")
	suite.Require().NoError(err)

	accNum2 := uint64(100)
	seq2 := uint64(10)

	acc1 := types.NewBaseAccount(addr1, &secp256k1.PubKey{Key: pub1}, accNum1, seq1)
	acc2 := types.NewBaseAccount(addr2, &secp256k1.PubKey{Key: pub2}, accNum2, seq2)

	suite.accountKeeper.SetAccount(suite.ctx, acc1)
	suite.accountKeeper.SetAccount(suite.ctx, acc2)

	suite.runAccountsIterations([]types.AccountI{acc1, acc2})
}

func (suite *DeterministicTestSuite) runAccountAddressByIDIterations(id int64, prevRes string) {
	for i := 0; i < 1000; i++ {
		res, err := suite.queryClient.AccountAddressByID(suite.ctx, &types.QueryAccountAddressByIDRequest{Id: id})
		suite.Require().NoError(err)
		suite.Require().NotNil(res)

		if prevRes != "" {
			suite.Require().Equal(res.AccountAddress, prevRes)
		}

		prevRes = res.AccountAddress
	}
}

func (suite *DeterministicTestSuite) TestGRPCQueryAccountAddressByID() {
	rapid.Check(suite.T(), func(t *rapid.T) {
		pub := pubkeyGenerator(t).Draw(t, "pubkey")
		addr := sdk.AccAddress(pub.Address())

		// TODO change this to draw uint64
		accNum := rapid.Uint32().Draw(t, "account-number")
		seq := rapid.Uint64().Draw(t, "sequence")

		acc1 := types.NewBaseAccount(addr, &pub, uint64(accNum), seq)
		suite.accountKeeper.SetAccount(suite.ctx, acc1)

		suite.runAccountAddressByIDIterations(int64(accNum), addr.String())
	})

	// Regression test
	addr1 := sdk.MustAccAddressFromBech32("cosmos1j364pjm8jkxxmujj0vp2xjg0y7w8tyveuamfm6")
	pub, err := hex.DecodeString("01090C02812F010C25200ED40E004105160196E801F70005070EA21603FF06001E")
	suite.Require().NoError(err)

	accNum := uint64(10087)
	seq := uint64(0)

	acc1 := types.NewBaseAccount(addr1, &secp256k1.PubKey{Key: pub}, accNum, seq)

	suite.accountKeeper.SetAccount(suite.ctx, acc1)
	suite.runAccountAddressByIDIterations(int64(accNum), addr1.String())
}

func (suite *DeterministicTestSuite) runParamsIterations(prevRes types.Params) {
	for i := 0; i < 1000; i++ {
		res, err := suite.queryClient.Params(suite.ctx, &types.QueryParamsRequest{})

		suite.Require().NoError(err)
		suite.Require().NotNil(res)

		if !prevRes.Equal(types.Params{}) {
			suite.Require().Equal(res.Params, prevRes)
		}

		prevRes = res.Params
	}
}

func (suite *DeterministicTestSuite) TestGRPCQueryParameters() {
	rapid.Check(suite.T(), func(t *rapid.T) {
		params := types.NewParams(
			rapid.Uint64Min(1).Draw(t, "max-memo-characters"),
			rapid.Uint64Min(1).Draw(t, "tx-sig-limit"),
			rapid.Uint64Min(1).Draw(t, "tx-size-cost-per-byte"),
			rapid.Uint64Min(1).Draw(t, "sig-verify-cost-ed25519"),
			rapid.Uint64Min(1).Draw(t, "sig-verify-cost-Secp256k1"),
		)

		err := suite.accountKeeper.SetParams(suite.ctx, params)
		suite.Require().NoError(err)

		suite.runParamsIterations(params)
	})

	// Regression test
	params := types.NewParams(15, 167, 100, 1, 21457)

	err := suite.accountKeeper.SetParams(suite.ctx, params)
	suite.Require().NoError(err)

	suite.runParamsIterations(params)
}

func (suite *DeterministicTestSuite) runAccountInfoIterations(addr sdk.AccAddress, prevRes *types.BaseAccount) {
	for i := 0; i < 1000; i++ {
		res, err := suite.queryClient.AccountInfo(suite.ctx, &types.QueryAccountInfoRequest{Address: addr.String()})
		suite.Require().NoError(err)
		suite.Require().NotNil(res)
		suite.Require().NotNil(res.Info)

		if prevRes != nil {
			suite.Require().Equal(res.GetInfo().Address, prevRes.Address)
			suite.Require().True(res.GetInfo().PubKey.Equal(prevRes.PubKey))
			suite.Require().Equal(res.GetInfo().AccountNumber, prevRes.GetAccountNumber())
			suite.Require().Equal(res.GetInfo().Sequence, prevRes.Sequence)
		}

		prevRes = res.GetInfo()
	}
}

func (suite *DeterministicTestSuite) TestGRPCQueryAccountInfo() {
	rapid.Check(suite.T(), func(t *rapid.T) {
		pub := pubkeyGenerator(t).Draw(t, "pubkey")
		addr := sdk.AccAddress(pub.Address())
		accNum := rapid.Uint64().Draw(t, "account-number")
		seq := rapid.Uint64().Draw(t, "sequence")

		acc1 := types.NewBaseAccount(addr, &pub, accNum, seq)
		suite.accountKeeper.SetAccount(suite.ctx, acc1)

		suite.runAccountInfoIterations(addr, acc1)
	})

	// Regression test
	addr1 := sdk.MustAccAddressFromBech32("cosmos1j364pjm8jkxxmujj0vp2xjg0y7w8tyveuamfm6")
	pub, err := hex.DecodeString("01090C02812F010C25200ED40E004105160196E801F70005070EA21603FF06001E")
	suite.Require().NoError(err)

	accNum := uint64(10087)
	seq := uint64(0)

	acc1 := types.NewBaseAccount(addr1, &secp256k1.PubKey{Key: pub}, accNum, seq)

	suite.accountKeeper.SetAccount(suite.ctx, acc1)
	suite.runAccountInfoIterations(addr1, acc1)
}

// func (suite *DeterministicTestSuite) runModuleAccountsIterations(prevRes []types.ModuleAccountI) {
// 	for i := 0; i < 1000; i++ {
// 		res, err := suite.queryClient.ModuleAccounts(suite.ctx, &types.QueryModuleAccountsRequest{})
// 		suite.Require().NoError(err)
// 		suite.Require().NotNil(res)
// 		suite.Require().NotNil(res.Accounts)
// 		suite.Require().Len(res.Accounts, len(prevRes))

// 		unpackedAccs := make([]types.ModuleAccountI, len(res.Accounts))
// 		for i := 0; i < len(res.Accounts); i++ {
// 			var account types.ModuleAccountI
// 			err = suite.encCfg.InterfaceRegistry.UnpackAny(res.Accounts[i], &account)
// 			suite.Require().NoError(err)

// 			unpackedAccs[i] = account
// 		}

// 		sort.Slice(unpackedAccs, func(i2, j int) bool {
// 			return unpackedAccs[i2].GetAccountNumber() < unpackedAccs[j].GetAccountNumber()
// 		})

// 		sort.Slice(prevRes, func(i2, j int) bool {
// 			return prevRes[i2].GetAccountNumber() < prevRes[j].GetAccountNumber()
// 		})

// 		if prevRes != nil {
// 			suite.Require().Equal(unpackedAccs, prevRes)
// 		}

// 		prevRes = unpackedAccs
// 	}

// 	for i := 0; i < len(prevRes); i++ {
// 		suite.accountKeeper.RemoveAccount(suite.ctx, prevRes[i])
// 	}
// }

// func (suite *DeterministicTestSuite) TestGRPCQueryModuleAccounts() {

// 	rapid.Check(suite.T(), func(t *rapid.T) {
// 		numAccs := rapid.IntRange(1, 3).Draw(t, "accounts")
// 		accs := make([]types.ModuleAccountI, numAccs)

// 		for i := 0; i < numAccs; i++ {
// 			pub := pubkeyGenerator(t).Draw(t, "pubkey")
// 			addr := sdk.AccAddress(pub.Address())
// 			accNum := uint64(i*10 + rand.Intn(10)) // to avoid collisions
// 			seq := rapid.Uint64().Draw(t, "sequence")
// 			permissions := []string{}

// 			for _, permission := range []string{"burner", "minter", "staking", "random"} {
// 				if rapid.Bool().Draw(t, "permissions") {
// 					permissions = append(permissions, permission)
// 				}
// 			}

// 			macc1 := types.NewModuleAccount(types.NewBaseAccount(addr, &pub, accNum, seq), "auth", permissions...)
// 			suite.accountKeeper.SetModuleAccount(suite.ctx, macc1)
// 			accs[i] = macc1
// 		}

// 		suite.runModuleAccountsIterations(accs)
// 		for i := 0; i < numAccs; i++ {
// 			suite.accountKeeper.RemoveAccount(suite.ctx, accs[i])
// 		}
// 	})

// Regression test
// addr1 := sdk.MustAccAddressFromBech32("cosmos1892yr6fzlj7ud0kfkah2ctrav3a4p4n060ze8f")
// pub1, err := hex.DecodeString("D1002E1B019000010BB7034500E71F011F1CA90D5B000E134BFB0F3603030D0303")
// suite.Require().NoError(err)
// accNum1 := uint64(107)
// seq1 := uint64(0)

// addr2 := sdk.MustAccAddressFromBech32("cosmos1j364pjm8jkxxmujj0vp2xjg0y7w8tyveuamfm6")
// pub2, err := hex.DecodeString("01090C02812F010C25200ED40E004105160196E801F70005070EA21603FF06001E")
// suite.Require().NoError(err)

// accNum2 := uint64(100)
// seq2 := uint64(10)

// acc1 := types.NewBaseAccount(addr1, &secp256k1.PubKey{Key: pub1}, accNum1, seq1)
// acc2 := types.NewBaseAccount(addr2, &secp256k1.PubKey{Key: pub2}, accNum2, seq2)

// suite.accountKeeper.SetAccount(suite.ctx, acc1)
// suite.accountKeeper.SetAccount(suite.ctx, acc2)

// suite.runAccountsIterations([]types.AccountI{acc1, acc2})
// }