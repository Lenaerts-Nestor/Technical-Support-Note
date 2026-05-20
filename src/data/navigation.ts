import type { NavSection } from '../types'

// ============================================================
// ADD NEW NAV ITEMS HERE when you add a new product/resource/guide.
// type must match the key used in PRODUCTS, RESOURCES, or GUIDES.
// ============================================================

export const NAV: NavSection[] = [
  {
    section: 'REMOTE CONTROL',
    items: [{ id: 'tsr-310', label: 'TSR-310', type: 'product' }],
  },
  {
    section: 'TOUCH PANELS',
    items: [
      { id: 'tsw-1070', label: 'TSW-1070', type: 'product' },
      { id: 'tsw-770', label: 'TSW-770', type: 'product' },
      { id: 'tsw-570', label: 'TSW-570', type: 'product' },
    ],
  },
  {
    section: 'RESOURCES',
    items: [
      { id: 'mail-structure', label: "Mail Structure and Extra's", type: 'resource' },
      { id: 'daily-mails', label: 'Daily Mails Response', type: 'resource' },
      { id: 'follow-up-cases', label: 'Follow Up Cases', type: 'resource' },
      { id: 'associate-account-steps', label: 'Associate Account Steps', type: 'resource' },
    ],
  },
  {
    section: 'STEP-BY-STEP GUIDES',
    items: [
      { id: 'simpl-windows-upload', label: 'SIMPL Windows Upload', type: 'guide' },
      { id: 'vt-pro-e-upload', label: 'VT Pro-e Upload', type: 'guide' },
      { id: 'toolbox-diagnostics', label: 'Toolbox Diagnostics', type: 'guide' },
    ],
  },
]
