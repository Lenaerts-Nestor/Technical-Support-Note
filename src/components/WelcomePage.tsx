import { PRODUCTS } from "../data/products";
import { RESOURCES } from "../data/resources";
import { GUIDES } from "../data/guides";
import { useTk } from "../hooks/useThemeTokens";

export function WelcomePage() {
  const { tk } = useTk();

  const stats = [
    { label: "Products", value: Object.keys(PRODUCTS).length },
    { label: "Resources", value: Object.keys(RESOURCES).length },
    { label: "Guides", value: Object.keys(GUIDES).length },
  ];

  const tips = [
    "Click any product in the sidebar to view specs, device management, and troubleshooting steps.",
    "Use the Copy button on troubleshooting solutions to instantly paste them into client emails.",
    "Resources contain pre-written email templates in English, Nederlands, and Español.",
    "Step-by-step guides walk through procedures like SIMPL Windows uploads and Toolbox diagnostics.",
    "Add new products by editing src/data/products.ts — no UI component changes needed.",
  ];

  return (
    <div style={{ maxWidth: "640px" }}>
      <div className="mb-7">
        <h1 className={`text-3xl font-bold tracking-tight mb-2 ${tk.tp}`}>
          Support Hub
        </h1>
        <p className={`text-base leading-relaxed ${tk.ts}`}>
          INFORMATION TO COME
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-7">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`rounded-xl border p-4 text-center ${tk.panel}`}
          >
            <p className={`text-2xl font-bold ${tk.accentText}`}>
              {stat.value}
            </p>
            <p className={`text-xs mt-1 ${tk.ts}`}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick tips */}
      <div className={`rounded-xl border p-5 ${tk.panel}`}>
        <h2 className={`text-sm font-semibold mb-3 ${tk.tp}`}>Quick Tips</h2>
        <ul className="space-y-2.5">
          {tips.map((tip, i) => (
            <li key={i} className="flex gap-2.5">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke={tk.accentColor}
                strokeWidth="2.5"
                className="flex-shrink-0 mt-0.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              <p className={`text-sm ${tk.ts}`}>{tip}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
