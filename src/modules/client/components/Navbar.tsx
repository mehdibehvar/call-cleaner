"use client";
import { signOutUser } from "@/lib/_services/account-services/login-actions";
import {
  ArrowRightOnRectangleIcon,
  BellAlertIcon,
  BookmarkIcon,
  BuildingStorefrontIcon,
  ChevronDownIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";
import useGlobalStore from "@/_lib/stores/global-store";

const navigationItems = [
  {
    label: "Home",
    href: "/client/home",
    Icon: HomeIcon,
  },
  {
    label: "Companies",
    href: "/company",
    Icon: BuildingStorefrontIcon,
  },
  {
    label: "Bookings",
    href: "/client/booking",
    Icon: BookmarkIcon,
  },
  {
    label: "Notifications",
    href: "/client/notifications",
    Icon: BellAlertIcon,
  },
];

const Navbar = () => {
    const countryCode = useGlobalStore((state) => state.countryCode);

  return (
    <div className="sticky top-4 z-40 mx-auto hidden w-[min(calc(100%-2rem),72rem)] sm:block">
      <nav className="flex h-18 items-center justify-between rounded-lg border border-gray-200/80 bg-white/95 px-4 shadow-sm shadow-gray-200/70 backdrop-blur md:px-5">
        <LocalizedClientLink
          href="/client/home"
          className="group flex items-center gap-3 text-gray-900"
          aria-label="Call Cleaner home"
        >
          <span className="flex size-11 items-center justify-center rounded-md bg-primary text-white shadow-sm shadow-primary-200 transition group-hover:bg-primary-600">
            <span className="text-lg font-black leading-none">CC</span>
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-normal">
              <span className="text-secondary-700">Call</span>{" "}
              <span className="text-primary">Cleaner</span>
            </span>
            <span className="block text-xs font-medium text-gray-400">
              Cleaning services
            </span>
          </span>
        </LocalizedClientLink>

        <div className="flex items-center gap-1 rounded-lg bg-gray-50 p-1">
          {navigationItems.map(({ label, href, Icon }) => (
            <LocalizedClientLink
              key={href}
              href={href}
              className="flex h-11 items-center gap-2 rounded-md px-3 text-sm font-semibold text-gray-600 transition hover:bg-white hover:text-primary hover:shadow-sm focus-visible:bg-white focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              <Icon className="size-5" aria-hidden="true" />
              <span>{label}</span>
            </LocalizedClientLink>
          ))}
        </div>

        <details className="group relative">
          <summary className="flex h-12 cursor-pointer list-none items-center gap-2 rounded-md border border-gray-200 bg-white px-2.5 text-gray-700 transition hover:border-primary-200 hover:text-primary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 [&::-webkit-details-marker]:hidden">
            <UserCircleIcon className="size-8 text-primary" aria-hidden="true" />
            <ChevronDownIcon
              className="size-4 transition group-open:rotate-180"
              aria-hidden="true"
            />
            <span className="sr-only">Open user menu</span>
          </summary>

          <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-lg shadow-gray-200/80">
            <LocalizedClientLink
              href="/account/profile"
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-primary-50 hover:text-primary"
            >
              <UserCircleIcon className="size-5" aria-hidden="true" />
              Profile
            </LocalizedClientLink>

            <form action={signOutUser}>
              <input type="hidden" name="countrycode" value={countryCode ?? ""} />
              <button
                type="submit"
                className="mt-1 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-semibold text-gray-700 transition hover:bg-red-50 hover:text-red-600"
              >
                <ArrowRightOnRectangleIcon className="size-5" aria-hidden="true" />
                Logout
              </button>
            </form>
          </div>
        </details>
      </nav>
    </div>
  );
};

export default Navbar;
