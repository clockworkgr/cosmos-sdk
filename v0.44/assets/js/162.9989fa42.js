(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{692:function(e,t,n){"use strict";n.r(t);var a=n(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"ibc-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ibc-overview"}},[e._v("#")]),e._v(" IBC Overview")]),e._v(" "),n("p",{attrs:{synopsis:""}},[e._v("Learn what IBC is, its components, and use cases.")]),e._v(" "),n("h2",{attrs:{id:"what-is-the-inter-blockchain-communication-protocol-ibc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-inter-blockchain-communication-protocol-ibc"}},[e._v("#")]),e._v(" What is the Inter-Blockchain Communication Protocol (IBC)?")]),e._v(" "),n("p",[e._v("This document is a guide for developers who want to write their own IBC apps for custom use cases.")]),e._v(" "),n("p",[e._v("The modular design of the IBC protocol means that IBC app developers do not require in-depth knowledge of the low-level details of clients, connections, and proof verification. This brief explanation of the lower levels of the stack is provided so that app developers can gain a high-level understanding of the IBC protocol.")]),e._v(" "),n("p",[e._v("The abstraction layer details on channels and ports are relevant for app developers. You can define your own custom packets and IBCModule callbacks.")]),e._v(" "),n("p",[e._v("The following requirements must be met for a module to interact over IBC:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Bind to one or more ports")])]),e._v(" "),n("li",[n("p",[e._v("Define the packet data")])]),e._v(" "),n("li",[n("p",[e._v("Define optional acknowledgement structures and methods to encode and decode them")])]),e._v(" "),n("li",[n("p",[e._v("Implement the IBCModule interface")])])]),e._v(" "),n("h2",{attrs:{id:"components-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#components-overview"}},[e._v("#")]),e._v(" Components Overview")]),e._v(" "),n("p",[e._v("This section describes the IBC components and links to the repos.")]),e._v(" "),n("h3",{attrs:{id:"clients"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clients"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/02-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clients"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("IBC clients are light clients that are identified by a unique client id. IBC clients track the consensus states of other blockchains and the proof specs of those blockchains that are required to properly verify proofs against the client's consensus state. A client can be associated with any number of connections to multiple chains. The supported IBC clients are:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/06-solomachine",target:"_blank",rel:"noopener noreferrer"}},[e._v("Solo Machine light client"),n("OutboundLink")],1),e._v(": devices such as phones, browsers, or laptops.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint light client"),n("OutboundLink")],1),e._v(": The default for Cosmos SDK-based chains.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/09-localhost",target:"_blank",rel:"noopener noreferrer"}},[e._v("Localhost (loopback) client"),n("OutboundLink")],1),e._v(": Useful for testing, simulation, and relaying packets to modules on the same application.")])]),e._v(" "),n("h3",{attrs:{id:"connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/03-connection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Connections"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Connections encapsulate two "),n("code",[e._v("ConnectionEnd")]),e._v(" objects on two separate blockchains. Each "),n("code",[e._v("ConnectionEnd")]),e._v(" is associated with a client of the other blockchain (the counterparty blockchain). The connection handshake is responsible for verifying that the light clients on each chain are correct for their respective counterparties. Connections, once established, are responsible for facilitating all cross-chain verification of IBC state. A connection can be associated with any number of channels.")]),e._v(" "),n("h3",{attrs:{id:"proofs-and-paths"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proofs-and-paths"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/23-commitment",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proofs"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/24-host",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paths"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("In IBC, blockchains do not directly pass messages to each other over the network.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("To communicate, a blockchain commits some state to a precisely defined path reserved for a specific message type and a specific counterparty. For example, a blockchain that stores a specific connectionEnd as part of a handshake or a packet intended to be relayed to a module on the counterparty chain.")])]),e._v(" "),n("li",[n("p",[e._v("A relayer process monitors for updates to these paths and relays messages by submitting the data stored under the path along with a proof of that data to the counterparty chain.")])]),e._v(" "),n("li",[n("p",[e._v("The paths that all IBC implementations must support for committing IBC messages are defined in "),n("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/core/ics-024-host-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-24 host requirements"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("The proof format that all implementations must produce and verify is defined in "),n("a",{attrs:{href:"https://github.com/confio/ics23",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-23 implementation"),n("OutboundLink")],1),e._v(".")])])]),e._v(" "),n("h3",{attrs:{id:"capabilities"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[e._v("#")]),e._v(" "),n("RouterLink",{attrs:{to:"/ibc/ocap.html"}},[e._v("Capabilities")])],1),e._v(" "),n("p",[e._v("IBC is intended to work in execution environments where modules do not necessarily trust each other. IBC must authenticate module actions on ports and channels so that only modules with the appropriate permissions can use the channels. This security is accomplished using "),n("RouterLink",{attrs:{to:"/architecture/adr-003-dynamic-capability-store.html"}},[e._v("dynamic capabilities")]),e._v(". Upon binding to a port or creating a channel for a module, IBC returns a dynamic capability that the module must claim to use that port or channel. This binding strategy prevents other modules from using that port or channel since those modules do not own the appropriate capability.")],1),e._v(" "),n("p",[e._v("While this explanation is useful background information, IBC modules do not need to interact at all with these lower-level abstractions. The relevant abstraction layer for IBC application developers is that of channels and ports.")]),e._v(" "),n("p",[e._v("Write your IBC applications as self-contained "),n("strong",[e._v("modules")]),e._v(". A module on one blockchain can communicate with other modules on other blockchains by sending, receiving, and acknowledging packets through channels that are uniquely identified by the "),n("code",[e._v("(channelID, portID)")]),e._v(" tuple.")]),e._v(" "),n("p",[e._v("A useful analogy is to consider IBC modules as internet apps on a computer. A channel can then be conceptualized as an IP connection, with the IBC portID is like an IP port, and the IBC channelID is like an IP address. A single instance of an IBC module can communicate on the same port with any number of other modules and IBC correctly routes all packets to the relevant module using the "),n("code",[e._v("(channelID, portID)")]),e._v(" tuple. An IBC module can also communicate with another IBC module over multiple ports by sending each "),n("code",[e._v("(portID<->portID)")]),e._v(" packet stream on a different unique channel.")]),e._v(" "),n("h3",{attrs:{id:"ports"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ports"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("An IBC module can bind to any number of ports. Each port must be identified by a unique "),n("code",[e._v("portID")]),e._v(". Since IBC is designed to be secure with mutually-distrusted modules that operate on the same ledger, binding a port returns the dynamic object capability. To take action on a particular port, for example, to open a channel with its portID, a module must provide the dynamic object capability to the IBC handler. This requirement prevents a malicious module from opening channels with ports it does not own.")]),e._v(" "),n("p",[e._v("IBC modules are responsible for claiming the capability that is returned on "),n("code",[e._v("BindPort")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"channels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#channels"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Channels"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("An IBC channel can be established between two IBC ports. A port is exclusively owned by a single module. IBC packets are sent over channels. Just as IP packets contain the destination IP address, IP port, the source IP address, and source IP port, IBC packets contain the destination portID, channelID, the source portID, and channelID. The IBC packets enable IBC to correctly route the packets to the destination module, while also allowing modules receiving packets to know the sender module.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("A channel can be "),n("code",[e._v("ORDERED")]),e._v(" so that packets from a sending module must be processed by the receiving module in the order they were sent.")])]),e._v(" "),n("li",[n("p",[e._v("Recommended, a channel may be "),n("code",[e._v("UNORDERED")]),e._v(" so that packets from a sending module are processed in the order they arrive, which may not be the order the packets were sent.")])])]),e._v(" "),n("p",[e._v("Modules may choose which channels they wish to communicate over with. IBC expects modules to implement callbacks that are called during the channel handshake. These callbacks may do custom channel initialization logic. If an error is returned, the channel handshake fails. By returning errors on callbacks, modules can programmatically reject and accept channels.")]),e._v(" "),n("p",[e._v("The channel handshake is a 4-step handshake. Briefly, if a given chain A wants to open a channel with chain B using an already established connection:")]),e._v(" "),n("ol",[n("li",[e._v("Chain A sends a "),n("code",[e._v("ChanOpenInit")]),e._v(" message to signal a channel initialization attempt with chain B.")]),e._v(" "),n("li",[e._v("Chain B sends a "),n("code",[e._v("ChanOpenTry")]),e._v(" message to try opening the channel on chain A.")]),e._v(" "),n("li",[e._v("Chain A sends a "),n("code",[e._v("ChanOpenAck")]),e._v(" message to mark its channel end status as open.")]),e._v(" "),n("li",[e._v("Chain B sends a "),n("code",[e._v("ChanOpenConfirm")]),e._v(" message to mark its channel end status as open.")])]),e._v(" "),n("p",[e._v("If all of these actions happen successfully, the channel is open on both sides. At each step in the handshake, the module associated with the "),n("code",[e._v("ChannelEnd")]),e._v(" executes its callback for that step of the handshake. So on "),n("code",[e._v("ChanOpenInit")]),e._v(", the module on chain A has its callback "),n("code",[e._v("OnChanOpenInit")]),e._v(" executed.")]),e._v(" "),n("p",[e._v("Just as ports came with dynamic capabilities, channel initialization returns a dynamic capability that the module "),n("strong",[e._v("must")]),e._v(" claim so that they can pass in a capability to authenticate channel actions like sending packets. The channel capability is passed into the callback on the first parts of the handshake: "),n("code",[e._v("OnChanOpenInit")]),e._v(" on the initializing chain or "),n("code",[e._v("OnChanOpenTry")]),e._v(" on the other chain.")]),e._v(" "),n("h3",{attrs:{id:"packets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#packets"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Packets"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Modules communicate with each other by sending packets over IBC channels. All IBC packets contain:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Destination "),n("code",[e._v("portID")])])]),e._v(" "),n("li",[n("p",[e._v("Destination "),n("code",[e._v("channelID")])])]),e._v(" "),n("li",[n("p",[e._v("Source "),n("code",[e._v("portID")])])]),e._v(" "),n("li",[n("p",[e._v("Source "),n("code",[e._v("channelID")])]),e._v(" "),n("p",[e._v("These port and channels allow the modules to know the sender module of a given packet.")])]),e._v(" "),n("li",[n("p",[e._v("A sequence to optionally enforce ordering")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("TimeoutTimestamp")]),e._v(" and "),n("code",[e._v("TimeoutHeight")])]),e._v(" "),n("p",[e._v("When non-zero, these timeout values determine the deadline before which the receiving module must process a packet.")]),e._v(" "),n("p",[e._v("If the timeout passes without the packet being successfully received, the sending module can timeout the packet and take appropriate actions.")])])]),e._v(" "),n("p",[e._v("Modules send custom application data to each other inside the "),n("code",[e._v("Data []byte")]),e._v(" field of the IBC packet. Packet data is completely opaque to IBC handlers. The sender module must encode their application-specific packet information into the "),n("code",[e._v("Data")]),e._v(" field of packets. The receiver module must decode that "),n("code",[e._v("Data")]),e._v(" back to the original application data.")]),e._v(" "),n("h3",{attrs:{id:"receipts-and-timeouts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#receipts-and-timeouts"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Receipts and Timeouts"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Since IBC works over a distributed network and relies on potentially faulty relayers to relay messages between ledgers, IBC must handle the case where a packet does not get sent to its destination in a timely manner or at all. Packets must specify a timeout height or timeout timestamp after which a packet can no longer be successfully received on the destination chain.")]),e._v(" "),n("p",[e._v("If the timeout is reached, then a proof-of-packet timeout can be submitted to the original chain which can then perform application-specific logic to timeout the packet, perhaps by rolling back the packet send changes (refunding senders any locked funds, and so on).")]),e._v(" "),n("p",[e._v("In ORDERED channels, a timeout of a single packet in the channel closes the channel. If packet sequence "),n("code",[e._v("n")]),e._v(" times out, then no packet at sequence "),n("code",[e._v("k > n")]),e._v(" can be successfully received without violating the contract of ORDERED channels that packets are processed in the order that they are sent. Since ORDERED channels enforce this invariant, a proof that sequence "),n("code",[e._v("n")]),e._v(" hasn't been received on the destination chain by packet "),n("code",[e._v("n")]),e._v("'s specified timeout is sufficient to timeout packet "),n("code",[e._v("n")]),e._v(" and close the channel.")]),e._v(" "),n("p",[e._v("In the UNORDERED case, packets can be received in any order. IBC writes a packet receipt for each sequence it has received in the UNORDERED channel. This receipt contains no information and is simply a marker intended to signify that the UNORDERED channel has received a packet at the specified sequence. To timeout a packet on an UNORDERED channel, proof that a packet receipt does not exist is required for the packet's sequence by the specified timeout. Of course, timing out a packet on an UNORDERED channel triggers the application specific timeout logic for that packet, and does not close the channel.")]),e._v(" "),n("p",[e._v("For this reason, most modules that use UNORDERED channels are recommended as they require less liveness guarantees to function effectively for users of that channel.")]),e._v(" "),n("h3",{attrs:{id:"acknowledgements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acknowledgements"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Modules also write application-specific acknowledgements when processing a packet. Acknowledgements can be done:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Synchronously on "),n("code",[e._v("OnRecvPacket")]),e._v(" if the module processes packets as soon as they are received from IBC module.")])]),e._v(" "),n("li",[n("p",[e._v("Asynchronously if module processes packets at some later point after receiving the packet.")])])]),e._v(" "),n("p",[e._v("This acknowledgement data is opaque to IBC much like the packet "),n("code",[e._v("Data")]),e._v(" and is treated by IBC as a simple byte string "),n("code",[e._v("[]byte")]),e._v(". The receiver modules must encode their acknowledgement so that the sender module can decode it correctly. How the acknowledgement is encoded should be decided through version negotiation during the channel handshake.")]),e._v(" "),n("p",[e._v("The acknowledgement can encode whether the packet processing succeeded or failed, along with additional information that allows the sender module to take appropriate action.")]),e._v(" "),n("p",[e._v("After the acknowledgement has been written by the receiving chain, a relayer relays the acknowledgement back to the original sender module which then executes application-specific acknowledgment logic using the contents of the acknowledgement. This acknowledgement can involve rolling back packet-send changes in the case of a failed acknowledgement (refunding senders).")]),e._v(" "),n("p",[e._v("After an acknowledgement is received successfully on the original sender the chain, the IBC module deletes the corresponding packet commitment as it is no longer needed.")]),e._v(" "),n("h2",{attrs:{id:"further-readings-and-specs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-readings-and-specs"}},[e._v("#")]),e._v(" Further Readings and Specs")]),e._v(" "),n("p",[e._v("To learn more about IBC, check out the following specifications:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC specs"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/spec.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC protocol on the Cosmos SDK"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{hide:"",id:"next"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),n("p",{attrs:{hide:""}},[e._v("Learn about how to "),n("RouterLink",{attrs:{to:"/ibc/integration.html"}},[e._v("integrate")]),e._v(" IBC to your application")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);