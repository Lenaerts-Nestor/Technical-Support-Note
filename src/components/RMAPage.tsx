import { useState } from 'react'
import { useTk } from '../hooks/useThemeTokens'
import { RMA_ASKING_SENTENCES, RMA_APPROVING_SENTENCES, RMA_TEMPLATE_BODY } from '../data/rma'

const LANGUAGES = ['English', 'Dutch', 'Spanish'] as const
type Language = typeof LANGUAGES[number]

const LANG_BADGE: Record<Language, string> = { English: 'EN', Dutch: 'NL', Spanish: 'ES' }

const ASKING_SENTENCES = RMA_ASKING_SENTENCES
const APPROVING_SENTENCES = RMA_APPROVING_SENTENCES
const TEMPLATE_COPY_BODY = RMA_TEMPLATE_BODY

const QUICK_LINKS = [
  { label: 'Crestacare Portal', url: 'https://crestacare.crestron.com/' },
  { label: 'Crestron Support', url: 'https://www.crestron.com/Support' },
]

interface UnitRow { serialNumber: string; productName: string }
interface RmaFields {
  issueDescription: string; projectReference: string
  companyName: string; deliveryContact: string
  address: string; city: string; postalCode: string; country: string
}

function buildFilledCopy(units: UnitRow[], fields: RmaFields): string {
  const lines: string[] = []
  if (units.length === 1) {
    lines.push(`Serial Number: ${units[0].serialNumber || '—'}`)
    lines.push(`Product name: ${units[0].productName || '—'}`)
  } else {
    units.forEach((u, i) =>
      lines.push(`Unit ${i + 1} — Serial: ${u.serialNumber || '—'} | Product: ${u.productName || '—'}`)
    )
  }
  lines.push(`Issue description: ${fields.issueDescription || '—'}`)
  lines.push(`Project name/reference: ${fields.projectReference || '—'}`)
  lines.push(`Delivery/return address confirmation`)
  lines.push(`  Company name: ${fields.companyName || '—'}`)
  lines.push(`  Delivery contact: ${fields.deliveryContact || '—'}`)
  lines.push(`  Address: ${fields.address || '—'}`)
  lines.push(`  City: ${fields.city || '—'}`)
  lines.push(`  Postal Code: ${fields.postalCode || '—'}`)
  lines.push(`  Country: ${fields.country || '—'}`)
  return lines.join('\n')
}

// ── Icons ────────────────────────────────────────────────────

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
function CopyIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
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
function LinkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

// ── Main component ───────────────────────────────────────────

