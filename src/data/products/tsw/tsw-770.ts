import type { Product } from "../../../types";

export const tsw770: Product = {
  id: "tsw-770",
  name: "TSW-770",
  subtitle: "7 in. Wall Mount Touch Screen",
  partNumber: "TSW-770-B-S",
  docsUrl:
    "https://www.crestron.com/Products/Catalog/Control-and-Management/User-Interfaces/Touchscreen/TSW-770-B-S",
  category: "touch-panels",
  quickRef: [
    { label: "Display", value: '7" 1280×800' },
    { label: "Power", value: "PoE+ (802.3at)" },
    { label: "Storage", value: "8 GB eMMC" },
    { label: "Audio", value: "Rava SIP Intercom" },
  ],
  deviceManagement: {
    factoryReset: {
      methods: [
        {
          title: null,
          steps: [
            "Navigate to the Setup page on the touch screen.",
            'Tap "Factory Reset" and confirm.',
          ],
        },
      ],
    },
    physicalButtonReset: {
      methods: [
        {
          title: null,
          steps: [
            "Hold the pinhole reset on the rear for 5 seconds until the Swirl logo appears.",
            "Repeat 10× to fully clear all configuration.",
          ],
        },
      ],
    },
  },
  firmwareUpdate: {
    title: "firmware update procedure",
    steps: [
      "Download the latest firmware from the official Crestron website.",
      "Connect to the panel via Crestron Toolbox and navigate to the Firmware Update section.",
      "Select the downloaded firmware file and initiate the update process.",
      "Do not power off or disconnect during the update. The panel will reboot automatically when complete.",
    ],
  },
  commonProblems: [
    {
      problem: "Panel offline / not responding in Toolbox",
      solutions: [
        "Verify IP address in panel Setup page matches the Toolbox Address Book entry.",
        "Ping device from Toolbox diagnostics to confirm basic connectivity.",
        "Check switch port VLAN assignment — panel and processor must be on same VLAN.",
      ],
    },
    {
      problem: "Touch input unresponsive",
      solutions: [
        "Perform soft reboot via Setup page.",
        "Clean screen surface (capacitive screens can be affected by moisture/residue).",
        "If persistent after cleaning, perform physical pinhole reset.",
      ],
    },
  ],
  links: [],
};
