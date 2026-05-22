import type { Product } from "../../../types";

export const cp4: Product = {
  id: "cp4",
  name: "CP4",
  subtitle: "4-Series Control Processor",
  partNumber: "CP4",
  docsUrl:
    "https://www.crestron.com/Products/Catalog/Control-and-Management/Control-System/Rack-Mount/CP4",
  category: "processors",
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
  commonProblems: [],
  links: [],
};
