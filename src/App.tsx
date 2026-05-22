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
import { VoiceCallPage } from './components/VoiceCallPage'
import { RMAPage } from './components/RMAPage'
import { CasesPage } from './components/cases/CasesPage'

// Inner component so it can consume ThemeContext
function AppInner() {
  const [selected, setSelected] = useState<NavItem | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const { tk } = useTk()

  const handleSelect = useCallback((item: NavItem) => {
    setSelected(item)
    setSearchQuery('')
  }, [])

  const renderContent = () => {
    if (!selected || selected.type === 'overview') return <WelcomePage />
    if (selected.type === 'voicecall') return <VoiceCallPage key={selected.id} />
    if (selected.type === 'rma') return <RMAPage key={selected.id} />
    if (selected.type === 'cases') return <CasesPage />
    if (selected.type === 'product') {
      return <ProductPage key={selected.id} productId={selected.id} />
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
