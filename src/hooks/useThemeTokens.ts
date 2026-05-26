import { useDark } from "../context/ThemeContext";

// ============================================================
// PALETTE REFERENCE (UPDATED FOR HIGH CONTRAST & SEMANTICS)
//
// DARK MODE — "Daylight-Optimized Graphite"
//   Backgrounds : #0a0a0a (app) → #171717 (panels) → #262626 (surface)
//   Text        : #ffffff (primary) · #d4d4d8 (secondary) · #a1a1aa (muted)
//   Borders     : #3f3f46
//   Semantics   : Emerald 400 (Success), Red 400 (Danger), Amber 300 (Warning), Blue 400 (Info)
//
// LIGHT MODE — "Accessible Paper"
//   Backgrounds : #fafafa (app) · #ffffff (sidebar/panels)
//   Text        : #000000 (primary) · #3f3f46 (secondary) · #525252 (muted)
//   Borders     : #d4d4d8
//   Semantics   : Emerald 600 (Success), Red 600 (Danger), Amber 600 (Warning), Blue 600 (Info)
// ============================================================

export function buildTokens(dark: boolean) {
  return {
    // ── Backgrounds ──────────────────────────────────────────
    app: dark ? "bg-[#0a0a0a]" : "bg-[#fafafa]",
    sidebar: dark
      ? "bg-[#171717] border-[#3f3f46]"
      : "bg-[#ffffff] border-[#d4d4d8]",
    topbar: dark
      ? "bg-[#171717] border-[#3f3f46]"
      : "bg-[#ffffff] border-[#d4d4d8]",
    panel: dark
      ? "bg-[#171717] border-[#3f3f46]"
      : "bg-[#ffffff] border-[#d4d4d8]",
    surface: dark
      ? "bg-[#262626] border-[#525252]"
      : "bg-[#f4f4f5] border-[#d4d4d8]",
    tmpl: dark
      ? "bg-[#171717] border-[#3f3f46]"
      : "bg-[#ffffff] border-[#d4d4d8]",

    // ── Base Text ────────────────────────────────────────────
    tp: dark ? "text-[#ffffff]" : "text-[#000000]",
    ts: dark ? "text-[#d4d4d8]" : "text-[#3f3f46]",
    tx: dark ? "text-[#a1a1aa]" : "text-[#525252]",

    // ── Semantic Text (For Icons, Status Labels, Errors) ─────
    textSuccess: dark ? "text-[#34d399]" : "text-[#059669]", // Green
    textDanger: dark ? "text-[#f87171]" : "text-[#dc2626]", // Red
    textWarning: dark ? "text-[#fcd34d]" : "text-[#d97706]", // Amber
    textInfo: dark ? "text-[#60a5fa]" : "text-[#2563eb]", // Blue

    // ── Semantic Panels (For Alerts, Highlights, Active Rows)
    bgSuccess: dark
      ? "bg-[#022c22] border-[#064e3b]"
      : "bg-[#ecfdf5] border-[#a7f3d0]",
    bgDanger: dark
      ? "bg-[#3f1515] border-[#7f1d1d]"
      : "bg-[#fef2f2] border-[#fecaca]",
    bgWarning: dark
      ? "bg-[#452810] border-[#78350f]"
      : "bg-[#fffbeb] border-[#fde68a]",
    bgInfo: dark
      ? "bg-[#172554] border-[#1e3a8a]"
      : "bg-[#eff6ff] border-[#bfdbfe]",

    // ── Borders / Dividers ───────────────────────────────────
    brd: dark ? "border-[#3f3f46]" : "border-[#d4d4d8]",
    row: dark ? "border-[#262626]" : "border-[#e4e4e7]",
    tableBorder: dark ? "border-[#3f3f46]" : "border-[#d4d4d8]",
    tableRow: dark ? "border-[#262626]" : "border-[#d4d4d8]",

    // ── Form inputs ──────────────────────────────────────────
    inp: dark
      ? "bg-[#0a0a0a] border-[#525252] text-[#ffffff] placeholder:text-[#a1a1aa]"
      : "bg-[#ffffff] border-[#a1a1aa] text-[#000000] placeholder:text-[#525252]",

    // ── Sidebar navigation ───────────────────────────────────
    navI: dark
      ? "text-[#d4d4d8] hover:bg-[#262626] hover:text-[#ffffff]"
      : "text-[#3f3f46] hover:bg-[#f4f4f5] hover:text-[#000000]",
    navA: dark
      ? "bg-[#1c1300] text-[#fbbf24] border-l-2 border-[#d97706]"
      : "bg-[#fffbeb] text-[#b45309] border-l-2 border-[#d97706]",
    navS: dark ? "text-[#a1a1aa]" : "text-[#525252]",

    // ── Badges ───────────────────────────────────────────────
    bdg: dark
      ? "bg-[#262626] text-[#ffffff] border border-[#525252]"
      : "bg-[#e4e4e7] text-[#000000] border border-[#a1a1aa]",
    bdgG: dark
      ? "bg-[#064e3b] text-[#34d399] border border-[#10b981]"
      : "bg-[#d1fae5] text-[#065f46] border border-[#10b981]",
    bdgR: dark
      ? "bg-[#450a0a] text-[#f87171] border border-[#ef4444]"
      : "bg-[#fee2e2] text-[#991b1b] border border-[#ef4444]",
    bdgB: dark
      ? "bg-[#082f49] text-[#38bdf8] border border-[#0ea5e9]"
      : "bg-[#e0f2fe] text-[#075985] border border-[#0ea5e9]",

    // ── Tip / warning box ────────────────────────────────────
    tip: dark
      ? "bg-[#422006] border-[#9a3412] text-[#fcd34d]"
      : "bg-[#fef3c7] border-[#f59e0b] text-[#92400e]",

    // ── Copy button ──────────────────────────────────────────
    copy: dark
      ? "bg-[#262626] text-[#d4d4d8] hover:bg-[#3f3f46] hover:text-[#ffffff]"
      : "bg-[#f4f4f5] text-[#3f3f46] hover:bg-[#e4e4e7] hover:text-[#000000]",

    // ── Shared action buttons (all pages: lang selector, snippets, copy) ──
    btnActive: dark
      ? "bg-[#1c1300] text-[#fbbf24] border-[#d97706]"
      : "bg-[#fffbeb] text-[#b45309] border-[#d97706]",
    btnInactive: dark
      ? "bg-[#262626] text-[#ffffff] border-[#3a3a3a] hover:bg-[#3a3a3a]"
      : "bg-[#f5f5f5] text-[#525252] border-[#cfcfcf] hover:bg-[#e5e5e5] hover:text-[#000000]",

    // ── Focused card accent (VoiceCallPage section cards) ────
    focusBorderAccent: dark ? "border-l-[#d97706]" : "border-l-[#d97706]",
    focusTextAccent: dark ? "text-[#fbbf24]" : "text-[#b45309]",

    // ── Checkbox accent ──────────────────────────────────────
    checkbox: dark ? "accent-[#d97706]" : "accent-[#d97706]",

    // ── Accordion ────────────────────────────────────────────
    acc: dark
      ? "bg-[#171717] border border-[#3f3f46] rounded-lg"
      : "bg-[#ffffff] border border-[#d4d4d8] rounded-lg",

    // ── Textarea ─────────────────────────────────────────────
    textarea: dark
      ? "bg-[#0a0a0a] border-[#525252] text-[#ffffff] placeholder:text-[#a1a1aa]"
      : "bg-[#ffffff] border-[#a1a1aa] text-[#000000] placeholder:text-[#525252]",

    // ── Generic hover ────────────────────────────────────────
    hover: dark ? "hover:bg-[#262626]" : "hover:bg-[#f4f4f5]",

    // ── Accent values (used in inline SVG stroke / text) ─────
    accentText: dark ? "text-[#fbbf24]" : "text-[#b45309]",
    accentColor: dark ? "#fbbf24" : "#d97706",
  } as const;
}

export type ThemeTokens = ReturnType<typeof buildTokens>;

export function useTk() {
  const dark = useDark();
  return { tk: buildTokens(dark), dark };
}
