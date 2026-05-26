import { useState } from 'react'
import { useTk } from '../hooks/useThemeTokens'

const LANGUAGES = ['Dutch', 'English', 'Spanish'] as const
type Language = typeof LANGUAGES[number]

interface ProductRow {
  model: string
  firmware: string
}

interface Fields {
  currentFault: string
  setupPath: string
  clientTroubleshooting: string
  myTroubleshooting: string
  docChecked: string
  nextSteps: string
  extraNotes: string
}

interface SectionDef {
  key: keyof Fields
  label: string
  placeholder: string
  icon: React.ReactNode
  copyLabel: string
}

interface SectionCardProps {
  sec: SectionDef
  value: string
  isFocused: boolean
  panelClass: string
  textClass: string
  accentBorderClass: string
  accentTextClass: string
  textareaClass: string
  onFocus: (key: keyof Fields) => void
  onBlur: () => void
  onChange: (key: keyof Fields) => (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

// ── Icons ────────────────────────────────────────────────────

function InfoIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="8.5" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="12" x2="12" y2="17" />
    </svg>
  )
}

function KeyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="3" strokeLinecap="round" />
      <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="3" strokeLinecap="round" />
      <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function ChecklistIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  )
}

// ── Section definitions ──────────────────────────────────────

const GRID_SECTIONS: SectionDef[] = [
  {
    key: 'currentFault',
    label: 'Current fault',
    placeholder: 'What is the client experiencing right now?',
    icon: <InfoIcon />,
    copyLabel: 'CURRENT FAULT',
  },
  {
    key: 'setupPath',
    label: 'Setup / design path',
    placeholder: 'Topology, room design, signal flow, network path...',
    icon: <KeyIcon />,
    copyLabel: 'SETUP / DESIGN PATH',
  },
  {
    key: 'clientTroubleshooting',
    label: 'Troubleshooting done by client',
    placeholder: 'What has the client already tried?',
    icon: <ListIcon />,
    copyLabel: 'TROUBLESHOOTING DONE BY CLIENT',
  },
  {
    key: 'myTroubleshooting',
    label: 'Troubleshooting done by me',
    placeholder: 'Steps you walked through during the call...',
    icon: <ListIcon />,
    copyLabel: 'TROUBLESHOOTING DONE BY ME',
  },
  {
    key: 'docChecked',
    label: 'Key information / documentation checked',
    placeholder: 'Manuals, KB articles, internal notes referenced...',
    icon: <BookIcon />,
    copyLabel: 'KEY INFORMATION / DOCUMENTATION CHECKED',
  },
  {
    key: 'nextSteps',
    label: 'Next steps / action items',
    placeholder: 'Follow-up callback, RMA, escalation, info to send...',
    icon: <ChecklistIcon />,
    copyLabel: 'NEXT STEPS / ACTION ITEMS',
  },
]

const EXTRA_SECTION: SectionDef = {
  key: 'extraNotes',
  label: 'Extra notes',
  placeholder: 'Anything else worth remembering.',
  icon: <FileIcon />,
  copyLabel: 'EXTRA NOTES',
}

