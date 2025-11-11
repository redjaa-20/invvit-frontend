"use client";

import { useMobileUI } from "src/hooks/use-mobile-ui";
import { MobileCreditHistoryView } from "./mobile/credit-history-view";

// ------------------------------------------------------------

export function CreditHistoryView() {
  const isMobile = useMobileUI(768);

  return isMobile ? <MobileCreditHistoryView /> : "";
}
