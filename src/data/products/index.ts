import type { Product } from "../../types";

// TSW touch panels
import { tsw570 } from "./tsw/tsw-570";
import { tsw770 } from "./tsw/tsw-770";
import { tsw1070 } from "./tsw/tsw-1070";

// TSR remote controls
import { tsr310 } from "./tsr/tsr-310";

export const PRODUCTS: Record<string, Product> = {
  [tsw570.id]: tsw570,
  [tsw770.id]: tsw770,
  [tsw1070.id]: tsw1070,
  [tsr310.id]: tsr310,
};
