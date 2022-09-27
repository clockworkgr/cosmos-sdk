(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{685:function(e,t,a){"use strict";a.r(t);var n=a(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vesting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vesting"}},[e._v("#")]),e._v(" Vesting")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#vesting"}},[e._v("Vesting")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#intro-and-requirements"}},[e._v("Intro and Requirements")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#note"}},[e._v("Note")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#vesting-account-types"}},[e._v("Vesting Account Types")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#basevestingaccount"}},[e._v("BaseVestingAccount")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#continuousvestingaccount"}},[e._v("ContinuousVestingAccount")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#delayedvestingaccount"}},[e._v("DelayedVestingAccount")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#period"}},[e._v("Period")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#periodicvestingaccount"}},[e._v("PeriodicVestingAccount")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#permanentlockedaccount"}},[e._v("PermanentLockedAccount")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#vesting-account-specification"}},[e._v("Vesting Account Specification")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#determining-vesting--vested-amounts"}},[e._v("Determining Vesting & Vested Amounts")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#continuously-vesting-accounts"}},[e._v("Continuously Vesting Accounts")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#periodic-vesting-accounts"}},[e._v("Periodic Vesting Accounts")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#delayeddiscrete-vesting-accounts"}},[e._v("Delayed/Discrete Vesting Accounts")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#transferringsending"}},[e._v("Transferring/Sending")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#keepershandlers"}},[e._v("Keepers/Handlers")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#delegating"}},[e._v("Delegating")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#keepershandlers-1"}},[e._v("Keepers/Handlers")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#undelegating"}},[e._v("Undelegating")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#keepershandlers-2"}},[e._v("Keepers/Handlers")])])])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#keepers--handlers"}},[e._v("Keepers & Handlers")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#genesis-initialization"}},[e._v("Genesis Initialization")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#examples"}},[e._v("Examples")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#simple"}},[e._v("Simple")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#slashing"}},[e._v("Slashing")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#periodic-vesting"}},[e._v("Periodic Vesting")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#glossary"}},[e._v("Glossary")])])])])]),e._v(" "),a("h2",{attrs:{id:"intro-and-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro-and-requirements"}},[e._v("#")]),e._v(" Intro and Requirements")]),e._v(" "),a("p",[e._v("This specification defines the vesting account implementation that is used by\nthe Cosmos Hub. The requirements for this vesting account is that it should be\ninitialized during genesis with a starting balance "),a("code",[e._v("X")]),e._v(" and a vesting end\ntime "),a("code",[e._v("ET")]),e._v(". A vesting account may be initialized with a vesting start time "),a("code",[e._v("ST")]),e._v("\nand a number of vesting periods "),a("code",[e._v("P")]),e._v(". If a vesting start time is included, the\nvesting period does not begin until start time is reached. If vesting periods\nare included, the vesting occurs over the specified number of periods.")]),e._v(" "),a("p",[e._v("For all vesting accounts, the owner of the vesting account is able to delegate\nand undelegate from validators, however they cannot transfer coins to another\naccount until those coins are vested. This specification allows for four\ndifferent kinds of vesting:")]),e._v(" "),a("ul",[a("li",[e._v("Delayed vesting, where all coins are vested once "),a("code",[e._v("ET")]),e._v(" is reached.")]),e._v(" "),a("li",[e._v("Continous vesting, where coins begin to vest at "),a("code",[e._v("ST")]),e._v(" and vest linearly with\nrespect to time until "),a("code",[e._v("ET")]),e._v(" is reached")]),e._v(" "),a("li",[e._v("Periodic vesting, where coins begin to vest at "),a("code",[e._v("ST")]),e._v(" and vest periodically\naccording to number of periods and the vesting amount per period.\nThe number of periods, length per period, and amount per period are\nconfigurable. A periodic vesting account is distinguished from a continuous\nvesting account in that coins can be released in staggered tranches. For\nexample, a periodic vesting account could be used for vesting arrangements\nwhere coins are relased quarterly, yearly, or over any other function of\ntokens over time.")]),e._v(" "),a("li",[e._v("Permanent locked vesting, where coins are locked forever. Coins in this account can\nstill be used for delegating and for governance votes even while locked.")])]),e._v(" "),a("h2",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),a("p",[e._v("Vesting accounts can be initialized with some vesting and non-vesting coins.\nThe non-vesting coins would be immediately transferable. DelayedVesting and\nContinuousVesting accounts can be created with normal messages after genesis.\nOther types of vesting accounts must be created at genesis, or as\npart of a manual network upgrade. The current specification only allows\nfor "),a("em",[e._v("unconditional")]),e._v(" vesting (ie. there is no possibility of reaching "),a("code",[e._v("ET")]),e._v(" and\nhaving coins fail to vest).")]),e._v(" "),a("h2",{attrs:{id:"vesting-account-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vesting-account-types"}},[e._v("#")]),e._v(" Vesting Account Types")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmVzdGluZ0FjY291bnQgZGVmaW5lcyBhbiBpbnRlcmZhY2UgdGhhdCBhbnkgdmVzdGluZyBhY2NvdW50IHR5cGUgbXVzdAovLyBpbXBsZW1lbnQuCnR5cGUgVmVzdGluZ0FjY291bnQgaW50ZXJmYWNlIHsKICBBY2NvdW50CgogIEdldFZlc3RlZENvaW5zKFRpbWUpICBDb2lucwogIEdldFZlc3RpbmdDb2lucyhUaW1lKSBDb2lucwoKICAvLyBUcmFja0RlbGVnYXRpb24gcGVyZm9ybXMgaW50ZXJuYWwgdmVzdGluZyBhY2NvdW50aW5nIG5lY2Vzc2FyeSB3aGVuCiAgLy8gZGVsZWdhdGluZyBmcm9tIGEgdmVzdGluZyBhY2NvdW50LiBJdCBhY2NlcHRzIHRoZSBjdXJyZW50IGJsb2NrIHRpbWUsIHRoZQogIC8vIGRlbGVnYXRpb24gYW1vdW50IGFuZCBiYWxhbmNlIG9mIGFsbCBjb2lucyB3aG9zZSBkZW5vbWluYXRpb24gZXhpc3RzIGluCiAgLy8gdGhlIGFjY291bnQncyBvcmlnaW5hbCB2ZXN0aW5nIGJhbGFuY2UuCiAgVHJhY2tEZWxlZ2F0aW9uKFRpbWUsIENvaW5zLCBDb2lucykKCiAgLy8gVHJhY2tVbmRlbGVnYXRpb24gcGVyZm9ybXMgaW50ZXJuYWwgdmVzdGluZyBhY2NvdW50aW5nIG5lY2Vzc2FyeSB3aGVuIGEKICAvLyB2ZXN0aW5nIGFjY291bnQgcGVyZm9ybXMgYW4gdW5kZWxlZ2F0aW9uLgogIFRyYWNrVW5kZWxlZ2F0aW9uKENvaW5zKQoKICBHZXRTdGFydFRpbWUoKSBpbnQ2NAogIEdldEVuZFRpbWUoKSAgIGludDY0Cn0K"}}),e._v(" "),a("h3",{attrs:{id:"basevestingaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basevestingaccount"}},[e._v("#")]),e._v(" BaseVestingAccount")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gQmFzZVZlc3RpbmdBY2NvdW50IGltcGxlbWVudHMgdGhlIFZlc3RpbmdBY2NvdW50IGludGVyZmFjZS4gSXQgY29udGFpbnMgYWxsCi8vIHRoZSBuZWNlc3NhcnkgZmllbGRzIG5lZWRlZCBmb3IgYW55IHZlc3RpbmcgYWNjb3VudCBpbXBsZW1lbnRhdGlvbi4KbWVzc2FnZSBCYXNlVmVzdGluZ0FjY291bnQgewogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19zdHJpbmdlcikgPSBmYWxzZTsKCiAgY29zbW9zLmF1dGgudjFiZXRhMS5CYXNlQWNjb3VudCBiYXNlX2FjY291bnQgICAgICAgPSAxIFsoZ29nb3Byb3RvLmVtYmVkKSA9IHRydWVdOwogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBvcmlnaW5hbF92ZXN0aW5nID0gMgogICAgICBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZSwgKGdvZ29wcm90by5jYXN0cmVwZWF0ZWQpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5Db2lucyZxdW90O107CiAgcmVwZWF0ZWQgY29zbW9zLmJhc2UudjFiZXRhMS5Db2luIGRlbGVnYXRlZF9mcmVlID0gMwogICAgICBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZSwgKGdvZ29wcm90by5jYXN0cmVwZWF0ZWQpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5Db2lucyZxdW90O107CiAgcmVwZWF0ZWQgY29zbW9zLmJhc2UudjFiZXRhMS5Db2luIGRlbGVnYXRlZF92ZXN0aW5nID0gNAogICAgICBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZSwgKGdvZ29wcm90by5jYXN0cmVwZWF0ZWQpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5Db2lucyZxdW90O107CiAgaW50NjQgZW5kX3RpbWUgPSA1Owp9"}})],1),e._v(" "),a("h3",{attrs:{id:"continuousvestingaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#continuousvestingaccount"}},[e._v("#")]),e._v(" ContinuousVestingAccount")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gQ29udGludW91c1Zlc3RpbmdBY2NvdW50IGltcGxlbWVudHMgdGhlIFZlc3RpbmdBY2NvdW50IGludGVyZmFjZS4gSXQKLy8gY29udGludW91c2x5IHZlc3RzIGJ5IHVubG9ja2luZyBjb2lucyBsaW5lYXJseSB3aXRoIHJlc3BlY3QgdG8gdGltZS4KbWVzc2FnZSBDb250aW51b3VzVmVzdGluZ0FjY291bnQgewogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19zdHJpbmdlcikgPSBmYWxzZTsKCiAgQmFzZVZlc3RpbmdBY2NvdW50IGJhc2VfdmVzdGluZ19hY2NvdW50ID0gMSBbKGdvZ29wcm90by5lbWJlZCkgPSB0cnVlXTsKICBpbnQ2NCAgICAgICAgICAgICAgc3RhcnRfdGltZSAgICAgICAgICAgPSAyOwp9"}})],1),e._v(" "),a("h3",{attrs:{id:"delayedvestingaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delayedvestingaccount"}},[e._v("#")]),e._v(" DelayedVestingAccount")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gRGVsYXllZFZlc3RpbmdBY2NvdW50IGltcGxlbWVudHMgdGhlIFZlc3RpbmdBY2NvdW50IGludGVyZmFjZS4gSXQgdmVzdHMgYWxsCi8vIGNvaW5zIGFmdGVyIGEgc3BlY2lmaWMgdGltZSwgYnV0IG5vbiBwcmlvci4gSW4gb3RoZXIgd29yZHMsIGl0IGtlZXBzIHRoZW0KLy8gbG9ja2VkIHVudGlsIGEgc3BlY2lmaWVkIHRpbWUuCm1lc3NhZ2UgRGVsYXllZFZlc3RpbmdBY2NvdW50IHsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CgogIEJhc2VWZXN0aW5nQWNjb3VudCBiYXNlX3Zlc3RpbmdfYWNjb3VudCA9IDEgWyhnb2dvcHJvdG8uZW1iZWQpID0gdHJ1ZV07Cn0="}})],1),e._v(" "),a("h3",{attrs:{id:"period"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#period"}},[e._v("#")]),e._v(" Period")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUGVyaW9kIGRlZmluZXMgYSBsZW5ndGggb2YgdGltZSBhbmQgYW1vdW50IG9mIGNvaW5zIHRoYXQgd2lsbCB2ZXN0LgptZXNzYWdlIFBlcmlvZCB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19zdHJpbmdlcikgPSBmYWxzZTsKCiAgaW50NjQgICAgbGVuZ3RoICAgICAgICAgICAgICAgICAgICAgICAgICA9IDE7CiAgcmVwZWF0ZWQgY29zbW9zLmJhc2UudjFiZXRhMS5Db2luIGFtb3VudCA9IDIKICAgICAgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uY2FzdHJlcGVhdGVkKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnMmcXVvdDtdOwp9"}})],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmVzIGFsbCB2ZXN0aW5nIHBlcmlvZHMgcGFzc2VkIGFzIHBhcnQgb2YgYSBQZXJpb2RpY1Zlc3RpbmdBY2NvdW50CnR5cGUgUGVyaW9kcyBbXVBlcmlvZAoK"}}),e._v(" "),a("h3",{attrs:{id:"periodicvestingaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#periodicvestingaccount"}},[e._v("#")]),e._v(" PeriodicVestingAccount")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUGVyaW9kaWNWZXN0aW5nQWNjb3VudCBpbXBsZW1lbnRzIHRoZSBWZXN0aW5nQWNjb3VudCBpbnRlcmZhY2UuIEl0Ci8vIHBlcmlvZGljYWxseSB2ZXN0cyBieSB1bmxvY2tpbmcgY29pbnMgZHVyaW5nIGVhY2ggc3BlY2lmaWVkIHBlcmlvZC4KbWVzc2FnZSBQZXJpb2RpY1Zlc3RpbmdBY2NvdW50IHsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CgogIEJhc2VWZXN0aW5nQWNjb3VudCBiYXNlX3Zlc3RpbmdfYWNjb3VudCA9IDEgWyhnb2dvcHJvdG8uZW1iZWQpID0gdHJ1ZV07CiAgaW50NjQgICAgICAgICAgICAgIHN0YXJ0X3RpbWUgICAgICAgICAgID0gMjsKICByZXBlYXRlZCBQZXJpb2QgICAgdmVzdGluZ19wZXJpb2RzICAgICAgPSAzIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKfQ=="}})],1),e._v(" "),a("p",[e._v("In order to facilitate less ad-hoc type checking and assertions and to support\nflexibility in account balance usage, the existing "),a("code",[e._v("x/bank")]),e._v(" "),a("code",[e._v("ViewKeeper")]),e._v(" interface\nis updated to contain the following:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWaWV3S2VlcGVyIGludGVyZmFjZSB7CiAgLy8gLi4uCgogIC8vIENhbGN1bGF0ZXMgdGhlIHRvdGFsIGxvY2tlZCBhY2NvdW50IGJhbGFuY2UuCiAgTG9ja2VkQ29pbnMoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzKSBzZGsuQ29pbnMKCiAgLy8gQ2FsY3VsYXRlcyB0aGUgdG90YWwgc3BlbmRhYmxlIGJhbGFuY2UgdGhhdCBjYW4gYmUgc2VudCB0byBvdGhlciBhY2NvdW50cy4KICBTcGVuZGFibGVDb2lucyhjdHggc2RrLkNvbnRleHQsIGFkZHIgc2RrLkFjY0FkZHJlc3MpIHNkay5Db2lucwp9Cg=="}}),e._v(" "),a("h3",{attrs:{id:"permanentlockedaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permanentlockedaccount"}},[e._v("#")]),e._v(" PermanentLockedAccount")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUGVyaW9kaWNWZXN0aW5nQWNjb3VudCBpbXBsZW1lbnRzIHRoZSBWZXN0aW5nQWNjb3VudCBpbnRlcmZhY2UuIEl0Ci8vIHBlcmlvZGljYWxseSB2ZXN0cyBieSB1bmxvY2tpbmcgY29pbnMgZHVyaW5nIGVhY2ggc3BlY2lmaWVkIHBlcmlvZC4KbWVzc2FnZSBQZXJpb2RpY1Zlc3RpbmdBY2NvdW50IHsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CgogIEJhc2VWZXN0aW5nQWNjb3VudCBiYXNlX3Zlc3RpbmdfYWNjb3VudCA9IDEgWyhnb2dvcHJvdG8uZW1iZWQpID0gdHJ1ZV07CiAgaW50NjQgICAgICAgICAgICAgIHN0YXJ0X3RpbWUgICAgICAgICAgID0gMjsKICByZXBlYXRlZCBQZXJpb2QgICAgdmVzdGluZ19wZXJpb2RzICAgICAgPSAzIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKfQ=="}})],1),e._v(" "),a("h2",{attrs:{id:"vesting-account-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vesting-account-specification"}},[e._v("#")]),e._v(" Vesting Account Specification")]),e._v(" "),a("p",[e._v("Given a vesting account, we define the following in the proceeding operations:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("OV")]),e._v(": The original vesting coin amount. It is a constant value.")]),e._v(" "),a("li",[a("code",[e._v("V")]),e._v(": The number of "),a("code",[e._v("OV")]),e._v(" coins that are still "),a("em",[e._v("vesting")]),e._v(". It is derived by\n"),a("code",[e._v("OV")]),e._v(", "),a("code",[e._v("StartTime")]),e._v(" and "),a("code",[e._v("EndTime")]),e._v(". This value is computed on demand and not on a\nper-block basis.")]),e._v(" "),a("li",[a("code",[e._v("V'")]),e._v(": The number of "),a("code",[e._v("OV")]),e._v(" coins that are "),a("em",[e._v("vested")]),e._v(" (unlocked). This value is\ncomputed on demand and not a per-block basis.")]),e._v(" "),a("li",[a("code",[e._v("DV")]),e._v(": The number of delegated "),a("em",[e._v("vesting")]),e._v(" coins. It is a variable value. It is\nstored and modified directly in the vesting account.")]),e._v(" "),a("li",[a("code",[e._v("DF")]),e._v(": The number of delegated "),a("em",[e._v("vested")]),e._v(" (unlocked) coins. It is a variable\nvalue. It is stored and modified directly in the vesting account.")]),e._v(" "),a("li",[a("code",[e._v("BC")]),e._v(": The number of "),a("code",[e._v("OV")]),e._v(" coins less any coins that are transferred\n(which can be negative or delegated). It is considered to be balance of the\nembedded base account. It is stored and modified directly in the vesting account.")])]),e._v(" "),a("h3",{attrs:{id:"determining-vesting-vested-amounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#determining-vesting-vested-amounts"}},[e._v("#")]),e._v(" Determining Vesting & Vested Amounts")]),e._v(" "),a("p",[e._v("It is important to note that these values are computed on demand and not on a\nmandatory per-block basis (e.g. "),a("code",[e._v("BeginBlocker")]),e._v(" or "),a("code",[e._v("EndBlocker")]),e._v(").")]),e._v(" "),a("h4",{attrs:{id:"continuously-vesting-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#continuously-vesting-accounts"}},[e._v("#")]),e._v(" Continuously Vesting Accounts")]),e._v(" "),a("p",[e._v("To determine the amount of coins that are vested for a given block time "),a("code",[e._v("T")]),e._v(", the\nfollowing is performed:")]),e._v(" "),a("ol",[a("li",[e._v("Compute "),a("code",[e._v("X := T - StartTime")])]),e._v(" "),a("li",[e._v("Compute "),a("code",[e._v("Y := EndTime - StartTime")])]),e._v(" "),a("li",[e._v("Compute "),a("code",[e._v("V' := OV * (X / Y)")])]),e._v(" "),a("li",[e._v("Compute "),a("code",[e._v("V := OV - V'")])])]),e._v(" "),a("p",[e._v("Thus, the total amount of "),a("em",[e._v("vested")]),e._v(" coins is "),a("code",[e._v("V'")]),e._v(" and the remaining amount, "),a("code",[e._v("V")]),e._v(",\nis "),a("em",[e._v("vesting")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoY3ZhIENvbnRpbnVvdXNWZXN0aW5nQWNjb3VudCkgR2V0VmVzdGVkQ29pbnModCBUaW1lKSBDb2lucyB7CiAgICBpZiB0ICZsdDs9IGN2YS5TdGFydFRpbWUgewogICAgICAgIC8vIFdlIG11c3QgaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSBzdGFydCB0aW1lIGZvciBhIHZlc3RpbmcgYWNjb3VudCBoYXMKICAgICAgICAvLyBiZWVuIHNldCBpbnRvIHRoZSBmdXR1cmUgb3Igd2hlbiB0aGUgc3RhcnQgb2YgdGhlIGNoYWluIGlzIG5vdCBleGFjdGx5CiAgICAgICAgLy8ga25vd24uCiAgICAgICAgcmV0dXJuIFplcm9Db2lucwogICAgfSBlbHNlIGlmIHQgJmd0Oz0gY3ZhLkVuZFRpbWUgewogICAgICAgIHJldHVybiBjdmEuT3JpZ2luYWxWZXN0aW5nCiAgICB9CgogICAgeCA6PSB0IC0gY3ZhLlN0YXJ0VGltZQogICAgeSA6PSBjdmEuRW5kVGltZSAtIGN2YS5TdGFydFRpbWUKCiAgICByZXR1cm4gY3ZhLk9yaWdpbmFsVmVzdGluZyAqICh4IC8geSkKfQoKZnVuYyAoY3ZhIENvbnRpbnVvdXNWZXN0aW5nQWNjb3VudCkgR2V0VmVzdGluZ0NvaW5zKHQgVGltZSkgQ29pbnMgewogICAgcmV0dXJuIGN2YS5PcmlnaW5hbFZlc3RpbmcgLSBjdmEuR2V0VmVzdGVkQ29pbnModCkKfQo="}}),e._v(" "),a("h3",{attrs:{id:"periodic-vesting-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#periodic-vesting-accounts"}},[e._v("#")]),e._v(" Periodic Vesting Accounts")]),e._v(" "),a("p",[e._v("Periodic vesting accounts require calculating the coins released during each\nperiod for a given block time "),a("code",[e._v("T")]),e._v(". Note that multiple periods could have passed\nwhen calling "),a("code",[e._v("GetVestedCoins")]),e._v(", so we must iterate over each period until the\nend of that period is after "),a("code",[e._v("T")]),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("Set "),a("code",[e._v("CT := StartTime")])]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("V' := 0")])])]),e._v(" "),a("p",[e._v("For each Period P:")]),e._v(" "),a("ol",[a("li",[e._v("Compute "),a("code",[e._v("X := T - CT")])]),e._v(" "),a("li",[e._v("IF "),a("code",[e._v("X >= P.Length")]),e._v(" "),a("ol",[a("li",[e._v("Compute "),a("code",[e._v("V' += P.Amount")])]),e._v(" "),a("li",[e._v("Compute "),a("code",[e._v("CT += P.Length")])]),e._v(" "),a("li",[e._v("ELSE break")])])]),e._v(" "),a("li",[e._v("Compute "),a("code",[e._v("V := OV - V'")])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAocHZhIFBlcmlvZGljVmVzdGluZ0FjY291bnQpIEdldFZlc3RlZENvaW5zKHQgVGltZSkgQ29pbnMgewogIGlmIHQgJmx0OyBwdmEuU3RhcnRUaW1lIHsKICAgIHJldHVybiBaZXJvQ29pbnMKICB9CiAgY3QgOj0gcHZhLlN0YXJ0VGltZSAvLyBUaGUgc3RhcnQgb2YgdGhlIHZlc3Rpbmcgc2NoZWR1bGUKICB2ZXN0ZWQgOj0gMAogIHBlcmlvZHMgPSBwdmEuR2V0UGVyaW9kcygpCiAgZm9yIF8sIHBlcmlvZCAgOj0gcmFuZ2UgcGVyaW9kcyB7CiAgICBpZiB0IC0gY3QgJmx0OyBwZXJpb2QuTGVuZ3RoIHsKICAgICAgYnJlYWsKICAgIH0KICAgIHZlc3RlZCArPSBwZXJpb2QuQW1vdW50CiAgICBjdCArPSBwZXJpb2QuTGVuZ3RoIC8vIGluY3JlbWVudCBjdCB0byB0aGUgc3RhcnQgb2YgdGhlIG5leHQgdmVzdGluZyBwZXJpb2QKICB9CiAgcmV0dXJuIHZlc3RlZAp9CgpmdW5jIChwdmEgUGVyaW9kaWNWZXN0aW5nQWNjb3VudCkgR2V0VmVzdGluZ0NvaW5zKHQgVGltZSkgQ29pbnMgewogICAgcmV0dXJuIHB2YS5PcmlnaW5hbFZlc3RpbmcgLSBjdmEuR2V0VmVzdGVkQ29pbnModCkKfQo="}}),e._v(" "),a("h4",{attrs:{id:"delayed-discrete-vesting-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delayed-discrete-vesting-accounts"}},[e._v("#")]),e._v(" Delayed/Discrete Vesting Accounts")]),e._v(" "),a("p",[e._v("Delayed vesting accounts are easier to reason about as they only have the full\namount vesting up until a certain time, then all the coins become vested (unlocked).\nThis does not include any unlocked coins the account may have initially.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoZHZhIERlbGF5ZWRWZXN0aW5nQWNjb3VudCkgR2V0VmVzdGVkQ29pbnModCBUaW1lKSBDb2lucyB7CiAgICBpZiB0ICZndDs9IGR2YS5FbmRUaW1lIHsKICAgICAgICByZXR1cm4gZHZhLk9yaWdpbmFsVmVzdGluZwogICAgfQoKICAgIHJldHVybiBaZXJvQ29pbnMKfQoKZnVuYyAoZHZhIERlbGF5ZWRWZXN0aW5nQWNjb3VudCkgR2V0VmVzdGluZ0NvaW5zKHQgVGltZSkgQ29pbnMgewogICAgcmV0dXJuIGR2YS5PcmlnaW5hbFZlc3RpbmcgLSBkdmEuR2V0VmVzdGVkQ29pbnModCkKfQo="}}),e._v(" "),a("h3",{attrs:{id:"transferring-sending"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transferring-sending"}},[e._v("#")]),e._v(" Transferring/Sending")]),e._v(" "),a("p",[e._v("At any given time, a vesting account may transfer: "),a("code",[e._v("min((BC + DV) - V, BC)")]),e._v(".")]),e._v(" "),a("p",[e._v("In other words, a vesting account may transfer the minimum of the base account\nbalance and the base account balance plus the number of currently delegated\nvesting coins less the number of coins vested so far.")]),e._v(" "),a("p",[e._v("However, given that account balances are tracked via the "),a("code",[e._v("x/bank")]),e._v(" module and that\nwe want to avoid loading the entire account balance, we can instead determine\nthe locked balance, which can be defined as "),a("code",[e._v("max(V - DV, 0)")]),e._v(", and infer the\nspendable balance from that.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAodmEgVmVzdGluZ0FjY291bnQpIExvY2tlZENvaW5zKHQgVGltZSkgQ29pbnMgewogICByZXR1cm4gbWF4KHZhLkdldFZlc3RpbmdDb2lucyh0KSAtIHZhLkRlbGVnYXRlZFZlc3RpbmcsIDApCn0K"}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/bank")]),e._v(" "),a("code",[e._v("ViewKeeper")]),e._v(" can then provide APIs to determine locked and spendable\ncoins for any account:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIExvY2tlZENvaW5zKGN0eCBDb250ZXh0LCBhZGRyIEFjY0FkZHJlc3MpIENvaW5zIHsKICAgIGFjYyA6PSBrLkdldEFjY291bnQoY3R4LCBhZGRyKQogICAgaWYgYWNjICE9IG5pbCB7CiAgICAgICAgaWYgYWNjLklzVmVzdGluZygpIHsKICAgICAgICAgICAgcmV0dXJuIGFjYy5Mb2NrZWRDb2lucyhjdHguQmxvY2tUaW1lKCkpCiAgICAgICAgfQogICAgfQoKICAgIC8vIG5vbi12ZXN0aW5nIGFjY291bnRzIGRvIG5vdCBoYXZlIGFueSBsb2NrZWQgY29pbnMKICAgIHJldHVybiBOZXdDb2lucygpCn0K"}}),e._v(" "),a("h4",{attrs:{id:"keepers-handlers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepers-handlers"}},[e._v("#")]),e._v(" Keepers/Handlers")]),e._v(" "),a("p",[e._v("The corresponding "),a("code",[e._v("x/bank")]),e._v(" keeper should appropriately handle sending coins\nbased on if the account is a vesting account or not.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIFNlbmRDb2lucyhjdHggQ29udGV4dCwgZnJvbSBBY2NvdW50LCB0byBBY2NvdW50LCBhbW91bnQgQ29pbnMpIHsKICAgIGJjIDo9IGsuR2V0QmFsYW5jZXMoY3R4LCBmcm9tKQogICAgdiA6PSBrLkxvY2tlZENvaW5zKGN0eCwgZnJvbSkKCiAgICBzcGVuZGFibGUgOj0gYmMgLSB2CiAgICBuZXdDb2lucyA6PSBzcGVuZGFibGUgLSBhbW91bnQKICAgIGFzc2VydChuZXdDb2lucyAmZ3Q7PSAwKQoKICAgIGZyb20uU2V0QmFsYW5jZShuZXdDb2lucykKICAgIHRvLkFkZEJhbGFuY2UoYW1vdW50KQoKICAgIC8vIHNhdmUgYmFsYW5jZXMuLi4KfQo="}}),e._v(" "),a("h3",{attrs:{id:"delegating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegating"}},[e._v("#")]),e._v(" Delegating")]),e._v(" "),a("p",[e._v("For a vesting account attempting to delegate "),a("code",[e._v("D")]),e._v(" coins, the following is performed:")]),e._v(" "),a("ol",[a("li",[e._v("Verify "),a("code",[e._v("BC >= D > 0")])]),e._v(" "),a("li",[e._v("Compute "),a("code",[e._v("X := min(max(V - DV, 0), D)")]),e._v(" (portion of "),a("code",[e._v("D")]),e._v(" that is vesting)")]),e._v(" "),a("li",[e._v("Compute "),a("code",[e._v("Y := D - X")]),e._v(" (portion of "),a("code",[e._v("D")]),e._v(" that is free)")]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("DV += X")])]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("DF += Y")])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAodmEgVmVzdGluZ0FjY291bnQpIFRyYWNrRGVsZWdhdGlvbih0IFRpbWUsIGJhbGFuY2UgQ29pbnMsIGFtb3VudCBDb2lucykgewogICAgYXNzZXJ0KGJhbGFuY2UgJmx0Oz0gYW1vdW50KQogICAgeCA6PSBtaW4obWF4KHZhLkdldFZlc3RpbmdDb2lucyh0KSAtIHZhLkRlbGVnYXRlZFZlc3RpbmcsIDApLCBhbW91bnQpCiAgICB5IDo9IGFtb3VudCAtIHgKCiAgICB2YS5EZWxlZ2F0ZWRWZXN0aW5nICs9IHgKICAgIHZhLkRlbGVnYXRlZEZyZWUgKz0geQp9Cg=="}}),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(" "),a("code",[e._v("TrackDelegation")]),e._v(" only modifies the "),a("code",[e._v("DelegatedVesting")]),e._v(" and "),a("code",[e._v("DelegatedFree")]),e._v("\nfields, so upstream callers MUST modify the "),a("code",[e._v("Coins")]),e._v(" field by subtracting "),a("code",[e._v("amount")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"keepers-handlers-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepers-handlers-2"}},[e._v("#")]),e._v(" Keepers/Handlers")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBEZWxlZ2F0ZUNvaW5zKHQgVGltZSwgZnJvbSBBY2NvdW50LCBhbW91bnQgQ29pbnMpIHsKICAgIGlmIGlzVmVzdGluZyhmcm9tKSB7CiAgICAgICAgZnJvbS5UcmFja0RlbGVnYXRpb24odCwgYW1vdW50KQogICAgfSBlbHNlIHsKICAgICAgICBmcm9tLlNldEJhbGFuY2Uoc2MgLSBhbW91bnQpCiAgICB9CgogICAgLy8gc2F2ZSBhY2NvdW50Li4uCn0K"}}),e._v(" "),a("h3",{attrs:{id:"undelegating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undelegating"}},[e._v("#")]),e._v(" Undelegating")]),e._v(" "),a("p",[e._v("For a vesting account attempting to undelegate "),a("code",[e._v("D")]),e._v(" coins, the following is performed:\nNOTE: "),a("code",[e._v("DV < D")]),e._v(" and "),a("code",[e._v("(DV + DF) < D")]),e._v(" may be possible due to quirks in the rounding of\ndelegation/undelegation logic.")]),e._v(" "),a("ol",[a("li",[e._v("Verify "),a("code",[e._v("D > 0")])]),e._v(" "),a("li",[e._v("Compute "),a("code",[e._v("X := min(DF, D)")]),e._v(" (portion of "),a("code",[e._v("D")]),e._v(" that should become free, prioritizing free coins)")]),e._v(" "),a("li",[e._v("Compute "),a("code",[e._v("Y := min(DV, D - X)")]),e._v(" (portion of "),a("code",[e._v("D")]),e._v(" that should remain vesting)")]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("DF -= X")])]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("DV -= Y")])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoY3ZhIENvbnRpbnVvdXNWZXN0aW5nQWNjb3VudCkgVHJhY2tVbmRlbGVnYXRpb24oYW1vdW50IENvaW5zKSB7CiAgICB4IDo9IG1pbihjdmEuRGVsZWdhdGVkRnJlZSwgYW1vdW50KQogICAgeSA6PSBhbW91bnQgLSB4CgogICAgY3ZhLkRlbGVnYXRlZEZyZWUgLT0geAogICAgY3ZhLkRlbGVnYXRlZFZlc3RpbmcgLT0geQp9Cg=="}}),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(" "),a("code",[e._v("TrackUnDelegation")]),e._v(" only modifies the "),a("code",[e._v("DelegatedVesting")]),e._v(" and "),a("code",[e._v("DelegatedFree")]),e._v("\nfields, so upstream callers MUST modify the "),a("code",[e._v("Coins")]),e._v(" field by adding "),a("code",[e._v("amount")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(": If a delegation is slashed, the continuous vesting account ends up\nwith an excess "),a("code",[e._v("DV")]),e._v(" amount, even after all its coins have vested. This is because\nundelegating free coins are prioritized.")]),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(": The undelegation (bond refund) amount may exceed the delegated\nvesting (bond) amount due to the way undelegation truncates the bond refund,\nwhich can increase the validator's exchange rate (tokens/shares) slightly if the\nundelegated tokens are non-integral.")]),e._v(" "),a("h4",{attrs:{id:"keepers-handlers-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepers-handlers-3"}},[e._v("#")]),e._v(" Keepers/Handlers")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBVbmRlbGVnYXRlQ29pbnModG8gQWNjb3VudCwgYW1vdW50IENvaW5zKSB7CiAgICBpZiBpc1Zlc3RpbmcodG8pIHsKICAgICAgICBpZiB0by5EZWxlZ2F0ZWRGcmVlICsgdG8uRGVsZWdhdGVkVmVzdGluZyAmZ3Q7PSBhbW91bnQgewogICAgICAgICAgICB0by5UcmFja1VuZGVsZWdhdGlvbihhbW91bnQpCiAgICAgICAgICAgIC8vIHNhdmUgYWNjb3VudCAuLi4KICAgICAgICB9CiAgICB9IGVsc2UgewogICAgICAgIEFkZEJhbGFuY2UodG8sIGFtb3VudCkKICAgICAgICAvLyBzYXZlIGFjY291bnQuLi4KICAgIH0KfQo="}}),e._v(" "),a("h2",{attrs:{id:"keepers-handlers-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepers-handlers-4"}},[e._v("#")]),e._v(" Keepers & Handlers")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("VestingAccount")]),e._v(" implementations reside in "),a("code",[e._v("x/auth")]),e._v(". However, any keeper in\na module (e.g. staking in "),a("code",[e._v("x/staking")]),e._v(") wishing to potentially utilize any vesting\ncoins, must call explicit methods on the "),a("code",[e._v("x/bank")]),e._v(" keeper (e.g. "),a("code",[e._v("DelegateCoins")]),e._v(")\nopposed to "),a("code",[e._v("SendCoins")]),e._v(" and "),a("code",[e._v("SubtractCoins")]),e._v(".")]),e._v(" "),a("p",[e._v("In addition, the vesting account should also be able to spend any coins it\nreceives from other users. Thus, the bank module's "),a("code",[e._v("MsgSend")]),e._v(" handler should\nerror if a vesting account is trying to send an amount that exceeds their\nunlocked coin amount.")]),e._v(" "),a("p",[e._v("See the above specification for full implementation details.")]),e._v(" "),a("h2",{attrs:{id:"genesis-initialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis-initialization"}},[e._v("#")]),e._v(" Genesis Initialization")]),e._v(" "),a("p",[e._v("To initialize both vesting and non-vesting accounts, the "),a("code",[e._v("GenesisAccount")]),e._v(" struct\nincludes new fields: "),a("code",[e._v("Vesting")]),e._v(", "),a("code",[e._v("StartTime")]),e._v(", and "),a("code",[e._v("EndTime")]),e._v(". Accounts meant to be\nof type "),a("code",[e._v("BaseAccount")]),e._v(" or any non-vesting type have "),a("code",[e._v("Vesting = false")]),e._v(". The\ngenesis initialization logic (e.g. "),a("code",[e._v("initFromGenesisState")]),e._v(") must parse\nand return the correct accounts accordingly based off of these fields.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzQWNjb3VudCBzdHJ1Y3QgewogICAgLy8gLi4uCgogICAgLy8gdmVzdGluZyBhY2NvdW50IGZpZWxkcwogICAgT3JpZ2luYWxWZXN0aW5nICBzZGsuQ29pbnMgYGpzb246JnF1b3Q7b3JpZ2luYWxfdmVzdGluZyZxdW90O2AKICAgIERlbGVnYXRlZEZyZWUgICAgc2RrLkNvaW5zIGBqc29uOiZxdW90O2RlbGVnYXRlZF9mcmVlJnF1b3Q7YAogICAgRGVsZWdhdGVkVmVzdGluZyBzZGsuQ29pbnMgYGpzb246JnF1b3Q7ZGVsZWdhdGVkX3Zlc3RpbmcmcXVvdDtgCiAgICBTdGFydFRpbWUgICAgICAgIGludDY0ICAgICBganNvbjomcXVvdDtzdGFydF90aW1lJnF1b3Q7YAogICAgRW5kVGltZSAgICAgICAgICBpbnQ2NCAgICAgYGpzb246JnF1b3Q7ZW5kX3RpbWUmcXVvdDtgCn0KCmZ1bmMgVG9BY2NvdW50KGdhY2MgR2VuZXNpc0FjY291bnQpIEFjY291bnQgewogICAgYmFjYyA6PSBOZXdCYXNlQWNjb3VudChnYWNjKQoKICAgIGlmIGdhY2MuT3JpZ2luYWxWZXN0aW5nICZndDsgMCB7CiAgICAgICAgaWYgZ2EuU3RhcnRUaW1lICE9IDAgJmFtcDsmYW1wOyBnYS5FbmRUaW1lICE9IDAgewogICAgICAgICAgICAvLyByZXR1cm4gYSBjb250aW51b3VzIHZlc3RpbmcgYWNjb3VudAogICAgICAgIH0gZWxzZSBpZiBnYS5FbmRUaW1lICE9IDAgewogICAgICAgICAgICAvLyByZXR1cm4gYSBkZWxheWVkIHZlc3RpbmcgYWNjb3VudAogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIC8vIGludmFsaWQgZ2VuZXNpcyB2ZXN0aW5nIGFjY291bnQgcHJvdmlkZWQKICAgICAgICAgICAgcGFuaWMoKQogICAgICAgIH0KICAgIH0KCiAgICByZXR1cm4gYmFjYwp9Cg=="}}),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"simple"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple"}},[e._v("#")]),e._v(" Simple")]),e._v(" "),a("p",[e._v("Given a continuous vesting account with 10 vesting coins.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"T1YgPSAxMApERiA9IDAKRFYgPSAwCkJDID0gMTAKViA9IDEwClYnID0gMAo="}}),e._v(" "),a("ol",[a("li",[a("p",[e._v("Immediately receives 1 coin")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"QkMgPSAxMQo="}})],1),e._v(" "),a("li",[a("p",[e._v("Time passes, 2 coins vest")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ViA9IDgKVicgPSAyCg=="}})],1),e._v(" "),a("li",[a("p",[e._v("Delegates 4 coins to validator A")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"RFYgPSA0CkJDID0gNwo="}})],1),e._v(" "),a("li",[a("p",[e._v("Sends 3 coins")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"QkMgPSA0Cg=="}})],1),e._v(" "),a("li",[a("p",[e._v("More time passes, 2 more coins vest")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ViA9IDYKVicgPSA0Cg=="}})],1),e._v(" "),a("li",[a("p",[e._v("Sends 2 coins. At this point the account cannot send anymore until further\ncoins vest or it receives additional coins. It can still however, delegate.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"QkMgPSAyCg=="}})],1)]),e._v(" "),a("h3",{attrs:{id:"slashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[e._v("#")]),e._v(" Slashing")]),e._v(" "),a("p",[e._v("Same initial starting conditions as the simple example.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Time passes, 5 coins vest")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ViA9IDUKVicgPSA1Cg=="}})],1),e._v(" "),a("li",[a("p",[e._v("Delegate 5 coins to validator A")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"RFYgPSA1CkJDID0gNQo="}})],1),e._v(" "),a("li",[a("p",[e._v("Delegate 5 coins to validator B")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"REYgPSA1CkJDID0gMAo="}})],1),e._v(" "),a("li",[a("p",[e._v("Validator A gets slashed by 50%, making the delegation to A now worth 2.5 coins")])]),e._v(" "),a("li",[a("p",[e._v("Undelegate from validator A (2.5 coins)")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"REYgPSA1IC0gMi41ID0gMi41CkJDID0gMCArIDIuNSA9IDIuNQo="}})],1),e._v(" "),a("li",[a("p",[e._v("Undelegate from validator B (5 coins). The account at this point can only\nsend 2.5 coins unless it receives more coins or until more coins vest.\nIt can still however, delegate.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"RFYgPSA1IC0gMi41ID0gMi41CkRGID0gMi41IC0gMi41ID0gMApCQyA9IDIuNSArIDUgPSA3LjUK"}}),e._v(" "),a("p",[e._v("Notice how we have an excess amount of "),a("code",[e._v("DV")]),e._v(".")])],1)]),e._v(" "),a("h3",{attrs:{id:"periodic-vesting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#periodic-vesting"}},[e._v("#")]),e._v(" Periodic Vesting")]),e._v(" "),a("p",[e._v("A vesting account is created where 100 tokens will be released over 1 year, with\n1/4 of tokens vesting each quarter. The vesting schedule would be as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"UGVyaW9kczoKLSBhbW91bnQ6IDI1c3Rha2UsIGxlbmd0aDogNzg4NDAwMAotIGFtb3VudDogMjVzdGFrZSwgbGVuZ3RoOiA3ODg0MDAwCi0gYW1vdW50OiAyNXN0YWtlLCBsZW5ndGg6IDc4ODQwMDAKLSBhbW91bnQ6IDI1c3Rha2UsIGxlbmd0aDogNzg4NDAwMAo="}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"T1YgPSAxMDAKREYgPSAwCkRWID0gMApCQyA9IDEwMApWID0gMTAwClYnID0gMAo="}}),e._v(" "),a("ol",[a("li",[a("p",[e._v("Immediately receives 1 coin")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"QkMgPSAxMDEK"}})],1),e._v(" "),a("li",[a("p",[e._v("Vesting period 1 passes, 25 coins vest")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ViA9IDc1ClYnID0gMjUK"}})],1),e._v(" "),a("li",[a("p",[e._v("During vesting period 2, 5 coins are transfered and 5 coins are delegated")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"RFYgPSA1CkJDID0gOTEK"}})],1),e._v(" "),a("li",[a("p",[e._v("Vesting period 2 passes, 25 coins vest")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ViA9IDUwClYnID0gNTAK"}})],1)]),e._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("ul",[a("li",[e._v("OriginalVesting: The amount of coins (per denomination) that are initially\npart of a vesting account. These coins are set at genesis.")]),e._v(" "),a("li",[e._v("StartTime: The BFT time at which a vesting account starts to vest.")]),e._v(" "),a("li",[e._v("EndTime: The BFT time at which a vesting account is fully vested.")]),e._v(" "),a("li",[e._v("DelegatedFree: The tracked amount of coins (per denomination) that are\ndelegated from a vesting account that have been fully vested at time of delegation.")]),e._v(" "),a("li",[e._v("DelegatedVesting: The tracked amount of coins (per denomination) that are\ndelegated from a vesting account that were vesting at time of delegation.")]),e._v(" "),a("li",[e._v("ContinuousVestingAccount: A vesting account implementation that vests coins\nlinearly over time.")]),e._v(" "),a("li",[e._v("DelayedVestingAccount: A vesting account implementation that only fully vests\nall coins at a given time.")]),e._v(" "),a("li",[e._v("PeriodicVestingAccount: A vesting account implementation that vests coins\naccording to a custom vesting schedule.")]),e._v(" "),a("li",[e._v("PermanentLockedAccount: It does not ever release coins, locking them indefinitely.\nCoins in this account can still be used for delegating and for governance votes even while locked.")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);