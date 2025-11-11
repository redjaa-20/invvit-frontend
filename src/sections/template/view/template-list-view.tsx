"use client";

import { useMobileUI } from "src/hooks/use-mobile-ui";
import { MobileTemplateListView } from "./mobile/template-list-view";

// ------------------------------------------------------------

export function TemplateListView() {
  const isMobile = useMobileUI(1024);

  return isMobile ? <MobileTemplateListView /> : "";
}
