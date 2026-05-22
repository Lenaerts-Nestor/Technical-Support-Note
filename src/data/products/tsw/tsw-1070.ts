import type { Product } from "../../../types";

export const tsw1070: Product = {
  id: "tsw-1070",
  name: "TSW-1070",
  subtitle: "10.1 in. Wall Mount Touch Screen",
  partNumber: "TSW-1070-B-S",
  docsUrl:
    "https://www.crestron.com/Products/Catalog/Control-and-Management/User-Interfaces/Touchscreen/TSW-1070-B-S",
  category: "touch-panels",
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
