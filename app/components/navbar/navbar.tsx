import Link from "next/link";
import Icon from "../icon/icon";
import { BellAlertIcon, BookmarkIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav
      className="
        sticky
        bottom-4
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
      <Link
        href="/client/profile"
        className="flex items-center justify-center "
      >
        <UserIcon className="size-8"  />
      </Link>

      <Link
        href="/client/booking"
        className="flex items-center justify-center"
      >
        <BookmarkIcon className="size-8" />
      </Link>

      <Link
        href="/client/notifications"
        className="flex items-center justify-center"
      >
       <BellAlertIcon className="size-8" />
      </Link>
      <Link
        href="/client/home"
        className="flex items-center justify-center"
      >
        <HomeIcon className="size-8" />
      </Link>
      
    </nav>
  );
};

export default Navbar;
