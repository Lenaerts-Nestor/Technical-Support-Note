import type { EmailTemplate, ResourceSection } from '../../types'
import { RESOURCES } from '../../data/resources'
import { CopyButton } from '../shared/CopyButton'
import { useTk } from '../../hooks/useThemeTokens'

function TemplateCard({ tmpl }: { tmpl: EmailTemplate }) {
  const { tk } = useTk()
  return (
    <div className={`rounded-xl border p-3 ${tk.tmpl}`}>
      <div className="flex items-center justify-between mb-2.5">
        <span className={`text-xs font-semibold ${tk.tp}`}>{tmpl.language}</span>
        <CopyButton text={tmpl.content} />
      </div>
      <pre
        className={`text-xs leading-relaxed whitespace-pre-wrap ${tk.ts}`}
        style={{ fontFamily: 'inherit' }}
      >
        {tmpl.content}
      </pre>
    </div>
  )
}

function SectionIcon({ icon }: { icon: ResourceSection['icon'] }) {
  if (icon === 'followup') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    )
  }
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export function ResourcePage({ resourceId }: { resourceId: string }) {
  const { tk } = useTk()
  const resource = RESOURCES[resourceId]
  if (!resource) return null

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-7">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: resource.color }}
        >
          <span className="text-white text-sm font-bold">{resource.initials}</span>
        </div>
        <div>
          <h1 className={`text-2xl font-bold tracking-tight ${tk.tp}`}>{resource.name}</h1>
          <p className={`text-sm mt-0.5 ${tk.ts}`}>{resource.subtitle}</p>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-5">
        {resource.sections.map((sec, si) => (
          <div key={si} className={`rounded-2xl border p-5 ${tk.panel}`}>
            {/* Section header */}
            <div className="flex items-start gap-2 mb-4">
              <span style={{ color: resource.color }} className="mt-0.5">
                <SectionIcon icon={sec.icon} />
              </span>
              <div>
                <h3 className={`text-sm font-semibold ${tk.tp}`}>{sec.title}</h3>
                <p className={`text-xs mt-0.5 ${tk.ts}`}>{sec.description}</p>
              </div>
            </div>

            {/* Templates — 3-column grid */}
            <div className="grid grid-cols-3 gap-3">
              {sec.templates.map((tmpl, ti) => (
                <TemplateCard key={ti} tmpl={tmpl} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
