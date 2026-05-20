import { useState } from "react";
import { PRODUCTS } from "../../data/products/index";
import { DevManagementPanel } from "./DevManagementPanel";
import { ProductInfoTab } from "./tabs/ProductInfoTab";
import {
  TechTipsTab,
  CommonProblemsTab,
  MyNotesTab,
  LinksTab,
} from "./tabs/OtherTabs";
import { useTk } from "../../hooks/useThemeTokens";

const TABS = [
  { id: "info", label: "Product Information" },
  { id: "tips", label: "Tech Tips" },
  { id: "problems", label: "Common Problems" },
  { id: "notes", label: "My Notes" },
  { id: "links", label: "Links" },
] as const;

type TabId = (typeof TABS)[number]["id"];

interface Props {
  productId: string;
  notes: string;
  onNotes: (value: string) => void;
}

export function ProductPage({ productId, notes, onNotes }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>("info");
  const { tk } = useTk();
  const product = PRODUCTS[productId];
  if (!product) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return <ProductInfoTab product={product} />;
      case "tips":
        return <TechTipsTab product={product} />;
      case "problems":
        return <CommonProblemsTab product={product} />;
      case "notes":
        return <MyNotesTab notes={notes} onNotes={onNotes} />;
      case "links":
        return <LinksTab product={product} />;
    }
  };

  return (
    <div className="flex gap-5">
      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="mb-5">
          <h1 className={`text-2xl font-bold tracking-tight ${tk.tp}`}>
            {product.name}
          </h1>
          <p className={`text-sm mt-0.5 ${tk.ts}`}>{product.subtitle}</p>
        </div>

        {/* Tab navigation */}
        <div className={`flex border-b mb-5 ${tk.brd}`}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2.5 text-xs font-medium transition-all duration-150 -mb-px rounded-t-md ${
                activeTab === tab.id ? tk.tabA : tk.tab
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {renderContent()}
      </div>

      {/* Right sidebar — Device Management */}
      <div className="w-80 flex-shrink-0">
        <DevManagementPanel product={product} />
      </div>
    </div>
  );
}
