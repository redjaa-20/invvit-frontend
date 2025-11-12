"use client";

import { useMobileUI } from "src/hooks/use-mobile-ui";
import React from "react";
import { LoadingScreen } from "src/components/loading-screen";
import MobileAuthLayout from "./mobile/layout";

// ------------------------------------------------------------

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile, hasChecked } = useMobileUI(1024);

  if (!hasChecked) {
    return <LoadingScreen />;
  }

  return isMobile ? <MobileAuthLayout>{children}</MobileAuthLayout> : children;
}
