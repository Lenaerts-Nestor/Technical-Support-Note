import { useState, type ReactNode } from 'react'
import { useTk } from '../../hooks/useThemeTokens'

interface Props {
  title: string
  defaultOpen?: boolean
  children: ReactNode
  headerRight?: ReactNode
}

export function Accordion({ title, defaultOpen = false, children, headerRight }: Props) {
  const [open, setOpen] = useState(defaultOpen)
  const { tk } = useTk()

  return (
    <div className={tk.acc}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg transition-colors ${tk.hover}`}
      >
        <span className={`text-sm font-medium ${tk.tp}`}>{title}</span>
        <div className="flex items-center gap-2">
          {headerRight}
          {open ? (
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={tk.ts}
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          ) : (
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={tk.ts}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
        </div>
      </button>
      {open && <div className={`px-3.5 pb-3 border-t ${tk.brd}`}>{children}</div>}
    </div>
  )
}
