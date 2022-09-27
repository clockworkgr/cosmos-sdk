(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{721:function(e,t,a){"use strict";a.r(t);var o=a(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"x-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x-distribution"}},[e._v("#")]),e._v(" "),a("code",[e._v("x/distribution")])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This "),a("em",[e._v("simple")]),e._v(" distribution mechanism describes a functional way to passively\ndistribute rewards between validators and delegators. Note that this mechanism does\nnot distribute funds in as precisely as active reward distribution mechanisms and\nwill therefore be upgraded in the future.")]),e._v(" "),a("p",[e._v("The mechanism operates as follows. Collected rewards are pooled globally and\ndivided out passively to validators and delegators. Each validator has the\nopportunity to charge commission to the delegators on the rewards collected on\nbehalf of the delegators. Fees are collected directly into a global reward pool\nand validator proposer-reward pool. Due to the nature of passive accounting,\nwhenever changes to parameters which affect the rate of reward distribution\noccurs, withdrawal of rewards must also occur.")]),e._v(" "),a("ul",[a("li",[e._v("Whenever withdrawing, one must withdraw the maximum amount they are entitled\nto, leaving nothing in the pool.")]),e._v(" "),a("li",[e._v("Whenever bonding, unbonding, or re-delegating tokens to an existing account, a\nfull withdrawal of the rewards must occur (as the rules for lazy accounting\nchange).")]),e._v(" "),a("li",[e._v("Whenever a validator chooses to change the commission on rewards, all accumulated\ncommission rewards must be simultaneously withdrawn.")])]),e._v(" "),a("p",[e._v("The above scenarios are covered in "),a("code",[e._v("hooks.md")]),e._v(".")]),e._v(" "),a("p",[e._v("The distribution mechanism outlined herein is used to lazily distribute the\nfollowing rewards between validators and associated delegators:")]),e._v(" "),a("ul",[a("li",[e._v("multi-token fees to be socially distributed")]),e._v(" "),a("li",[e._v("inflated staked asset provisions")]),e._v(" "),a("li",[e._v("validator commission on all rewards earned by their delegators stake")])]),e._v(" "),a("p",[e._v("Fees are pooled within a global pool. The mechanisms used allow for validators\nand delegators to independently and lazily withdraw their rewards.")]),e._v(" "),a("h2",{attrs:{id:"shortcomings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shortcomings"}},[e._v("#")]),e._v(" Shortcomings")]),e._v(" "),a("p",[e._v("As a part of the lazy computations, each delegator holds an accumulation term\nspecific to each validator which is used to estimate what their approximate\nfair portion of tokens held in the global fee pool is owed to them.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ZW50aXRsZW1lbnQgPSBkZWxlZ2F0b3ItYWNjdW11bGF0aW9uIC8gYWxsLWRlbGVnYXRvcnMtYWNjdW11bGF0aW9uCg=="}}),e._v(" "),a("p",[e._v("Under the circumstance that there was constant and equal flow of incoming\nreward tokens every block, this distribution mechanism would be equal to the\nactive distribution (distribute individually to all delegators each block).\nHowever, this is unrealistic so deviations from the active distribution will\noccur based on fluctuations of incoming reward tokens as well as timing of\nreward withdrawal by other delegators.")]),e._v(" "),a("p",[e._v("If you happen to know that incoming rewards are about to significantly increase,\nyou are incentivized to not withdraw until after this event, increasing the\nworth of your existing "),a("em",[e._v("accum")]),e._v(". See "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/2764",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2764"),a("OutboundLink")],1),e._v("\nfor further details.")]),e._v(" "),a("h2",{attrs:{id:"effect-on-staking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#effect-on-staking"}},[e._v("#")]),e._v(" Effect on Staking")]),e._v(" "),a("p",[e._v("Charging commission on Atom provisions while also allowing for Atom-provisions\nto be auto-bonded (distributed directly to the validators bonded stake) is\nproblematic within BPoS. Fundamentally, these two mechanisms are mutually\nexclusive. If both commission and auto-bonding mechanisms are simultaneously\napplied to the staking-token then the distribution of staking-tokens between\nany validator and its delegators will change with each block. This then\nnecessitates a calculation for each delegation records for each block -\nwhich is considered computationally expensive.")]),e._v(" "),a("p",[e._v("In conclusion, we can only have Atom commission and unbonded atoms\nprovisions or bonded atom provisions with no Atom commission, and we elect to\nimplement the former. Stakeholders wishing to rebond their provisions may elect\nto set up a script to periodically withdraw and rebond rewards.")]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#concepts"}},[e._v("Concepts")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#state"}},[e._v("State")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#feepool"}},[e._v("FeePool")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#validator-distribution"}},[e._v("Validator Distribution")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#delegation-distribution"}},[e._v("Delegation Distribution")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#params"}},[e._v("Params")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#begin-block"}},[e._v("Begin Block")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#messages"}},[e._v("Messages")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#hooks"}},[e._v("Hooks")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#events"}},[e._v("Events")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#parameters"}},[e._v("Parameters")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#client"}},[e._v("Client")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#cli"}},[e._v("CLI")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#grpc"}},[e._v("gRPC")])])])])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);