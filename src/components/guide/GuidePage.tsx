import { useState } from 'react'
import type { GuideSection, GuideStep } from '../../types'
import { GUIDES } from '../../data/guides'
import { CopyButton } from '../shared/CopyButton'
import { useTk } from '../../hooks/useThemeTokens'

function StepCard({ step, num }: { step: GuideStep; num: number }) {
  const { tk } = useTk()
  const copyText = step.bigText ?? step.description
  return (
    <div className={`rounded-xl border ${tk.panel}`}>
      {/* Step header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span
            className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 ring-1 ${tk.stepBubble}`}
          >
            {num}
          </span>
          <span className={`text-sm font-semibold ${tk.tp}`}>{step.title}</span>
        </div>
        <CopyButton text={copyText} />
      </div>

      {/* Description + optional tip */}
      <div className="px-4 pb-4 space-y-3">
        <p className={`text-sm leading-relaxed ${tk.ts}`}>{step.description}</p>
        {step.bigText ? (
          <div className={`rounded-lg border p-4 text-sm leading-relaxed whitespace-pre-wrap ${tk.guideText}`}>
            {step.bigText}
          </div>
        ) : step.imageSrc ? (
          <div className="rounded-lg overflow-hidden border border-[#cfcfcf] dark:border-[#262626] bg-white">
            <img
              src={step.imageSrc}
              alt={`${step.title} screenshot`}
              className="w-full h-auto object-contain max-h-[70vh]"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className={`rounded-lg h-28 flex flex-col items-center justify-center ${tk.placeholder}`}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="mb-1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="text-[11px]">Screenshot placeholder</span>
          </div>
        )}
        {step.tip && (
          <div className={`flex gap-2 mt-3 rounded-lg border p-3 ${tk.tip}`}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="flex-shrink-0 mt-0.5"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <p className="text-xs leading-relaxed">{step.tip}</p>
          </div>
        )}
      </div>
    </div>
  )
}

function SectionCard({ section, num }: { section: GuideSection; num: number }) {
  const [open, setOpen] = useState(true)
  const { tk } = useTk()

  return (
    <div className={`rounded-2xl border ${tk.panel}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-5 py-4 ${
          open ? `border-b ${tk.brd}` : ''
        } transition-colors rounded-t-2xl ${tk.hover}`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`w-8 h-8 rounded-xl text-sm font-bold flex items-center justify-center ${tk.stepBubble}`}
          >
            {num}
          </span>
          <div className="text-left">
            <p className={`text-sm font-semibold ${tk.tp}`}>{section.title}</p>
            <p className={`text-xs ${tk.ts}`}>{section.description}</p>
          </div>
        </div>
        {open ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={tk.ts}>
            <polyline points="18 15 12 9 6 15" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={tk.ts}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </button>

      {open && (
        <div className="p-4 space-y-3">
          {section.steps.map((step, si) => (
            <div key={step.id}>
              <StepCard step={step} num={si + 1} />
              {/* Directional arrow between steps */}
              {si < section.steps.length - 1 && (
                <div className="flex justify-center py-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={tk.tx}
                    style={{ transform: 'rotate(90deg)' }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function GuidePage({ guideId }: { guideId: string }) {
  const { tk } = useTk()
  const guide = GUIDES[guideId]
  if (!guide) return null

  const totalSteps = guide.sections.reduce((acc, sec) => acc + sec.steps.length, 0)

  const diffBadge =
    guide.difficulty === 'Beginner'
      ? tk.bdgG
      : guide.difficulty === 'Intermediate'
        ? tk.bdgB
        : tk.bdgR

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: guide.color }}
        >
          <span className="text-white text-sm font-bold">{guide.initials}</span>
        </div>
        <div>
          <h1 className={`text-2xl font-bold tracking-tight ${tk.tp}`}>{guide.name}</h1>
          <p className={`text-sm mt-0.5 ${tk.ts}`}>{guide.subtitle}</p>
        </div>
      </div>

      {/* Metadata badges */}
      <div className="flex items-center gap-2 mb-5">
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${diffBadge}`}>
          {guide.difficulty}
        </span>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${tk.bdg}`}>
          {guide.timeEstimate}
        </span>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${tk.bdg}`}>
          {totalSteps} steps
        </span>
      </div>

      {/* In this guide */}
      <div className={`rounded-xl border p-4 mb-5 ${tk.panel}`}>
        <p className={`text-xs font-semibold mb-2.5 ${tk.ts}`}>In this guide</p>
        <div className="flex flex-wrap gap-2">
          {guide.sections.map((sec, i) => (
            <span key={i} className={`text-xs px-2.5 py-1 rounded-md ${tk.bdg}`}>
              {i + 1}. {sec.title}
            </span>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {guide.sections.map((sec, i) => (
          <SectionCard key={sec.id} section={sec} num={i + 1} />
        ))}
      </div>
    </div>
  )
}
