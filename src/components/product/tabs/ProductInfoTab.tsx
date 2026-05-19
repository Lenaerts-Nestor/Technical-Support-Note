// src/components/product/tabs/ProductInfoTab.tsx
import type { Product } from "../../../types";
import { useState } from "react";
import { useTk } from "../../../hooks/useThemeTokens";

export function ProductInfoTab({ product }: { product: Product }) {
  const { tk } = useTk();
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set());
  return (
    <div className="space-y-4">
      <div
        className={`rounded-xl border p-4 text-sm leading-relaxed ${tk.panel} ${tk.ts}`}
      >
        {product.description}
      </div>
      {product.specs.map((sec, si) => {
        const isOpen = openSet.has(si);
        return (
          <div key={si} className={`rounded-xl border ${tk.panel}`}>
            <button
              type="button"
              onClick={() =>
                setOpenSet((prev) => {
                  const next = new Set(prev);
                  if (next.has(si)) next.delete(si);
                  else next.add(si);
                  return next;
                })
              }
              aria-expanded={isOpen}
              className={`w-full text-left flex items-center gap-2 px-4 py-3 border-b ${tk.brd}`}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke={tk.accentColor}
                strokeWidth="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <h3 className={`text-sm font-semibold ${tk.tp} flex-1`}>
                {sec.title}
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
              <div className="px-4">
                {sec.fields.map((f, fi) => (
                  <div
                    key={fi}
                    className={`flex justify-between items-center py-2.5 text-sm ${fi < sec.fields.length - 1 ? `border-b ${tk.row}` : ""}`}
                  >
                    <span className={tk.ts}>{f.label}</span>
                    <span className={`font-medium ${tk.tp}`}>{f.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
