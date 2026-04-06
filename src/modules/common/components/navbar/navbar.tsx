import Link from "next/link";
import { BellAlertIcon, BookmarkIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import LocalizedClientLink from "../localized-client-link";

const Navbar = () => {
  return (
    <nav
      className="
        sticky
        bottom-2
        w-full
        p-2
        bg-white
        rounded-full
        flex
        justify-between
        items-center
        sm:hidden
        *:bg-secondary-200
        *:rounded-full
        *:size-12
        **:text-primary
      "
    >
      <LocalizedClientLink
        href="/account/profile"
        className="flex items-center justify-center "
      >
        <UserIcon className="size-8"  />
      </LocalizedClientLink>

      <LocalizedClientLink
        href="/client/booking"
        className="flex items-center justify-center"
      >
        <BookmarkIcon className="size-8" />
      </LocalizedClientLink>

      <LocalizedClientLink
        href="/client/notifications"
        className="flex items-center justify-center"
      >
       <BellAlertIcon className="size-8" />
      </LocalizedClientLink>
      <LocalizedClientLink
        href="/client/home"
        className="flex items-center justify-center"
      >
        <HomeIcon className="size-8" />
      </LocalizedClientLink>
      
    </nav>
  );
};

export default Navbar;
