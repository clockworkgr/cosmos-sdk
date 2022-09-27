(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{627:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-042-group-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-042-group-module"}},[e._v("#")]),e._v(" ADR 042: Group Module")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("2020/04/09: Initial Draft")])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Draft")]),e._v(" "),o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),o("p",[e._v("This ADR defines the "),o("code",[e._v("x/group")]),e._v(" module which allows the creation and management of on-chain multi-signature accounts and enables voting for message execution based on configurable decision policies.")]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("The legacy amino multi-signature mechanism of the Cosmos SDK has certain limitations:")]),e._v(" "),o("ul",[o("li",[e._v("Key rotation is not possible, although this can be solved with "),o("RouterLink",{attrs:{to:"/architecture/adr-034-account-rekeying.html"}},[e._v("account rekeying")]),e._v(".")],1),e._v(" "),o("li",[e._v("Thresholds can't be changed.")]),e._v(" "),o("li",[e._v("UX is cumbersome for non-technical users ("),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/5661",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5661"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v("It requires "),o("code",[e._v("legacy_amino")]),e._v(" sign mode ("),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/8141",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8141"),o("OutboundLink")],1),e._v(").")])]),e._v(" "),o("p",[e._v("While the group module is not meant to be a total replacement for the current multi-signature accounts, it provides a solution to the limitations described above, with a more flexible key management system where keys can be added, updated or removed, as well as configurable thresholds.\nIt's meant to be used with other access control modules such as "),o("RouterLink",{attrs:{to:"/architecture/adr-029-fee-grant-module.html"}},[o("code",[e._v("x/feegrant")])]),e._v(" ans "),o("RouterLink",{attrs:{to:"/architecture/adr-030-authz-module.html"}},[o("code",[e._v("x/authz")])]),e._v(" to simplify key management for individuals and organizations.")],1),e._v(" "),o("p",[e._v("The proof of concept of the group module can be found in https://github.com/regen-network/regen-ledger/tree/master/proto/regen/group/v1alpha1 and https://github.com/regen-network/regen-ledger/tree/master/x/group.")]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("p",[e._v("We propose merging the "),o("code",[e._v("x/group")]),e._v(" module with its supporting "),o("a",{attrs:{href:"https://github.com/regen-network/regen-ledger/tree/master/orm",target:"_blank",rel:"noopener noreferrer"}},[e._v("ORM/Table Store package"),o("OutboundLink")],1),e._v(" ("),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7098",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7098"),o("OutboundLink")],1),e._v(") into the Cosmos SDK and continuing development here. There will be a dedicated ADR for the ORM package.")]),e._v(" "),o("h3",{attrs:{id:"group"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#group"}},[e._v("#")]),e._v(" Group")]),e._v(" "),o("p",[e._v("A group is a composition of accounts with associated weights. It is not\nan account and doesn't have a balance. It doesn't in and of itself have any\nsort of voting or decision weight.\nGroup members can create proposals and vote on them through group accounts using different decision policies.")]),e._v(" "),o("p",[e._v("It has an "),o("code",[e._v("admin")]),e._v(" account which can manage members in the group, update the group\nmetadata and set a new admin.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBHcm91cEluZm8gewoKICAgIC8vIGdyb3VwX2lkIGlzIHRoZSB1bmlxdWUgSUQgb2YgdGhpcyBncm91cC4KICAgIHVpbnQ2NCBncm91cF9pZCA9IDE7CgogICAgLy8gYWRtaW4gaXMgdGhlIGFjY291bnQgYWRkcmVzcyBvZiB0aGUgZ3JvdXAncyBhZG1pbi4KICAgIHN0cmluZyBhZG1pbiA9IDI7CgogICAgLy8gbWV0YWRhdGEgaXMgYW55IGFyYml0cmFyeSBtZXRhZGF0YSB0byBhdHRhY2hlZCB0byB0aGUgZ3JvdXAuCiAgICBieXRlcyBtZXRhZGF0YSA9IDM7CgogICAgLy8gdmVyc2lvbiBpcyB1c2VkIHRvIHRyYWNrIGNoYW5nZXMgdG8gYSBncm91cCdzIG1lbWJlcnNoaXAgc3RydWN0dXJlIHRoYXQKICAgIC8vIHdvdWxkIGJyZWFrIGV4aXN0aW5nIHByb3Bvc2Fscy4gV2hlbmV2ZXIgYSBtZW1iZXIgd2VpZ2h0IGhhcyBjaGFuZ2VkLAogICAgLy8gb3IgYW55IG1lbWJlciBpcyBhZGRlZCBvciByZW1vdmVkLCB0aGUgdmVyc2lvbiBpcyBpbmNyZW1lbnRlZCBhbmQgd2lsbAogICAgLy8gaW52YWxpZGF0ZSBhbGwgcHJvcG9zYWxzIGZyb20gb2xkZXIgdmVyc2lvbnMuCiAgICB1aW50NjQgdmVyc2lvbiA9IDQ7CgogICAgLy8gdG90YWxfd2VpZ2h0IGlzIHRoZSBzdW0gb2YgdGhlIGdyb3VwIG1lbWJlcnMnIHdlaWdodHMuCiAgICBzdHJpbmcgdG90YWxfd2VpZ2h0ID0gNTsKfQo="}}),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBHcm91cE1lbWJlciB7CgogICAgLy8gZ3JvdXBfaWQgaXMgdGhlIHVuaXF1ZSBJRCBvZiB0aGUgZ3JvdXAuCiAgICB1aW50NjQgZ3JvdXBfaWQgPSAxOwoKICAgIC8vIG1lbWJlciBpcyB0aGUgbWVtYmVyIGRhdGEuCiAgICBNZW1iZXIgbWVtYmVyID0gMjsKfQoKLy8gTWVtYmVyIHJlcHJlc2VudHMgYSBncm91cCBtZW1iZXIgd2l0aCBhbiBhY2NvdW50IGFkZHJlc3MsCi8vIG5vbi16ZXJvIHdlaWdodCBhbmQgbWV0YWRhdGEuCm1lc3NhZ2UgTWVtYmVyIHsKCiAgICAvLyBhZGRyZXNzIGlzIHRoZSBtZW1iZXIncyBhY2NvdW50IGFkZHJlc3MuCiAgICBzdHJpbmcgYWRkcmVzcyA9IDE7CgogICAgLy8gd2VpZ2h0IGlzIHRoZSBtZW1iZXIncyB2b3Rpbmcgd2VpZ2h0IHRoYXQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiAwLgogICAgc3RyaW5nIHdlaWdodCA9IDI7CgogICAgLy8gbWV0YWRhdGEgaXMgYW55IGFyYml0cmFyeSBtZXRhZGF0YSB0byBhdHRhY2hlZCB0byB0aGUgbWVtYmVyLgogICAgYnl0ZXMgbWV0YWRhdGEgPSAzOwp9Cg=="}}),e._v(" "),o("h3",{attrs:{id:"group-account"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#group-account"}},[e._v("#")]),e._v(" Group Account")]),e._v(" "),o("p",[e._v("A group account is an account associated with a group and a decision policy.\nA group account does have a balance.")]),e._v(" "),o("p",[e._v('Group accounts are abstracted from groups because a single group may have\nmultiple decision policies for different types of actions. Managing group\nmembership separately from decision policies results in the least overhead\nand keeps membership consistent across different policies. The pattern that\nis recommended is to have a single master group account for a given group,\nand then to create separate group accounts with different decision policies\nand delegate the desired permissions from the master account to\nthose "sub-accounts" using the '),o("RouterLink",{attrs:{to:"/architecture/adr-030-authz-module.html"}},[o("code",[e._v("x/authz")]),e._v(" module")]),e._v(".")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBHcm91cEFjY291bnRJbmZvIHsKCiAgICAvLyBhZGRyZXNzIGlzIHRoZSBncm91cCBhY2NvdW50IGFkZHJlc3MuCiAgICBzdHJpbmcgYWRkcmVzcyA9IDE7CgogICAgLy8gZ3JvdXBfaWQgaXMgdGhlIElEIG9mIHRoZSBHcm91cCB0aGUgR3JvdXBBY2NvdW50IGJlbG9uZ3MgdG8uCiAgICB1aW50NjQgZ3JvdXBfaWQgPSAyOwoKICAgIC8vIGFkbWluIGlzIHRoZSBhY2NvdW50IGFkZHJlc3Mgb2YgdGhlIGdyb3VwIGFkbWluLgogICAgc3RyaW5nIGFkbWluID0gMzsKCiAgICAvLyBtZXRhZGF0YSBpcyBhbnkgYXJiaXRyYXJ5IG1ldGFkYXRhIG9mIHRoaXMgZ3JvdXAgYWNjb3VudC4KICAgIGJ5dGVzIG1ldGFkYXRhID0gNDsKCiAgICAvLyB2ZXJzaW9uIGlzIHVzZWQgdG8gdHJhY2sgY2hhbmdlcyB0byBhIGdyb3VwJ3MgR3JvdXBBY2NvdW50SW5mbyBzdHJ1Y3R1cmUgdGhhdAogICAgLy8gaW52YWxpZGF0ZXMgYWN0aXZlIHByb3Bvc2FsIGZyb20gb2xkIHZlcnNpb25zLgogICAgdWludDY0IHZlcnNpb24gPSA1OwoKICAgIC8vIGRlY2lzaW9uX3BvbGljeSBzcGVjaWZpZXMgdGhlIGdyb3VwIGFjY291bnQncyBkZWNpc2lvbiBwb2xpY3kuCiAgICBnb29nbGUucHJvdG9idWYuQW55IGRlY2lzaW9uX3BvbGljeSA9IDYgWyhjb3Ntb3NfcHJvdG8uYWNjZXB0c19pbnRlcmZhY2UpID0gJnF1b3Q7RGVjaXNpb25Qb2xpY3kmcXVvdDtdOwp9Cg=="}}),e._v(" "),o("p",[e._v("Similarly to a group admin, a group account admin can update its metadata, decision policy or set a new group account admin.")]),e._v(" "),o("p",[e._v('A group account can also be an admin or a member of a group.\nFor instance, a group admin could be another group account which could "elects" the members or it could be the same group that elects itself.')]),e._v(" "),o("h3",{attrs:{id:"decision-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision-policy"}},[e._v("#")]),e._v(" Decision Policy")]),e._v(" "),o("p",[e._v("A decision policy is the mechanism by which members of a group can vote on\nproposals.")]),e._v(" "),o("p",[e._v("All decision policies should have a minimum and maximum voting window.\nThe minimum voting window is the minimum duration that must pass in order\nfor a proposal to potentially pass, and it may be set to 0. The maximum voting\nwindow is the maximum time that a proposal may be voted on and executed if\nit reached enough support before it is closed.\nBoth of these values must be less than a chain-wide max voting window parameter.")]),e._v(" "),o("p",[e._v("We define the "),o("code",[e._v("DecisionPolicy")]),e._v(" interface that all decision policies must implement:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEZWNpc2lvblBvbGljeSBpbnRlcmZhY2UgewoJY29kZWMuUHJvdG9NYXJzaGFsZXIKCglWYWxpZGF0ZUJhc2ljKCkgZXJyb3IKCUdldFRpbWVvdXQoKSB0eXBlcy5EdXJhdGlvbgoJQWxsb3codGFsbHkgVGFsbHksIHRvdGFsUG93ZXIgc3RyaW5nLCB2b3RpbmdEdXJhdGlvbiB0aW1lLkR1cmF0aW9uKSAoRGVjaXNpb25Qb2xpY3lSZXN1bHQsIGVycm9yKQoJVmFsaWRhdGUoZyBHcm91cEluZm8pIGVycm9yCn0KCnR5cGUgRGVjaXNpb25Qb2xpY3lSZXN1bHQgc3RydWN0IHsKCUFsbG93IGJvb2wKCUZpbmFsIGJvb2wKfQo="}}),e._v(" "),o("h4",{attrs:{id:"threshold-decision-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#threshold-decision-policy"}},[e._v("#")]),e._v(" Threshold decision policy")]),e._v(" "),o("p",[e._v("A threshold decision policy defines a minimum support votes ("),o("em",[e._v("yes")]),e._v("), based on a tally\nof voter weights, for a proposal to pass. For\nthis decision policy, abstain and veto are treated as no support ("),o("em",[e._v("no")]),e._v(").")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBUaHJlc2hvbGREZWNpc2lvblBvbGljeSB7CgogICAgLy8gdGhyZXNob2xkIGlzIHRoZSBtaW5pbXVtIHdlaWdodGVkIHN1bSBvZiBzdXBwb3J0IHZvdGVzIGZvciBhIHByb3Bvc2FsIHRvIHN1Y2NlZWQuCiAgICBzdHJpbmcgdGhyZXNob2xkID0gMTsKCiAgICAvLyB2b3RpbmdfcGVyaW9kIGlzIHRoZSBkdXJhdGlvbiBmcm9tIHN1Ym1pc3Npb24gb2YgYSBwcm9wb3NhbCB0byB0aGUgZW5kIG9mIHZvdGluZyBwZXJpb2QKICAgIC8vIFdpdGhpbiB0aGlzIHBlcmlvZCwgdm90ZXMgYW5kIGV4ZWMgbWVzc2FnZXMgY2FuIGJlIHN1Ym1pdHRlZC4KICAgIGdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbiB2b3RpbmdfcGVyaW9kID0gMiBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0K"}}),e._v(" "),o("h3",{attrs:{id:"proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),o("p",[e._v("Any member of a group can submit a proposal for a group account to decide upon.\nA proposal consists of a set of "),o("code",[e._v("sdk.Msg")]),e._v("s that will be executed if the proposal\npasses as well as any metadata associated with the proposal. These "),o("code",[e._v("sdk.Msg")]),e._v("s get validated as part of the "),o("code",[e._v("Msg/CreateProposal")]),e._v(" request validation. They should also have their signer set as the group account.")]),e._v(" "),o("p",[e._v("Internally, a proposal also tracks:")]),e._v(" "),o("ul",[o("li",[e._v("its current "),o("code",[e._v("Status")]),e._v(": submitted, closed or aborted")]),e._v(" "),o("li",[e._v("its "),o("code",[e._v("Result")]),e._v(": unfinalized, accepted or rejected")]),e._v(" "),o("li",[e._v("its "),o("code",[e._v("VoteState")]),e._v(" in the form of a "),o("code",[e._v("Tally")]),e._v(", which is calculated on new votes and when executing the proposal.")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gVGFsbHkgcmVwcmVzZW50cyB0aGUgc3VtIG9mIHdlaWdodGVkIHZvdGVzLgptZXNzYWdlIFRhbGx5IHsKICAgIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgICAvLyB5ZXNfY291bnQgaXMgdGhlIHdlaWdodGVkIHN1bSBvZiB5ZXMgdm90ZXMuCiAgICBzdHJpbmcgeWVzX2NvdW50ID0gMTsKCiAgICAvLyBub19jb3VudCBpcyB0aGUgd2VpZ2h0ZWQgc3VtIG9mIG5vIHZvdGVzLgogICAgc3RyaW5nIG5vX2NvdW50ID0gMjsKCiAgICAvLyBhYnN0YWluX2NvdW50IGlzIHRoZSB3ZWlnaHRlZCBzdW0gb2YgYWJzdGFpbmVycy4KICAgIHN0cmluZyBhYnN0YWluX2NvdW50ID0gMzsKCiAgICAvLyB2ZXRvX2NvdW50IGlzIHRoZSB3ZWlnaHRlZCBzdW0gb2YgdmV0b2VzLgogICAgc3RyaW5nIHZldG9fY291bnQgPSA0Owp9Cg=="}}),e._v(" "),o("h3",{attrs:{id:"voting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voting"}},[e._v("#")]),e._v(" Voting")]),e._v(" "),o("p",[e._v("Members of a group can vote on proposals. There are four choices to choose while voting - yes, no, abstain and veto. Not\nall decision policies will support them. Votes can contain some optional metadata.\nIn the current implementation, the voting window begins as soon as a proposal\nis submitted.")]),e._v(" "),o("p",[e._v("Voting internally updates the proposal "),o("code",[e._v("VoteState")]),e._v(" as well as "),o("code",[e._v("Status")]),e._v(" and "),o("code",[e._v("Result")]),e._v(" if needed.")]),e._v(" "),o("h3",{attrs:{id:"executing-proposals"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#executing-proposals"}},[e._v("#")]),e._v(" Executing Proposals")]),e._v(" "),o("p",[e._v("Proposals will not be automatically executed by the chain in this current design,\nbut rather a user must submit a "),o("code",[e._v("Msg/Exec")]),e._v(" transaction to attempt to execute the\nproposal based on the current votes and decision policy. A future upgrade could\nautomate this and have the group account (or a fee granter) pay.")]),e._v(" "),o("h4",{attrs:{id:"changing-group-membership"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changing-group-membership"}},[e._v("#")]),e._v(" Changing Group Membership")]),e._v(" "),o("p",[e._v("In the current implementation, updating a group or a group account after submitting a proposal will make it invalid. It will simply fail if someone calls "),o("code",[e._v("Msg/Exec")]),e._v(" and will eventually be garbage collected.")]),e._v(" "),o("h3",{attrs:{id:"notes-on-current-implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-current-implementation"}},[e._v("#")]),e._v(" Notes on current implementation")]),e._v(" "),o("p",[e._v("This section outlines the current implementation used in the proof of concept of the group module but this could be subject to changes and iterated on.")]),e._v(" "),o("h4",{attrs:{id:"orm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#orm"}},[e._v("#")]),e._v(" ORM")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/discussions/9156",target:"_blank",rel:"noopener noreferrer"}},[e._v("ORM package"),o("OutboundLink")],1),e._v(" defines tables, sequences and secondary indexes which are used in the group module.")]),e._v(" "),o("p",[e._v("Groups are stored in state as part of a "),o("code",[e._v("groupTable")]),e._v(", the "),o("code",[e._v("group_id")]),e._v(" being an auto-increment integer. Group members are stored in a "),o("code",[e._v("groupMemberTable")]),e._v(".")]),e._v(" "),o("p",[e._v("Group accounts are stored in a "),o("code",[e._v("groupAccountTable")]),e._v(". The group account address is generated based on an auto-increment integer which is used to derive the group module "),o("code",[e._v("RootModuleKey")]),e._v(" into a "),o("code",[e._v("DerivedModuleKey")]),e._v(", as stated in "),o("RouterLink",{attrs:{to:"/architecture/adr-033-protobuf-inter-module-comm.html#modulekeys-and-moduleids"}},[e._v("ADR-033")]),e._v(". The group account is added as a new "),o("code",[e._v("ModuleAccount")]),e._v(" through "),o("code",[e._v("x/auth")]),e._v(".")],1),e._v(" "),o("p",[e._v("Proposals are stored as part of the "),o("code",[e._v("proposalTable")]),e._v(" using the "),o("code",[e._v("Proposal")]),e._v(" type. The "),o("code",[e._v("proposal_id")]),e._v(" is an auto-increment integer.")]),e._v(" "),o("p",[e._v("Votes are stored in the "),o("code",[e._v("voteTable")]),e._v(". The primary key is based on the vote's "),o("code",[e._v("proposal_id")]),e._v(" and "),o("code",[e._v("voter")]),e._v(" account address.")]),e._v(" "),o("h4",{attrs:{id:"adr-033-to-route-proposal-messages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-033-to-route-proposal-messages"}},[e._v("#")]),e._v(" ADR-033 to route proposal messages")]),e._v(" "),o("p",[e._v("Inter-module communication introduced by "),o("RouterLink",{attrs:{to:"/architecture/adr-033-protobuf-inter-module-comm.html"}},[e._v("ADR-033")]),e._v(" can be used to route a proposal's messages using the "),o("code",[e._v("DerivedModuleKey")]),e._v(" corresponding to the proposal's group account.")],1),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("Improved UX for multi-signature accounts allowing key rotation and custom decision policies.")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("ul",[o("li",[e._v("It uses ADR 033 so it will need to be implemented within the Cosmos SDK, but this doesn't imply necessarily any large refactoring of existing Cosmos SDK modules.")]),e._v(" "),o("li",[e._v("The current implementation of the group module uses the ORM package.")])]),e._v(" "),o("h2",{attrs:{id:"further-discussions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-discussions"}},[e._v("#")]),e._v(" Further Discussions")]),e._v(" "),o("ul",[o("li",[e._v("Convergence of "),o("code",[e._v("/group")]),e._v(" and "),o("code",[e._v("x/gov")]),e._v(" as both support proposals and voting: https://github.com/cosmos/cosmos-sdk/discussions/9066")]),e._v(" "),o("li",[o("code",[e._v("x/group")]),e._v(" possible future improvements:\n"),o("ul",[o("li",[e._v("Execute proposals on submission (https://github.com/regen-network/regen-ledger/issues/288)")]),e._v(" "),o("li",[e._v("Withdraw a proposal (https://github.com/regen-network/cosmos-modules/issues/41)")]),e._v(" "),o("li",[e._v("Make "),o("code",[e._v("Tally")]),e._v(" more flexible and support non-binary choices")])])])]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[e._v("Initial specification:\n"),o("ul",[o("li",[e._v("https://gist.github.com/aaronc/b60628017352df5983791cad30babe56#group-module")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/5236",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5236"),o("OutboundLink")],1)])])]),e._v(" "),o("li",[e._v("Proposal to add "),o("code",[e._v("x/group")]),e._v(" into the Cosmos SDK: "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7633",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7633"),o("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);