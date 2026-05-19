import { useDark } from "../context/ThemeContext";

// ============================================================
// PALETTE REFERENCE
//
// DARK MODE — "Pure Graphite" (Zero Blue Tint)
//   Backgrounds : #0a0a0a (app) → #171717 (panels) → #262626 (surface)
//   Text        : #ffffff (primary) · #a3a3a3 (secondary) · #737373 (muted)
//   Borders     : #262626
//   Accent      : #10b981 (emerald green — highly restful, zero eye strain)
//
// LIGHT MODE — "High-Contrast Paper"
//   Backgrounds : #fafafa (app) · #ffffff (sidebar/panels)
//   Text        : #000000 (primary - pure black) · #525252 (secondary) · #8c8c8c (muted)
//   Borders     : #e5e5e5
//   Accent      : #059669 (deep emerald)
// ============================================================

export function buildTokens(dark: boolean) {
  return {
    // ── Backgrounds ──────────────────────────────────────────
    app: dark ? "bg-[#0a0a0a]" : "bg-[#fafafa]",
    sidebar: dark
      ? "bg-[#171717] border-[#262626]"
      : "bg-[#ffffff] border-[#e5e5e5]",
    topbar: dark
      ? "bg-[#171717] border-[#262626]"
      : "bg-[#ffffff] border-[#e5e5e5]",
    panel: dark
      ? "bg-[#171717] border-[#262626]"
      : "bg-[#ffffff] border-[#e5e5e5]",
    surface: dark
      ? "bg-[#262626] border-[#3a3a3a]"
      : "bg-[#f5f5f5] border-[#e5e5e5]",
    tmpl: dark
      ? "bg-[#171717] border-[#262626]"
      : "bg-[#ffffff] border-[#e5e5e5]",

    // ── Text ─────────────────────────────────────────────────
    tp: dark ? "text-[#ffffff]" : "text-[#000000]",
    ts: dark ? "text-[#a3a3a3]" : "text-[#525252]",
    tx: dark ? "text-[#737373]" : "text-[#8c8c8c]",

    // ── Borders / Dividers ───────────────────────────────────
    brd: dark ? "border-[#262626]" : "border-[#e5e5e5]",
    row: dark ? "border-[#171717]" : "border-[#f5f5f5]",

    // ── Form inputs ──────────────────────────────────────────
    inp: dark
      ? "bg-[#0a0a0a] border-[#262626] text-[#ffffff] placeholder:text-[#737373]"
      : "bg-[#ffffff] border-[#cccccc] text-[#000000] placeholder:text-[#8c8c8c]",

    // ── Sidebar navigation ───────────────────────────────────
    navI: dark
      ? "text-[#a3a3a3] hover:bg-[#262626] hover:text-[#ffffff]"
      : "text-[#525252] hover:bg-[#f5f5f5] hover:text-[#000000]",
    navA: dark
      ? "bg-[#064e3b] text-[#10b981] border-l-2 border-[#10b981]"
      : "bg-[#ecfdf5] text-[#059669] border-l-2 border-[#059669]",
    navS: dark ? "text-[#737373]" : "text-[#8c8c8c]",

    // ── Product tabs ─────────────────────────────────────────
    tab: dark
      ? "text-[#a3a3a3] hover:text-[#ffffff] hover:bg-[#262626]"
      : "text-[#525252] hover:text-[#000000] hover:bg-[#f5f5f5]",
    tabA: dark
      ? "text-[#10b981] border-b-2 border-[#10b981]"
      : "text-[#059669] border-b-2 border-[#059669] bg-[#f0fdf4]",

    // ── Badges ───────────────────────────────────────────────
    bdg: dark
      ? "bg-[#262626] text-[#ffffff] border border-[#3a3a3a]"
      : "bg-[#e5e5e5] text-[#000000] border border-[#cccccc]",
    bdgG: dark
      ? "bg-[#064e3b] text-[#34d399] border border-[#047857]"
      : "bg-[#d1fae5] text-[#065f46] border border-[#6ee7b7]",
    bdgR: dark
      ? "bg-[#450a0a] text-[#f87171] border border-[#7f1d1d]"
      : "bg-[#fee2e2] text-[#991b1b] border border-[#fca5a5]",
    bdgB: dark
      ? "bg-[#082f49] text-[#38bdf8] border border-[#0ea5e9]"
      : "bg-[#e0f2fe] text-[#075985] border border-[#7dd3fc]",

    // ── Tip / warning box ────────────────────────────────────
    tip: dark
      ? "bg-[#422006] border-[#713f12] text-[#fbbf24]"
      : "bg-[#fef3c7] border-[#fde68a] text-[#92400e]",

    // ── Copy button ──────────────────────────────────────────
    copy: dark
      ? "bg-[#262626] text-[#a3a3a3] hover:bg-[#3a3a3a] hover:text-[#ffffff]"
      : "bg-[#f5f5f5] text-[#525252] hover:bg-[#e5e5e5] hover:text-[#000000]",

    // ── Accordion ────────────────────────────────────────────
    acc: dark
      ? "bg-[#171717] border border-[#262626] rounded-lg"
      : "bg-[#ffffff] border border-[#e5e5e5] rounded-lg",

    // ── Screenshot placeholder ───────────────────────────────
    placeholder: dark
      ? "bg-[#0a0a0a] text-[#737373] border border-dashed border-[#262626]"
      : "bg-[#fafafa] text-[#8c8c8c] border border-dashed border-[#cccccc]",

    // ── Textarea (My Notes) ──────────────────────────────────
    textarea: dark
      ? "bg-[#0a0a0a] border-[#262626] text-[#ffffff] placeholder:text-[#737373]"
      : "bg-[#ffffff] border-[#cccccc] text-[#000000] placeholder:text-[#8c8c8c]",

    // ── Generic hover ────────────────────────────────────────
    hover: dark ? "hover:bg-[#262626]" : "hover:bg-[#f5f5f5]",

    // ── Step number bubbles ──────────────────────────────────
    stepBubble: dark
      ? "bg-[#064e3b] text-[#10b981]"
      : "bg-[#ecfdf5] text-[#059669]",

    // ── Accent values (used in inline SVG stroke / text) ─────
    accentText: dark ? "text-[#10b981]" : "text-[#059669]",
    accentColor: dark ? "#10b981" : "#059669",
  } as const;
}

export type ThemeTokens = ReturnType<typeof buildTokens>;

export function useTk() {
  const dark = useDark();
  return { tk: buildTokens(dark), dark };
}
