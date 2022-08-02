package genutil_test

import (
	"cosmossdk.io/math"
	"encoding/json"
	"fmt"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	"github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"
	moduletestutil "github.com/cosmos/cosmos-sdk/types/module/testutil"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/cosmos/cosmos-sdk/x/genutil"
	genutiltestutil "github.com/cosmos/cosmos-sdk/x/genutil/testutil"
	"github.com/cosmos/cosmos-sdk/x/genutil/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/suite"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
	"testing"
)

var (
	priv1 = secp256k1.GenPrivKey()
	priv2 = secp256k1.GenPrivKey()
	pk1   = priv1.PubKey()
	pk2   = priv2.PubKey()
	addr1 = sdk.AccAddress(pk1.Address())
	addr2 = sdk.AccAddress(pk2.Address())
	desc  = stakingtypes.NewDescription("testname", "", "", "", "")
	comm  = stakingtypes.CommissionRates{}
)

// GenTxTestSuite is a test suite to be used with gentx tests.
type GenTxTestSuite struct {
	suite.Suite

	ctx sdk.Context
	//app            *simapp.SimApp
	encodingConfig moduletestutil.TestEncodingConfig
	msg1, msg2     *stakingtypes.MsgCreateValidator

	accountKeeper *genutiltestutil.MockAccountKeeper
}

func (suite *GenTxTestSuite) SetupTest() {
	//checkTx := false
	//app := simapp.Setup(suite.T(), checkTx)
	key := sdk.NewKVStoreKey(types.ModuleName)
	tkey := sdk.NewTransientStoreKey("genutil_transient_store")
	//suite.ctx = app.BaseApp.NewContext(checkTx, tmproto.Header{})
	//suite.app = app
	testCtx := testutil.DefaultContext(key, tkey)
	suite.ctx = testCtx.WithBlockHeader(tmproto.Header{})
	//suite.encodingConfig = moduletestutil.TestEncodingConfig{
	//	InterfaceRegistry: app.InterfaceRegistry(),
	//	Codec:             app.AppCodec(),
	//	TxConfig:          app.TxConfig(),
	//	Amino:             app.LegacyAmino(),
	//}
	suite.encodingConfig = moduletestutil.MakeTestEncodingConfig(genutil.AppModuleBasic{})

	ctrl := gomock.NewController(suite.T())
	suite.accountKeeper = genutiltestutil.NewMockAccountKeeper(ctrl)

	var err error
	amount := sdk.NewInt64Coin(sdk.DefaultBondDenom, 50)
	one := math.OneInt()
	suite.msg1, err = stakingtypes.NewMsgCreateValidator(
		sdk.ValAddress(pk1.Address()), pk1, amount, desc, comm, one)
	suite.NoError(err)
	suite.msg2, err = stakingtypes.NewMsgCreateValidator(
		sdk.ValAddress(pk2.Address()), pk1, amount, desc, comm, one)
	suite.NoError(err)
}

//func (suite *GenTxTestSuite) setAccountBalanceOld(addr sdk.AccAddress, amount int64) json.RawMessage {
//	acc := suite.app.AccountKeeper.NewAccountWithAddress(suite.ctx, addr)
//	suite.app.AccountKeeper.SetAccount(suite.ctx, acc)
//
//	err := testutil.FundAccount(suite.app.BankKeeper, suite.ctx, addr, sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, amount)})
//	suite.Require().NoError(err)
//
//	bankGenesisState := suite.app.BankKeeper.ExportGenesis(suite.ctx)
//	bankGenesis, err := suite.encodingConfig.Amino.MarshalJSON(bankGenesisState) // TODO switch this to use Marshaler
//	suite.Require().NoError(err)
//	fmt.Println(bankGenesis)
//	_ = ioutil.WriteFile("../test-genesis.json", bankGenesis, 0644)
//
//	return bankGenesis
//}

