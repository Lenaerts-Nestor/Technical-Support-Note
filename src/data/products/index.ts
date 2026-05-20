import type { Product } from "../../types";

// TSW touch panels
import { tsw570 } from "./tsw/tsw-570";
import { tsw770 } from "./tsw/tsw-770";
import { tsw1070 } from "./tsw/tsw-1070";

// DM NVX AV-over-IP
import { dmNvx360 } from "./nvx/dm-nvx-360";

// TSR remote controls
import { tsr310 } from "./tsr/tsr-310";

// CP control processors
import { cp4 } from "./cp/cp4";
import { dmNvxE20 } from "./nvx/dm-nvx-e20";

export const PRODUCTS: Record<string, Product> = {
  [tsw570.id]: tsw570,
  [tsw770.id]: tsw770,
  [tsw1070.id]: tsw1070,
  [dmNvx360.id]: dmNvx360,
  [dmNvxE20.id]: dmNvxE20,
  [tsr310.id]: tsr310,
  [cp4.id]: cp4,
};
