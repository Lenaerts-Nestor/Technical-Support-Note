// ============================================================
// SHARED
// ============================================================

export type ItemType = "resource" | "overview" | "voicecall" | "rma" | "cases";

export interface NavItem {
  id: string;
  label: string;
  type: ItemType;
}

export interface NavSection {
  section: string;
  items: NavItem[];
}

// ============================================================
// RESOURCE (email templates)
// ============================================================

export interface EmailTemplate {
  language: string;
  content: string;
}

export interface ResourceTableRow {
  label: string;
  value: string;
}

export interface ResourceTable {
  title: string;
  rows: ResourceTableRow[];
}

export type ResourceSectionIcon = "mail" | "followup";

export interface ResourceSection {
  id: string;
  title: string;
  icon: ResourceSectionIcon;
  description: string;
  templates?: EmailTemplate[];
  tables?: ResourceTable[];
}

export interface Resource {
  id: string;
  name: string;
  subtitle: string;
  initials: string;
  /** Tailwind bg class or hex color string */
  color: string;
  sections: ResourceSection[];
}

