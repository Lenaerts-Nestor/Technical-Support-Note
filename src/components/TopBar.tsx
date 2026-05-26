import type { NavItem } from '../types'
import { useTk } from '../hooks/useThemeTokens'
import { useThemeToggle, useIconColors } from '../context/ThemeContext'

interface Props {
  selected: NavItem | null
}

export function TopBar({ selected }: Props) {
  const { tk, dark } = useTk()
  const toggle = useThemeToggle()
  const { sunColor, moonColor } = useIconColors()

  const sectionLabel =
    selected?.type === 'resource'
      ? 'Resources'
      : null

  return (
    <header
      className={`flex-shrink-0 h-12 flex items-center justify-between px-6 border-b ${tk.topbar} transition-colors duration-200`}
    >
      {/* Breadcrumb */}
      <div className={`flex items-center gap-1.5 text-xs ${tk.ts}`}>
        {sectionLabel ? (
          <>
            <span>{sectionLabel}</span>
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <span className={tk.tp}>{selected?.label}</span>
          </>
        ) : selected?.type === 'voicecall' || selected?.type === 'overview' ? (
          <span className={tk.tp}>{selected.label}</span>
        ) : (
          <span>Support Hub</span>
        )}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
       

        {/* Theme toggle */}
        <button
          onClick={toggle}
          className={`p-1.5 rounded-lg transition-colors ${
            dark
              ? 'text-[#7d8590] hover:text-[#e6edf3] hover:bg-[#21262d]'
              : 'text-[#6b6560] hover:text-[#1a1714] hover:bg-[#f2f1ed]'
          }`}
        >
          {dark ? (
            // Sun icon
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={sunColor} strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            // Moon icon
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={moonColor} strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}
