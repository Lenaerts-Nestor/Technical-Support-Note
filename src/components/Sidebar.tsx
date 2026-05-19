import type { NavItem } from '../types'
import { NAV } from '../data/navigation'
import { PRODUCTS } from '../data/products'
import { RESOURCES } from '../data/resources'
import { useTk } from '../hooks/useThemeTokens'

interface Props {
  selected: NavItem | null
  onSelect: (item: NavItem) => void
  searchQuery: string
  onSearch: (q: string) => void
}

export function Sidebar({ selected, onSelect, searchQuery, onSearch }: Props) {
  const { tk } = useTk()

  const totalProducts = Object.keys(PRODUCTS).length
  const totalResources = Object.keys(RESOURCES).length

  const filteredNav = NAV.map((sec) => ({
    ...sec,
    items: sec.items.filter(
      (item) => !searchQuery || item.label.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  })).filter((sec) => !searchQuery || sec.items.length > 0)

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
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
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
            placeholder="Search product..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className={`w-full pl-7 pr-3 py-1.5 text-xs rounded-lg border outline-none transition-all ${tk.inp}`}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 pb-2">
        {filteredNav.map((sec) => (
          <div key={sec.section} className="mb-3">
            <p
              className={`px-2 py-1 text-[10px] font-semibold tracking-widest uppercase ${tk.navS}`}
            >
              {sec.section}
            </p>
            {sec.items.map((item) => (
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
        ))}
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