export function RMAPage() {
  const { tk, dark } = useTk()
  const [language, setLanguage] = useState<Language>('English')
  const [units, setUnits] = useState<UnitRow[]>([{ serialNumber: '', productName: '' }])
  const [fields, setFields] = useState<RmaFields>({
    issueDescription: '', projectReference: '',
    companyName: '', deliveryContact: '',
    address: '', city: '', postalCode: '', country: '',
  })
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const doCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const addUnit = () => setUnits((u) => [...u, { serialNumber: '', productName: '' }])
  const removeUnit = (i: number) => setUnits((u) => u.filter((_, idx) => idx !== i))
  const updateUnit = (i: number, key: keyof UnitRow, val: string) =>
    setUnits((u) => u.map((row, idx) => (idx === i ? { ...row, [key]: val } : row)))
  const updateField =
    (key: keyof RmaFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }))

  // Styles — all accent colours come from useThemeTokens so they can be changed centrally
  const accentText   = tk.focusTextAccent
  const langActive   = tk.btnActive
  const langInactive = tk.btnInactive
  const addBtn = dark
    ? 'text-[#ffffff] border-[#3a3a3a] hover:bg-[#262626]'
    : 'text-[#525252] border-[#cfcfcf] hover:bg-[#f5f5f5] hover:text-[#000000]'
  const removeBtn = dark
    ? 'text-[#737373] hover:text-[#f87171] hover:bg-[#450a0a]'
    : 'text-[#8c8c8c] hover:text-[#991b1b] hover:bg-[#fee2e2]'

  const copyBtnClass = (key: string) =>
    `flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border transition-all flex-shrink-0 ${
      copiedKey === key ? tk.btnActive : tk.btnInactive
    }`

  const askingSentences = ASKING_SENTENCES[language]
  const approvingSentences = APPROVING_SENTENCES[language]
  const templateLine = dark ? 'text-[#4a4a4a]' : 'text-[#c0c0c0]'
  const templateLabel = dark ? 'text-[#a3a3a3]' : 'text-[#525252]'

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between flex-shrink-0 gap-4">
        <div>
          <h1 className={`text-2xl font-bold tracking-tight mb-0.5 ${tk.tp}`}>RMA</h1>
          <p className={`text-sm ${tk.ts}`}>Return Merchandise Authorization — templates &amp; form</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex gap-1.5">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  language === lang ? langActive : langInactive
                }`}
              >
                {LANG_BADGE[lang]} · {lang}
              </button>
            ))}
          </div>
          <div className={`w-px self-stretch border-l ${tk.brd}`} />
          <div className="flex gap-1.5">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${langInactive}`}
              >
                {link.label}
                <LinkIcon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="flex-1 min-h-0 flex gap-3">

        {/* ── LEFT: Fill-in form ─────────────────────────────── */}
        <div className={`flex-1 min-w-0 rounded-xl border flex flex-col overflow-hidden ${tk.panel}`}>
          <div className="px-4 pt-3 pb-2 flex-shrink-0 flex items-center justify-between">
            <p className={`text-[10px] font-semibold tracking-widest uppercase ${tk.tx}`}>RMA Details — Fill in</p>
            <button
              onClick={() => doCopy('left-filled', buildFilledCopy(units, fields))}
              className={copyBtnClass('left-filled')}
            >
              {copiedKey === 'left-filled' ? <CheckIcon /> : <CopyIcon />}
              {copiedKey === 'left-filled' ? 'Copied' : 'Copy filled'}
            </button>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-4 flex flex-col gap-3">

            {/* Units */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <p className={`text-[10px] font-semibold tracking-widest uppercase ${tk.tx}`}>Units</p>
                <button
                  onClick={addUnit}
                  className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium border transition-all ${addBtn}`}
                >
                  <PlusIcon /> Add unit
                </button>
              </div>
              <div className="flex flex-col gap-1.5">
                {units.map((unit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex-1 grid grid-cols-2 gap-2">
                      <div>
                        {i === 0 && (
                          <label className={`block text-[10px] font-semibold mb-0.5 ${tk.tx}`}>Serial Number</label>
                        )}
                        <input
                          type="text"
                          value={unit.serialNumber}
                          onChange={(e) => updateUnit(i, 'serialNumber', e.target.value)}
                          placeholder="e.g. 1234567"
                          className={`w-full px-2.5 py-1.5 rounded-lg border text-xs outline-none transition-all ${tk.inp}`}
                        />
                      </div>
                      <div>
                        {i === 0 && (
                          <label className={`block text-[10px] font-semibold mb-0.5 ${tk.tx}`}>Product Name</label>
                        )}
                        <input
                          type="text"
                          value={unit.productName}
                          onChange={(e) => updateUnit(i, 'productName', e.target.value)}
                          placeholder="e.g. TSW-1070"
                          className={`w-full px-2.5 py-1.5 rounded-lg border text-xs outline-none transition-all ${tk.inp}`}
                        />
                      </div>
                    </div>
                    {units.length > 1 && (
                      <button
                        onClick={() => removeUnit(i)}
                        className={`p-1.5 rounded-md transition-all flex-shrink-0 ${i === 0 ? 'mt-4' : ''} ${removeBtn}`}
                        title="Remove unit"
                      >
                        <TrashIcon />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Issue Description — textarea */}
            <div>
              <label className={`block text-[10px] font-semibold mb-1 ${tk.tx}`}>Issue Description</label>
              <textarea
                value={fields.issueDescription}
                onChange={updateField('issueDescription')}
                placeholder="Describe the issue... (Enter for new line)"
                rows={4}
                className={`w-full px-2.5 py-1.5 rounded-lg border text-xs outline-none transition-all resize-y ${tk.textarea}`}
              />
            </div>

            {/* Other fields — 2-col grid */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {(
                [
                  { key: 'projectReference', label: 'Project Name / Reference', placeholder: 'Project or reference' },
                  { key: 'companyName', label: 'Company Name', placeholder: 'Company' },
                  { key: 'deliveryContact', label: 'Delivery Contact', placeholder: 'Contact person' },
                  { key: 'address', label: 'Address', placeholder: 'Street address' },
                  { key: 'city', label: 'City', placeholder: 'City' },
                  { key: 'postalCode', label: 'Postal Code', placeholder: 'Postal code' },
                  { key: 'country', label: 'Country', placeholder: 'Country' },
                ] as { key: keyof RmaFields; label: string; placeholder: string }[]
              ).map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label className={`block text-[10px] font-semibold mb-0.5 ${tk.tx}`}>{label}</label>
                  <input
                    type="text"
                    value={fields[key]}
                    onChange={updateField(key)}
                    placeholder={placeholder}
                    className={`w-full px-2.5 py-1.5 rounded-lg border text-xs outline-none transition-all ${tk.inp}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Templates column ────────────────────────── */}
        <div className="flex-1 min-w-0 flex flex-col gap-3">

          {/* Asking RMA template */}
          <div className={`rounded-xl border flex-1 min-h-0 flex flex-col overflow-hidden ${tk.panel}`}>
            <div className="px-4 pt-3 pb-2 flex-shrink-0">
              <p className={`text-[10px] font-semibold tracking-widest uppercase ${tk.tx}`}>Asking RMA</p>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-3 flex flex-col gap-2.5">

              {/* Sentence option buttons */}
              {askingSentences.map((sentence, i) => {
                const key = `ask-${language}-${i}`
                const copyText = `${sentence}\n\n${TEMPLATE_COPY_BODY}`
                return (
                  <div key={key} className={`flex items-start gap-2.5 rounded-lg border p-2.5 ${tk.surface}`}>
                    <span className={`text-[10px] font-bold mt-0.5 w-14 flex-shrink-0 ${accentText}`}>
                      Option {i + 1}
                    </span>
                    <span className={`text-xs flex-1 leading-relaxed ${tk.ts}`}>{sentence}</span>
                    <button onClick={() => doCopy(key, copyText)} className={copyBtnClass(key)}>
                      {copiedKey === key ? <CheckIcon /> : <CopyIcon />}
                      {copiedKey === key ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                )
              })}

              <div className={`border-t ${tk.brd}`} />

              {/* Static template preview */}
              <div className={`rounded-lg border px-3 py-2.5 ${tk.surface}`}>
                <p className={`text-[10px] font-semibold tracking-widest uppercase mb-2 ${tk.tx}`}>Template preview</p>
                <div className="flex flex-col gap-1">
                  {[
                    { label: 'Serial Number', indent: false },
                    { label: 'Product name', indent: false },
                    { label: 'Issue description', indent: false },
                    { label: 'Project name/reference', indent: false },
                    { label: 'Delivery/return address confirmation', indent: false, isHeader: true },
                    { label: 'Company name', indent: true },
                    { label: 'Delivery contact', indent: true },
                    { label: 'Address', indent: true },
                    { label: 'City', indent: true },
                    { label: 'Postal Code', indent: true },
                    { label: 'Country', indent: true },
                  ].map(({ label, indent, isHeader }) => (
                    <div key={label} className={`flex items-center gap-1.5 ${indent ? 'pl-4' : ''}`}>
                      {!isHeader && <span className={`text-xs ${templateLabel}`}>{label}:</span>}
                      {isHeader && <span className={`text-xs font-medium ${tk.ts}`}>{label}</span>}
                      {!isHeader && <span className={`text-xs flex-1 border-b ${templateLine}`} style={{ height: '1px', minWidth: '40px' }} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Approving an RMA */}
          <div className={`rounded-xl border flex-shrink-0 ${tk.panel}`}>
            <div className="px-4 pt-3 pb-2">
              <p className={`text-[10px] font-semibold tracking-widest uppercase ${tk.tx}`}>Approving an RMA</p>
            </div>
            <div className="px-4 pb-3">
              <div className={`rounded-lg border p-3 flex items-start gap-3 ${tk.surface}`}>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-medium mb-1 ${tk.tp}`}>{approvingSentences[0]}</p>
                  <p className={`text-xs ${tk.ts}`}>{approvingSentences[1]}</p>
                </div>
                <button
                  onClick={() => doCopy(`approve-${language}`, approvingSentences.join('\n'))}
                  className={copyBtnClass(`approve-${language}`)}
                >
                  {copiedKey === `approve-${language}` ? <CheckIcon /> : <CopyIcon />}
                  {copiedKey === `approve-${language}` ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
