"use client";

import { useMobileUI } from "src/hooks/use-mobile-ui";
import { MobileCreditView } from "./mobile/credit-view";

// ------------------------------------------------------------

export function CreditView() {
  const isMobile = useMobileUI(1024);

  return isMobile ? <MobileCreditView /> : "";
}
