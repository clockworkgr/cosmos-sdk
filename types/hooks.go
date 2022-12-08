package types

type BeginTxer func(ctx Context) Context
type EndTxer func(ctx Context, status bool)
