package flag

import (
	"context"
	"fmt"

	"google.golang.org/protobuf/reflect/protoreflect"
)

// TODO
//func bindSimpleListFlag(flagSet *pflag.FlagSet, kind protoreflect.Kind, name, shorthand, usage string) ListValue {
//	switch kind {
//	case protoreflect.StringKind:
//		val := flagSet.StringSliceP(name, shorthand, nil, usage)
//		return listValue(func(list protoreflect.List) {
//			for _, x := range *val {
//				list.Append(protoreflect.ValueOfString(x))
//			}
//		})
//	case protoreflect.BytesKind:
//		// TODO
//		return nil
//	case protoreflect.Uint32Kind, protoreflect.Fixed32Kind,
//		protoreflect.Uint64Kind, protoreflect.Fixed64Kind:
//		val := flagSet.UintSliceP(name, shorthand, nil, usage)
//		return listValue(func(list protoreflect.List) {
//			for _, x := range *val {
//				list.Append(protoreflect.ValueOfUint64(uint64(x)))
//			}
//		})
//	case protoreflect.Int32Kind, protoreflect.Sint32Kind, protoreflect.Sfixed32Kind,
//		protoreflect.Int64Kind, protoreflect.Sint64Kind, protoreflect.Sfixed64Kind:
//		val := flagSet.IntSliceP(name, shorthand, nil, usage)
//		return listValue(func(list protoreflect.List) {
//			for _, x := range *val {
//				list.Append(protoreflect.ValueOfInt64(int64(x)))
//			}
//		})
//	case protoreflect.BoolKind:
//		val := flagSet.BoolSliceP(name, shorthand, nil, usage)
//		return listValue(func(list protoreflect.List) {
//			for _, x := range *val {
//				list.Append(protoreflect.ValueOfBool(x))
//			}
//		})
//	default:
//		return nil
//	}
//}

func compositeListType(simpleType Type) Type {
	return Type{
		NewValue: func(ctx context.Context, builder *Builder) Value {

			return &compositeListValue{
				simpleType: simpleType,
				values:     nil,
				ctx:        ctx,
				opts:       builder,
			}
		},
	}
}

type compositeListValue struct {
	simpleType Type
	values     []protoreflect.Value
	ctx        context.Context
	opts       *Builder
}

func (c *compositeListValue) Bind(message protoreflect.Message, field protoreflect.FieldDescriptor) {
	c.AppendTo(message.NewField(field).List())
}

func (c *compositeListValue) AppendTo(list protoreflect.List) {
	for _, value := range c.values {
		list.Append(value)
	}
}

func (c *compositeListValue) String() string {
	if len(c.values) == 0 {
		return ""
	}

	return fmt.Sprintf("%+v", c.values)
}

func (c *compositeListValue) Set(val string) error {
	simpleVal := c.simpleType.NewValue(c.ctx, c.opts)
	err := simpleVal.Set(val)
	if err != nil {
		return err
	}
	v, err := simpleVal.(SimpleValue).Get()
	if err != nil {
		return err
	}
	c.values = append(c.values, v)
	return nil
}

func (c *compositeListValue) Type() string {
	return fmt.Sprintf("%s (repeated)", c.simpleType.NewValue(c.ctx, c.opts).Type())
}
