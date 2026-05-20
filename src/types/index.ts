// ============================================================
// SHARED
// ============================================================

export type ItemType = "product" | "resource" | "guide";

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
// PRODUCT
// ============================================================

export interface SpecField {
  label: string;
  value: string;
}

export interface SpecSection {
  title: string;
  fields: SpecField[];
}

export interface QuickRefItem {
  label: string;
  value: string;
}

export interface ResetMethod {
  /** null = no sub-title needed (single method) */
  title: string | null;
  steps: string[];
}

export interface FactoryReset {
  methods: ResetMethod[];
}

export interface PhysicalButtonReset {
  methods: ResetMethod[];
}

export interface DeviceManagement {
  factoryReset: FactoryReset;
  /** null = device has no physical reset button */
  physicalButtonReset: PhysicalButtonReset | null;
}

export interface FirmwareUpdate {
  title: string | null;
  steps: string[];
}

export interface TechTip {
  tip: string;
}

export interface CommonProblem {
  problem: string;
  solutions: string[];
}

export interface ProductLink {
  title: string;
  url: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  partNumber: string;
  docsUrl: string;
  category: "remote-control" | "touch-panels";
  description: string;
  specs: SpecSection[];
  quickRef: QuickRefItem[];
  deviceManagement: DeviceManagement;
  firmwareUpdate: FirmwareUpdate;
  techTips: TechTip[];
  commonProblems: CommonProblem[];
  links: ProductLink[];
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

// ============================================================
// GUIDE (step-by-step)
// ============================================================

export type GuideDifficulty = "Beginner" | "Intermediate" | "Advanced";

export interface GuideStep {
  id: string;
  title: string;
  description: string;
  /** optional screenshot shown above description */
  imageSrc?: string | null;
  /** optional large text block shown instead of an image */
  bigText?: string;
  /** null = no tip for this step */
  tip: string | null;
}

export interface GuideSection {
  id: string;
  title: string;
  description: string;
  steps: GuideStep[];
}

export interface Guide {
  id: string;
  name: string;
  subtitle: string;
  initials: string;
  color: string;
  difficulty: GuideDifficulty;
  timeEstimate: string;
  sections: GuideSection[];
}
