"use client";

import {
  BellAlertIcon,
  BookmarkIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/helpers";
import LocalizedClientLink from "../localized-client-link";

const navigationItems = [
  {
    label: "Home",
    href: "/client/home",
    Icon: HomeIcon,
  },
  {
    label: "Bookings",
    href: "/client/booking",
    Icon: BookmarkIcon,
  },
  {
    label: "Alerts",
    href: "/client/notifications",
    Icon: BellAlertIcon,
  },
  {
    label: "Profile",
    href: "/account/profile",
    Icon: UserCircleIcon,
  },
];

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-3 bottom-3 z-50 block rounded-lg border border-gray-200 bg-white/95 px-2 py-2 shadow-lg shadow-gray-200/80 backdrop-blur sm:hidden"
    >
      <ul className="grid grid-cols-4 gap-1">
        {navigationItems.map(({ label, href, Icon }) => {
          const isActive = pathname.endsWith(href.replace(/^\/+/, ""));

          return (
            <li key={href}>
              <LocalizedClientLink
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex h-14 flex-col items-center justify-center gap-1 rounded-md text-xs font-semibold text-gray-500 transition",
                  "hover:bg-primary-50 hover:text-primary focus-visible:bg-primary-50 focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary-200",
                  isActive && "bg-primary text-white shadow-sm shadow-primary-200 hover:bg-primary hover:text-white",
                )}
              >
                <Icon className="size-5" aria-hidden="true" />
                <span className="leading-none">{label}</span>
              </LocalizedClientLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
