import { useState, useRef } from 'react'
import { useTk } from '../../hooks/useThemeTokens'
import { RESOURCES } from '../../data/resources'
import { RMA_ASKING_SENTENCES, RMA_TEMPLATE_BODY } from '../../data/rma'

// ── Languages ─────────────────────────────────────────────────

const LANGUAGES = ['English', 'Dutch', 'Spanish'] as const
type Lang = typeof LANGUAGES[number]
const LANG_BADGE: Record<Lang, string>  = { English: 'EN', Dutch: 'NL', Spanish: 'ES' }
const LANG_KEY: Record<Lang, string>    = { English: 'English', Dutch: 'Nederlands', Spanish: 'Español' }
const PANEL_TITLE: Record<Lang, string> = { English: 'Utilities', Dutch: 'Hulpmiddelen', Spanish: 'Utilidades' }

// ── Snippet lookup ────────────────────────────────────────────

function tpl(resourceId: string, sectionId: string, lang: Lang): string {
  const section = RESOURCES[resourceId]?.sections.find((s) => s.id === sectionId)
  return section?.templates?.find((t) => t.language === LANG_KEY[lang])?.content ?? ''
}

type SnippetItem =
  | { label: string; resourceId: string; sectionId: string; customText?: never }
  | { label: string; resourceId?: never; sectionId?: never; customText: (lang: Lang) => string }

// Add a row here to include a new resource in the sidebar — its sections appear automatically
const AUTO_RESOURCE_GROUPS: { resourceId: string; groupLabel: string }[] = [
  { resourceId: 'daily-mails',             groupLabel: 'Daily Mails' },
  { resourceId: 'follow-up-cases',         groupLabel: 'Follow Up'   },
  { resourceId: 'associate-account-steps', groupLabel: 'Account'     },
]

// These combine RMA sentences with a template body and can't be derived from resources.ts
const RMA_ASK_ITEMS: SnippetItem[] = [
  { label: 'Option 1 – Asking info', customText: (lang) => `${RMA_ASKING_SENTENCES[lang][0]}\n\n${RMA_TEMPLATE_BODY}` },
  { label: 'Option 2 – Asking info', customText: (lang) => `${RMA_ASKING_SENTENCES[lang][1]}\n\n${RMA_TEMPLATE_BODY}` },
]

const SNIPPET_GROUPS: { group: string; items: SnippetItem[] }[] = [
  ...AUTO_RESOURCE_GROUPS.map(({ resourceId, groupLabel }) => ({
    group: groupLabel,
    items: (RESOURCES[resourceId]?.sections ?? []).map((s) => ({
      label: s.title,
      resourceId,
      sectionId: s.id,
    })) as SnippetItem[],
  })),
  { group: 'RMA – Asking', items: RMA_ASK_ITEMS },
]

// ── Icons ─────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function CopyIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}
function ClearIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  )
}

// ── Main component ────────────────────────────────────────────

export function CasesPage() {
  const { tk } = useTk()
  const [content, setContent]   = useState('')
  const [copied, setCopied]     = useState(false)
  const [language, setLanguage] = useState<Lang>('English')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const btnAccent = tk.btnActive
  const btnBase   = tk.btnInactive

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const insertSnippet = (text: string) => {
    const ta = textareaRef.current
    if (!ta) return
    const start = ta.selectionStart
    const end   = ta.selectionEnd
    const next  = content.slice(0, start) + text + content.slice(end)
    setContent(next)
    requestAnimationFrame(() => {
      ta.focus()
      ta.setSelectionRange(start + text.length, start + text.length)
    })
  }

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden">

      {/* Header */}
      <div className="flex-shrink-0">
        <h1 className={`text-2xl font-bold tracking-tight mb-0.5 ${tk.tp}`}>Cases</h1>
        <p className={`text-sm ${tk.ts}`}>Compose your email</p>
      </div>

      {/* Two-column layout */}
      <div className="flex-1 min-h-0 flex gap-3">

        {/* ── CENTER: Composer ──────────────────────────────────── */}
        <div className={`flex-1 min-w-0 rounded-xl border flex flex-col overflow-hidden ${tk.panel}`}>
          <div className={`px-4 pt-3 pb-2 flex-shrink-0 flex items-center justify-end gap-2 border-b ${tk.brd}`}>
            <button
              onClick={() => setContent('')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border transition-all ${btnBase}`}
            >
              <ClearIcon />
              Clear
            </button>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border transition-all ${
                copied ? btnAccent : btnBase
              }`}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start typing your email here, or click a snippet on the right to insert it…"
            className={`flex-1 w-full px-4 py-3 text-sm leading-relaxed resize-none outline-none font-mono ${tk.textarea}`}
            style={{ borderRadius: 0 }}
          />
        </div>

        {/* ── RIGHT: Snippets ───────────────────────────────────── */}
        <div className={`w-80 flex-shrink-0 rounded-xl border flex flex-col overflow-hidden ${tk.panel}`}>
          {/* Panel title */}
          <div className={`px-3 pt-3 pb-2 flex-shrink-0 border-b ${tk.brd}`}>
            <h2 className={`text-sm font-semibold ${tk.tp}`}>{PANEL_TITLE[language]}</h2>
          </div>
          {/* Language selector */}
          <div className={`px-3 pt-3 pb-2 flex-shrink-0 border-b ${tk.brd}`}>
            <div className="flex items-center gap-2 mb-2">
              <p className={`text-[10px] font-bold tracking-widest uppercase whitespace-nowrap ${tk.ts}`}>Language</p>
              <div className={`flex-1 border-t ${tk.brd}`} />
            </div>
            <div className="flex gap-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`flex-1 py-1 rounded-md text-[10px] font-bold border transition-all ${language === lang ? btnAccent : btnBase}`}
                >
                  {LANG_BADGE[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Snippet buttons */}
          <div className="flex-1 min-h-0 overflow-y-auto px-2 py-2 flex flex-col gap-3">
            {SNIPPET_GROUPS.map((group) => (
              <div key={group.group}>
                <div className="flex items-center gap-2 px-1 mb-1.5">
                  <p className={`text-[10px] font-bold tracking-widest uppercase whitespace-nowrap ${tk.ts}`}>
                    {group.group}
                  </p>
                  <div className={`flex-1 border-t ${tk.brd}`} />
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {group.items.map((item) => {
                    const text = item.customText
                      ? item.customText(language)
                      : tpl(item.resourceId!, item.sectionId!, language)
                    return (
                      <button
                        key={item.label}
                        onClick={() => insertSnippet(text)}
                        disabled={!text}
                        title={!text ? 'No template available' : undefined}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs border transition-all disabled:opacity-30 disabled:cursor-not-allowed ${btnBase}`}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
