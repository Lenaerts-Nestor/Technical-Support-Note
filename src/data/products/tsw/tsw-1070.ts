import type { Product } from "../../../types";

export const tsw1070: Product = {
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
};
