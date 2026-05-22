import { useState, useRef } from 'react'
import { useTk } from '../../hooks/useThemeTokens'
import { RESOURCES } from '../../data/resources'
import { RMA_ASKING_SENTENCES, RMA_TEMPLATE_BODY } from '../../data/rma'

// ── Languages ─────────────────────────────────────────────────

const LANGUAGES = ['English', 'Dutch', 'Spanish'] as const
type Lang = typeof LANGUAGES[number]
const LANG_BADGE: Record<Lang, string> = { English: 'EN', Dutch: 'NL', Spanish: 'ES' }
const LANG_KEY: Record<Lang, string> = { English: 'English', Dutch: 'Nederlands', Spanish: 'Español' }

// ── Snippet lookup ────────────────────────────────────────────

function tpl(resourceId: string, sectionId: string, lang: Lang): string {
  const section = RESOURCES[resourceId]?.sections.find((s) => s.id === sectionId)
  return section?.templates?.find((t) => t.language === LANG_KEY[lang])?.content ?? ''
}

type SnippetItem =
  | { label: string; resourceId: string; sectionId: string; customText?: never }
  | { label: string; resourceId?: never; sectionId?: never; customText: (lang: Lang) => string }

const SNIPPET_GROUPS: { group: string; items: SnippetItem[] }[] = [
  {
    group: 'Opening',
    items: [
      { label: 'Opening mail',     resourceId: 'daily-mails', sectionId: 'general-inquiry' },
      { label: 'Asking More Info', resourceId: 'daily-mails', sectionId: 'asking-more-information' },
      { label: 'Remote Session',   resourceId: 'daily-mails', sectionId: 'remote-session' },
    ],
  },
  {
    group: 'Account',
    items: [
      { label: 'Associate account', resourceId: 'associate-account-steps', sectionId: 'associate-account' },
    ],
  },
  {
    group: 'RMA',
    items: [
      { label: 'Option 1 – Asking info', customText: (lang) => `${RMA_ASKING_SENTENCES[lang][0]}\n\n${RMA_TEMPLATE_BODY}` },
      { label: 'Option 2 – Asking info', customText: (lang) => `${RMA_ASKING_SENTENCES[lang][1]}\n\n${RMA_TEMPLATE_BODY}` },
      { label: 'Approving RMA',          resourceId: 'daily-mails', sectionId: 'approving-rma' },
      { label: 'Direct RMA',             resourceId: 'daily-mails', sectionId: 'direct-rma' },
      { label: 'Technician on leave',    resourceId: 'daily-mails', sectionId: 'technician-onleave' },
    ],
  },
  {
    group: 'Follow Up',
    items: [
      { label: '1st Follow Up',         resourceId: 'follow-up-cases', sectionId: 'first-follow-up' },
      { label: '2nd Follow Up',         resourceId: 'follow-up-cases', sectionId: 'second-follow-up' },
      { label: '3rd Follow Up / Close', resourceId: 'follow-up-cases', sectionId: 'third-follow-up' },
    ],
  },
  {
    group: 'Resolution',
    items: [
      { label: 'Closing Case',           resourceId: 'daily-mails', sectionId: 'closing-case' },
      { label: 'Escalated to Eng.',      resourceId: 'daily-mails', sectionId: 'escalated-to-engineering' },
    ],
  },
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

// ── Main component ────────────────────────────────────────────

export function CasesPage() {
  const { tk, dark } = useTk()
  const [content, setContent]   = useState('')
  const [copied, setCopied]     = useState(false)
  const [language, setLanguage] = useState<Lang>('English')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const accentText   = dark ? 'text-[#10b981]'   : 'text-[#059669]'
  const accentBg     = dark ? 'bg-[#064e3b]'     : 'bg-[#ecfdf5]'
  const accentBorder = dark ? 'border-[#10b981]' : 'border-[#059669]'
  const btnBase = dark
    ? 'bg-[#262626] text-[#a3a3a3] border-[#3a3a3a] hover:bg-[#3a3a3a] hover:text-[#ffffff]'
    : 'bg-[#f5f5f5] text-[#525252] border-[#cfcfcf] hover:bg-[#e5e5e5] hover:text-[#000000]'
  const btnAccent = `${accentBg} ${accentText} ${accentBorder}`

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
          <div className={`px-4 pt-3 pb-2 flex-shrink-0 flex items-center justify-end border-b ${tk.brd}`}>
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
        <div className={`w-52 flex-shrink-0 rounded-xl border flex flex-col overflow-hidden ${tk.panel}`}>
          {/* Language selector */}
          <div className={`px-3 pt-3 pb-2 flex-shrink-0 border-b ${tk.brd}`}>
            <p className={`text-[10px] font-semibold tracking-widest uppercase mb-2 ${tk.tx}`}>Language</p>
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
                <p className={`text-[10px] font-semibold tracking-wider uppercase px-1 mb-1 ${tk.tx}`}>
                  {group.group}
                </p>
                <div className="flex flex-col gap-1">
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
