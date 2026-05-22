import type { Product } from "../../../types";

export const dmNvxE20: Product = {
  id: "dm-nvx-e20",
  name: "DM-NVX-E20",
  subtitle: "DM NVX® 4K/60 4:2:0 Network AV Encoder",
  partNumber: "",
  docsUrl:
    "https://www.crestron.com/Products/Catalog/AV-Over-IP/DM-NVX-AV-Over-IP/Video-Endpoint/DM-NVX-E20",
  category: "processors",
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
  commonProblems: [{ problem: "TODO", solutions: ["TODO"] }],
  links: [],
};
