import { useState, useCallback } from 'react'
import { useTk } from '../../hooks/useThemeTokens'

interface Props {
  text: string
  label?: string
}

export function CopyButton({ text, label = 'Copy' }: Props) {
  const [copied, setCopied] = useState(false)
  const { tk } = useTk()

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Fallback for non-secure contexts
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [text])

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-md transition-all duration-150 font-medium flex-shrink-0 ${
        copied ? 'bg-emerald-500 text-white' : tk.copy
      }`}
    >
      {copied ? (
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      {copied ? 'Copied!' : label}
    </button>
  )
}