function SectionCard({
  sec,
  value,
  isFocused,
  panelClass,
  textClass,
  accentBorderClass,
  accentTextClass,
  textareaClass,
  onFocus,
  onBlur,
  onChange,
}: SectionCardProps) {
  return (
    <div
      className={`rounded-xl border transition-all ${panelClass} ${isFocused ? `border-l-[3px] ${accentBorderClass}` : ''}`}
    >
      <div className="px-4 pt-3 pb-3">
        <div className={`flex items-center gap-2 mb-2 ${isFocused ? accentTextClass : textClass}`}>
          {sec.icon}
          <span className="text-xs font-semibold">{sec.label}</span>
        </div>
        <textarea
          rows={5}
          value={value}
          onChange={onChange(sec.key)}
          onFocus={() => onFocus(sec.key)}
          onBlur={onBlur}
          placeholder={sec.placeholder}
          className={`w-full resize-y rounded-lg border px-3 py-2 text-sm outline-none transition-all ${textareaClass}`}
        />
      </div>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────

export function VoiceCallPage() {
  const { tk, dark } = useTk()

  const [language, setLanguage] = useState<Language>('English')
  const [products, setProducts] = useState<ProductRow[]>([{ model: '', firmware: '' }])
  const [hasAppointment, setHasAppointment] = useState(false)
  const [appointmentDate, setAppointmentDate] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')
  const [fields, setFields] = useState<Fields>({
    currentFault: '',
    setupPath: '',
    clientTroubleshooting: '',
    myTroubleshooting: '',
    docChecked: '',
    nextSteps: '',
    extraNotes: '',
  })
  const [copied, setCopied] = useState(false)
  const [focusedKey, setFocusedKey] = useState<keyof Fields | null>(null)

  // Products
  const addProduct = () => setProducts((p) => [...p, { model: '', firmware: '' }])
  const removeProduct = (i: number) => setProducts((p) => p.filter((_, idx) => idx !== i))
  const updateProduct = (i: number, key: keyof ProductRow, val: string) =>
    setProducts((p) => p.map((row, idx) => (idx === i ? { ...row, [key]: val } : row)))

  // Fields
  const updateField = (key: keyof Fields) => (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }))

  // Copy
  const handleCopy = () => {
    const lines: string[] = []
    lines.push('VOICE CALL NOTES')
    lines.push('================')
    lines.push(`Language: ${language}`)

    products.forEach((p, i) => {
      const label = products.length > 1 ? `Product ${i + 1}` : 'Product / Model'
      lines.push(`${label}: ${p.model || '—'} | Firmware: ${p.firmware || '—'}`)
    })

    if (hasAppointment) {
      lines.push(`Scheduled Appointment: ${appointmentDate || 'dd/mm/yyyy'} at ${appointmentTime || '--:--'}`)
    }

    const allSections = [...GRID_SECTIONS, EXTRA_SECTION]
    for (const sec of allSections) {
      lines.push('')
      lines.push(sec.copyLabel)
      lines.push(fields[sec.key] || '—')
    }

    navigator.clipboard.writeText(lines.join('\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Styles — all accent colours come from useThemeTokens so they can be changed centrally
  const accentBorderClass = tk.focusBorderAccent
  const accentTextClass   = tk.focusTextAccent
  const langActive   = tk.btnActive
  const langInactive = tk.btnInactive
  const copyBtn = (active: boolean) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
      active ? tk.btnActive : tk.btnInactive
    }`
  const addBtn = dark
    ? 'text-[#ffffff] border-[#3a3a3a] hover:bg-[#262626]'
    : 'text-[#525252] border-[#cfcfcf] hover:bg-[#f5f5f5] hover:text-[#000000]'
  const removeBtn = dark
    ? 'text-[#737373] hover:text-[#f87171] hover:bg-[#450a0a]'
    : 'text-[#8c8c8c] hover:text-[#991b1b] hover:bg-[#fee2e2]'
  const checkboxStyle = tk.checkbox

  const CopyIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
  const CheckIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-4 gap-4">
        <div>
          <h1 className={`text-2xl font-bold tracking-tight mb-0.5 ${tk.tp}`}>Voice Call</h1>
          <p className={`text-sm ${tk.ts}`}>Fill in during or after the call. Press copy to paste into OneNote.</p>
        </div>
        <button onClick={handleCopy} className={copyBtn(copied)}>
          {copied ? <><CheckIcon /> Copied!</> : <><CopyIcon /> Copy all</>}
        </button>
      </div>

      {/* Meta panel: Language + Appointment */}
      <div className={`rounded-xl border p-4 mb-3 ${tk.panel}`}>
        <div className="flex items-start gap-8 flex-wrap">
          {/* Language */}
          <div>
            <p className={`text-[10px] font-semibold tracking-widest uppercase mb-2 ${tk.tx}`}>Language</p>
            <div className="flex gap-1.5">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    language === lang ? langActive : langInactive
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className={`w-px self-stretch ${tk.brd} border-l`} />

          {/* Scheduled appointment */}
          <div>
            <p className={`text-[10px] font-semibold tracking-widest uppercase mb-2 ${tk.tx}`}>
              Scheduled Appointment
            </p>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasAppointment}
                  onChange={(e) => setHasAppointment(e.target.checked)}
                  className={`w-4 h-4 rounded cursor-pointer ${checkboxStyle}`}
                />
                <span className={`text-xs ${tk.ts}`}>Confirmed</span>
              </label>
              {hasAppointment && (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    placeholder="dd/mm/yyyy"
                    maxLength={10}
                    className={`px-2.5 py-1.5 rounded-lg border text-xs outline-none w-28 ${tk.inp}`}
                  />
                  <input
                    type="text"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    placeholder="13:20"
                    maxLength={5}
                    className={`px-2.5 py-1.5 rounded-lg border text-xs outline-none w-16 ${tk.inp}`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Products panel */}
      <div className={`rounded-xl border p-4 mb-3 ${tk.panel}`}>
        <div className="flex items-center justify-between mb-2.5">
          <p className={`text-[10px] font-semibold tracking-widest uppercase ${tk.tx}`}>Products</p>
          <button
            onClick={addProduct}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border transition-all ${addBtn}`}
          >
            <PlusIcon /> Add product
          </button>
        </div>
        <div className="space-y-2">
          {products.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div>
                  {i === 0 && (
                    <label className={`block text-[10px] font-semibold tracking-widest uppercase mb-1 ${tk.tx}`}>
                      Product / Model
                    </label>
                  )}
                  <input
                    type="text"
                    value={p.model}
                    onChange={(e) => updateProduct(i, 'model', e.target.value)}
                    placeholder="e.g. TSW-1070"
                    className={`w-full px-3 py-2 rounded-lg border text-sm outline-none transition-all ${tk.inp}`}
                  />
                </div>
                <div>
                  {i === 0 && (
                    <label className={`block text-[10px] font-semibold tracking-widest uppercase mb-1 ${tk.tx}`}>
                      Firmware
                    </label>
                  )}
                  <input
                    type="text"
                    value={p.firmware}
                    onChange={(e) => updateProduct(i, 'firmware', e.target.value)}
                    placeholder="e.g. 3.002.0086"
                    className={`w-full px-3 py-2 rounded-lg border text-sm outline-none transition-all ${tk.inp}`}
                  />
                </div>
              </div>
              {products.length > 1 && (
                <button
                  onClick={() => removeProduct(i)}
                  className={`p-1.5 rounded-md transition-all flex-shrink-0 ${i === 0 ? 'mt-5' : ''} ${removeBtn}`}
                  title="Remove"
                >
                  <TrashIcon />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2-column grid of sections */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {GRID_SECTIONS.map((sec) => (
          <SectionCard
            key={sec.key}
            sec={sec}
            value={fields[sec.key]}
            isFocused={focusedKey === sec.key}
            panelClass={tk.panel}
            textClass={tk.ts}
            accentBorderClass={accentBorderClass}
            accentTextClass={accentTextClass}
            textareaClass={tk.textarea}
            onFocus={setFocusedKey}
            onBlur={() => setFocusedKey(null)}
            onChange={updateField}
          />
        ))}
      </div>

      {/* Extra notes — full width */}
      <div className="mb-4">
        <SectionCard
          sec={EXTRA_SECTION}
          value={fields.extraNotes}
          isFocused={focusedKey === EXTRA_SECTION.key}
          panelClass={tk.panel}
          textClass={tk.ts}
          accentBorderClass={accentBorderClass}
          accentTextClass={accentTextClass}
          textareaClass={tk.textarea}
          onFocus={setFocusedKey}
          onBlur={() => setFocusedKey(null)}
          onChange={updateField}
        />
      </div>

      {/* Bottom copy */}
      <div className="flex justify-end">
        <button onClick={handleCopy} className={copyBtn(copied)}>
          {copied ? <><CheckIcon /> Copied!</> : <><CopyIcon /> Copy all</>}
        </button>
      </div>
    </div>
  )
}
