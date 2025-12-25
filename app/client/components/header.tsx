import Icon from "@/components/icon/icon";

const Header = () => {
  return (
    <header className="bg-white **:leading-0 rounded-full margin-auto  flex justify-between items-center p-4 w-full">
      <div>
        <Icon size={32} color="var(--color-primary)" name="profile-circle" />
      </div>
      <div>
        <h1>
          <span className="text-secondary">Call</span>{" "}
          <span className="text-primary">Cleaner</span>
        </h1>
      </div>
      <div>
        <Icon size={32} color="var(--color-primary)" name="profile-circle" />
      </div>
    </header>
  );
};

export default Header;
