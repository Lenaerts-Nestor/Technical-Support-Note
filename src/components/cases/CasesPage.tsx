import { useState, useRef, useCallback } from 'react'
import { useTk } from '../../hooks/useThemeTokens'
import { useCaseNotes } from '../../hooks/useCaseNotes'
import { RESOURCES } from '../../data/resources'
import { RMA_ASKING_SENTENCES, RMA_TEMPLATE_BODY } from '../../data/rma'
import type { CaseNote } from '../../types'

// ── Languages ─────────────────────────────────────────────────

const LANGUAGES = ['English', 'Dutch', 'Spanish'] as const
type Lang = typeof LANGUAGES[number]
const LANG_BADGE: Record<Lang, string> = { English: 'EN', Dutch: 'NL', Spanish: 'ES' }
// Resource files use these language labels
const LANG_KEY: Record<Lang, string> = { English: 'English', Dutch: 'Nederlands', Spanish: 'Español' }

// ── Snippet lookup (sourced directly from resources.ts) ───────

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
      { label: 'Opening mail', resourceId: 'daily-mails', sectionId: 'general-inquiry' },
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
]

// ── Icons ─────────────────────────────────────────────────────

function PlusIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}
function TrashIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  )
}
function SaveIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  )
}
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
  const { cases, loading, error, createCase, updateContent, deleteCase } = useCaseNotes()

  const [selected, setSelected] = useState<CaseNote | null>(null)
  const [localContent, setLocalContent] = useState('')
  const [search, setSearch] = useState('')
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [language, setLanguage] = useState<Lang>('English')

  const [showForm, setShowForm] = useState(false)
  const [formTitle, setFormTitle] = useState('')
  const [formName, setFormName] = useState('')
  const [creating, setCreating] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── Colours ──────────────────────────────────────────────────
  const accentText   = dark ? 'text-[#10b981]'   : 'text-[#059669]'
  const accentBg     = dark ? 'bg-[#064e3b]'     : 'bg-[#ecfdf5]'
  const accentBorder = dark ? 'border-[#10b981]' : 'border-[#059669]'

  const btnBase = dark
    ? 'bg-[#262626] text-[#a3a3a3] border-[#3a3a3a] hover:bg-[#3a3a3a] hover:text-[#ffffff]'
    : 'bg-[#f5f5f5] text-[#525252] border-[#cfcfcf] hover:bg-[#e5e5e5] hover:text-[#000000]'

  const btnAccent = `${accentBg} ${accentText} ${accentBorder}`
  const deleteBtn = dark
    ? 'text-[#737373] hover:text-[#f87171] hover:bg-[#450a0a]'
    : 'text-[#8c8c8c] hover:text-[#991b1b] hover:bg-[#fee2e2]'

  // ── Helpers ──────────────────────────────────────────────────

  const selectCase = (c: CaseNote) => {
    if (saveTimer.current) clearTimeout(saveTimer.current)
    setSelected(c)
    setLocalContent(c.content)
    setSaveState('idle')
  }

  const schedSave = useCallback((id: number, content: string) => {
    if (saveTimer.current) clearTimeout(saveTimer.current)
    setSaveState('saving')
    saveTimer.current = setTimeout(async () => {
      await updateContent(id, content)
      setSaveState('saved')
      setTimeout(() => setSaveState('idle'), 2000)
    }, 800)
  }, [updateContent])

  const handleContentChange = (val: string) => {
    setLocalContent(val)
    if (selected) schedSave(selected.id, val)
  }

  const insertSnippet = (text: string) => {
    const ta = textareaRef.current
    if (!ta || !selected) return
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const next = localContent.slice(0, start) + text + localContent.slice(end)
    setLocalContent(next)
    schedSave(selected.id, next)
    requestAnimationFrame(() => {
      ta.focus()
      ta.setSelectionRange(start + text.length, start + text.length)
    })
  }

  const handleCreate = async () => {
    if (!formTitle.trim() || !formName.trim()) return
    setCreating(true)
    const created = await createCase(formTitle.trim(), formName.trim())
    setCreating(false)
    if (created) {
      setFormTitle('')
      setFormName('')
      setShowForm(false)
      selectCase(created)
    }
  }

  const handleDelete = async (id: number) => {
    await deleteCase(id)
    if (selected?.id === id) { setSelected(null); setLocalContent('') }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(localContent)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleManualSave = async () => {
    if (!selected) return
    if (saveTimer.current) clearTimeout(saveTimer.current)
    await updateContent(selected.id, localContent)
    setSaveState('saved')
    setTimeout(() => setSaveState('idle'), 2000)
  }

  const filtered = cases.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase()),
  )

  // ── Render ───────────────────────────────────────────────────

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between flex-shrink-0">
        <div>
          <h1 className={`text-2xl font-bold tracking-tight mb-0.5 ${tk.tp}`}>Cases</h1>
          <p className={`text-sm ${tk.ts}`}>Email notes per case — synced to cloud</p>
        </div>
        {error && (
          <span className={`text-xs px-2 py-1 rounded border ${dark ? 'text-[#f87171] border-[#7f1d1d] bg-[#450a0a]' : 'text-[#991b1b] border-[#fca5a5] bg-[#fee2e2]'}`}>
            {error}
          </span>
        )}
      </div>

      {/* Three-column layout */}
      <div className="flex-1 min-h-0 flex gap-3">

        {/* ── LEFT: Case list ──────────────────────────────────── */}
        <div className={`w-56 flex-shrink-0 rounded-xl border flex flex-col overflow-hidden ${tk.panel}`}>
          <div className="px-3 pt-3 pb-2 flex-shrink-0 flex flex-col gap-2">
            <input
              type="text"
              placeholder="Search cases…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full px-2.5 py-1.5 rounded-lg border text-xs outline-none transition-all ${tk.inp}`}
            />
            <button
              onClick={() => setShowForm((v) => !v)}
              className={`flex items-center justify-center gap-1.5 w-full py-1.5 rounded-lg text-xs font-semibold border transition-all ${showForm ? btnAccent : btnBase}`}
            >
              <PlusIcon /> New Case
            </button>

            {showForm && (
              <div className={`flex flex-col gap-1.5 p-2 rounded-lg border ${tk.surface}`}>
                <input
                  type="text"
                  placeholder="Case # e.g. [0070459]"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
                  className={`w-full px-2 py-1 rounded border text-xs outline-none ${tk.inp}`}
                  autoFocus
                />
                <input
                  type="text"
                  placeholder="Contact name"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
                  className={`w-full px-2 py-1 rounded border text-xs outline-none ${tk.inp}`}
                />
                <button
                  onClick={handleCreate}
                  disabled={creating || !formTitle.trim() || !formName.trim()}
                  className={`py-1 rounded text-xs font-semibold border transition-all disabled:opacity-40 ${btnAccent}`}
                >
                  {creating ? 'Creating…' : 'Create'}
                </button>
              </div>
            )}
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto px-2 pb-2 flex flex-col gap-0.5">
            {loading && <p className={`text-xs text-center py-4 ${tk.ts}`}>Loading…</p>}
            {!loading && filtered.length === 0 && (
              <p className={`text-xs text-center py-4 ${tk.tx}`}>No cases yet</p>
            )}
            {filtered.map((c) => {
              const isActive = selected?.id === c.id
              return (
                <div
                  key={c.id}
                  onClick={() => selectCase(c)}
                  className={`group flex items-start justify-between gap-1 px-2 py-2 rounded-lg cursor-pointer transition-all ${
                    isActive ? `${accentBg} border ${accentBorder}` : `${tk.hover} border border-transparent`
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <p className={`text-xs font-semibold truncate ${isActive ? accentText : tk.tp}`}>{c.title}</p>
                    <p className={`text-[10px] truncate ${isActive ? accentText : tk.ts}`}>{c.name}</p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(c.id) }}
                    className={`flex-shrink-0 p-1 rounded transition-all opacity-0 group-hover:opacity-100 ${deleteBtn}`}
                    title="Delete case"
                  >
                    <TrashIcon />
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── CENTER: Editor ────────────────────────────────────── */}
        <div className={`flex-1 min-w-0 rounded-xl border flex flex-col overflow-hidden ${tk.panel}`}>
          {!selected ? (
            <div className="flex-1 flex items-center justify-center">
              <p className={`text-sm ${tk.ts}`}>Select a case or create a new one</p>
            </div>
          ) : (
            <>
              <div className={`px-4 pt-3 pb-2 flex-shrink-0 flex items-center justify-between border-b ${tk.brd}`}>
                <div>
                  <p className={`text-sm font-bold ${tk.tp}`}>{selected.title}</p>
                  <p className={`text-xs ${tk.ts}`}>{selected.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] ${tk.tx}`}>
                    {saveState === 'saving' && 'Saving…'}
                    {saveState === 'saved' && <span className={accentText}>Saved</span>}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border transition-all ${copiedEmail ? btnAccent : btnBase}`}
                  >
                    {copiedEmail ? <CheckIcon /> : <CopyIcon />}
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </button>
                  <button
                    onClick={handleManualSave}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border transition-all ${btnBase}`}
                  >
                    <SaveIcon /> Save
                  </button>
                </div>
              </div>
              <textarea
                ref={textareaRef}
                value={localContent}
                onChange={(e) => handleContentChange(e.target.value)}
                placeholder="Start typing your email here, or click a snippet on the right to insert it…"
                className={`flex-1 w-full px-4 py-3 text-sm leading-relaxed resize-none outline-none font-mono ${tk.textarea}`}
                style={{ borderRadius: 0 }}
              />
            </>
          )}
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

          {/* Scrollable snippet buttons */}
          <div className="flex-1 min-h-0 overflow-y-auto px-2 py-2 flex flex-col gap-3">
            {SNIPPET_GROUPS.map((group) => (
              <div key={group.group}>
                <p className={`text-[10px] font-semibold tracking-wider uppercase px-1 mb-1 ${tk.tx}`}>
                  {group.group}
                </p>
                <div className="flex flex-col gap-1">
                  {group.items.map((item) => {
                    const text = item.customText ? item.customText(language) : tpl(item.resourceId!, item.sectionId!, language)
                    return (
                      <button
                        key={item.label}
                        onClick={() => insertSnippet(text)}
                        disabled={!selected || !text}
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
