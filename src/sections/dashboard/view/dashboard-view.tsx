"use client";

import { useMobileUI } from "src/hooks/use-mobile-ui";
import { MobileDashboardView } from "./mobile/dashboard-view";

// ------------------------------------------------------------

export function DashboardView() {
  const isMobile = useMobileUI(768);

  return isMobile ? <MobileDashboardView /> : "";
}
