(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{739:function(a,l,e){"use strict";e.r(l);var d=e(1),c=Object(d.a)({},(function(){var a=this,l=a.$createElement,e=a._self._c||l;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"beginblock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beginblock"}},[a._v("#")]),a._v(" BeginBlock")]),a._v(" "),e("h2",{attrs:{id:"evidence-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evidence-handling"}},[a._v("#")]),a._v(" Evidence Handling")]),a._v(" "),e("p",[a._v("Tendermint blocks can include\n"),e("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/spec/blockchain/blockchain.md#evidence",target:"_blank",rel:"noopener noreferrer"}},[a._v("Evidence"),e("OutboundLink")],1),a._v(" that indicates if a validator committed malicious behavior. The relevant information is forwarded to the application as ABCI Evidence in "),e("code",[a._v("abci.RequestBeginBlock")]),a._v(" so that the validator can be punished accordingly.")]),a._v(" "),e("h3",{attrs:{id:"equivocation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#equivocation"}},[a._v("#")]),a._v(" Equivocation")]),a._v(" "),e("p",[a._v("The Cosmos SDK handles two types of evidence inside the ABCI "),e("code",[a._v("BeginBlock")]),a._v(":")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("DuplicateVoteEvidence")]),a._v(",")]),a._v(" "),e("li",[e("code",[a._v("LightClientAttackEvidence")]),a._v(".")])]),a._v(" "),e("p",[a._v("The evidence module handles these two evidence types the same way. First, the Cosmos SDK converts the Tendermint concrete evidence type to an SDK "),e("code",[a._v("Evidence")]),a._v(" interface using "),e("code",[a._v("Equivocation")]),a._v(" as the concrete type.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gRXF1aXZvY2F0aW9uIGltcGxlbWVudHMgdGhlIEV2aWRlbmNlIGludGVyZmFjZS4KbWVzc2FnZSBFcXVpdm9jYXRpb24gewogIGludDY0ICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ICAgICAgICAgICAgPSAxOwogIGdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAgdGltZSAgICAgICAgICAgICAgPSAyOwogIGludDY0ICAgICAgICAgICAgICAgICAgICAgcG93ZXIgICAgICAgICAgICAgPSAzOwogIHN0cmluZyAgICAgICAgICAgICAgICAgICAgY29uc2Vuc3VzX2FkZHJlc3MgPSA0Owp9Cg=="}}),a._v(" "),e("p",[a._v("For some "),e("code",[a._v("Equivocation")]),a._v(" submitted in "),e("code",[a._v("block")]),a._v(" to be valid, it must satisfy:")]),a._v(" "),e("p",[e("code",[a._v("Evidence.Timestamp >= block.Timestamp - MaxEvidenceAge")])]),a._v(" "),e("p",[a._v("Where:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("Evidence.Timestamp")]),a._v(" is the timestamp in the block at height "),e("code",[a._v("Evidence.Height")])]),a._v(" "),e("li",[e("code",[a._v("block.Timestamp")]),a._v(" is the current block timestamp.")])]),a._v(" "),e("p",[a._v("If valid "),e("code",[a._v("Equivocation")]),a._v(" evidence is included in a block, the validator's stake is\nreduced (slashed) by "),e("code",[a._v("SlashFractionDoubleSign")]),a._v(" as defined by the "),e("code",[a._v("x/slashing")]),a._v(' module\nof what their stake was when the infraction occurred, rather than when the evidence was discovered.\nWe want to "follow the stake", i.e., the stake that contributed to the infraction\nshould be slashed, even if it has since been redelegated or started unbonding.')]),a._v(" "),e("p",[a._v("In addition, the validator is permanently jailed and tombstoned to make it impossible for that\nvalidator to ever re-enter the validator set.")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("Equivocation")]),a._v(" evidence is handled as follows:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIEhhbmRsZUVxdWl2b2NhdGlvbkV2aWRlbmNlKGN0eCBzZGsuQ29udGV4dCwgZXZpZGVuY2UgKnR5cGVzLkVxdWl2b2NhdGlvbikgewoJbG9nZ2VyIDo9IGsuTG9nZ2VyKGN0eCkKCWNvbnNBZGRyIDo9IGV2aWRlbmNlLkdldENvbnNlbnN1c0FkZHJlc3MoKQoKCWlmIF8sIGVyciA6PSBrLnNsYXNoaW5nS2VlcGVyLkdldFB1YmtleShjdHgsIGNvbnNBZGRyLkJ5dGVzKCkpOyBlcnIgIT0gbmlsIHsKCQkvLyBJZ25vcmUgZXZpZGVuY2UgdGhhdCBjYW5ub3QgYmUgaGFuZGxlZC4KCQkvLwoJCS8vIE5PVEU6IFdlIHVzZWQgdG8gcGFuaWMgd2l0aDoKCQkvLyBgcGFuaWMoZm10LlNwcmludGYoJnF1b3Q7VmFsaWRhdG9yIGNvbnNlbnN1cy1hZGRyZXNzICV2IG5vdCBmb3VuZCZxdW90OywgY29uc0FkZHIpKWAsCgkJLy8gYnV0IHRoaXMgY291cGxlcyB0aGUgZXhwZWN0YXRpb25zIG9mIHRoZSBhcHAgdG8gYm90aCBUZW5kZXJtaW50IGFuZAoJCS8vIHRoZSBzaW11bGF0b3IuICBCb3RoIGFyZSBleHBlY3RlZCB0byBwcm92aWRlIHRoZSBmdWxsIHJhbmdlIG9mCgkJLy8gYWxsb3dhYmxlIGJ1dCBub25lIG9mIHRoZSBkaXNhbGxvd2VkIGV2aWRlbmNlIHR5cGVzLiAgSW5zdGVhZCBvZgoJCS8vIGdldHRpbmcgdGhpcyBjb29yZGluYXRpb24gcmlnaHQsIGl0IGlzIGVhc2llciB0byByZWxheCB0aGUKCQkvLyBjb25zdHJhaW50cyBhbmQgaWdub3JlIGV2aWRlbmNlIHRoYXQgY2Fubm90IGJlIGhhbmRsZWQuCgkJcmV0dXJuCgl9CgoJLy8gY2FsY3VsYXRlIHRoZSBhZ2Ugb2YgdGhlIGV2aWRlbmNlCglpbmZyYWN0aW9uSGVpZ2h0IDo9IGV2aWRlbmNlLkdldEhlaWdodCgpCglpbmZyYWN0aW9uVGltZSA6PSBldmlkZW5jZS5HZXRUaW1lKCkKCWFnZUR1cmF0aW9uIDo9IGN0eC5CbG9ja0hlYWRlcigpLlRpbWUuU3ViKGluZnJhY3Rpb25UaW1lKQoJYWdlQmxvY2tzIDo9IGN0eC5CbG9ja0hlYWRlcigpLkhlaWdodCAtIGluZnJhY3Rpb25IZWlnaHQKCgkvLyBSZWplY3QgZXZpZGVuY2UgaWYgdGhlIGRvdWJsZS1zaWduIGlzIHRvbyBvbGQuIEV2aWRlbmNlIGlzIGNvbnNpZGVyZWQgc3RhbGUKCS8vIGlmIHRoZSBkaWZmZXJlbmNlIGluIHRpbWUgYW5kIG51bWJlciBvZiBibG9ja3MgaXMgZ3JlYXRlciB0aGFuIHRoZSBhbGxvd2VkCgkvLyBwYXJhbWV0ZXJzIGRlZmluZWQuCgljcCA6PSBjdHguQ29uc2Vuc3VzUGFyYW1zKCkKCWlmIGNwICE9IG5pbCAmYW1wOyZhbXA7IGNwLkV2aWRlbmNlICE9IG5pbCB7CgkJaWYgYWdlRHVyYXRpb24gJmd0OyBjcC5FdmlkZW5jZS5NYXhBZ2VEdXJhdGlvbiAmYW1wOyZhbXA7IGFnZUJsb2NrcyAmZ3Q7IGNwLkV2aWRlbmNlLk1heEFnZU51bUJsb2NrcyB7CgkJCWxvZ2dlci5JbmZvKAoJCQkJJnF1b3Q7aWdub3JlZCBlcXVpdm9jYXRpb247IGV2aWRlbmNlIHRvbyBvbGQmcXVvdDssCgkJCQkmcXVvdDt2YWxpZGF0b3ImcXVvdDssIGNvbnNBZGRyLAoJCQkJJnF1b3Q7aW5mcmFjdGlvbl9oZWlnaHQmcXVvdDssIGluZnJhY3Rpb25IZWlnaHQsCgkJCQkmcXVvdDttYXhfYWdlX251bV9ibG9ja3MmcXVvdDssIGNwLkV2aWRlbmNlLk1heEFnZU51bUJsb2NrcywKCQkJCSZxdW90O2luZnJhY3Rpb25fdGltZSZxdW90OywgaW5mcmFjdGlvblRpbWUsCgkJCQkmcXVvdDttYXhfYWdlX2R1cmF0aW9uJnF1b3Q7LCBjcC5FdmlkZW5jZS5NYXhBZ2VEdXJhdGlvbiwKCQkJKQoJCQlyZXR1cm4KCQl9Cgl9CgoJdmFsaWRhdG9yIDo9IGsuc3Rha2luZ0tlZXBlci5WYWxpZGF0b3JCeUNvbnNBZGRyKGN0eCwgY29uc0FkZHIpCglpZiB2YWxpZGF0b3IgPT0gbmlsIHx8IHZhbGlkYXRvci5Jc1VuYm9uZGVkKCkgewoJCS8vIERlZmVuc2l2ZTogU2ltdWxhdGlvbiBkb2Vzbid0IHRha2UgdW5ib25kaW5nIHBlcmlvZHMgaW50byBhY2NvdW50LCBhbmQKCQkvLyBUZW5kZXJtaW50IG1pZ2h0IGJyZWFrIHRoaXMgYXNzdW1wdGlvbiBhdCBzb21lIHBvaW50LgoJCXJldHVybgoJfQoKCWlmIG9rIDo9IGsuc2xhc2hpbmdLZWVwZXIuSGFzVmFsaWRhdG9yU2lnbmluZ0luZm8oY3R4LCBjb25zQWRkcik7ICFvayB7CgkJcGFuaWMoZm10LlNwcmludGYoJnF1b3Q7ZXhwZWN0ZWQgc2lnbmluZyBpbmZvIGZvciB2YWxpZGF0b3IgJXMgYnV0IG5vdCBmb3VuZCZxdW90OywgY29uc0FkZHIpKQoJfQoKCS8vIGlnbm9yZSBpZiB0aGUgdmFsaWRhdG9yIGlzIGFscmVhZHkgdG9tYnN0b25lZAoJaWYgay5zbGFzaGluZ0tlZXBlci5Jc1RvbWJzdG9uZWQoY3R4LCBjb25zQWRkcikgewoJCWxvZ2dlci5JbmZvKAoJCQkmcXVvdDtpZ25vcmVkIGVxdWl2b2NhdGlvbjsgdmFsaWRhdG9yIGFscmVhZHkgdG9tYnN0b25lZCZxdW90OywKCQkJJnF1b3Q7dmFsaWRhdG9yJnF1b3Q7LCBjb25zQWRkciwKCQkJJnF1b3Q7aW5mcmFjdGlvbl9oZWlnaHQmcXVvdDssIGluZnJhY3Rpb25IZWlnaHQsCgkJCSZxdW90O2luZnJhY3Rpb25fdGltZSZxdW90OywgaW5mcmFjdGlvblRpbWUsCgkJKQoJCXJldHVybgoJfQoKCWxvZ2dlci5JbmZvKAoJCSZxdW90O2NvbmZpcm1lZCBlcXVpdm9jYXRpb24mcXVvdDssCgkJJnF1b3Q7dmFsaWRhdG9yJnF1b3Q7LCBjb25zQWRkciwKCQkmcXVvdDtpbmZyYWN0aW9uX2hlaWdodCZxdW90OywgaW5mcmFjdGlvbkhlaWdodCwKCQkmcXVvdDtpbmZyYWN0aW9uX3RpbWUmcXVvdDssIGluZnJhY3Rpb25UaW1lLAoJKQoKCS8vIFdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIHN0YWtlIGRpc3RyaWJ1dGlvbiB3aGljaCBzaWduZWQgdGhlIGJsb2NrLCBzbyB3ZQoJLy8gc3VidHJhY3QgVmFsaWRhdG9yVXBkYXRlRGVsYXkgZnJvbSB0aGUgZXZpZGVuY2UgaGVpZ2h0LgoJLy8gTm90ZSwgdGhhdCB0aGlzICpjYW4qIHJlc3VsdCBpbiBhIG5lZ2F0aXZlICZxdW90O2Rpc3RyaWJ1dGlvbkhlaWdodCZxdW90OywgdXAgdG8KCS8vIC1WYWxpZGF0b3JVcGRhdGVEZWxheSwgaS5lLiBhdCB0aGUgZW5kIG9mIHRoZQoJLy8gcHJlLWdlbmVzaXMgYmxvY2sgKG5vbmUpID0gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZ2VuZXNpcyBibG9jay4KCS8vIFRoYXQncyBmaW5lIHNpbmNlIHRoaXMgaXMganVzdCB1c2VkIHRvIGZpbHRlciB1bmJvbmRpbmcgZGVsZWdhdGlvbnMgJmFtcDsgcmVkZWxlZ2F0aW9ucy4KCWRpc3RyaWJ1dGlvbkhlaWdodCA6PSBpbmZyYWN0aW9uSGVpZ2h0IC0gc2RrLlZhbGlkYXRvclVwZGF0ZURlbGF5CgoJLy8gU2xhc2ggdmFsaWRhdG9yLiBUaGUgYHBvd2VyYCBpcyB0aGUgaW50NjQgcG93ZXIgb2YgdGhlIHZhbGlkYXRvciBhcyBwcm92aWRlZAoJLy8gdG8vYnkgVGVuZGVybWludC4gVGhpcyB2YWx1ZSBpcyB2YWxpZGF0b3IuVG9rZW5zIGFzIHNlbnQgdG8gVGVuZGVybWludCB2aWEKCS8vIEFCQ0ksIGFuZCBub3cgcmVjZWl2ZWQgYXMgZXZpZGVuY2UuIFRoZSBmcmFjdGlvbiBpcyBwYXNzZWQgaW4gdG8gc2VwYXJhdGVseQoJLy8gdG8gc2xhc2ggdW5ib25kaW5nIGFuZCByZWJvbmRpbmcgZGVsZWdhdGlvbnMuCglrLnNsYXNoaW5nS2VlcGVyLlNsYXNoKAoJCWN0eCwKCQljb25zQWRkciwKCQlrLnNsYXNoaW5nS2VlcGVyLlNsYXNoRnJhY3Rpb25Eb3VibGVTaWduKGN0eCksCgkJZXZpZGVuY2UuR2V0VmFsaWRhdG9yUG93ZXIoKSwgZGlzdHJpYnV0aW9uSGVpZ2h0LAoJKQoKCS8vIEphaWwgdGhlIHZhbGlkYXRvciBpZiBub3QgYWxyZWFkeSBqYWlsZWQuIFRoaXMgd2lsbCBiZWdpbiB1bmJvbmRpbmcgdGhlCgkvLyB2YWxpZGF0b3IgaWYgbm90IGFscmVhZHkgdW5ib25kaW5nICh0b21ic3RvbmVkKS4KCWlmICF2YWxpZGF0b3IuSXNKYWlsZWQoKSB7CgkJay5zbGFzaGluZ0tlZXBlci5KYWlsKGN0eCwgY29uc0FkZHIpCgl9CgoJay5zbGFzaGluZ0tlZXBlci5KYWlsVW50aWwoY3R4LCBjb25zQWRkciwgdHlwZXMuRG91YmxlU2lnbkphaWxFbmRUaW1lKQoJay5zbGFzaGluZ0tlZXBlci5Ub21ic3RvbmUoY3R4LCBjb25zQWRkcikKfQo="}}),a._v(" "),e("p",[e("strong",[a._v("Note:")]),a._v(" The slashing, jailing, and tombstoning calls are delegated through the "),e("code",[a._v("x/slashing")]),a._v(" module\nthat emits informative events and finally delegates calls to the "),e("code",[a._v("x/staking")]),a._v(" module. See documentation\non slashing and jailing in "),e("RouterLink",{attrs:{to:"/.././cosmos-sdk/x/staking/spec/02_state_transitions.html"}},[a._v("State Transitions")]),a._v(".")],1),a._v(" "),e("h1",{attrs:{id:"client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[a._v("#")]),a._v(" Client")]),a._v(" "),e("h2",{attrs:{id:"cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[a._v("#")]),a._v(" CLI")]),a._v(" "),e("p",[a._v("A user can query and interact with the "),e("code",[a._v("evidence")]),a._v(" module using the CLI.")]),a._v(" "),e("h3",{attrs:{id:"query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[a._v("#")]),a._v(" Query")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("query")]),a._v(" commands allows users to query "),e("code",[a._v("evidence")]),a._v(" state.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBldmlkZW5jZSAtLWhlbHAK"}}),a._v(" "),e("h3",{attrs:{id:"evidence"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evidence"}},[a._v("#")]),a._v(" evidence")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("evidence")]),a._v(" command allows users to list all evidence or evidence by hash.")]),a._v(" "),e("p",[a._v("Usage:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBldmlkZW5jZSBbZmxhZ3NdCg=="}}),a._v(" "),e("p",[a._v("To query evidence by hash")]),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBldmlkZW5jZSAmcXVvdDtERjBDMjNFODYzNEU0ODBGODRCOUQ1Njc0QTdDREM5ODE2NDY2REVDMjhBMzM1OEY3MzI2MEY2OEQyOEQ3NjYwJnF1b3Q7Cg=="}}),a._v(" "),e("p",[a._v("Example Output:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXZpZGVuY2U6CiAgY29uc2Vuc3VzX2FkZHJlc3M6IGNvc21vc3ZhbGNvbnMxbnRrOGV1YWxld3VwcnowZ2FtaDhobnZjZW0ybnJjZHNnejU2M2gKICBoZWlnaHQ6IDExCiAgcG93ZXI6IDEwMAogIHRpbWU6ICZxdW90OzIwMjEtMTAtMjBUMTY6MDg6MzguMTk0MDE3NjI0WiZxdW90Owo="}}),a._v(" "),e("p",[a._v("To get all evidence")]),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBldmlkZW5jZQo="}}),a._v(" "),e("p",[a._v("Example Output:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXZpZGVuY2U6CiAgY29uc2Vuc3VzX2FkZHJlc3M6IGNvc21vc3ZhbGNvbnMxbnRrOGV1YWxld3VwcnowZ2FtaDhobnZjZW0ybnJjZHNnejU2M2gKICBoZWlnaHQ6IDExCiAgcG93ZXI6IDEwMAogIHRpbWU6ICZxdW90OzIwMjEtMTAtMjBUMTY6MDg6MzguMTk0MDE3NjI0WiZxdW90OwpwYWdpbmF0aW9uOgogIG5leHRfa2V5OiBudWxsCiAgdG90YWw6ICZxdW90OzEmcXVvdDsK"}}),a._v(" "),e("h2",{attrs:{id:"rest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rest"}},[a._v("#")]),a._v(" REST")]),a._v(" "),e("p",[a._v("A user can query the "),e("code",[a._v("evidence")]),a._v(" module using REST endpoints.")]),a._v(" "),e("h3",{attrs:{id:"evidence-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evidence-2"}},[a._v("#")]),a._v(" Evidence")]),a._v(" "),e("p",[a._v("Get evidence by hash")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L2Nvc21vcy9ldmlkZW5jZS92MWJldGExL2V2aWRlbmNlL3tldmlkZW5jZV9oYXNofQo="}}),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBHRVQgJnF1b3Q7aHR0cDovL2xvY2FsaG9zdDoxMzE3L2Nvc21vcy9ldmlkZW5jZS92MWJldGExL2V2aWRlbmNlL0RGMEMyM0U4NjM0RTQ4MEY4NEI5RDU2NzRBN0NEQzk4MTY0NjZERUMyOEEzMzU4RjczMjYwRjY4RDI4RDc2NjAmcXVvdDsK"}}),a._v(" "),e("p",[a._v("Example Output:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O2V2aWRlbmNlJnF1b3Q7OiB7CiAgICAmcXVvdDtjb25zZW5zdXNfYWRkcmVzcyZxdW90OzogJnF1b3Q7Y29zbW9zdmFsY29uczFudGs4ZXVhbGV3dXByejBnYW1oOGhudmNlbTJucmNkc2d6NTYzaCZxdW90OywKICAgICZxdW90O2hlaWdodCZxdW90OzogJnF1b3Q7MTEmcXVvdDssCiAgICAmcXVvdDtwb3dlciZxdW90OzogJnF1b3Q7MTAwJnF1b3Q7LAogICAgJnF1b3Q7dGltZSZxdW90OzogJnF1b3Q7MjAyMS0xMC0yMFQxNjowODozOC4xOTQwMTc2MjRaJnF1b3Q7CiAgfQp9Cg=="}}),a._v(" "),e("h3",{attrs:{id:"all-evidence"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-evidence"}},[a._v("#")]),a._v(" All evidence")]),a._v(" "),e("p",[a._v("Get all evidence")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L2Nvc21vcy9ldmlkZW5jZS92MWJldGExL2V2aWRlbmNlCg=="}}),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBHRVQgJnF1b3Q7aHR0cDovL2xvY2FsaG9zdDoxMzE3L2Nvc21vcy9ldmlkZW5jZS92MWJldGExL2V2aWRlbmNlJnF1b3Q7Cg=="}}),a._v(" "),e("p",[a._v("Example Output:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O2V2aWRlbmNlJnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O2NvbnNlbnN1c19hZGRyZXNzJnF1b3Q7OiAmcXVvdDtjb3Ntb3N2YWxjb25zMW50azhldWFsZXd1cHJ6MGdhbWg4aG52Y2VtMm5yY2RzZ3o1NjNoJnF1b3Q7LAogICAgICAmcXVvdDtoZWlnaHQmcXVvdDs6ICZxdW90OzExJnF1b3Q7LAogICAgICAmcXVvdDtwb3dlciZxdW90OzogJnF1b3Q7MTAwJnF1b3Q7LAogICAgICAmcXVvdDt0aW1lJnF1b3Q7OiAmcXVvdDsyMDIxLTEwLTIwVDE2OjA4OjM4LjE5NDAxNzYyNFomcXVvdDsKICAgIH0KICBdLAogICZxdW90O3BhZ2luYXRpb24mcXVvdDs6IHsKICAgICZxdW90O3RvdGFsJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgfQp9Cg=="}}),a._v(" "),e("h2",{attrs:{id:"grpc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[a._v("#")]),a._v(" gRPC")]),a._v(" "),e("p",[a._v("A user can query the "),e("code",[a._v("evidence")]),a._v(" module using gRPC endpoints.")]),a._v(" "),e("h3",{attrs:{id:"evidence-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evidence-3"}},[a._v("#")]),a._v(" Evidence")]),a._v(" "),e("p",[a._v("Get evidence by hash")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW9zLmV2aWRlbmNlLnYxYmV0YTEuUXVlcnkvRXZpZGVuY2UK"}}),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IC1kICd7JnF1b3Q7ZXZpZGVuY2VfaGFzaCZxdW90OzomcXVvdDtERjBDMjNFODYzNEU0ODBGODRCOUQ1Njc0QTdDREM5ODE2NDY2REVDMjhBMzM1OEY3MzI2MEY2OEQyOEQ3NjYwJnF1b3Q7fScgbG9jYWxob3N0OjkwOTAgY29zbW9zLmV2aWRlbmNlLnYxYmV0YTEuUXVlcnkvRXZpZGVuY2UK"}}),a._v(" "),e("p",[a._v("Example Output:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O2V2aWRlbmNlJnF1b3Q7OiB7CiAgICAmcXVvdDtjb25zZW5zdXNfYWRkcmVzcyZxdW90OzogJnF1b3Q7Y29zbW9zdmFsY29uczFudGs4ZXVhbGV3dXByejBnYW1oOGhudmNlbTJucmNkc2d6NTYzaCZxdW90OywKICAgICZxdW90O2hlaWdodCZxdW90OzogJnF1b3Q7MTEmcXVvdDssCiAgICAmcXVvdDtwb3dlciZxdW90OzogJnF1b3Q7MTAwJnF1b3Q7LAogICAgJnF1b3Q7dGltZSZxdW90OzogJnF1b3Q7MjAyMS0xMC0yMFQxNjowODozOC4xOTQwMTc2MjRaJnF1b3Q7CiAgfQp9Cg=="}}),a._v(" "),e("h3",{attrs:{id:"all-evidence-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-evidence-2"}},[a._v("#")]),a._v(" All evidence")]),a._v(" "),e("p",[a._v("Get all evidence")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW9zLmV2aWRlbmNlLnYxYmV0YTEuUXVlcnkvQWxsRXZpZGVuY2UK"}}),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IGxvY2FsaG9zdDo5MDkwIGNvc21vcy5ldmlkZW5jZS52MWJldGExLlF1ZXJ5L0FsbEV2aWRlbmNlCg=="}}),a._v(" "),e("p",[a._v("Example Output:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O2V2aWRlbmNlJnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O2NvbnNlbnN1c19hZGRyZXNzJnF1b3Q7OiAmcXVvdDtjb3Ntb3N2YWxjb25zMW50azhldWFsZXd1cHJ6MGdhbWg4aG52Y2VtMm5yY2RzZ3o1NjNoJnF1b3Q7LAogICAgICAmcXVvdDtoZWlnaHQmcXVvdDs6ICZxdW90OzExJnF1b3Q7LAogICAgICAmcXVvdDtwb3dlciZxdW90OzogJnF1b3Q7MTAwJnF1b3Q7LAogICAgICAmcXVvdDt0aW1lJnF1b3Q7OiAmcXVvdDsyMDIxLTEwLTIwVDE2OjA4OjM4LjE5NDAxNzYyNFomcXVvdDsKICAgIH0KICBdLAogICZxdW90O3BhZ2luYXRpb24mcXVvdDs6IHsKICAgICZxdW90O3RvdGFsJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgfQp9Cg=="}})],1)}),[],!1,null,null,null);l.default=c.exports}}]);