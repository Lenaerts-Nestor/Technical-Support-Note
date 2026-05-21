import type { NavItem, NavSection } from "../types";

// ============================================================
// ADD NEW NAV ITEMS HERE when you add a new product/resource/guide.
// type must match the key used in PRODUCTS, RESOURCES, or GUIDES.
// ============================================================

// Pinned items rendered at the very top of the sidebar (no section header)
export const PINNED: NavItem[] = [
  { id: "overview", label: "Overview", type: "overview" },
  { id: "voice-call", label: "Voice Call", type: "voicecall" },
  { id: "rma", label: "RMA", type: "rma" },
];

export const NAV: NavSection[] = [
  {
    section: "RESOURCES",
    items: [
      { id: "case-routing", label: "Case Routing", type: "resource" },
      {
        id: "mail-structure",
        label: "Mail Structure and Extra's",
        type: "resource",
      },
      { id: "daily-mails", label: "Daily Mails Response", type: "resource" },
      { id: "follow-up-cases", label: "Follow Up Cases", type: "resource" },
      {
        id: "associate-account-steps",
        label: "Associate Account Steps",
        type: "resource",
      },
    ],
  },
  {
    section: "STEP-BY-STEP GUIDES",
    items: [
      { id: "npf-procedure", label: "NPF Procedure", type: "guide" },
      { id: "vt-pro-e-upload", label: "VT Pro-e Upload", type: "guide" },
      {
        id: "toolbox-diagnostics",
        label: "Toolbox Diagnostics",
        type: "guide",
      },
    ],
  },
  {
    section: "REMOTE CONTROL",
    items: [{ id: "tsr-310", label: "TSR-310", type: "product" }],
  },
  {
    section: "Processors",
    items: [{ id: "cp4", label: "CP4", type: "product" }],
  },
  {
    section: "NVX",
    items: [
      { id: "dm-nvx-360", label: "DM-NVX-360", type: "product" },
      { id: "dm-nvx-e20", label: "DM-NVX-E20", type: "product" },
    ],
  },
  {
    section: "TOUCH PANELS",
    items: [
      { id: "tsw-1070", label: "TSW-1070", type: "product" },
      { id: "tsw-770", label: "TSW-770", type: "product" },
      { id: "tsw-570", label: "TSW-570", type: "product" },
    ],
  },
];
