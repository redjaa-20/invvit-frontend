"use client";

import { useMobileUI } from "src/hooks/use-mobile-ui";
import { MobileAccountView } from "./mobile/account-view";

// ------------------------------------------------------------

export function AccountView() {
  const isMobile = useMobileUI(1024);

  return isMobile ? <MobileAccountView /> : "";
}
