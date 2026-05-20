import type { NavItem } from '../types'
import { PRODUCTS } from '../data/products/index'
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
    selected?.type === 'product'
      ? 'Products'
      : selected?.type === 'resource'
        ? 'Resources'
        : selected?.type === 'guide'
          ? 'Guides'
          : null

  const partNumber = selected?.type === 'product' ? PRODUCTS[selected.id]?.partNumber : null
  const docsUrl = selected?.type === 'product' ? PRODUCTS[selected.id]?.docsUrl : null

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
        ) : (
          <span>Support Hub</span>
        )}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        {partNumber && (
          <span className={`text-xs px-2.5 py-1 rounded-md font-mono font-medium ${tk.bdg}`}>
            {partNumber}
          </span>
        )}
        {docsUrl && (
          <a
            href={docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md font-medium transition-colors border ${
              dark
                ? 'bg-[#21262d] text-[#7d8590] border-[#30363d] hover:text-[#e6edf3] hover:bg-[#30363d]'
                : 'bg-[#f2f1ed] text-[#6b6560] border-[#e5e2dc] hover:bg-[#e5e2dc] hover:text-[#1a1714]'
            }`}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Crestron Docs
          </a>
        )}

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
