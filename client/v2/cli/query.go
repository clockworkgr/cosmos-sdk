package cli

import (
	"fmt"

	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"
	"github.com/iancoleman/strcase"
	"github.com/spf13/cobra"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/reflect/protoreflect"
	"google.golang.org/protobuf/reflect/protoregistry"

	"github.com/cosmos/cosmos-sdk/client/v2/cli/flag"

	"github.com/cosmos/cosmos-sdk/client/v2/internal/util"
)

// BuildQueryCommand builds the query commands for all the provided modules. If a custom command is provided for a
// module, this is used instead of any automatically generated CLI commands.
func (b *Builder) BuildQueryCommand(moduleOptions map[string]*autocliv1.ModuleOptions, customCmds map[string]*cobra.Command) (*cobra.Command, error) {
	queryCmd := topLevelCmd("query", "Querying subcommands")
	queryCmd.Aliases = []string{"q"}
	for moduleName, modOpts := range moduleOptions {
		if customCmds[moduleName] != nil {
			// custom commands get added lower down
			continue
		}

		queryCmdDesc := modOpts.Query
		if queryCmdDesc != nil {
			cmd, err := b.BuildModuleQueryCommand(moduleName, queryCmdDesc)
			if err != nil {
				return nil, err
			}

			queryCmd.AddCommand(cmd)
		}
	}

	for _, cmd := range customCmds {
		queryCmd.AddCommand(cmd)
	}

	return queryCmd, nil
}

// BuildModuleQueryCommand builds the query command for a single module.
func (b *Builder) BuildModuleQueryCommand(moduleName string, cmdDescriptor *autocliv1.ServiceCommandDescriptor) (*cobra.Command, error) {
	cmd := topLevelCmd(moduleName, fmt.Sprintf("Querying commands for the %s module", moduleName))

	err := b.AddQueryServiceCommands(cmd, cmdDescriptor)

	return cmd, err
}

// AddQueryServiceCommands adds a sub-command to the provided command for each
// method in the specified service and returns the command. This can be used in
// order to add auto-generated commands to an existing command.
func (b *Builder) AddQueryServiceCommands(command *cobra.Command, cmdDescriptor *autocliv1.ServiceCommandDescriptor) error {
	resolver := b.FileResolver
	if resolver == nil {
		resolver = protoregistry.GlobalFiles
	}
	descriptor, err := resolver.FindDescriptorByName(protoreflect.FullName(cmdDescriptor.Service))
	if err != nil {
		panic(err)
	}

	service := descriptor.(protoreflect.ServiceDescriptor)
	methods := service.Methods()
	n := methods.Len()
	for i := 0; i < n; i++ {
		methodDescriptor := methods.Get(i)
		var methodOpts *autocliv1.RpcCommandOptions
		for _, option := range cmdDescriptor.RpcCommandOptions {
			if protoreflect.Name(option.RpcMethod) == methodDescriptor.Name() {
				methodOpts = option
			}
		}
		cmd, err := b.CreateQueryMethodCommand(methodDescriptor, methodOpts)
		if err != nil {
			return err
		}

		if cmd != nil {
			command.AddCommand(cmd)
		}
	}

	for cmdName, subCmd := range cmdDescriptor.SubCommands {
		cmd := topLevelCmd(cmdName, fmt.Sprintf("Querying commands for the %s service", subCmd.Service))
		err = b.AddQueryServiceCommands(cmd, subCmd)
		if err != nil {
			return err
		}
	}
	return nil
}

// CreateQueryMethodCommand creates a gRPC query command for the given service method. This can be used to auto-generate
// just a single command for a single service rpc method.
func (b *Builder) CreateQueryMethodCommand(descriptor protoreflect.MethodDescriptor, options *autocliv1.RpcCommandOptions) (*cobra.Command, error) {
	if options == nil {
		// use the defaults
		options = &autocliv1.RpcCommandOptions{}
	}

	if options.Skip {
		return nil, nil
	}

	serviceDescriptor := descriptor.Parent().(protoreflect.ServiceDescriptor)

	long := options.Long
	if long == "" {
		long = util.DescriptorDocs(descriptor)
	}

	getClientConn := b.GetClientConn
	methodName := fmt.Sprintf("/%s/%s", serviceDescriptor.FullName(), descriptor.Name())

	inputDesc := descriptor.Input()
	inputType := util.ResolveMessageType(b.TypeResolver, inputDesc)
	outputType := util.ResolveMessageType(b.TypeResolver, descriptor.Output())

	use := options.Use
	if use == "" {
		use = protoNameToCliName(descriptor.Name())
	}

	cmd := &cobra.Command{
		Use:        use,
		Long:       long,
		Short:      options.Short,
		Example:    options.Example,
		Aliases:    options.Alias,
		SuggestFor: options.SuggestFor,
		Deprecated: options.Deprecated,
		Version:    options.Version,
	}

	binder, err := b.AddMessageFlags(cmd.Context(), cmd.Flags(), inputType, options, flag.Options{})
	if err != nil {
		return nil, err
	}

	cmd.Args = binder.CobraArgs

	jsonMarshalOptions := protojson.MarshalOptions{
		Indent:          "  ",
		UseProtoNames:   true,
		UseEnumNumbers:  false,
		EmitUnpopulated: true,
		Resolver:        b.TypeResolver,
	}

	cmd.RunE = func(cmd *cobra.Command, args []string) error {
		ctx := cmd.Context()
		clientConn := getClientConn(ctx)
		input, err := binder.BuildMessage(args)
		if err != nil {
			return err
		}

		output := outputType.New()
		err = clientConn.Invoke(ctx, methodName, input.Interface(), output.Interface())
		if err != nil {
			return err
		}

		bz, err := jsonMarshalOptions.Marshal(output.Interface())
		if err != nil {
			return err
		}

		_, err = fmt.Fprintln(cmd.OutOrStdout(), string(bz))
		return err
	}

	return cmd, nil
}

func protoNameToCliName(name protoreflect.Name) string {
	return strcase.ToKebab(string(name))
}

func topLevelCmd(use, short string) *cobra.Command {
	return &cobra.Command{
		Use:                        use,
		Short:                      short,
		DisableFlagParsing:         false,
		SuggestionsMinimumDistance: 2,
		RunE:                       ValidateCmd,
	}
}
