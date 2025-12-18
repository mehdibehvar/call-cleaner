import Link from "next/link";
import Icon from "../icon/icon";

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
      "
    >
      <Link
        href="/client/home"
        className="flex items-center justify-center bg-secondary-200 rounded-full w-14 h-14"
      >
        <Icon name="home" size={32} />
      </Link>

      <Link
        href="/client/profile"
        className="flex items-center justify-center bg-secondary-200 rounded-full w-16 h-16"
      >
        <Icon name="profile-circle" size={32} />
      </Link>

      <Link
        href="/client/settings"
        className="flex items-center justify-center bg-secondary-200 rounded-full w-16 h-16"
      >
        <Icon name="receipt-2" size={32} />
      </Link>
      <Link
        href="/client/settings"
        className="flex items-center justify-center bg-secondary-200 rounded-full w-16 h-16"
      >
        <Icon name="receipt-2" size={32} />
      </Link>
      
    </nav>
  );
};

export default Navbar;