func (suite *GenTxTestSuite) setAccountBalance(addr sdk.AccAddress, amount int64) json.RawMessage {
	//{
	//	"params": {
	//	"default_send_enabled": true
	//},
	//	"balances": [
	//{
	//"address": "cosmos1fl48vsnmsdzcv85q5d2q4z5ajdha8yu34mf0eh",
	//"coins": [
	//{
	//"denom": "stake",
	//"amount": "1000000"
	//}
	//]
	//},
	//{
	//"address": "cosmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd88lyufl",
	//"coins": [
	//{
	//"denom": "stake",
	//"amount": "2059726"
	//}
	//]
	//},
	//{
	//"address": "cosmos1js8zx28vzr6x63k06p4g5kcg630gr696xl75rf",
	//"coins": [
	//{
	//"denom": "stake",
	//"amount": "50"
	//}
	//]
	//},
	//{
	//"address": "cosmos1k5lndq46x9xpejdxq52q3ql3ycrphg4qxlfqn7",
	//"coins": [
	//{
	//"denom": "stake",
	//"amount": "100000000000000"
	//}
	//]
	//}
	//],
	//"supply": [
	//{
	//"denom": "stake",
	//"amount": "100000003059776"
	//}
	//],
	//"denom_metadata": [],
	//"send_enabled": null
	//}
	bankGenesisState := banktypes.GenesisState{
		Params: banktypes.Params{DefaultSendEnabled: true},
		Balances: []banktypes.Balance{
			{
				Address: "cosmos1fl48vsnmsdzcv85q5d2q4z5ajdha8yu34mf0eh",
				Coins:   sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, 1000000)},
			},
			{
				Address: "cosmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd88lyufl",
				Coins:   sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, 2059726)},
			},
			{
				Address: addr.String(),
				Coins:   sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, amount)},
			},
			{
				Address: "cosmos1k5lndq46x9xpejdxq52q3ql3ycrphg4qxlfqn7",
				Coins:   sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, 100000000000000)},
			},
		},
		Supply: sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, 1000000+2059726+100000000000000+amount)},
	}
	bankGenesis, err := suite.encodingConfig.Amino.MarshalJSON(bankGenesisState) // TODO switch this to use Marshaler
	suite.Require().NoError(err)
	return bankGenesis
}

func (suite *GenTxTestSuite) TestSetGenTxsInAppGenesisState() {
	var (
		txBuilder = suite.encodingConfig.TxConfig.NewTxBuilder()
		genTxs    []sdk.Tx
	)

	testCases := []struct {
		msg      string
		malleate func()
		expPass  bool
	}{
		{
			"one genesis transaction",
			func() {
				err := txBuilder.SetMsgs(suite.msg1)
				suite.Require().NoError(err)
				tx := txBuilder.GetTx()
				genTxs = []sdk.Tx{tx}
			},
			true,
		},
		{
			"two genesis transactions",
			func() {
				err := txBuilder.SetMsgs(suite.msg1, suite.msg2)
				suite.Require().NoError(err)
				tx := txBuilder.GetTx()
				genTxs = []sdk.Tx{tx}
			},
			true,
		},
	}

	for _, tc := range testCases {
		suite.Run(fmt.Sprintf("Case %s", tc.msg), func() {
			suite.SetupTest()
			cdc := suite.encodingConfig.Codec
			txJSONEncoder := suite.encodingConfig.TxConfig.TxJSONEncoder()

			tc.malleate()
			appGenesisState, err := genutil.SetGenTxsInAppGenesisState(cdc, txJSONEncoder, make(map[string]json.RawMessage), genTxs)

			if tc.expPass {
				suite.Require().NoError(err)
				suite.Require().NotNil(appGenesisState[types.ModuleName])

				var genesisState types.GenesisState
				err := cdc.UnmarshalJSON(appGenesisState[types.ModuleName], &genesisState)
				suite.Require().NoError(err)
				suite.Require().NotNil(genesisState.GenTxs)
			} else {
				suite.Require().Error(err)
			}
		})
	}
}

