import type { Product } from "../../../types";
import { useState } from "react";
import { CopyButton } from "../../shared/CopyButton";
import { useTk } from "../../../hooks/useThemeTokens";

function EmptyState({ message }: { message: string }) {
  const { tk } = useTk();
  return (
    <div className={`rounded-xl border p-8 text-center ${tk.panel}`}>
      <p className={`text-sm ${tk.ts}`}>{message}</p>
    </div>
  );
}

export function CommonProblemsTab({ product }: { product: Product }) {
  const { tk } = useTk();
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set());
  const hasProblems = product.commonProblems.length > 0;
  const hasLinks = product.links.length > 0;

  if (!hasProblems && !hasLinks) {
    return <EmptyState message="No common problems documented yet." />;
  }

  return (
    <div className="space-y-4">
      {!hasProblems && (
        <EmptyState message="No common problems documented yet." />
      )}

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

      {hasLinks && (
        <div className={`rounded-xl border p-4 ${tk.panel}`}>
          <p
            className={`text-[10px] font-semibold tracking-widest uppercase mb-3 ${tk.tx}`}
          >
            Useful Links
          </p>
          <div className="space-y-2">
            {product.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between rounded-xl border p-3 transition-colors group ${tk.panel}`}
              >
                <div>
                  <p className={`text-sm font-medium ${tk.tp}`}>{link.title}</p>
                  {link.description && (
                    <p className={`text-xs mt-0.5 ${tk.ts}`}>
                      {link.description}
                    </p>
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
        </div>
      )}
    </div>
  );
}
