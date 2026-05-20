import type { Product } from "../../../types";

export const tsw570: Product = {
  id: "tsw-570",
  name: "TSW-570",
  subtitle: "5 in. Wall Mount Touch Screen",
  partNumber: "TSW-570-B-S",
  docsUrl:
    "https://www.crestron.com/Products/Catalog/Control-and-Management/User-Interfaces/Touchscreen/TSW-570-B-S",
  category: "touch-panels",
  description:
    "Compact 5-inch wall touch screen, ideal for room scheduling and single-room AV control. Standard PoE-powered (802.3af), HTML5 capable. Perfect for huddle spaces and small meeting rooms.",
  specs: [
    {
      title: "Touch Screen Display",
      fields: [
        { label: "Size", value: "5 in. (127 mm) diagonal" },
        { label: "Resolution", value: "1280 × 720 pixels" },
        {
          label: "Touch Screen",
          value: "Projected capacitive, 5-point multitouch",
        },
      ],
    },
    {
      title: "Connectivity",
      fields: [
        { label: "Network", value: "PoE (802.3af) — standard PoE" },
        { label: "Storage", value: "8 GB eMMC" },
      ],
    },
  ],
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
  techTips: [
    {
      tip: "Uses standard PoE (802.3af) — no PoE+ required. Any 802.3af-compliant switch port works.",
    },
    {
      tip: "Great for Crestron Fusion room scheduling — configure the Fusion URL under Setup > Applications.",
    },
    {
      tip: "Smaller screen means fewer UI elements — keep VT Pro-e projects simple with large touch targets.",
    },
  ],
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
