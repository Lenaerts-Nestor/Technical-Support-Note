import type { Product } from "../../../types";

export const dmNvxE20: Product = {
  id: "dm-nvx-e20",
  name: "DM-NVX-E20",
  subtitle: "DM NVX® 4K/60 4:2:0 Network AV Encoder",
  partNumber: "",
  docsUrl:
    "https://www.crestron.com/Products/Catalog/AV-Over-IP/DM-NVX-AV-Over-IP/Video-Endpoint/DM-NVX-E20",
  category: "processors",
  description:
    "A reliable, high-performance AV over IP encoder that transports 4K/60 4:2:0 and 4K/30 4:2:2 video over standard Gigabit Ethernet with no perceptible latency or loss of quality. Supports HDCP 2.3 and provides a secure 4K signal routing solution for enterprise and campus-wide content distribution applications.",
  specs: [
    {
      title: "Communications",
      fields: [
        {
          label: "Ethernet",
          value:
            "100/1000 Mbps, auto-switching, autonegotiating, auto-discovery, full/half duplex, TCP/IP, UDP/IP, secure CIP, DHCP, SSL, TLS, SSH, SFTP (SSH File Transfer Protocol), IEEE 802.1X, IPv4 only or both IPv4 and IPv6, Active Directory authentication, variable Multicast TTL, HTTPS web browser setup and control, Crestron 3-Series or later control system integration",
        },
        {
          label: "RS-232",
          value: "2-way device control and monitoring up to 115.2k baud",
        },
        {
          label: "IR/Serial",
          value:
            "1-way device control via infrared up to 1.1 MHz or serial TTL/RS-232 (0-5 V) up to 19.2k baud (via control system)",
        },
        { label: "HDMI", value: "HDCP 2.3, EDID, CEC" },
        {
          label: "DM NVX (via Ethernet)",
          value:
            "HDCP 2.3, AES-128 AV content encryption with PKI authentication, RTP, secure RTSP, SDP, ONVIF, IGMPv2, IGMPv3, SMTPTE 2022",
        },
      ],
    },
    {
      title: "Audio",
      fields: [
        {
          label: "Input Signal Types",
          value: "HDMI (Dual-Mode DisplayPort interface compatible)",
        },
        {
          label: "Digital Formats",
          value:
            "Dolby Digital®, Dolby Digital EX, Dolby Digital Plus, Dolby TrueHD, DTS®, DTS 96/24, DTS HD High Res, DTS Master Audio, DTS:X, LPCM up to 8 channels",
        },
        { label: "Analog Formats", value: "Stereo 2-channel" },
        { label: "Digital-To-Analog Conversion", value: "24-bit 48 kHz" },
        { label: "AES67", value: "24-bit 48 kHz" },
        {
          label: "Analog Performance",
          value:
            "Frequency Response: 20 Hz to 20 kHz ±0.5 dB; S/N Ratio: >95 dB 20 Hz to 20 kHz A-weighted; THD+N: <0.0005% @ 1 kHz; Stereo Separation: >90 dB",
        },
        { label: "Analog Output Volume Adjustment", value: "-80 to +20 dB" },
      ],
    },
    {
      title: "Video",
      fields: [
        {
          label: "Input Signal Types",
          value:
            "HDMI with Deep Color and 4K60 4:2:0 support (Dual-Mode DisplayPort interface compatible)",
        },
        { label: "Copy Protection", value: "HDCP 2.3" },
      ],
    },
    {
      title: "Encoding",
      fields: [
        {
          label: "Video Resolutions",
          value: "HDMI with Deep Color and 4K60 4:2:0 support",
        },
        {
          label: "Audio Formats",
          value: "Multichannel (up to 8 channel LPCM or 7:1 surround sound)",
        },
        {
          label: "Bit Rates",
          value:
            "Fixed: 200 to 950 Mbps; Adaptive: Based on input resolution of the stream",
        },
        { label: "Streaming Protocols", value: "RTP, SDP" },
        { label: "Container", value: "MPEG-2 transport stream (.ts)" },
        { label: "Session Initiation", value: "Multicast via secure RTSP" },
        { label: "Copy Protection", value: "HDCP 2.3, AES-128, PKI" },
      ],
    },
    {
      title: "Environmental",
      fields: [
        { label: "Temperature", value: "32° to 104° F (0° to 40° C)" },
        { label: "Humidity", value: "10% to 95% RH (non-condensing)" },
        { label: "Heat Dissipation", value: "29 BTU/hr" },
        { label: "Acoustic Noise", value: "None (fanless)" },
      ],
    },
    {
      title: "Power",
      fields: [
        {
          label: "PoE",
          value:
            "IEEE 802.3af Type 1 Class 2 (12.95 W) compliant; Compatible with IEEE 802.3af compliant Ethernet switch or third-party PoE compliant PSE",
        },
        {
          label: "Power Pack (Optional)",
          value:
            "Input: 100-240 VAC, 50/60 Hz; Output: 0.75 A @ 24 VDC; Model: PW-2407WU (sold separately)",
        },
        { label: "Power Consumption", value: "8.6 W typical" },
      ],
    },
    {
      title: "Controls and Indicators",
      fields: [
        {
          label: "Ethernet",
          value:
            "(2) LEDs, green indicates link status, amber indicates Ethernet activity",
        },
        {
          label: "HDMI INPUT",
          value: "(1) Green LED, indicates sync detection at the HDMI input",
        },
        {
          label: "PWR",
          value:
            "(1) Bi-color green/amber LED, indicates operating power supplied via PoE or optional power pack (sold separately), lights amber while the device is booting and green when the device is operational",
        },
        { label: "SETUP", value: "(1) Red LED and (1) push button" },
        {
          label: "RESET",
          value: "(1) Recessed push button, reboots the device",
        },
      ],
    },
    {
      title: "Connectors",
      fields: [
        {
          label: "Ethernet",
          value:
            "(1) 8-pin RJ-45 connector, female; 100BASE-TX/1000BASE-T Ethernet port²",
        },
        {
          label: "HDMI INPUT",
          value:
            "(1) HDMI Type A connector, female; 100BASE-TX/1000BASE-T Ethernet port²",
        },
        {
          label: "AUDIO OUT",
          value:
            "(1) 3-pin 3.5 mm detachable terminal block; Unbalanced stereo line level audio output⁴; Maximum Output Level: 2 Vrms unbalanced",
        },
        {
          label: "IR",
          value:
            "(1) 2-pin 3.5 mm detachable terminal block; IR/Serial port; IR output up to 60kHz",
        },
        {
          label: "COM",
          value:
            "(1) 3-pin 3.5 mm detachable terminal block; Bidirectional RS-232 port; Up to 115.2k baud",
        },
        {
          label: "24V",
          value: "(1) 2.1 x 5.5 mm DC power connector; 24 VDC power input;",
        },
        { label: "G", value: "(1) 6-32 screw; Chassis ground lug" },
      ],
    },
  ],
  quickRef: [
    { label: "Video Transport", value: "4K/60 4:2:0 over Gigabit Ethernet" },
    { label: "Security", value: "HDCP 2.3 and AES-128 AV encryption" },
    { label: "Power", value: "PoE compliant (IEEE 802.3af/at)" },
    {
      label: "Control",
      value: "RS-232, IR/Serial, and Crestron 3-Series integration",
    },
    { label: "Audio", value: "Up to 8 channel LPCM or 7:1 surround sound" },
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
