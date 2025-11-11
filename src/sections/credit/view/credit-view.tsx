"use client";

import { useMobileUI } from "src/hooks/use-mobile-ui";
import { MobileCreditView } from "./mobile/credit-view";

// ------------------------------------------------------------

export function CreditView() {
  const isMobile = useMobileUI(768);

  return isMobile ? <MobileCreditView /> : "";
}
