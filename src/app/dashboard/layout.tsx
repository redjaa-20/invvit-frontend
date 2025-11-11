"use client";

import React from "react";
import DashboardLayout from "src/layouts/dashboard/layout";

// ------------------------------------------------------------

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
