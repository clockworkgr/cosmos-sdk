(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{640:function(e,t,o){"use strict";o.r(t);var l=o(1),d=Object(l.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"beginblocker-and-endblocker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#beginblocker-and-endblocker"}},[e._v("#")]),e._v(" BeginBlocker and EndBlocker")]),e._v(" "),o("p",{attrs:{synopsis:""}},[o("code",[e._v("BeginBlocker")]),e._v(" and "),o("code",[e._v("EndBlocker")]),e._v(" are optional methods module developers can implement in their module. They will be triggered at the beginning and at the end of each block respectively, when the "),o("RouterLink",{attrs:{to:"/core/baseapp.html#beginblock"}},[o("code",[e._v("BeginBlock")])]),e._v(" and "),o("RouterLink",{attrs:{to:"/core/baseapp.html#endblock"}},[o("code",[e._v("EndBlock")])]),e._v(" ABCI messages are received from the underlying consensus engine.")],1),e._v(" "),o("h2",{attrs:{id:"pre-requisite-readings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),o("ul",[o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("Module Manager")])],1)]),e._v(" "),o("h2",{attrs:{id:"beginblocker-and-endblocker-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#beginblocker-and-endblocker-2"}},[e._v("#")]),e._v(" BeginBlocker and EndBlocker")]),e._v(" "),o("p",[o("code",[e._v("BeginBlocker")]),e._v(" and "),o("code",[e._v("EndBlocker")]),e._v(" are a way for module developers to add automatic execution of logic to their module. This is a powerful tool that should be used carefully, as complex automatic functions can slow down or even halt the chain.")]),e._v(" "),o("p",[e._v("When needed, "),o("code",[e._v("BeginBlocker")]),e._v(" and "),o("code",[e._v("EndBlocker")]),e._v(" are implemented as part of the "),o("RouterLink",{attrs:{to:"/building-modules/module-manager.html#appmodule"}},[o("code",[e._v("AppModule")]),e._v(" interface")]),e._v(". The "),o("code",[e._v("BeginBlock")]),e._v(" and "),o("code",[e._v("EndBlock")]),e._v(" methods of the interface implemented in "),o("code",[e._v("module.go")]),e._v(" generally defer to "),o("code",[e._v("BeginBlocker")]),e._v(" and "),o("code",[e._v("EndBlocker")]),e._v(" methods respectively, which are usually implemented in "),o("code",[e._v("abci.go")]),e._v(".")],1),e._v(" "),o("p",[e._v("The actual implementation of "),o("code",[e._v("BeginBlocker")]),e._v(" and "),o("code",[e._v("EndBlocker")]),e._v(" in "),o("code",[e._v("abci.go")]),e._v(" are very similar to that of a "),o("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[o("code",[e._v("Msg")]),e._v(" service")]),e._v(":")],1),e._v(" "),o("ul",[o("li",[e._v("They generally use the "),o("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[o("code",[e._v("keeper")])]),e._v(" and "),o("RouterLink",{attrs:{to:"/core/context.html"}},[o("code",[e._v("ctx")])]),e._v(" to retrieve information about the latest state.")],1),e._v(" "),o("li",[e._v("If needed, they use the "),o("code",[e._v("keeper")]),e._v(" and "),o("code",[e._v("ctx")]),e._v(" to trigger state-transitions.")]),e._v(" "),o("li",[e._v("If needed, they can emit "),o("RouterLink",{attrs:{to:"/core/events.html"}},[o("code",[e._v("events")])]),e._v(" via the "),o("code",[e._v("ctx")]),e._v("'s "),o("code",[e._v("EventManager")]),e._v(".")],1)]),e._v(" "),o("p",[e._v("A specificity of the "),o("code",[e._v("EndBlocker")]),e._v(" is that it can return validator updates to the underlying consensus engine in the form of an "),o("a",{attrs:{href:"https://tendermint.com/docs/app-dev/abci-spec.html#validatorupdate",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("[]abci.ValidatorUpdates")]),o("OutboundLink")],1),e._v(". This is the preferred way to implement custom validator changes.")]),e._v(" "),o("p",[e._v("It is possible for developers to define the order of execution between the "),o("code",[e._v("BeginBlocker")]),e._v("/"),o("code",[e._v("EndBlocker")]),e._v(" functions of each of their application's modules via the module's manager "),o("code",[e._v("SetOrderBeginBlocker")]),e._v("/"),o("code",[e._v("SetOrderEndBlocker")]),e._v(" methods. For more on the module manager, click "),o("RouterLink",{attrs:{to:"/building-modules/module-manager.html#manager"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("p",[e._v("See an example implementation of "),o("code",[e._v("BeginBlocker")]),e._v(" from the "),o("code",[e._v("distr")]),e._v(" module:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQmVnaW5CbG9ja2VyIHNldHMgdGhlIHByb3Bvc2VyIGZvciBkZXRlcm1pbmluZyBkaXN0cmlidXRpb24gZHVyaW5nIGVuZGJsb2NrCi8vIGFuZCBkaXN0cmlidXRlIHJld2FyZHMgZm9yIHRoZSBwcmV2aW91cyBibG9jawpmdW5jIEJlZ2luQmxvY2tlcihjdHggc2RrLkNvbnRleHQsIHJlcSBhYmNpLlJlcXVlc3RCZWdpbkJsb2NrLCBrIGtlZXBlci5LZWVwZXIpIHsKCWRlZmVyIHRlbGVtZXRyeS5Nb2R1bGVNZWFzdXJlU2luY2UodHlwZXMuTW9kdWxlTmFtZSwgdGltZS5Ob3coKSwgdGVsZW1ldHJ5Lk1ldHJpY0tleUJlZ2luQmxvY2tlcikKCgkvLyBkZXRlcm1pbmUgdGhlIHRvdGFsIHBvd2VyIHNpZ25pbmcgdGhlIGJsb2NrCgl2YXIgcHJldmlvdXNUb3RhbFBvd2VyLCBzdW1QcmV2aW91c1ByZWNvbW1pdFBvd2VyIGludDY0Cglmb3IgXywgdm90ZUluZm8gOj0gcmFuZ2UgcmVxLkxhc3RDb21taXRJbmZvLkdldFZvdGVzKCkgewoJCXByZXZpb3VzVG90YWxQb3dlciArPSB2b3RlSW5mby5WYWxpZGF0b3IuUG93ZXIKCQlpZiB2b3RlSW5mby5TaWduZWRMYXN0QmxvY2sgewoJCQlzdW1QcmV2aW91c1ByZWNvbW1pdFBvd2VyICs9IHZvdGVJbmZvLlZhbGlkYXRvci5Qb3dlcgoJCX0KCX0KCgkvLyBUT0RPIHRoaXMgaXMgVGVuZGVybWludC1kZXBlbmRlbnQKCS8vIHJlZiBodHRwczovL2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvaXNzdWVzLzMwOTUKCWlmIGN0eC5CbG9ja0hlaWdodCgpICZndDsgMSB7CgkJcHJldmlvdXNQcm9wb3NlciA6PSBrLkdldFByZXZpb3VzUHJvcG9zZXJDb25zQWRkcihjdHgpCgkJay5BbGxvY2F0ZVRva2VucyhjdHgsIHN1bVByZXZpb3VzUHJlY29tbWl0UG93ZXIsIHByZXZpb3VzVG90YWxQb3dlciwgcHJldmlvdXNQcm9wb3NlciwgcmVxLkxhc3RDb21taXRJbmZvLkdldFZvdGVzKCkpCgl9CgoJLy8gcmVjb3JkIHRoZSBwcm9wb3NlciBmb3Igd2hlbiB3ZSBwYXlvdXQgb24gdGhlIG5leHQgYmxvY2sKCWNvbnNBZGRyIDo9IHNkay5Db25zQWRkcmVzcyhyZXEuSGVhZGVyLlByb3Bvc2VyQWRkcmVzcykKCWsuU2V0UHJldmlvdXNQcm9wb3NlckNvbnNBZGRyKGN0eCwgY29uc0FkZHIpCn0="}})],1),e._v(" "),o("p",[e._v("and an example implementation of "),o("code",[e._v("EndBlocker")]),e._v(" from the "),o("code",[e._v("staking")]),e._v(" module:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2FsbGVkIGV2ZXJ5IGJsb2NrLCB1cGRhdGUgdmFsaWRhdG9yIHNldApmdW5jIEVuZEJsb2NrZXIoY3R4IHNkay5Db250ZXh0LCBrIGtlZXBlci5LZWVwZXIpIFtdYWJjaS5WYWxpZGF0b3JVcGRhdGUgewoJZGVmZXIgdGVsZW1ldHJ5Lk1vZHVsZU1lYXN1cmVTaW5jZSh0eXBlcy5Nb2R1bGVOYW1lLCB0aW1lLk5vdygpLCB0ZWxlbWV0cnkuTWV0cmljS2V5RW5kQmxvY2tlcikKCglyZXR1cm4gay5CbG9ja1ZhbGlkYXRvclVwZGF0ZXMoY3R4KQp9"}})],1),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn about "),o("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[o("code",[e._v("keeper")]),e._v("s")])],1)])}),[],!1,null,null,null);t.default=d.exports}}]);