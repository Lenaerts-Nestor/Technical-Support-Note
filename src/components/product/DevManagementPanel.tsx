import type { Product } from "../../types";
import { Accordion } from "../shared/Accordion";
import { useTk } from "../../hooks/useThemeTokens";

interface Props {
  product: Product;
}

function StepList({ steps }: { steps: string[] }) {
  const { tk } = useTk();
  return (
    <ol className="space-y-2 pt-3">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-2.5">
          <span
            className={`flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5 ${tk.stepBubble}`}
          >
            {i + 1}
          </span>
          <span className={`text-xs leading-relaxed ${tk.ts}`}>{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function DevManagementPanel({ product }: Props) {
  const { tk } = useTk();
  const { deviceManagement: dm, firmwareUpdate: fw, quickRef: qr } = product;

  return (
    <div className="space-y-3">
      {/* Device Management */}
      <div className={`rounded-xl border p-4 ${tk.panel}`}>
        <div className="flex items-center gap-2 mb-3">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke={tk.accentColor}
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
          </svg>
          <h3 className={`text-sm font-semibold ${tk.tp}`}>
            Device Management
          </h3>
        </div>

        <div className="space-y-2">
          <Accordion title="Factory Reset" defaultOpen={false}>
            {dm.factoryReset.methods.map((method, mi) => (
              <div key={mi}>
                {method.title && (
                  <p className={`text-xs font-medium mb-1 mt-2 ${tk.ts}`}>
                    {method.title}
                  </p>
                )}
                <StepList steps={method.steps} />
              </div>
            ))}
          </Accordion>

          {/* Only rendered when device has a physical reset button */}
          {dm.physicalButtonReset && (
            <Accordion title="Physical Button Reset" defaultOpen={true}>
              {dm.physicalButtonReset.methods.map((method, mi) => (
                <div key={mi}>
                  {method.title && (
                    <p className={`text-xs font-medium mb-1 mt-2 ${tk.ts}`}>
                      {method.title}
                    </p>
                  )}
                  <StepList steps={method.steps} />
                </div>
              ))}
            </Accordion>
          )}
        </div>
      </div>

      {/* Firmware Update */}
      <div className={`rounded-xl border p-4 ${tk.panel}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke={tk.accentColor}
              strokeWidth="2"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <h3 className={`text-sm font-semibold ${tk.tp}`}>
              Firmware Update
            </h3>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      {qr.length > 0 && (
        <div className={`rounded-xl border p-4 ${tk.panel}`}>
          <p
            className={`text-[10px] font-semibold tracking-widest uppercase mb-3 ${tk.tx}`}
          >
            Quick Reference
          </p>
          <div className="space-y-0">
            {qr.map((item, i) => (
              <div
                key={i}
                className={`flex justify-between items-center py-2 text-xs ${
                  i > 0 ? `border-t ${tk.row}` : ""
                }`}
              >
                <span className={tk.ts}>{item.label}</span>
                <span className={`font-mono font-medium text-right ${tk.tp}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
