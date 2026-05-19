import { createContext, useContext, useState, type ReactNode } from 'react'

interface ThemeContextValue {
  dark: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  dark: false,
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false)
  const toggle = () => setDark((d) => !d)
  return <ThemeContext.Provider value={{ dark, toggle }}>{children}</ThemeContext.Provider>
}

export const useDark = () => useContext(ThemeContext).dark
export const useThemeToggle = () => useContext(ThemeContext).toggle
