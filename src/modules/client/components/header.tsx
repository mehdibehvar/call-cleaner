import { UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="bg-white **:leading-0 rounded-full margin-auto  flex justify-between items-center p-4 w-full">
      <div>
        <UserCircleIcon className="size-8 text-primary" />
      </div>
      <div>
        <h1>
          <span className="text-secondary">Call</span>{" "}
          <span className="text-primary">Cleaner</span>
        </h1>
      </div>
      <div>
        <UserCircleIcon className="size-8 text-primary" />
      </div>
    </header>
  );
};

export default Header;
