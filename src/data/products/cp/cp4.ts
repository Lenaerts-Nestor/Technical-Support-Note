import type { Product } from "../../../types";

export const cp4: Product = {
  id: "cp4",
  name: "CP4",
  subtitle: "4-Series Control Processor",
  partNumber: "CP4",
  docsUrl:
    "https://www.crestron.com/Products/Catalog/Control-and-Management/Control-System/Rack-Mount/CP4",
  category: "processors",
  description:
    "A rack-mountable control system with a powerful 4‑Series™ control engine and numerous integrated control ports.",
  specs: [
    {
      title: "Control Engine",
      fields: [
        {
          label: "Engine",
          value:
            "Crestron 4-Series; real-time, preemptive multi-threaded/multitasking kernel; Transaction-Safe Extended FAT file system; supports up to 10 simultaneously running programs",
        },
      ],
    },
    {
      title: "Communications",
      fields: [
        {
          label: "Ethernet",
          value:
            "100/1000 Mbps, auto-switching, auto-negotiating, auto-discovery, full/half duplex; TCP/IP, UDP/IP, CIP, DHCP, SSL, TLS, SSH, SFTP; FIPS 140-2 compliant encryption; IEEE 802.1x; SNMP; BACnet; IPv4/IPv6; HTTPS web server and browser setup; XiO Cloud client; SMTP email client",
        },
        { label: "Cresnet", value: "Cresnet master mode" },
        {
          label: "USB",
          value:
            "Rear USB 2.0 host for mass storage; front USB 2.0 device (Type B) for computer console/setup",
        },
        {
          label: "RS-232/422/485",
          value:
            "COM ports support RS-232 up to 115.2k baud; one port supports RS-422 or RS-485; software and hardware handshaking support",
        },
        {
          label: "IR / Serial",
          value:
            "IR output up to 1.2 MHz; 1-way serial TTL/RS-232 (0–5 V) up to 115.2k baud",
        },
      ],
    },
    {
      title: "Memory",
      fields: [
        { label: "SDRAM", value: "2 GB" },
        { label: "Flash", value: "8 GB" },
        {
          label: "Memory Card",
          value: "Supports SD and SDHC cards up to 32 GB",
        },
        {
          label: "External Storage",
          value: "Supports USB mass storage devices up to 1 TB",
        },
      ],
    },
    {
      title: "Connectors & Card Slots",
      fields: [
        {
          label: "RELAY OUTPUT 1–8",
          value:
            "(2) 8-pin 3.5 mm detachable terminal blocks; (8) normally open, isolated relays; Rated 1 A, 30 VAC/VDC; MOV arc suppression across contacts",
        },
        {
          label: "I/O 1–8",
          value:
            "(1) 9-pin 3.5 mm detachable terminal block; Versiport configurable I/O: digital, analog, and power options per port",
        },
        {
          label: "IR - Serial Output 1–8",
          value:
            "(2) 8-pin 3.5 mm detachable terminal blocks; 8 IR output ports; IR up to 1.2 MHz; 1-way serial TTL/RS-232 (0–5 V) up to 115.2k baud",
        },
        {
          label: "COM 1",
          value:
            "(1) 5-pin 3.5 mm detachable terminal block; bidirectional RS-232/422/485",
        },
        {
          label: "COM 2–3",
          value:
            "(2) 3-pin 3.5 mm detachable terminal blocks; bidirectional RS-232",
        },
        {
          label: "MEMORY",
          value: "(1) SD memory card slot; accepts SD/SDHC up to 32 GB",
        },
        { label: "USB", value: "(1) USB Type A (host) for storage" },
        {
          label: "LAN",
          value: "(1) 8-pin RJ45; 100/1000Base-TX Ethernet port",
        },
        {
          label: "NET",
          value:
            "(1) 4-pin 3.5 mm detachable terminal block; Cresnet master port; can output power to Cresnet devices when powered by included power pack or accept Cresnet power input",
        },
        {
          label: "24VDC",
          value:
            "(1) 2.1 x 5.5 mm DC power connector; 24 VDC input; PW-2420RU included",
        },
        { label: "G", value: "(1) 6-32 screw chassis ground lug" },
        {
          label: "COMPUTER (front)",
          value:
            "(1) USB Type B connector; USB 2.0 computer console port (setup only)",
        },
      ],
    },
    {
      title: "Controls & Indicators",
      fields: [
        { label: "PWR", value: "Green LED indicates power supplied" },
        { label: "NET", value: "Amber LED indicates Cresnet communication" },
        { label: "MSG", value: "Red LED indicates control processor error" },
        { label: "HW-R", value: "Recessed push button for hardware reset" },
        { label: "SW-R", value: "Recessed push button for software reset" },
        {
          label: "LAN (rear)",
          value:
            "Bicolor green/amber and amber LEDs indicate link status and activity",
        },
      ],
    },
    {
      title: "Power",
      fields: [
        {
          label: "Power Options",
          value: "Power pack or Cresnet (connect only one)",
        },
        {
          label: "Power Pack (included)",
          value:
            "Input: 100–240 VAC, 50/60 Hz; Output: 2.5 A @ 24 VDC; Model: PW-2420RU",
        },
        {
          label: "Cresnet Power Usage",
          value: "15 W (0.625 A @ 24 VDC) when powered by Cresnet only",
        },
        {
          label: "Available Cresnet Power",
          value: "24 W (1 A @ 24 VDC) when powered by included power pack",
        },
        {
          label: "Power Consumption",
          value: "15 W (not including connected Cresnet devices)",
        },
      ],
    },
    {
      title: "Environmental",
      fields: [
        { label: "Temperature", value: "41 to 113 °F (5 to 45 °C)" },
        { label: "Humidity", value: "10% to 90% RH (noncondensing)" },
        { label: "Heat Dissipation", value: "50 BTU/hr" },
      ],
    },
    {
      title: "Enclosure",
      fields: [
        { label: "Chassis", value: "Metal, aluminum, black finish" },
        {
          label: "Faceplate",
          value: "Extruded metal, black finish, polycarbonate label overlay",
        },
        {
          label: "Mounting",
          value:
            "Freestanding or 1 RU 19-in. rack-mountable (adhesive feet and rack ears included)",
        },
      ],
    },
    {
      title: "Dimensions",
      fields: [
        { label: "Height", value: "1.70 in. (44 mm) without feet" },
        {
          label: "Width",
          value: "17.28 in. (439 mm); 19.00 in. (483 mm) with rack ears",
        },
        { label: "Depth", value: "6.56 in. (167 mm)" },
      ],
    },
    {
      title: "Weight",
      fields: [{ label: "Weight", value: "3.12 lb (1.42 kg)" }],
    },
  ],
  quickRef: [
    { label: "Ethernet", value: "100/1000Base-TX" },
    { label: "SDRAM", value: "2 GB" },
    { label: "Flash", value: "8 GB" },
    { label: "Cresnet", value: "Cresnet master port" },
  ],
  deviceManagement: {
    factoryReset: {
      methods: [],
    },
    physicalButtonReset: {
      methods: [],
    },
  },
  firmwareUpdate: {
    title: null,
    steps: [],
  },
  techTips: [],
  commonProblems: [],
  links: [],
};