//func (suite *GenTxTestSuite) TestValidateAccountInGenesis() {
//	var (
//		appGenesisState = make(map[string]json.RawMessage)
//		coins           sdk.Coins
//	)
//
//	testCases := []struct {
//		msg      string
//		malleate func()
//		expPass  bool
//	}{
//		{
//			"no accounts",
//			func() {
//				coins = sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, 0)}
//			},
//			false,
//		},
//		{
//			"account without balance in the genesis state",
//			func() {
//				coins = sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, 0)}
//				appGenesisState[banktypes.ModuleName] = suite.setAccountBalance(addr2, 50)
//			},
//			false,
//		},
//		{
//			"account without enough funds of default bond denom",
//			func() {
//				coins = sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, 50)}
//				appGenesisState[banktypes.ModuleName] = suite.setAccountBalance(addr1, 25)
//			},
//			false,
//		},
//		{
//			"account with enough funds of default bond denom",
//			func() {
//				coins = sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, 10)}
//				appGenesisState[banktypes.ModuleName] = suite.setAccountBalance(addr1, 25)
//			},
//			true,
//		},
//	}
//	for _, tc := range testCases {
//		suite.Run(fmt.Sprintf("Case %s", tc.msg), func() {
//			suite.SetupTest()
//			cdc := suite.encodingConfig.Codec
//
//			suite.app.StakingKeeper.SetParams(suite.ctx, stakingtypes.DefaultParams())
//			stakingGenesisState := suite.app.StakingKeeper.ExportGenesis(suite.ctx)
//			suite.Require().Equal(stakingGenesisState.Params, stakingtypes.DefaultParams())
//			stakingGenesis, err := cdc.MarshalJSON(stakingGenesisState) // TODO switch this to use Marshaler
//			suite.Require().NoError(err)
//			appGenesisState[stakingtypes.ModuleName] = stakingGenesis
//
//			tc.malleate()
//			err = genutil.ValidateAccountInGenesis(
//				appGenesisState, banktypes.GenesisBalancesIterator{},
//				addr1, coins, cdc,
//			)
//
//			if tc.expPass {
//				suite.Require().NoError(err)
//			} else {
//				suite.Require().Error(err)
//			}
//		})
//	}
//}
//
//func (suite *GenTxTestSuite) TestDeliverGenTxs() {
//	var (
//		genTxs    []json.RawMessage
//		txBuilder = suite.encodingConfig.TxConfig.NewTxBuilder()
//	)
//
//	testCases := []struct {
//		msg      string
//		malleate func()
//		expPass  bool
//	}{
//		{
//			"no signature supplied",
//			func() {
//				err := txBuilder.SetMsgs(suite.msg1)
//				suite.Require().NoError(err)
//
//				genTxs = make([]json.RawMessage, 1)
//				tx, err := suite.encodingConfig.TxConfig.TxJSONEncoder()(txBuilder.GetTx())
//				suite.Require().NoError(err)
//				genTxs[0] = tx
//			},
//			false,
//		},
//		{
//			"success",
//			func() {
//				_ = suite.setAccountBalance(addr1, 50)
//				_ = suite.setAccountBalance(addr2, 1)
//
//				r := rand.New(rand.NewSource(time.Now().UnixNano()))
//				msg := banktypes.NewMsgSend(addr1, addr2, sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, 1)})
//				tx, err := simtestutil.GenSignedMockTx(
//					r,
//					suite.encodingConfig.TxConfig,
//					[]sdk.Msg{msg},
//					sdk.Coins{sdk.NewInt64Coin(sdk.DefaultBondDenom, 10)},
//					simtestutil.DefaultGenTxGas,
//					suite.ctx.ChainID(),
//					[]uint64{7},
//					[]uint64{0},
//					priv1,
//				)
//				suite.Require().NoError(err)
//
//				genTxs = make([]json.RawMessage, 1)
//				genTx, err := suite.encodingConfig.TxConfig.TxJSONEncoder()(tx)
//				suite.Require().NoError(err)
//				genTxs[0] = genTx
//			},
//			true,
//		},
//	}
//
//	for _, tc := range testCases {
//		suite.Run(fmt.Sprintf("Case %s", tc.msg), func() {
//			suite.SetupTest()
//
//			tc.malleate()
//
//			if tc.expPass {
//				suite.Require().NotPanics(func() {
//					genutil.DeliverGenTxs(
//						suite.ctx, genTxs, suite.app.StakingKeeper, suite.app.BaseApp.DeliverTx,
//						suite.encodingConfig.TxConfig,
//					)
//				})
//			} else {
//				_, err := genutil.DeliverGenTxs(
//					suite.ctx, genTxs, suite.app.StakingKeeper, suite.app.BaseApp.DeliverTx,
//					suite.encodingConfig.TxConfig,
//				)
//
//				suite.Require().Error(err)
//			}
//		})
//	}
//}

func TestGenTxTestSuite(t *testing.T) {
	suite.Run(t, new(GenTxTestSuite))
}
