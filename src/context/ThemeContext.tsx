import { createContext, useContext, useState, type ReactNode } from 'react'

interface ThemeContextValue {
  dark: boolean
  toggle: () => void
  // colors for icons — computed from current theme
  sunColor: string
  moonColor: string
}

const ThemeContext = createContext<ThemeContextValue>({
  dark: false,
  toggle: () => {},
  sunColor: '#fbbf24',
  moonColor: '#075985',
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false)
  const toggle = () => setDark((d) => !d)

  // Sun color visible on dark mode (warm amber)
  const sunColor = dark ? '#fbbf24' : '#6b6560'
  // Moon color visible on light mode (deep blue on light)
  const moonColor = dark ? '#7d8590' : '#075985'

  return (
    <ThemeContext.Provider value={{ dark, toggle, sunColor, moonColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useDark = () => useContext(ThemeContext).dark
export const useThemeToggle = () => useContext(ThemeContext).toggle
export const useIconColors = () => {
  const ctx = useContext(ThemeContext)
  return { sunColor: ctx.sunColor, moonColor: ctx.moonColor }
}
