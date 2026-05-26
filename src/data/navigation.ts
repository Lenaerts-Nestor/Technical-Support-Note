import type { NavItem, NavSection } from "../types";

// Pinned items rendered at the very top of the sidebar (no section header)
export const PINNED: NavItem[] = [
  { id: "overview", label: "Overview", type: "overview" },
  { id: "voice-call", label: "Voice Call", type: "voicecall" },
  { id: "rma", label: "RMA", type: "rma" },
  { id: "cases", label: "Cases", type: "cases" },
];

export const NAV: NavSection[] = [
  {
    section: "RESOURCES",
    items: [
      
      { id: "daily-mails", label: "Daily Mails Response", type: "resource" },
      { id: "follow-up-cases", label: "Follow Up Cases", type: "resource" },
      {
        id: "associate-account-steps",
        label: "Associate Account Steps",
        type: "resource",
      },
    ],
  },
 
];
