import type { Product } from "../../../types";
import { useState } from "react";
import { CopyButton } from "../../shared/CopyButton";
import { useTk } from "../../../hooks/useThemeTokens";

// ---- Shared empty state ----
function EmptyState({ message }: { message: string }) {
  const { tk } = useTk();
  return (
    <div className={`rounded-xl border p-8 text-center ${tk.panel}`}>
      <p className={`text-sm ${tk.ts}`}>{message}</p>
    </div>
  );
}

// ============================================================
// Tech Tips Tab
// ============================================================
export function TechTipsTab({ product }: { product: Product }) {
  const { tk } = useTk();
  if (!product.techTips.length)
    return <EmptyState message="No tech tips yet for this product." />;
  return (
    <div className="space-y-3">
      {product.techTips.map((item, i) => (
        <div key={i} className={`flex gap-3 rounded-xl border p-4 ${tk.panel}`}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b45309"
            strokeWidth="2"
            className="flex-shrink-0 mt-0.5"
          >
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
          </svg>
          <p className={`text-sm leading-relaxed ${tk.ts}`}>{item.tip}</p>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// Common Problems Tab
// ============================================================
export function CommonProblemsTab({ product }: { product: Product }) {
  const { tk } = useTk();
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set());
  if (!product.commonProblems.length)
    return <EmptyState message="No common problems documented yet." />;
  return (
    <div className="space-y-4">
      {product.commonProblems.map((item, i) => {
        const isOpen = openSet.has(i);
        return (
          <div key={i} className={`rounded-xl border ${tk.panel}`}>
            <button
              type="button"
              onClick={() =>
                setOpenSet((prev) => {
                  const next = new Set(prev);
                  if (next.has(i)) next.delete(i);
                  else next.add(i);
                  return next;
                })
              }
              aria-expanded={isOpen}
              className={`w-full text-left flex items-center gap-2.5 px-4 py-3 border-b ${tk.brd}`}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c0392b"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <h3 className={`text-sm font-semibold ${tk.tp} flex-1`}>
                {item.problem}
              </h3>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transform transition-transform duration-150 ${isOpen ? "rotate-180" : ""} ${tk.tx}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-4 py-3">
                <ol className="space-y-2.5">
                  {item.solutions.map((sol, si) => (
                    <li key={si} className="flex gap-2.5 items-start">
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5 ${tk.stepBubble}`}
                      >
                        {si + 1}
                      </span>
                      <div className="flex-1 flex items-start justify-between gap-2">
                        <p className={`text-sm leading-relaxed ${tk.ts}`}>
                          {sol}
                        </p>
                        <CopyButton text={sol} />
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// My Notes Tab (in-memory — resets on page refresh)
// ============================================================
interface NotesProps {
  notes: string;
  onNotes: (value: string) => void;
}

export function MyNotesTab({ notes, onNotes }: NotesProps) {
  const { tk } = useTk();
  return (
    <div className="space-y-3">
      <div
        className={`flex items-start gap-2 rounded-xl border p-3 text-xs ${tk.tip}`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="flex-shrink-0 mt-0.5"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span>
          Notes are stored in-memory only and will reset on page refresh.
        </span>
      </div>
      <textarea
        value={notes}
        onChange={(e) => onNotes(e.target.value)}
        placeholder="Write your notes here... (e.g., known issues, site-specific configs, customer quirks)"
        rows={16}
        className={`w-full rounded-xl border p-4 text-sm leading-relaxed resize-none outline-none focus:ring-2 focus:ring-teal-500/30 transition-all ${tk.textarea}`}
      />
    </div>
  );
}

// ============================================================
// Links Tab
// ============================================================
export function LinksTab({ product }: { product: Product }) {
  const { tk } = useTk();
  if (!product.links.length) {
    return (
      <div className={`rounded-xl border p-8 text-center ${tk.panel}`}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`mx-auto mb-2 ${tk.tx}`}
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        <p className={`text-sm ${tk.ts}`}>No links yet.</p>
        <p className={`text-xs mt-1 ${tk.tx}`}>
          Add documentation URLs in src/data/products.ts
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-2">
      {product.links.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-between rounded-xl border p-4 transition-colors group ${tk.panel}`}
        >
          <div>
            <p className={`text-sm font-medium ${tk.tp}`}>{link.title}</p>
            {link.description && (
              <p className={`text-xs mt-0.5 ${tk.ts}`}>{link.description}</p>
            )}
          </div>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`flex-shrink-0 ${tk.tx}`}
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      ))}
    </div>
  );
}
