import type { Product } from "../../../types";

export const tsr310: Product = {
  id: "tsr-310",
  name: "TSR-310",
  subtitle: "3-Button RF/IR Remote Control",
  partNumber: "TSR-310",
  docsUrl:
    "https://www.crestron.com/Products/Catalog/Control-and-Management/Remote-Controls/TSR-310",
  category: "remote-control",
  description:
    "A handheld RF/IR remote with 3 programmable buttons, designed for simple room control in residential and commercial installations. Supports both RF (916.5 MHz) and IR modes with a range of up to 100 ft.",
  specs: [
    {
      title: "General",
      fields: [
        { label: "Buttons", value: "3 programmable" },
        { label: "RF Frequency", value: "916.5 MHz" },
        { label: "IR Carrier", value: "38 kHz" },
        { label: "Battery", value: "2× AAA (1.5V)" },
        { label: "RF Range", value: "Up to 100 ft (30.5 m)" },
      ],
    },
  ],
  quickRef: [
    { label: "Power", value: "2× AAA" },
    { label: "RF Range", value: "~100 ft" },
    { label: "Buttons", value: "3" },
  ],
  deviceManagement: {
    factoryReset: {
      methods: [
        {
          title: null,
          steps: [
            "Remove the batteries from the remote.",
            "Hold buttons 1 + 3 simultaneously.",
            "Re-insert batteries while holding. Release when LED flashes 3×.",
          ],
        },
      ],
    },
    physicalButtonReset: null,
  },
  firmwareUpdate: {
    title: "Firmware Update Procedure",
    steps: [
      "The TSR-310 does not support firmware updates. For any issues, please refer to the troubleshooting tips or contact Crestron support.",
    ],
  },
  techTips: [
    {
      tip: "If not pairing, ensure the RF receiver (ZUMMESH-BASE) is within range and on the same RF channel.",
    },
    {
      tip: "Use Crestron Remote Configurator utility to reprogram button functions.",
    },
    {
      tip: "Weak signal? Check for RF interference from 900 MHz devices nearby (baby monitors, older cordless phones).",
    },
  ],
  commonProblems: [
    {
      problem: "Remote not responding",
      solutions: [
        "Replace batteries — most common fix.",
        "Re-pair to receiver by holding buttons 1+3 on power-up.",
        "Check for RF interference (microwaves, other 900 MHz devices).",
      ],
    },
    {
      problem: "Buttons not working correctly",
      solutions: [
        "Verify button programming in Crestron Remote Configurator.",
        "Perform factory reset and reprogram from scratch.",
        "Test with a substitute remote to isolate hardware vs. program.",
      ],
    },
  ],
  links: [],
};
