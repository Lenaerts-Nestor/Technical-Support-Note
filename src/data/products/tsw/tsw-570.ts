import type { Product } from "../../../types";

export const tsw570: Product = {
  id: "tsw-570",
  name: "TSW-570",
  subtitle: "5 in. Wall Mount Touch Screen",
  partNumber: "TSW-570-B-S",
  docsUrl:
    "https://www.crestron.com/Products/Catalog/Control-and-Management/User-Interfaces/Touchscreen/TSW-570-B-S",
  category: "touch-panels",
  quickRef: [
    { label: "Display", value: '5" 1280×720' },
    { label: "Power", value: "PoE (802.3af)" },
    { label: "Storage", value: "8 GB eMMC" },
  ],
  deviceManagement: {
    factoryReset: {
      methods: [
        {
          title: null,
          steps: [
            "Navigate to Setup page on touch screen.",
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
            "Hold rear pinhole for 5 seconds.",
            "Repeat 10× to clear all configuration.",
          ],
        },
      ],
    },
  },
  firmwareUpdate: {
    title: "Firmware Update Procedure",
    steps: [
      "Download the latest firmware from the official Crestron website.",
      "Connect to the panel via Crestron Toolbox and navigate to the Firmware Update section.",
      "Select the downloaded firmware file and initiate the update process.",
      "Do not power off or disconnect during the update. The panel will reboot automatically when complete.",
    ],
  },
  commonProblems: [
    {
      problem: 'Panel shows "No Project Loaded"',
      solutions: [
        "Upload a VTP project file via VT Pro-e.",
        "Verify IP table entry on the control processor (IPID must match project IPID).",
        "Check the control processor is online and running the program.",
      ],
    },
    {
      problem: "Cannot connect via Toolbox",
      solutions: [
        "Confirm panel IP address in Setup > Network settings.",
        "Verify you are on the same network subnet as the device.",
        "Check firewall is not blocking Crestron CIP ports (41794, 41795).",
      ],
    },
  ],
  links: [],
};
