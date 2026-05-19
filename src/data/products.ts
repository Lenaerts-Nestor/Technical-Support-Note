import type { Product } from "../types";

// ============================================================
// ADD NEW PRODUCTS HERE — do NOT touch UI components.
// Each entry must conform exactly to the Product interface.
// ============================================================

export const PRODUCTS: Record<string, Product> = {
  "tsr-310": {
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
  },

  "tsw-1070": {
    id: "tsw-1070",
    name: "TSW-1070",
    subtitle: "10.1 in. Wall Mount Touch Screen",
    partNumber: "TSW-1070-B-S",
    docsUrl:
      "https://www.crestron.com/Products/Catalog/Control-and-Management/User-Interfaces/Touchscreen/TSW-1070-B-S",
    category: "touch-panels",
    description:
      "A stylish 10.1-inch wall mount touch screen featuring HTML5 + Smart Graphics® support, custom-programmable icons, H.265/H.264 streaming video, Rava® SIP intercom, Wi-Fi, and PoE+ power. Built-in apps for room scheduling, conferencing, and home control.",
    specs: [
      {
        title: "Power",
        fields: [
          {
            label: "PoE (Power over Ethernet)",
            value: "IEEE 802.3at Type 2 compliant PoE+ PD (Powered Device)",
          },
        ],
      },
      {
        title: "Connectors",
        fields: [
          {
            label: "LAN PoE",
            value:
              "(1) 8-pin RJ-45 connector, female, with 2 LED indicators; 100BASE-TX Ethernet port; PoE+ PD port; Green and yellow LEDs indicate Ethernet port status",
          },
          {
            label: "USB",
            value:
              "(2) USB Type A connectors, female; USB 2.0 host ports; For optional room scheduling accessories",
          },
        ],
      },
      {
        title: "Touch Screen Display",
        fields: [
          { label: "Display Type", value: "TFT active matrix color LCD" },
          { label: "Size", value: "10.1 in. (257 mm) diagonal" },
          { label: "Aspect Ratio", value: "16:10 WUXGA" },
          { label: "Resolution", value: "1920 x 1200 pixels" },
          { label: "Brightness", value: "400 nits (cd/m²)" },
          { label: "Contrast", value: "1000:1" },
          { label: "Color Depth", value: "24 bit, 16.7M colors" },
          {
            label: "Illumination",
            value: "Edgelit LED with auto brightness control",
          },
          { label: "Viewing Angle", value: "±80° horizontal, ±80° vertical" },
          {
            label: "Touch Screen",
            value: "Projected capacitive, 5-point multitouch capable",
          },
        ],
      },
      {
        title: "Buttons",
        fields: [
          {
            label: "Hard Keys",
            value:
              "(6) Virtual buttons in collapsible universal tool bar, per-button show/hide,preconfigured with icons for Power, Home, Lights, Up, Down, and Microphone, optional custom programming via control system for additional functions",
          },
          {
            label: "Reset",
            value: "(1) Pin hole on rear panel for hardware reset",
          },
        ],
      },
      {
        title: "Memory",
        fields: [
          { label: "RAM", value: "2 GB LPDDR3" },
          { label: "Storage", value: "Firmware/Application: 16 GB eMMC pSLC" },
          { label: "Maximum Project Size", value: "600 MB" },
        ],
      },
      {
        title: "Wired Communications",
        fields: [
          {
            label: "Ethernet",
            value:
              "100 Mbps, auto switching, auto negotiating, auto discovery, full/half duplex, TCP/IP, UDP/IP, CIP, DHCP, SSL, TLS, SSH, SFTP (SSH File Transfer Protocol).  *check official page for extra details* ",
          },
          {
            label: "USB",
            value: "USB 2.0 host for room scheduling accessories",
          },
        ],
      },
      {
        title: "Wireless Communications",
        fields: [
          {
            label: "Transceiver",
            value:
              "IEEE 802.11a/b/g/n/ac Wi-Fi (2.4 or 5 GHz 2-way RF), static IP or dynamic IP via DHCP",
          },
          {
            label: "Security",
            value: "64 and 128-bit WEP, WPA and WPA2-PSK with TKIP and AES",
          },
          {
            label: "Range",
            value: "Up to 50 ft (15 m), subject to site-specific conditions",
          },
          { label: "Bluetooth® Hardware", value: "Crestron Bluetooth beacon" },
        ],
      },
      {
        title: "Streaming Decoder",
        fields: [
          {
            label: "Video Formats",
            value: "H.265, H.264 (MPEG-4 part 10 AVC, MJPEG)",
          },
          { label: "Audio Formats", value: "AAC stereo" },
          {
            label: "Bitrates",
            value: "Up to 25 Mbps (20 Mbps maximum recommended)",
          },
          { label: "Input Resolutions", value: "Up to 1920x1080@30fps" },
          { label: "Protocol", value: "RTSP" },
        ],
      },
      {
        title: "Audio",
        fields: [
          {
            label: "Features",
            value:
              "Built-in microphone and speakers, Rava® SIP Intercom, voice recognition",
          },
          { label: "Audio Feedback Formats", value: "MP3" },
        ],
      },
      {
        title: "Environmental",
        fields: [
          { label: "Temperature", value: "32 to 104°F (0 to 40°C)" },
          { label: "Humidity", value: "10% to 95% RH (noncondensing)" },
          { label: "Heat Dissipation", value: "44 BTU/hr" },
        ],
      },

      {
        title: "Dimensions",
        fields: [
          { label: "Height", value: "5.87 in. (149 mm)" },
          { label: "Width", value: "9.46 in. (240 mm)" },
          { label: "Depth", value: "2.01 in. (51 mm)" },
        ],
      },
    ],
    quickRef: [
      { label: "Display", value: '10.1" 1920×1200' },
      { label: "Power", value: "PoE+ (802.3at)" },
      { label: "Storage", value: "8 GB eMMC" },
      { label: "Audio", value: "Rava SIP Intercom" },
    ],
    deviceManagement: {
      factoryReset: {
        methods: [
          {
            title: "Method 1",
            steps: [
              "Reset the TS(S)(W)-570/770/1070 by pressing and holding the pinhole-recessed reset button on the back of the unit (pictured below) for 5 seconds.",
              "The reset cycle is completed once the Crestron Swirl logo with dots below appears onscreen. ",
              "Repeat this process 10 more times.",
            ],
          },
          {
            title: "Method 2 (if unresponsive)",
            steps: [
              "Remove the Ethernet cable from the TS(S)(W)-570/770/1070, then reconnect the Ethernet cable. ",
              "The reset cycle is completed once the Crestron Swirl logo with dots below appears onscreen. Repeat this process 10 more times.",
              "After the 11th reset the display will show System maintenance in progress. Do not reboot.",
              "Please wait. After a few minutes, the following two buttons will become available: Reboot (restart without restore) and Factory Restore.",
            ],
          },
        ],
      },
      physicalButtonReset: null,
    },
    firmwareUpdate: {
      title: "Firmware Update Procedure",
      steps: [
        "Download the latest firmware PUF (package update file) from the TSW-70 Series product page or www.crestron.com/Support/Resource-Library.",
        "Access the web configuration interface by entering the panel's IP address in a browser",
        "From the top-right Action drop-down menu, select Update Firmware. The Firmware Upgrade dialog box will open.",
        "Select Browse, then navigate to the firmware PUF on your computer",
        "Select the PUF file and click Open.",
        "Click Load to upload the PUF to the touch screen. Upload progress is shown in the dialog.",
        "Once the firmware upgrade is complete, click OK. The panel will reboot. Do not power off or disconnect during the update.",
      ],
    },
    techTips: [
      {
        tip: "Ensure the switch port supports PoE+ (802.3at, 25.5W min) — standard PoE (802.3af) will cause the panel to reboot in a loop.",
      },
      {
        tip: "Use Crestron Toolbox > System Info to verify firmware version and control system connection status.",
      },
      {
        tip: "HTML5 projects require a minimum firmware of 2.006 — verify version before uploading via VT Pro-e.",
      },
      {
        tip: "This panel is compatible with Wall-Smart® flush mounting accessories for a cleaner install.",
      },
    ],
    commonProblems: [
      {
        problem: "Panel constantly rebooting",
        solutions: [
          "Verify switch port supports PoE+ (802.3at, min 25.5W).",
          "Swap the patch cable to rule out cable faults.",
          "Test on a known-good PoE+ injector to isolate the switch.",
        ],
      },
      {
        problem: "Blank / white screen after firmware update",
        solutions: [
          "Perform physical pinhole reset (recovery procedure).",
          "Re-upload the VTP project file via VT Pro-e.",
          "Verify IP table registration on the control processor.",
        ],
      },
      {
        problem: "Panel stuck on Crestron swirl / boot loop",
        solutions: [
          "Attempt the recovery procedure (11x pinhole resets) or second method ",
          "Try updating firmware via Web UI if panel reaches maintenance screen.",
          "If issue persists after recovery, proceed with RMA.",
        ],
      },
      {
        problem: "Black screen / unresponsive to touch",
        solutions: [
          "Power cycle the panel by disconnecting PoE",
          "Perform the recovery procedures",
          "If no change, initiate an RMA.",
        ],
      },
      {
        problem: "Panel locking up / no communication",
        solutions: [
          "Update firmware to the latest available version / reapply the firmware",
          "Reboot the panel and control processor.",
          "Run the Information Gathering Tool and review logs.",
        ],
      },
      {
        problem: "Wi-Fi not connecting",
        solutions: [
          "Confirm SSID and password are correct under Setup > Wi-Fi.",
          "Ensure the AP supports 802.11ac or the matching spec band.",
          "Disable and re-enable Wi-Fi adapter on the panel.",
        ],
      },
      {
        problem: "Screen flickering",
        solutions: [
          "Verify PoE power delivery meets minimum requirements (25.5W)",
          "Update firmware to the latest version",
          "If flickering persists after firmware update, initiate RMA",
        ],
      },
    ],

    links: [
      {
        title: "Crestron TSW-1070 Official Product Page",
        url: "https://www.crestron.com/Products/Catalog/Control-and-Management/User-Interfaces/Touchscreen/TSW-1070-B-S",
        description:
          "Check here for the most detailed and up-to-date specs, documentation, and support resources.",
      },
      {
        title: "Crestron TSW-1070 recovery procedure",
        url: "https://community.crestron.com/s/article/id-1001577",
        description: "Recovery procedure from community crestron post",
      },
      {
        title: "Crestron TSW-1070 Firmware Update Guide",
        url: "https://www.crestron.com/getmedia/d86b9173-735e-4bfd-b9ba-9ad5175287d4/mg_pm_tsw-70-series#page=192",
        description:
          "Official firmware update instructions from the TSW-70 Series manual.",
      },
    ],
  },

  "tsw-770": {
    id: "tsw-770",
    name: "TSW-770",
    subtitle: "7 in. Wall Mount Touch Screen",
    partNumber: "TSW-770-B-S",
    docsUrl:
      "https://www.crestron.com/Products/Catalog/Control-and-Management/User-Interfaces/Touchscreen/TSW-770-B-S",
    category: "touch-panels",
    description:
      "A 7-inch wall-mount touch screen with PoE+ power, HTML5 project support, Rava SIP intercom, and built-in conferencing controls. Drop-in replacement for legacy TSW-760 deployments.",
    specs: [
      {
        title: "Touch Screen Display",
        fields: [
          { label: "Size", value: "7 in. (178 mm) diagonal" },
          { label: "Resolution", value: "1280 × 800 pixels" },
          { label: "Brightness", value: "400 nits (cd/m²)" },
          {
            label: "Touch Screen",
            value: "Projected capacitive, 5-point multitouch",
          },
        ],
      },
      {
        title: "Connectivity",
        fields: [
          { label: "Network", value: "PoE+ (802.3at)" },
          { label: "Storage", value: "8 GB eMMC" },
          { label: "Audio", value: "Rava® SIP Intercom" },
        ],
      },
    ],
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
    techTips: [
      {
        tip: "Drop-in TSW-760 replacement — update the IP table entry type from TSW-760 to TSW-770 on the control processor.",
      },
      {
        tip: "Rava SIP intercom requires a SIP server configured in the control system program.",
      },
      {
        tip: "If the panel shows wrong project after swap, check the IP table IPID matches the project IPID.",
      },
    ],
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
  },

  "tsw-570": {
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
  },
};
