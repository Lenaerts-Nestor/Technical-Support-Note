import type { Product } from "../../../types";

export const dmNvx360: Product = {
  id: "dm-nvx-360",
  name: "DM-NVX-360",
  subtitle: "DM NVX® 4K-60 HDR Network AV Encoder/Decoder",
  partNumber: "DM-NVX-360",
  docsUrl: "",
  category: "processors",
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
  commonProblems: [{ problem: "TODO", solutions: ["TODO"] }],
  links: [],
};
