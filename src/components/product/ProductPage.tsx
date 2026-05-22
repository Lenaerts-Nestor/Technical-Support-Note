import { PRODUCTS } from "../../data/products/index";
import { DevManagementPanel } from "./DevManagementPanel";
import { CommonProblemsTab } from "./tabs/OtherTabs";
import { useTk } from "../../hooks/useThemeTokens";

interface Props {
  productId: string;
}

export function ProductPage({ productId }: Props) {
  const { tk } = useTk();
  const product = PRODUCTS[productId];
  if (!product) return null;

  return (
    <div className="flex gap-5">
      {/* Main content — Common Problems */}
      <div className="flex-1 min-w-0">
        <div className="mb-5">
          <h1 className={`text-2xl font-bold tracking-tight ${tk.tp}`}>
            {product.name}
          </h1>
          <p className={`text-sm mt-0.5 ${tk.ts}`}>{product.subtitle}</p>
        </div>
        <CommonProblemsTab product={product} />
      </div>

      {/* Right sidebar — Device Management, Firmware Update, Quick Reference */}
      <div className="w-80 flex-shrink-0">
        <DevManagementPanel product={product} />
      </div>
    </div>
  );
}
