(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{714:function(e,a,t){"use strict";t.r(a);var i=t(1),l=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),t("h2",{attrs:{id:"capabilities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[e._v("#")]),e._v(" Capabilities")]),e._v(" "),t("p",[e._v("Capabilities are multi-owner. A scoped keeper can create a capability via "),t("code",[e._v("NewCapability")]),e._v("\nwhich creates a new unique, unforgeable object-capability reference. The newly\ncreated capability is automatically persisted; the calling module need not call\n"),t("code",[e._v("ClaimCapability")]),e._v(". Calling "),t("code",[e._v("NewCapability")]),e._v(" will create the capability with the\ncalling module and name as a tuple to be treated the capabilities first owner.")]),e._v(" "),t("p",[e._v("Capabilities can be claimed by other modules which add them as owners. "),t("code",[e._v("ClaimCapability")]),e._v("\nallows a module to claim a capability key which it has received from another\nmodule so that future "),t("code",[e._v("GetCapability")]),e._v(" calls will succeed. "),t("code",[e._v("ClaimCapability")]),e._v(" MUST\nbe called if a module which receives a capability wishes to access it by name in\nthe future. Again, capabilities are multi-owner, so if multiple modules have a\nsingle Capability reference, they will all own it. If a module receives a capability\nfrom another module but does not call "),t("code",[e._v("ClaimCapability")]),e._v(", it may use it in the executing\ntransaction but will not be able to access it afterwards.")]),e._v(" "),t("p",[t("code",[e._v("AuthenticateCapability")]),e._v(" can be called by any module to check that a capability\ndoes in fact correspond to a particular name (the name can be un-trusted user input)\nwith which the calling module previously associated it.")]),e._v(" "),t("p",[t("code",[e._v("GetCapability")]),e._v(" allows a module to fetch a capability which it has previously\nclaimed by name. The module is not allowed to retrieve capabilities which it does\nnot own.")]),e._v(" "),t("h2",{attrs:{id:"stores"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stores"}},[e._v("#")]),e._v(" Stores")]),e._v(" "),t("ul",[t("li",[e._v("MemStore")]),e._v(" "),t("li",[e._v("KeyStore")])])])}),[],!1,null,null,null);a.default=l.exports}}]);