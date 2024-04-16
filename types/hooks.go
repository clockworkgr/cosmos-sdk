package types

type BeginTxHook func(ctx Context) Context
type EndTxHook func(ctx Context, status bool)
