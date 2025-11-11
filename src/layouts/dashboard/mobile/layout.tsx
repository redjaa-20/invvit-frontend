import { Icon } from "@iconify/react";
import {
  FileTextIcon,
  HouseIcon,
  SwatchBookIcon,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { cn } from "src/lib/utils";
import { paths } from "src/routes/paths";

// ------------------------------------------------------------

const navData = [
  { href: paths.dashboard.root, icon: "solar:home-2-outline" },
  { href: paths.dashboard.invoice.root, icon: "solar:document-text-outline" },
  { href: paths.dashboard.credit.root, icon: "solar:wallet-2-outline" },
  { href: paths.dashboard.template.root, icon: "solar:palette-outline" },
  { href: paths.dashboard.invoice.create, icon: "solar:user-outline" },
];

// ------------------------------------------------------------

export default function MobileDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-5 pb-20">{children}</div>

      <div className="z-10 fixed bottom-0 left-0 w-full bg-background px-5 border-t">
        <div className="h-[60px] w-full grid grid-cols-5 items-center gap-x-7">
          {navData.map((nav, i) => {
            const isActive =
              nav.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(nav.href);

            return (
              <div className="flex justify-center" key={i}>
                <Link
                  href={nav.href}
                  className={cn(
                    "h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200",
                    isActive && "bg-blue-600 text-background"
                  )}
                >
                  <Icon
                    icon={nav.icon}
                    className={isActive ? "size-5" : "size-6"}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
