"use client";

import { useMobileUI } from "src/hooks/use-mobile-ui";
import MobileDashboardLayout from "./mobile/layout";
import React from "react";
import { LoadingScreen } from "src/components/loading-screen";

// ------------------------------------------------------------

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile, hasChecked } = useMobileUI(768);

  if (!hasChecked) {
    return <LoadingScreen />;
  }

  return isMobile ? (
    <MobileDashboardLayout>{children}</MobileDashboardLayout>
  ) : (
    children
  );
}
