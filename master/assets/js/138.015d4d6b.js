(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{658:function(e,t,o){"use strict";o.r(t);var l=o(1),a=Object(l.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"module-manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-manager"}},[e._v("#")]),e._v(" Module Manager")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("Cosmos SDK modules need to implement the "),o("a",{attrs:{href:"#application-module-interfaces"}},[o("code",[e._v("AppModule")]),e._v(" interfaces")]),e._v(", in order to be managed by the application's "),o("a",{attrs:{href:"#module-manager"}},[e._v("module manager")]),e._v(". The module manager plays an important role in "),o("RouterLink",{attrs:{to:"/core/baseapp.html#routing"}},[o("code",[e._v("message")]),e._v(" and "),o("code",[e._v("query")]),e._v(" routing")]),e._v(", and allows application developers to set the order of execution of a variety of functions like "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#begingblocker-and-endblocker"}},[o("code",[e._v("BeginBlocker")]),e._v(" and "),o("code",[e._v("EndBlocker")])]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"pre-requisite-readings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/building-modules/intro.html"}},[e._v("Introduction to Cosmos SDK Modules")])],1)]),e._v(" "),o("h2",{attrs:{id:"application-module-interfaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-module-interfaces"}},[e._v("#")]),e._v(" Application Module Interfaces")]),e._v(" "),o("p",[e._v("Application module interfaces exist to facilitate the composition of modules together to form a functional Cosmos SDK application. There are 3 main application module interfaces:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#appmodulebasic"}},[o("code",[e._v("AppModuleBasic")])]),e._v(" for independent module functionalities.")]),e._v(" "),o("li",[o("a",{attrs:{href:"#appmodule"}},[o("code",[e._v("AppModule")])]),e._v(" for inter-dependent module functionalities (except genesis-related functionalities).")]),e._v(" "),o("li",[o("a",{attrs:{href:"#appmodulegenesis"}},[o("code",[e._v("AppModuleGenesis")])]),e._v(" for inter-dependent genesis-related module functionalities.")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModuleBasic")]),e._v(" interface exists to define independent methods of the module, i.e. those that do not depend on other modules in the application. This allows for the construction of the basic application structure early in the application definition, generally in the "),o("code",[e._v("init()")]),e._v(" function of the "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#core-application-file"}},[e._v("main application file")]),e._v(".")],1),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModule")]),e._v(" interface exists to define inter-dependent module methods. Many modules need to interact with other modules, typically through "),o("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[o("code",[e._v("keeper")]),e._v("s")]),e._v(", which means there is a need for an interface where modules list their "),o("code",[e._v("keeper")]),e._v("s and other methods that require a reference to another module's object. "),o("code",[e._v("AppModule")]),e._v(" interface also enables the module manager to set the order of execution between module's methods like "),o("code",[e._v("BeginBlock")]),e._v(" and "),o("code",[e._v("EndBlock")]),e._v(", which is important in cases where the order of execution between modules matters in the context of the application.")],1),e._v(" "),o("p",[e._v("Lastly the interface for genesis functionality "),o("code",[e._v("AppModuleGenesis")]),e._v(" is separated out from full module functionality "),o("code",[e._v("AppModule")]),e._v(" so that modules which\nare only used for genesis can take advantage of the "),o("code",[e._v("Module")]),e._v(" patterns without having to define many placeholder functions.")]),e._v(" "),o("h3",{attrs:{id:"appmodulebasic"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appmodulebasic"}},[e._v("#")]),e._v(" "),o("code",[e._v("AppModuleBasic")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModuleBasic")]),e._v(" interface defines the independent methods modules need to implement.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQXBwTW9kdWxlQmFzaWMgaXMgdGhlIHN0YW5kYXJkIGZvcm0gZm9yIGJhc2ljIG5vbi1kZXBlbmRhbnQgZWxlbWVudHMgb2YgYW4gYXBwbGljYXRpb24gbW9kdWxlLgp0eXBlIEFwcE1vZHVsZUJhc2ljIGludGVyZmFjZSB7CglOYW1lKCkgc3RyaW5nCglSZWdpc3RlckxlZ2FjeUFtaW5vQ29kZWMoKmNvZGVjLkxlZ2FjeUFtaW5vKQoJUmVnaXN0ZXJJbnRlcmZhY2VzKGNvZGVjdHlwZXMuSW50ZXJmYWNlUmVnaXN0cnkpCgoJRGVmYXVsdEdlbmVzaXMoY29kZWMuSlNPTkNvZGVjKSBqc29uLlJhd01lc3NhZ2UKCVZhbGlkYXRlR2VuZXNpcyhjb2RlYy5KU09OQ29kZWMsIGNsaWVudC5UeEVuY29kaW5nQ29uZmlnLCBqc29uLlJhd01lc3NhZ2UpIGVycm9yCgoJLy8gY2xpZW50IGZ1bmN0aW9uYWxpdHkKCVJlZ2lzdGVyR1JQQ0dhdGV3YXlSb3V0ZXMoY2xpZW50LkNvbnRleHQsICpydW50aW1lLlNlcnZlTXV4KQoJR2V0VHhDbWQoKSAqY29icmEuQ29tbWFuZAoJR2V0UXVlcnlDbWQoKSAqY29icmEuQ29tbWFuZAp9"}})],1),e._v(" "),o("p",[e._v("Let us go through the methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Name()")]),e._v(": Returns the name of the module as a "),o("code",[e._v("string")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("RegisterLegacyAminoCodec(*codec.LegacyAmino)")]),e._v(": Registers the "),o("code",[e._v("amino")]),e._v(" codec for the module, which is used to marshal and unmarshal structs to/from "),o("code",[e._v("[]byte")]),e._v(" in order to persist them in the module's "),o("code",[e._v("KVStore")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("RegisterInterfaces(codectypes.InterfaceRegistry)")]),e._v(": Registers a module's interface types and their concrete implementations as "),o("code",[e._v("proto.Message")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("DefaultGenesis(codec.JSONCodec)")]),e._v(": Returns a default "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#genesisstate"}},[o("code",[e._v("GenesisState")])]),e._v(" for the module, marshalled to "),o("code",[e._v("json.RawMessage")]),e._v(". The default "),o("code",[e._v("GenesisState")]),e._v(" need to be defined by the module developer and is primarily used for testing.")],1),e._v(" "),o("li",[o("code",[e._v("ValidateGenesis(codec.JSONCodec, client.TxEncodingConfig, json.RawMessage)")]),e._v(": Used to validate the "),o("code",[e._v("GenesisState")]),e._v(" defined by a module, given in its "),o("code",[e._v("json.RawMessage")]),e._v(" form. It will usually unmarshall the "),o("code",[e._v("json")]),e._v(" before running a custom "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#validategenesis"}},[o("code",[e._v("ValidateGenesis")])]),e._v(" function defined by the module developer.")],1),e._v(" "),o("li",[o("code",[e._v("RegisterGRPCGatewayRoutes(client.Context, *runtime.ServeMux)")]),e._v(": Registers gRPC routes for the module.")]),e._v(" "),o("li",[o("code",[e._v("GetTxCmd()")]),e._v(": Returns the root "),o("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#tx"}},[o("code",[e._v("Tx")]),e._v(" command")]),e._v(" for the module. The subcommands of this root command are used by end-users to generate new transactions containing "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[o("code",[e._v("message")]),e._v("s")]),e._v(" defined in the module.")],1),e._v(" "),o("li",[o("code",[e._v("GetQueryCmd()")]),e._v(": Return the root "),o("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#query"}},[o("code",[e._v("query")]),e._v(" command")]),e._v(" for the module. The subcommands of this root command are used by end-users to generate new queries to the subset of the state defined by the module.")],1)]),e._v(" "),o("p",[e._v("All the "),o("code",[e._v("AppModuleBasic")]),e._v(" of an application are managed by the "),o("a",{attrs:{href:"#basicmanager"}},[o("code",[e._v("BasicManager")])]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"appmodulegenesis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appmodulegenesis"}},[e._v("#")]),e._v(" "),o("code",[e._v("AppModuleGenesis")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModuleGenesis")]),e._v(" interface is a simple embedding of the "),o("code",[e._v("AppModuleBasic")]),e._v(" interface with two added methods.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQXBwTW9kdWxlR2VuZXNpcyBpcyB0aGUgc3RhbmRhcmQgZm9ybSBmb3IgYW4gYXBwbGljYXRpb24gbW9kdWxlIGdlbmVzaXMgZnVuY3Rpb25zCnR5cGUgQXBwTW9kdWxlR2VuZXNpcyBpbnRlcmZhY2UgewoJQXBwTW9kdWxlQmFzaWMKCglJbml0R2VuZXNpcyhzZGsuQ29udGV4dCwgY29kZWMuSlNPTkNvZGVjLCBqc29uLlJhd01lc3NhZ2UpIFtdYWJjaS5WYWxpZGF0b3JVcGRhdGUKCUV4cG9ydEdlbmVzaXMoc2RrLkNvbnRleHQsIGNvZGVjLkpTT05Db2RlYykganNvbi5SYXdNZXNzYWdlCn0="}})],1),e._v(" "),o("p",[e._v("Let us go through the two added methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("InitGenesis(sdk.Context, codec.JSONCodec, json.RawMessage)")]),e._v(": Initializes the subset of the state managed by the module. It is called at genesis (i.e. when the chain is first started).")]),e._v(" "),o("li",[o("code",[e._v("ExportGenesis(sdk.Context, codec.JSONCodec)")]),e._v(": Exports the latest subset of the state managed by the module to be used in a new genesis file. "),o("code",[e._v("ExportGenesis")]),e._v(" is called for each module when a new chain is started from the state of an existing chain.")])]),e._v(" "),o("p",[e._v("It does not have its own manager, and exists separately from "),o("a",{attrs:{href:"#appmodule"}},[o("code",[e._v("AppModule")])]),e._v(" only for modules that exist only to implement genesis functionalities, so that they can be managed without having to implement all of "),o("code",[e._v("AppModule")]),e._v("'s methods. If the module is not only used during genesis, "),o("code",[e._v("InitGenesis(sdk.Context, codec.JSONCodec, json.RawMessage)")]),e._v(" and "),o("code",[e._v("ExportGenesis(sdk.Context, codec.JSONCodec)")]),e._v(" will generally be defined as methods of the concrete type implementing the "),o("code",[e._v("AppModule")]),e._v(" interface.")]),e._v(" "),o("h3",{attrs:{id:"appmodule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appmodule"}},[e._v("#")]),e._v(" "),o("code",[e._v("AppModule")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModule")]),e._v(" interface defines the inter-dependent methods that modules need to implement.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQXBwTW9kdWxlIGlzIHRoZSBzdGFuZGFyZCBmb3JtIGZvciBhbiBhcHBsaWNhdGlvbiBtb2R1bGUKdHlwZSBBcHBNb2R1bGUgaW50ZXJmYWNlIHsKCUFwcE1vZHVsZUdlbmVzaXMKCgkvLyByZWdpc3RlcnMKCVJlZ2lzdGVySW52YXJpYW50cyhzZGsuSW52YXJpYW50UmVnaXN0cnkpCgoJLy8gRGVwcmVjYXRlZDogdXNlIFJlZ2lzdGVyU2VydmljZXMKCVJvdXRlKCkgc2RrLlJvdXRlCgoJLy8gRGVwcmVjYXRlZDogdXNlIFJlZ2lzdGVyU2VydmljZXMKCVF1ZXJpZXJSb3V0ZSgpIHN0cmluZwoKCS8vIERlcHJlY2F0ZWQ6IHVzZSBSZWdpc3RlclNlcnZpY2VzCglMZWdhY3lRdWVyaWVySGFuZGxlcigqY29kZWMuTGVnYWN5QW1pbm8pIHNkay5RdWVyaWVyCgoJLy8gUmVnaXN0ZXJTZXJ2aWNlcyBhbGxvd3MgYSBtb2R1bGUgdG8gcmVnaXN0ZXIgc2VydmljZXMKCVJlZ2lzdGVyU2VydmljZXMoQ29uZmlndXJhdG9yKQoKCS8vIENvbnNlbnN1c1ZlcnNpb24gaXMgYSBzZXF1ZW5jZSBudW1iZXIgZm9yIHN0YXRlLWJyZWFraW5nIGNoYW5nZSBvZiB0aGUKCS8vIG1vZHVsZS4gSXQgc2hvdWxkIGJlIGluY3JlbWVudGVkIG9uIGVhY2ggY29uc2Vuc3VzLWJyZWFraW5nIGNoYW5nZQoJLy8gaW50cm9kdWNlZCBieSB0aGUgbW9kdWxlLiBUbyBhdm9pZCB3cm9uZy9lbXB0eSB2ZXJzaW9ucywgdGhlIGluaXRpYWwgdmVyc2lvbgoJLy8gc2hvdWxkIGJlIHNldCB0byAxLgoJQ29uc2Vuc3VzVmVyc2lvbigpIHVpbnQ2NAp9CgovLyBCZWdpbkJsb2NrQXBwTW9kdWxlIGlzIGFuIGV4dGVuc2lvbiBpbnRlcmZhY2UgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgQXBwTW9kdWxlIGFuZCBCZWdpbkJsb2NrLgp0eXBlIEJlZ2luQmxvY2tBcHBNb2R1bGUgaW50ZXJmYWNlIHsKCUFwcE1vZHVsZQ=="}})],1),e._v(" "),o("p",[o("code",[e._v("AppModule")]),e._v("s are managed by the "),o("a",{attrs:{href:"#manager"}},[e._v("module manager")]),e._v(". This interface embeds the "),o("code",[e._v("AppModuleGenesis")]),e._v(" interface so that the manager can access all the independent and genesis inter-dependent methods of the module. This means that a concrete type implementing the "),o("code",[e._v("AppModule")]),e._v(" interface must either implement all the methods of "),o("code",[e._v("AppModuleGenesis")]),e._v(" (and by extension "),o("code",[e._v("AppModuleBasic")]),e._v("), or include a concrete type that does as parameter.")]),e._v(" "),o("p",[e._v("Let us go through the methods of "),o("code",[e._v("AppModule")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("RegisterInvariants(sdk.InvariantRegistry)")]),e._v(": Registers the "),o("RouterLink",{attrs:{to:"/building-modules/invariants.html"}},[o("code",[e._v("invariants")])]),e._v(" of the module. If an invariant deviates from its predicted value, the "),o("RouterLink",{attrs:{to:"/building-modules/invariants.html#registry"}},[o("code",[e._v("InvariantRegistry")])]),e._v(" triggers appropriate logic (most often the chain will be halted).")],1),e._v(" "),o("li",[o("code",[e._v("Route()")]),e._v(" (deprecated): Returns the route for "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[o("code",[e._v("message")]),e._v("s")]),e._v(" to be routed to the module by "),o("RouterLink",{attrs:{to:"/core/baseapp.html#message-routing"}},[o("code",[e._v("BaseApp")])]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("QuerierRoute()")]),e._v(" (deprecated): Returns the name of the module's query route, for "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[o("code",[e._v("queries")])]),e._v(" to be routes to the module by "),o("RouterLink",{attrs:{to:"/core/baseapp.html#query-routing"}},[o("code",[e._v("BaseApp")])]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("LegacyQuerierHandler(*codec.LegacyAmino)")]),e._v(" (deprecated): Returns a "),o("RouterLink",{attrs:{to:"/building-modules/query-services.html#legacy-queriers"}},[o("code",[e._v("querier")])]),e._v(" given the query "),o("code",[e._v("path")]),e._v(", in order to process the "),o("code",[e._v("query")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("RegisterServices(Configurator)")]),e._v(": Allows a module to register services.")]),e._v(" "),o("li",[o("code",[e._v("BeginBlock(sdk.Context, abci.RequestBeginBlock)")]),e._v(": This method gives module developers the option to implement logic that is automatically triggered at the beginning of each block. Implement empty if no logic needs to be triggered at the beginning of each block for this module.")]),e._v(" "),o("li",[o("code",[e._v("EndBlock(sdk.Context, abci.RequestEndBlock)")]),e._v(": This method gives module developers the option to implement logic that is automatically triggered at the end of each block. This is also where the module can inform the underlying consensus engine of validator set changes (e.g. the "),o("code",[e._v("staking")]),e._v(" module). Implement empty if no logic needs to be triggered at the end of each block for this module.")])]),e._v(" "),o("h3",{attrs:{id:"implementing-the-application-module-interfaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#implementing-the-application-module-interfaces"}},[e._v("#")]),e._v(" Implementing the Application Module Interfaces")]),e._v(" "),o("p",[e._v("Typically, the various application module interfaces are implemented in a file called "),o("code",[e._v("module.go")]),e._v(", located in the module's folder (e.g. "),o("code",[e._v("./x/module/module.go")]),e._v(").")]),e._v(" "),o("p",[e._v("Almost every module needs to implement the "),o("code",[e._v("AppModuleBasic")]),e._v(" and "),o("code",[e._v("AppModule")]),e._v(" interfaces. If the module is only used for genesis, it will implement "),o("code",[e._v("AppModuleGenesis")]),e._v(" instead of "),o("code",[e._v("AppModule")]),e._v(". The concrete type that implements the interface can add parameters that are required for the implementation of the various methods of the interface. For example, the "),o("code",[e._v("Route()")]),e._v(" function often calls a "),o("code",[e._v("NewMsgServerImpl(k keeper)")]),e._v(" function defined in "),o("code",[e._v("keeper/msg_server.go")]),e._v(" and therefore needs to pass the module's "),o("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[o("code",[e._v("keeper")])]),e._v(" as a parameter.")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gZXhhbXBsZQp0eXBlIEFwcE1vZHVsZSBzdHJ1Y3QgewoJQXBwTW9kdWxlQmFzaWMKCWtlZXBlciAgICAgICBLZWVwZXIKfQo="}}),e._v(" "),o("p",[e._v("In the example above, you can see that the "),o("code",[e._v("AppModule")]),e._v(" concrete type references an "),o("code",[e._v("AppModuleBasic")]),e._v(", and not an "),o("code",[e._v("AppModuleGenesis")]),e._v(". That is because "),o("code",[e._v("AppModuleGenesis")]),e._v(" only needs to be implemented in modules that focus on genesis-related functionalities. In most modules, the concrete "),o("code",[e._v("AppModule")]),e._v(" type will have a reference to an "),o("code",[e._v("AppModuleBasic")]),e._v(" and implement the two added methods of "),o("code",[e._v("AppModuleGenesis")]),e._v(" directly in the "),o("code",[e._v("AppModule")]),e._v(" type.")]),e._v(" "),o("p",[e._v("If no parameter is required (which is often the case for "),o("code",[e._v("AppModuleBasic")]),e._v("), just declare an empty concrete type like so:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHBNb2R1bGVCYXNpYyBzdHJ1Y3R7fQo="}}),e._v(" "),o("h2",{attrs:{id:"module-managers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-managers"}},[e._v("#")]),e._v(" Module Managers")]),e._v(" "),o("p",[e._v("Module managers are used to manage collections of "),o("code",[e._v("AppModuleBasic")]),e._v(" and "),o("code",[e._v("AppModule")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"basicmanager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basicmanager"}},[e._v("#")]),e._v(" "),o("code",[e._v("BasicManager")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("BasicManager")]),e._v(" is a structure that lists all the "),o("code",[e._v("AppModuleBasic")]),e._v(" of an application:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQmFzaWNNYW5hZ2VyIGlzIGEgY29sbGVjdGlvbiBvZiBBcHBNb2R1bGVCYXNpYwp0eXBlIEJhc2ljTWFuYWdlciBtYXBbc3RyaW5nXUFwcE1vZHVsZUJhc2ljCgovLyBOZXdCYXNpY01hbmFnZXIgY3JlYXRlcyBhIG5ldyBCYXNpY01hbmFnZXIgb2JqZWN0CmZ1bmMgTmV3QmFzaWNNYW5hZ2VyKG1vZHVsZXMgLi4uQXBwTW9kdWxlQmFzaWMpIEJhc2ljTWFuYWdlciB7Cgltb2R1bGVNYXAgOj0gbWFrZShtYXBbc3RyaW5nXUFwcE1vZHVsZUJhc2ljKQoJZm9yIF8sIG1vZHVsZSA6PSByYW5nZSBtb2R1bGVzIHsKCQltb2R1bGVNYXBbbW9kdWxlLk5hbWUoKV0gPSBtb2R1bGUKCX0KCXJldHVybiBtb2R1bGVNYXAKfQ=="}})],1),e._v(" "),o("p",[e._v("It implements the following methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("NewBasicManager(modules ...AppModuleBasic)")]),e._v(": Constructor function. It takes a list of the application's "),o("code",[e._v("AppModuleBasic")]),e._v(" and builds a new "),o("code",[e._v("BasicManager")]),e._v(". This function is generally called in the "),o("code",[e._v("init()")]),e._v(" function of "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#core-application-file"}},[o("code",[e._v("app.go")])]),e._v(" to quickly initialize the independent elements of the application's modules (click "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/main/app/app.go#L59-L74",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" to see an example).")],1),e._v(" "),o("li",[o("code",[e._v("RegisterLegacyAminoCodec(cdc *codec.LegacyAmino)")]),e._v(": Registers the "),o("RouterLink",{attrs:{to:"/core/encoding.html#amino"}},[o("code",[e._v("codec.LegacyAmino")]),e._v("s")]),e._v(" of each of the application's "),o("code",[e._v("AppModuleBasic")]),e._v(". This function is usually called early on in the "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor"}},[e._v("application's construction")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("RegisterInterfaces(registry codectypes.InterfaceRegistry)")]),e._v(": Registers interface types and implementations of each of the application's "),o("code",[e._v("AppModuleBasic")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("DefaultGenesis(cdc codec.JSONCodec)")]),e._v(": Provides default genesis information for modules in the application by calling the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#defaultgenesis"}},[o("code",[e._v("DefaultGenesis(cdc codec.JSONCodec)")])]),e._v(" function of each module. It is used to construct a default genesis file for the application.")],1),e._v(" "),o("li",[o("code",[e._v("ValidateGenesis(cdc codec.JSONCodec, txEncCfg client.TxEncodingConfig, genesis map[string]json.RawMessage)")]),e._v(": Validates the genesis information modules by calling the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#validategenesis"}},[o("code",[e._v("ValidateGenesis(codec.JSONCodec, client.TxEncodingConfig, json.RawMessage)")])]),e._v(" function of each module.")],1),e._v(" "),o("li",[o("code",[e._v("RegisterGRPCGatewayRoutes(clientCtx client.Context, rtr *runtime.ServeMux)")]),e._v(": Registers gRPC routes for modules.")]),e._v(" "),o("li",[o("code",[e._v("AddTxCommands(rootTxCmd *cobra.Command)")]),e._v(": Adds modules' transaction commands to the application's "),o("RouterLink",{attrs:{to:"/core/cli.html#transaction-commands"}},[o("code",[e._v("rootTxCommand")])]),e._v(". This function is usually called function from the "),o("code",[e._v("main.go")]),e._v(" function of the "),o("RouterLink",{attrs:{to:"/core/cli.html"}},[e._v("application's command-line interface")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("AddQueryCommands(rootQueryCmd *cobra.Command)")]),e._v(": Adds modules' query commands to the application's "),o("RouterLink",{attrs:{to:"/core/cli.html#query-commands"}},[o("code",[e._v("rootQueryCommand")])]),e._v(". This function is usually called function from the "),o("code",[e._v("main.go")]),e._v(" function of the "),o("RouterLink",{attrs:{to:"/core/cli.html"}},[e._v("application's command-line interface")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manager"}},[e._v("#")]),e._v(" "),o("code",[e._v("Manager")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Manager")]),e._v(" is a structure that holds all the "),o("code",[e._v("AppModule")]),e._v(" of an application, and defines the order of execution between several key components of these modules:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQmVnaW5CbG9jayByZXR1cm5zIGFuIGVtcHR5IG1vZHVsZSBiZWdpbi1ibG9jawpmdW5jIChnYW0gR2VuZXNpc09ubHlBcHBNb2R1bGUpIEJlZ2luQmxvY2soY3R4IHNkay5Db250ZXh0LCByZXEgYWJjaS5SZXF1ZXN0QmVnaW5CbG9jaykge30KCi8vIEVuZEJsb2NrIHJldHVybnMgYW4gZW1wdHkgbW9kdWxlIGVuZC1ibG9jawpmdW5jIChHZW5lc2lzT25seUFwcE1vZHVsZSkgRW5kQmxvY2soXyBzZGsuQ29udGV4dCwgXyBhYmNpLlJlcXVlc3RFbmRCbG9jaykgW11hYmNpLlZhbGlkYXRvclVwZGF0ZSB7CglyZXR1cm4gW11hYmNpLlZhbGlkYXRvclVwZGF0ZXt9Cn0KCi8vIE1hbmFnZXIgZGVmaW5lcyBhIG1vZHVsZSBtYW5hZ2VyIHRoYXQgcHJvdmlkZXMgdGhlIGhpZ2ggbGV2ZWwgdXRpbGl0eSBmb3IgbWFuYWdpbmcgYW5kIGV4ZWN1dGluZwovLyBvcGVyYXRpb25zIGZvciBhIGdyb3VwIG9mIG1vZHVsZXM="}})],1),e._v(" "),o("p",[e._v("The module manager is used throughout the application whenever an action on a collection of modules is required. It implements the following methods:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("NewManager(modules ...AppModule)")]),e._v(": Constructor function. It takes a list of the application's "),o("code",[e._v("AppModule")]),e._v("s and builds a new "),o("code",[e._v("Manager")]),e._v(". It is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("SetOrderInitGenesis(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#initgenesis"}},[o("code",[e._v("InitGenesis")])]),e._v(" function of each module will be called when the application is first started. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1),e._v(" "),o("p",[e._v("To initialize modules successfully, module dependencies should be considered. For example, the "),o("code",[e._v("genutil")]),e._v(" module must occur after "),o("code",[e._v("staking")]),e._v(" module so that the pools are properly initialized with tokens from genesis accounts, the "),o("code",[e._v("genutils")]),e._v(" module must also occur after "),o("code",[e._v("auth")]),e._v(" so that it can access the params from auth, "),o("code",[e._v("capability")]),e._v(" module should be initialized before all other modules so that it can initialize any capabilities.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("SetOrderExportGenesis(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#exportgenesis"}},[o("code",[e._v("ExportGenesis")])]),e._v(" function of each module will be called in case of an export. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("SetOrderBeginBlockers(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("code",[e._v("BeginBlock()")]),e._v(" function of each module will be called at the beginning of each block. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("SetOrderEndBlockers(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("code",[e._v("EndBlock()")]),e._v(" function of each module will be called at the end of each block. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("SetOrderMigrations(moduleNames ...string)")]),e._v(": Sets the order of migrations to be run. If not set then migrations will be run with an order defined in "),o("code",[e._v("DefaultMigrationsOrder")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("RegisterInvariants(ir sdk.InvariantRegistry)")]),e._v(": Registers the "),o("RouterLink",{attrs:{to:"/building-modules/invariants.html"}},[e._v("invariants")]),e._v(" of each module.")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("RegisterRoutes(router sdk.Router, queryRouter sdk.QueryRouter, legacyQuerierCdc *codec.LegacyAmino)")]),e._v(": Registers legacy "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[o("code",[e._v("Msg")])]),e._v(" and "),o("RouterLink",{attrs:{to:"/building-modules/query-services.html#legacy-queriers"}},[o("code",[e._v("querier")])]),e._v(" routes.")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("RegisterServices(cfg Configurator)")]),e._v(": Registers all module services.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("InitGenesis(ctx sdk.Context, cdc codec.JSONCodec, genesisData map[string]json.RawMessage)")]),e._v(": Calls the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#initgenesis"}},[o("code",[e._v("InitGenesis")])]),e._v(" function of each module when the application is first started, in the order defined in "),o("code",[e._v("OrderInitGenesis")]),e._v(". Returns an "),o("code",[e._v("abci.ResponseInitChain")]),e._v(" to the underlying consensus engine, which can contain validator updates.")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("ExportGenesis(ctx sdk.Context, cdc codec.JSONCodec)")]),e._v(": Calls the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#exportgenesis"}},[o("code",[e._v("ExportGenesis")])]),e._v(" function of each module, in the order defined in "),o("code",[e._v("OrderExportGenesis")]),e._v(". The export constructs a genesis file from a previously existing state, and is mainly used when a hard-fork upgrade of the chain is required.")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("BeginBlock(ctx sdk.Context, req abci.RequestBeginBlock)")]),e._v(": At the beginning of each block, this function is called from "),o("RouterLink",{attrs:{to:"/core/baseapp.html#beginblock"}},[o("code",[e._v("BaseApp")])]),e._v(" and, in turn, calls the "),o("RouterLink",{attrs:{to:"/building-modules/beginblock-endblock.html"}},[o("code",[e._v("BeginBlock")])]),e._v(" function of each module, in the order defined in "),o("code",[e._v("OrderBeginBlockers")]),e._v(". It creates a child "),o("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("context")]),e._v(" with an event manager to aggregate "),o("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(" emitted from all modules. The function returns an "),o("code",[e._v("abci.ResponseBeginBlock")]),e._v(" which contains the aforementioned events.")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("EndBlock(ctx sdk.Context, req abci.RequestEndBlock)")]),e._v(": At the end of each block, this function is called from "),o("RouterLink",{attrs:{to:"/core/baseapp.html#endblock"}},[o("code",[e._v("BaseApp")])]),e._v(" and, in turn, calls the "),o("RouterLink",{attrs:{to:"/building-modules/beginblock-endblock.html"}},[o("code",[e._v("EndBlock")])]),e._v(" function of each module, in the order defined in "),o("code",[e._v("OrderEndBlockers")]),e._v(". It creates a child "),o("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("context")]),e._v(" with an event manager to aggregate "),o("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(" emitted from all modules. The function returns an "),o("code",[e._v("abci.ResponseEndBlock")]),e._v(" which contains the aforementioned events, as well as validator set updates (if any).")],1)])]),e._v(" "),o("p",[e._v("Here's an example of a concrete integration within an application:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIG11c3QgYmUgcGFzc2VkIGJ5IHJlZmVyZW5jZSBoZXJlLgoJYXBwLm1tID0gbW9kdWxlLk5ld01hbmFnZXIoCgkJZ2VudXRpbC5OZXdBcHBNb2R1bGUoCgkJCWFwcC5BY2NvdW50S2VlcGVyLCBhcHAuU3Rha2luZ0tlZXBlciwgYXBwLkJhc2VBcHAuRGVsaXZlclR4LAoJCQllbmNvZGluZ0NvbmZpZy5UeENvbmZpZywKCQkpLAoJCWF1dGguTmV3QXBwTW9kdWxlKGFwcENvZGVjLCBhcHAuQWNjb3VudEtlZXBlciwgYXV0aHNpbXMuUmFuZG9tR2VuZXNpc0FjY291bnRzKSwKCQl2ZXN0aW5nLk5ld0FwcE1vZHVsZShhcHAuQWNjb3VudEtlZXBlciwgYXBwLkJhbmtLZWVwZXIpLAoJCWJhbmsuTmV3QXBwTW9kdWxlKGFwcENvZGVjLCBhcHAuQmFua0tlZXBlciwgYXBwLkFjY291bnRLZWVwZXIpLAoJCWNhcGFiaWxpdHkuTmV3QXBwTW9kdWxlKGFwcENvZGVjLCAqYXBwLkNhcGFiaWxpdHlLZWVwZXIpLAoJCWNyaXNpcy5OZXdBcHBNb2R1bGUoJmFtcDthcHAuQ3Jpc2lzS2VlcGVyLCBza2lwR2VuZXNpc0ludmFyaWFudHMpLAoJCWZlZWdyYW50bW9kdWxlLk5ld0FwcE1vZHVsZShhcHBDb2RlYywgYXBwLkFjY291bnRLZWVwZXIsIGFwcC5CYW5rS2VlcGVyLCBhcHAuRmVlR3JhbnRLZWVwZXIsIGFwcC5pbnRlcmZhY2VSZWdpc3RyeSksCgkJZ292Lk5ld0FwcE1vZHVsZShhcHBDb2RlYywgYXBwLkdvdktlZXBlciwgYXBwLkFjY291bnRLZWVwZXIsIGFwcC5CYW5rS2VlcGVyKSwKCQltaW50Lk5ld0FwcE1vZHVsZShhcHBDb2RlYywgYXBwLk1pbnRLZWVwZXIsIGFwcC5BY2NvdW50S2VlcGVyLCBuaWwpLAoJCXNsYXNoaW5nLk5ld0FwcE1vZHVsZShhcHBDb2RlYywgYXBwLlNsYXNoaW5nS2VlcGVyLCBhcHAuQWNjb3VudEtlZXBlciwgYXBwLkJhbmtLZWVwZXIsIGFwcC5TdGFraW5nS2VlcGVyKSwKCQlkaXN0ci5OZXdBcHBNb2R1bGUoYXBwQ29kZWMsIGFwcC5EaXN0cktlZXBlciwgYXBwLkFjY291bnRLZWVwZXIsIGFwcC5CYW5rS2VlcGVyLCBhcHAuU3Rha2luZ0tlZXBlciksCgkJc3Rha2luZy5OZXdBcHBNb2R1bGUoYXBwQ29kZWMsIGFwcC5TdGFraW5nS2VlcGVyLCBhcHAuQWNjb3VudEtlZXBlciwgYXBwLkJhbmtLZWVwZXIpLAoJCXVwZ3JhZGUuTmV3QXBwTW9kdWxlKGFwcC5VcGdyYWRlS2VlcGVyKSwKCQlldmlkZW5jZS5OZXdBcHBNb2R1bGUoYXBwLkV2aWRlbmNlS2VlcGVyKSwKCQlwYXJhbXMuTmV3QXBwTW9kdWxlKGFwcC5QYXJhbXNLZWVwZXIpLAoJCWF1dGh6bW9kdWxlLk5ld0FwcE1vZHVsZShhcHBDb2RlYywgYXBwLkF1dGh6S2VlcGVyLCBhcHAuQWNjb3VudEtlZXBlciwgYXBwLkJhbmtLZWVwZXIsIGFwcC5pbnRlcmZhY2VSZWdpc3RyeSksCgkJZ3JvdXBtb2R1bGUuTmV3QXBwTW9kdWxlKGFwcENvZGVjLCBhcHAuR3JvdXBLZWVwZXIsIGFwcC5BY2NvdW50S2VlcGVyLCBhcHAuQmFua0tlZXBlciwgYXBwLmludGVyZmFjZVJlZ2lzdHJ5KSwKCQluZnRtb2R1bGUuTmV3QXBwTW9kdWxlKGFwcENvZGVjLCBhcHAuTkZUS2VlcGVyLCBhcHAuQWNjb3VudEtlZXBlciwgYXBwLkJhbmtLZWVwZXIsIGFwcC5pbnRlcmZhY2VSZWdpc3RyeSksCgkpCgoJLy8gRHVyaW5nIGJlZ2luIGJsb2NrIHNsYXNoaW5nIGhhcHBlbnMgYWZ0ZXIgZGlzdHIuQmVnaW5CbG9ja2VyIHNvIHRoYXQKCS8vIHRoZXJlIGlzIG5vdGhpbmcgbGVmdCBvdmVyIGluIHRoZSB2YWxpZGF0b3IgZmVlIHBvb2wsIHNvIGFzIHRvIGtlZXAgdGhlCgkvLyBDYW5XaXRoZHJhd0ludmFyaWFudCBpbnZhcmlhbnQuCgkvLyBOT1RFOiBzdGFraW5nIG1vZHVsZSBpcyByZXF1aXJlZCBpZiBIaXN0b3JpY2FsRW50cmllcyBwYXJhbSAmZ3Q7IDAKCS8vIE5PVEU6IGNhcGFiaWxpdHkgbW9kdWxlJ3MgYmVnaW5ibG9ja2VyIG11c3QgY29tZSBiZWZvcmUgYW55IG1vZHVsZXMgdXNpbmcgY2FwYWJpbGl0aWVzIChlLmcuIElCQykKCWFwcC5tbS5TZXRPcmRlckJlZ2luQmxvY2tlcnMoCgkJdXBncmFkZXR5cGVzLk1vZHVsZU5hbWUsIGNhcGFiaWxpdHl0eXBlcy5Nb2R1bGVOYW1lLCBtaW50dHlwZXMuTW9kdWxlTmFtZSwgZGlzdHJ0eXBlcy5Nb2R1bGVOYW1lLCBzbGFzaGluZ3R5cGVzLk1vZHVsZU5hbWUsCgkJZXZpZGVuY2V0eXBlcy5Nb2R1bGVOYW1lLCBzdGFraW5ndHlwZXMuTW9kdWxlTmFtZSwKCQlhdXRodHlwZXMuTW9kdWxlTmFtZSwgYmFua3R5cGVzLk1vZHVsZU5hbWUsIGdvdnR5cGVzLk1vZHVsZU5hbWUsIGNyaXNpc3R5cGVzLk1vZHVsZU5hbWUsIGdlbnV0aWx0eXBlcy5Nb2R1bGVOYW1lLAoJCWF1dGh6Lk1vZHVsZU5hbWUsIGZlZWdyYW50Lk1vZHVsZU5hbWUsIG5mdC5Nb2R1bGVOYW1lLCBncm91cC5Nb2R1bGVOYW1lLAoJCXBhcmFtc3R5cGVzLk1vZHVsZU5hbWUsIHZlc3Rpbmd0eXBlcy5Nb2R1bGVOYW1lLAoJKQoJYXBwLm1tLlNldE9yZGVyRW5kQmxvY2tlcnMoCgkJY3Jpc2lzdHlwZXMuTW9kdWxlTmFtZSwgZ292dHlwZXMuTW9kdWxlTmFtZSwgc3Rha2luZ3R5cGVzLk1vZHVsZU5hbWUsCgkJY2FwYWJpbGl0eXR5cGVzLk1vZHVsZU5hbWUsIGF1dGh0eXBlcy5Nb2R1bGVOYW1lLCBiYW5rdHlwZXMuTW9kdWxlTmFtZSwgZGlzdHJ0eXBlcy5Nb2R1bGVOYW1lLAoJCXNsYXNoaW5ndHlwZXMuTW9kdWxlTmFtZSwgbWludHR5cGVzLk1vZHVsZU5hbWUsCgkJZ2VudXRpbHR5cGVzLk1vZHVsZU5hbWUsIGV2aWRlbmNldHlwZXMuTW9kdWxlTmFtZSwgYXV0aHouTW9kdWxlTmFtZSwKCQlmZWVncmFudC5Nb2R1bGVOYW1lLCBuZnQuTW9kdWxlTmFtZSwgZ3JvdXAuTW9kdWxlTmFtZSwKCQlwYXJhbXN0eXBlcy5Nb2R1bGVOYW1lLCB1cGdyYWRldHlwZXMuTW9kdWxlTmFtZSwgdmVzdGluZ3R5cGVzLk1vZHVsZU5hbWUsCgkpCgoJLy8gTk9URTogVGhlIGdlbnV0aWxzIG1vZHVsZSBtdXN0IG9jY3VyIGFmdGVyIHN0YWtpbmcgc28gdGhhdCBwb29scyBhcmUKCS8vIHByb3Blcmx5IGluaXRpYWxpemVkIHdpdGggdG9rZW5zIGZyb20gZ2VuZXNpcyBhY2NvdW50cy4KCS8vIE5PVEU6IFRoZSBnZW51dGlscyBtb2R1bGUgbXVzdCBhbHNvIG9jY3VyIGFmdGVyIGF1dGggc28gdGhhdCBpdCBjYW4gYWNjZXNzIHRoZSBwYXJhbXMgZnJvbSBhdXRoLgoJLy8gTk9URTogQ2FwYWJpbGl0eSBtb2R1bGUgbXVzdCBvY2N1ciBmaXJzdCBzbyB0aGF0IGl0IGNhbiBpbml0aWFsaXplIGFueSBjYXBhYmlsaXRpZXMKCS8vIHNvIHRoYXQgb3RoZXIgbW9kdWxlcyB0aGF0IHdhbnQgdG8gY3JlYXRlIG9yIGNsYWltIGNhcGFiaWxpdGllcyBhZnRlcndhcmRzIGluIEluaXRDaGFpbgoJLy8gY2FuIGRvIHNvIHNhZmVseS4KCWFwcC5tbS5TZXRPcmRlckluaXRHZW5lc2lzKAoJCWNhcGFiaWxpdHl0eXBlcy5Nb2R1bGVOYW1lLCBhdXRodHlwZXMuTW9kdWxlTmFtZSwgYmFua3R5cGVzLk1vZHVsZU5hbWUsIGRpc3RydHlwZXMuTW9kdWxlTmFtZSwgc3Rha2luZ3R5cGVzLk1vZHVsZU5hbWUsCgkJc2xhc2hpbmd0eXBlcy5Nb2R1bGVOYW1lLCBnb3Z0eXBlcy5Nb2R1bGVOYW1lLCBtaW50dHlwZXMuTW9kdWxlTmFtZSwgY3Jpc2lzdHlwZXMuTW9kdWxlTmFtZSwKCQlnZW51dGlsdHlwZXMuTW9kdWxlTmFtZSwgZXZpZGVuY2V0eXBlcy5Nb2R1bGVOYW1lLCBhdXRoei5Nb2R1bGVOYW1lLAoJCWZlZWdyYW50Lk1vZHVsZU5hbWUsIG5mdC5Nb2R1bGVOYW1lLCBncm91cC5Nb2R1bGVOYW1lLAoJCXBhcmFtc3R5cGVzLk1vZHVsZU5hbWUsIHVwZ3JhZGV0eXBlcy5Nb2R1bGVOYW1lLCB2ZXN0aW5ndHlwZXMuTW9kdWxlTmFtZSwKCSkKCgkvLyBVbmNvbW1lbnQgaWYgeW91IHdhbnQgdG8gc2V0IGEgY3VzdG9tIG1pZ3JhdGlvbiBvcmRlciBoZXJlLgoJLy8gYXBwLm1tLlNldE9yZGVyTWlncmF0aW9ucyhjdXN0b20gb3JkZXIpCgoJYXBwLm1tLlJlZ2lzdGVySW52YXJpYW50cygmYW1wO2FwcC5DcmlzaXNLZWVwZXIpCglhcHAubW0uUmVnaXN0ZXJSb3V0ZXMoYXBwLlJvdXRlcigpLCBhcHAuUXVlcnlSb3V0ZXIoKSwgZW5jb2RpbmdDb25maWcuQW1pbm8pCglhcHAuY29uZmlndXJhdG9yID0gbW9kdWxlLk5ld0NvbmZpZ3VyYXRvcihhcHAuYXBwQ29kZWMsIGFwcC5Nc2dTZXJ2aWNlUm91dGVyKCksIGFwcC5HUlBDUXVlcnlSb3V0ZXIoKSkKCWFwcC5tbS5SZWdpc3RlclNlcnZpY2VzKGFwcC5jb25maWd1cmF0b3IpCg=="}})],1),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn more about "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[o("code",[e._v("message")]),e._v("s and "),o("code",[e._v("queries")])])],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);