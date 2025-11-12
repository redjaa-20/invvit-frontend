"use client";

import { useMobileUI } from "src/hooks/use-mobile-ui";
import { MobileLoginView } from "./mobile/login-view";

// ------------------------------------------------------------

export function LoginView() {
  const isMobile = useMobileUI(1024);

  return isMobile ? <MobileLoginView /> : "";
}
