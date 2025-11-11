"use client";

import { useMobileUI } from "src/hooks/use-mobile-ui";
import { MobileInvoiceListView } from "./mobile/invoice-list-view";

// ------------------------------------------------------------

export function InvoiceListView() {
  const isMobile = useMobileUI(1024);

  return isMobile ? <MobileInvoiceListView /> : "";
}
