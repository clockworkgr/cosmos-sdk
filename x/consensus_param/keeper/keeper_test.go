package keeper_test

import (
	"testing"

	"github.com/cosmos/cosmos-sdk/baseapp"
	"github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"
	moduletestutil "github.com/cosmos/cosmos-sdk/types/module/testutil"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	consensusparamkeeper "github.com/cosmos/cosmos-sdk/x/consensus_param/keeper"
	consensusparamtypes "github.com/cosmos/cosmos-sdk/x/consensus_param/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"

	"github.com/stretchr/testify/suite"
)

type KeeperTestSuite struct {
	suite.Suite
	ctx                   sdk.Context
	consensusParamsKeeper *consensusparamkeeper.Keeper

	queryClient consensusparamtypes.QueryClient
	msgServer   consensusparamtypes.MsgServer
}

func (s *KeeperTestSuite) SetupTest() {
	key := sdk.NewKVStoreKey(consensusparamtypes.StoreKey)
	testCtx := testutil.DefaultContextWithDB(s.T(), key, sdk.NewTransientStoreKey("transient_test"))
	ctx := testCtx.Ctx.WithBlockHeader(tmproto.Header{})
	encCfg := moduletestutil.MakeTestEncodingConfig()

	keeper := consensusparamkeeper.NewKeeper(encCfg.Codec, key, authtypes.NewModuleAddress(govtypes.ModuleName).String())

	s.ctx = ctx
	s.consensusParamsKeeper = &keeper

	consensusparamtypes.RegisterInterfaces(encCfg.InterfaceRegistry)
	queryHelper := baseapp.NewQueryServerTestHelper(ctx, encCfg.InterfaceRegistry)
	consensusparamtypes.RegisterQueryServer(queryHelper, consensusparamkeeper.NewQuerier(keeper))
	s.queryClient = consensusparamtypes.NewQueryClient(queryHelper)
	s.msgServer = consensusparamkeeper.NewMsgServerImpl(keeper)

}

func TestKeeperTestSuite(t *testing.T) {
	suite.Run(t, new(KeeperTestSuite))
}
