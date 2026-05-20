import { useState } from 'react'
import type { NavItem } from '../types'
import { NAV, PINNED } from '../data/navigation'
import { PRODUCTS } from '../data/products/index'
import { RESOURCES } from '../data/resources'
import { useTk } from '../hooks/useThemeTokens'

interface Props {
  selected: NavItem | null
  onSelect: (item: NavItem) => void
  searchQuery: string
  onSearch: (q: string) => void
}

function OverviewIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.09-1.09a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 150ms' }}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function pinnedIcon(type: NavItem['type']) {
  if (type === 'overview') return <OverviewIcon />
  if (type === 'voicecall') return <PhoneIcon />
  return null
}

export function Sidebar({ selected, onSelect, searchQuery, onSearch }: Props) {
  const { tk } = useTk()

  const totalProducts = Object.keys(PRODUCTS).length
  const totalResources = Object.keys(RESOURCES).length

  // Track which sections are collapsed (only applicable when section has >2 items)
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())
  const toggleSection = (name: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  const isSearching = !!searchQuery

  const filteredPinned = PINNED.filter(
    (item) => !isSearching || item.label.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredNav = NAV.map((sec) => ({
    ...sec,
    items: sec.items.filter(
      (item) => !isSearching || item.label.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  })).filter((sec) => !isSearching || sec.items.length > 0)

  return (
    <aside
      className={`w-56 flex-shrink-0 flex flex-col border-r ${tk.sidebar} transition-colors duration-200 h-full`}
    >
      {/* Logo */}
      <div className={`px-4 py-3.5 border-b ${tk.brd} flex-shrink-0`}>
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: '#0d9488' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <p className={`text-sm font-semibold leading-tight ${tk.tp}`}>Support Hub</p>
            <p className={`text-[11px] leading-tight ${tk.ts}`}>Case Dashboard</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-3 py-2.5 flex-shrink-0">
        <div className="relative">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`absolute left-2.5 top-1/2 -translate-y-1/2 ${tk.tx}`}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className={`w-full pl-7 pr-3 py-1.5 text-xs rounded-lg border outline-none transition-all ${tk.inp}`}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 pb-2">
        {/* Pinned items (Overview, Voice Call) */}
        {filteredPinned.length > 0 && (
          <div className="mb-2">
            {filteredPinned.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelect(item)}
                style={selected?.id === item.id ? { paddingLeft: '10px' } : {}}
                className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 mb-0.5 ${
                  selected?.id === item.id ? tk.navA : tk.navI
                }`}
              >
                <span className="flex items-center gap-2">
                  {pinnedIcon(item.type)}
                  {item.label}
                </span>
                {selected?.id === item.id && (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Divider after pinned items (when not searching) */}
        {!isSearching && filteredPinned.length > 0 && (
          <div className={`mx-2 mb-3 border-t ${tk.brd}`} />
        )}

        {/* Sections */}
        {filteredNav.map((sec) => {
          const isCollapsible = sec.items.length > 2
          const isOpen = !isCollapsible || isSearching || !collapsed.has(sec.section)

          return (
            <div key={sec.section} className="mb-3">
              {/* Section header */}
              <button
                disabled={!isCollapsible}
                onClick={() => isCollapsible && toggleSection(sec.section)}
                className={`w-full flex items-center justify-between px-2 py-1 text-[10px] font-semibold tracking-widest uppercase ${tk.navS} ${
                  isCollapsible ? `rounded hover:opacity-80 transition-opacity cursor-pointer` : 'cursor-default'
                }`}
              >
                <span>{sec.section}</span>
                {isCollapsible && <ChevronIcon open={isOpen} />}
              </button>

              {/* Items */}
              {isOpen &&
                sec.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onSelect(item)}
                    style={selected?.id === item.id ? { paddingLeft: '10px' } : {}}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 mb-0.5 ${
                      selected?.id === item.id ? tk.navA : tk.navI
                    }`}
                  >
                    <span className="text-left">{item.label}</span>
                    {selected?.id === item.id && (
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    )}
                  </button>
                ))}
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className={`px-4 py-2 border-t ${tk.brd} flex-shrink-0`}>
        <p className={`text-[11px] ${tk.tx}`}>
          {totalProducts} products · {totalResources} resources
        </p>
      </div>
    </aside>
  )
}
