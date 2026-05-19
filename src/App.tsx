import { useState, useCallback } from 'react'
import type { NavItem } from './types'
import { ThemeProvider } from './context/ThemeContext'
import { useTk } from './hooks/useThemeTokens'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { ProductPage } from './components/product/ProductPage'
import { ResourcePage } from './components/resource/ResourcePage'
import { GuidePage } from './components/guide/GuidePage'
import { WelcomePage } from './components/WelcomePage'

// Inner component so it can consume ThemeContext
function AppInner() {
  const [selected, setSelected] = useState<NavItem | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  // In-memory notes per product — resets on page refresh
  const [notesMap, setNotesMap] = useState<Record<string, string>>({})
  const { tk } = useTk()

  const handleSelect = useCallback((item: NavItem) => {
    setSelected(item)
    setSearchQuery('')
  }, [])

  const handleNotes = useCallback((productId: string, notes: string) => {
    setNotesMap((prev) => ({ ...prev, [productId]: notes }))
  }, [])

  const renderContent = () => {
    if (!selected) return <WelcomePage />
    if (selected.type === 'product') {
      return (
        <ProductPage
          // key forces a full remount (and tab reset) when switching products
          key={selected.id}
          productId={selected.id}
          notes={notesMap[selected.id] ?? ''}
          onNotes={(notes) => handleNotes(selected.id, notes)}
        />
      )
    }
    if (selected.type === 'resource') return <ResourcePage key={selected.id} resourceId={selected.id} />
    if (selected.type === 'guide') return <GuidePage key={selected.id} guideId={selected.id} />
    return null
  }

  return (
    <div className={`flex ${tk.app} transition-colors duration-200`} style={{ height: '100vh', overflow: 'hidden' }}>
      <Sidebar
        selected={selected}
        onSelect={handleSelect}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />
      <div className="flex-1 flex flex-col" style={{ overflow: 'hidden' }}>
        <TopBar selected={selected} />
        <main className={`flex-1 overflow-y-auto p-6 ${tk.app}`}>{renderContent()}</main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
