import type { Product } from "../../../types";

export const dmNvx360: Product = {
  id: "dm-nvx-360",
  name: "DM-NVX-360",
  subtitle: "DM NVX® 4K-60 HDR Network AV Encoder/Decoder",
  partNumber: "DM-NVX-360",
  docsUrl: "",
  category: "processors",
  description:
    "A reliable, high-performance AV over IP encoder or decoder that transports 4K-60 video over standard Gigabit Ethernet with no perceptible latency or loss of quality. Supports HDR (High Dynamic Range) and HDCP 2.3 with built-in scaling and video wall processing, adaptive bit rate, AES67 transmit and receive capability, USB and KVM routing, and optional fiber connectivity. Provides a secure, scalable 4K signal routing solution for enterprise and campus-wide content distribution applications.",
  specs: [
    {
      title: "Encoding/Decoding",
      fields: [
        {
          label: "Stream Type",
          value:
            "Encoder: Pixel Perfect Processing (default) or DM-NVX-D10/D20/D200 Series¹",
        },
        {
          label: "Stream Type",
          value:
            "Decoder: Pixel Perfect Processing or DM-NVX-E10/E20/E200 Series¹",
        },
        {
          label: "Video Resolutions",
          value:
            "Up to 4096x2160@60Hz (DCI 4K); 4:4:4 color sampling; HDR10, Dolby Vision, and Deep Color support",
        },
        {
          label: "Audio Formats",
          value:
            "Multichannel (up to 8-channel LPCM or encoded HBR 7.1 surround sound), 2-channel LPCM²",
        },
        {
          label: "Bit Rates",
          value:
            "Encoder: Fixed (200 to 950 Mbps - user specified); Adaptive (dependent on input resolution of the stream), or Variable (less than 150 Mbps to maximum of 750 Mbps, dependent on content and input resolution of the stream)",
        },
        { label: "Streaming Protocols", value: "RTP, SDP" },
        { label: "Container", value: "MPEG-2 transport stream (ts)" },
        { label: "Session Initiation", value: "Multicast via secure RTSP" },
        { label: "Copy Protection", value: "HDCP 2.3, AES-128, PKI" },
      ],
    },
    {
      title: "Video",
      fields: [
        {
          label: "Input Signal Types",
          value:
            "HDMI with HDR10, Dolby+, Dolby Vision, Deep Color, and 4K-60 4:4:4 support¹ (Dual-Mode DisplayPort™ interface and DVI compatible¹)",
        },
        {
          label: "Output Signal Types",
          value:
            "HDMI with HDR10, Dolby+, Dolby Vision, Deep Color, and 4K-60 4:4:4 support¹ (DVI compatible¹)",
        },
        {
          label: "Switching",
          value:
            "2x1 in decoder mode (HDMI, Stream), manual or auto-switching, limited audio breakaway²",
        },
        {
          label: "Scaler (Decoder Mode Only)",
          value:
            "4K-60 4:4:4 video scaler with motion-adaptive deinterlacing, intelligent frame rate conversion, Deep Color support, HDR10, HDR10+, and Dolby Vision support, widescreen format selection (zoom, stretch, maintain aspect-ratio, or 1:1), video wall processing up to 8 wide x 8 high",
        },
      ],
    },
    {
      title: "Audio",
      fields: [
        {
          label: "Input Signal Types",
          value: "HDMI (Dual-Mode DisplayPort interface), analog stereo²",
        },
        { label: "Output Signal Types", value: "HDMI, analog stereo²" },
        {
          label: "Digital Formats",
          value:
            "Dolby Digital®, Dolby Digital EX, Dolby Digital Plus, Dolby TrueHD, DTS®, DTS, DTS 96/24, DTS HD",
        },
        {
          label: "High Res",
          value: "DTS HD Master Audio, DTS:X, LPCM up to 8 channels",
        },
        { label: "Analog Formats", value: "Stereo 2-channel" },
        { label: "Analog-To-Digital Conversion", value: "24-bit 48 kHz" },
        { label: "Digital-To-Analog Conversion", value: "24-bit 48 kHz" },
        {
          label: "AES67",
          value:
            "Frequency Response: 20 Hz to 20 kHz ±0.5 dB; S/N Ratio: >95 dB 20 Hz to 20 kHz A-weighted; THD+N: <0.005% @ 1 kHz; Stereo Separation: >90 dB",
        },
        { label: "Analog Output Volume Adjustment", value: "-80 to +20 dB" },
      ],
    },
    {
      title: "Communications",
      fields: [
        {
          label: "Ethernet",
          value:
            "Auto-switching, auto-negotiating, auto/full/half duplex, TCP/IP, UDP/IP, DHCP, SSL, TLS, SSH (Secure Shell File Transfer Protocol), IEEE 802.1X, IPv4 only or both IPv4 and IPv6, Active Directory, Multicast TTL, HTTPS web browser setup and control, Crestron QuickStart, and later control system integration",
        },
        {
          label: "USB",
          value:
            "USB 2.0 host or device signal extension and routing, Layer 2 or Layer 3",
        },
        {
          label: "RS-232",
          value:
            "2-way device control and monitoring up to 115.2k baud with hardware and software handshaking",
        },
        {
          label: "IR/Serial",
          value:
            "1-way device control via infrared up to 1.1 MHz or serial TTL (0-5 V) up to 19.2k baud (via control system)",
        },
        { label: "HDMI", value: "HDCP 2.3, EDID, CEC" },
        {
          label: "DM NVX (via Ethernet)",
          value:
            "HDCP 2.3, AES-128 AV content encryption with PKI authentication, RTP, secure RTSP, SDP, ONVIF, IGMPv2, IGMPv3, SMMPTE 2022, FEC (Forward Error Correction)",
        },
      ],
    },
    {
      title: "Connectors",
      fields: [
        {
          label: "USB DEVICE",
          value:
            "(1) USB 2.0 Type-C™ connector, female; USB 2.0 host port; USB signal extender port for connection to a mouse, keyboard, or other USB 2.0 device; Available Power: 500 mA at 5 VDC¹⁵",
        },
        {
          label: "USB HOST",
          value:
            "(1) USB Type-A connector, female; USB 2.0 host port; USB signal extender port for connection to a mouse, keyboard, or other USB 2.0 device; Available Power: 500 mA at 5 VDC¹⁵",
        },
        {
          label: "USB HID",
          value:
            "(1) USB Type-A connector, female; USB 2.0 host port; USB signal extender port for connection to a mouse, keyboard, or other USB 2.0 device; Available Power: 500 mA at 5 VDC¹⁵",
        },
        {
          label: "Ethernet 1",
          value:
            "(1) 8-pin RJ-45 connector, female; 100BASE-TX/1000BASE-T Ethernet port²; PoE+ PD (powered device); IEEE 802.3at Type 2 PoE+ (25.5 W)",
        },
        {
          label: "Ethernet 2",
          value:
            "(1) 8-pin RJ-45 connector, female; 100BASE-TX/1000BASE-T Ethernet port²",
        },
        {
          label: "Ethernet 3 (10/100)",
          value:
            "(1) 8-pin RJ-45 connector, female; 100BASE-TX Ethernet port",
        },
        {
          label: "Ethernet 4",
          value:
            "(1) SFP port; Accepts one Crestron SFP-1G Series transceiver module³",
        },
        {
          label: "HDMI OUTPUT",
          value:
            "(1) HDMI Type A connector, female; HDMI digital video/audio output¹ (DVI compatible¹)",
        },
        {
          label: "HDMI INPUT",
          value:
            "(1) HDMI Type A connector, female; HDMI digital video/audio input¹ (DVI and Dual-Mode DisplayPort compatible¹⁴)",
        },
        {
          label: "AUDIO I/O",
          value:
            "(1) 5-pin 3.5 mm detachable terminal block; Balanced/unbalanced stereo line-level audio input or output²; Input Impedance: 24k Ohms balanced/unbalanced; Maximum Input Level: 4 Vrms balanced; 2 Vrms unbalanced;",
        },
        {
          label: "IR 1 - 2",
          value:
            "(1) 4-pin 3.5 mm detachable terminal block; Comprises (2) IR/Serial ports; IR output up to 1.1 MHz; 1-way serial TTL (0-5 V) up to 19200 baud;",
        },
        {
          label: "COM",
          value:
            "(1) 5-pin 3.5 mm detachable terminal block; Bidirectional RS-232 port; Up to 115.2k baud, hardware and software handshaking support",
        },
        {
          label: "24VDC 1.25A",
          value:
            "(1) 2.1 x 5.5 mm DC power connector; 24 VDC power input; PW-2412WU power pack (sold separately)",
        },
        { label: "G", value: "(1) 6-32 screw; Chassis ground lug" },
      ],
    },
    {
      title: "Controls and Indicators",
      fields: [
        {
          label: "PWR",
          value:
            "(1) Bi-color green/amber LED, indicates operating power is being supplied, lights amber while booting and green when operating",
        },
        {
          label: "SETUP",
          value:
            "(1) Red LED and (1) push button, displays onscreen IP address and also used to change operating mode (TX or RX)",
        },
        {
          label: "INPUT SEL",
          value: "(1) Push button, enables manual input selection;",
        },
        {
          label: "OL",
          value:
            "(1) Green LED, indicates an online connection to a control system via Ethernet",
        },
        {
          label: "NV",
          value:
            "(1) Green LED, indicates unit is encoding (transmitting) or decoding (receiving)",
        },
        {
          label: "TX",
          value:
            "(1) Green LED, indicates unit is in encoder (transmitter) mode",
        },
        {
          label: "RX",
          value:
            "(1) Green LED, indicates unit is in decoder (receiver) mode",
        },
        {
          label: "Ethernet 1-2",
          value:
            "(2) LEDs per port, green indicates Ethernet link status, amber indicates Ethernet activity",
        },
        {
          label: "Ethernet 3",
          value:
            "(2) LEDs, amber indicates Ethernet link status, green indicates Ethernet activity",
        },
        {
          label: "Ethernet 4 LNK",
          value: "(1) Green LED, indicates Ethernet link status",
        },
        {
          label: "Ethernet 4 ACT",
          value: "(1) Green LED, indicates Ethernet activity",
        },
        {
          label: "HDMI OUTPUT",
          value:
            "(1) Green LED, indicates video signal transmission at the HDMI output",
        },
        {
          label: "HDMI INPUT",
          value: "(1) Green LED, indicates sync detection at the HDMI input",
        },
      ],
    },
  ],
  quickRef: [
    { label: "Video Format", value: "4K-60 HDR over IP" },
    { label: "Key Protocol", value: "AES67 support" },
    { label: "Connectivity", value: "HDMI, Ethernet, USB, RS-232" },
    { label: "Function", value: "Encoder/Decoder" },
    { label: "Power", value: "PoE+ (802.3at)" },
  ],
  deviceManagement: {
    factoryReset: {
      methods: [{ title: null, steps: ["TODO"] }],
    },
    physicalButtonReset: {
      methods: [{ title: null, steps: ["TODO"] }],
    },
  },
  firmwareUpdate: {
    title: "firmware update procedure",
    steps: ["TODO"],
  },
  techTips: [{ tip: "TODO" }],
  commonProblems: [{ problem: "TODO", solutions: ["TODO"] }],
  links: [],
};
