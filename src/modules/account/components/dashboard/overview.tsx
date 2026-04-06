import LocalizedClientLink from "@/components/localized-client-link";

type OverviewProps = {
  user: any;
};

const Overview = ({ user }: OverviewProps) => {
  return (
    <div>
      <div className="text-xl flex justify-between items-center mb-4">
        <span>Hello {user?.name}</span>
        <span className="text-small-regular text-ui-fg-base">
          Signed in as: <span className="font-semibold">{user?.email}</span>
        </span>
      </div>
      <div className="md:w-1/2 p-4  border-2 border-primary-400 shadow-2xl shadow-primary-200">
        <ul className="flex flex-col gap-4">
          <li>
            <strong>email</strong>:<span>{user.email}</span>
          </li>
          <li>
            <strong>name</strong>:<span>{user.name}</span>
          </li>
          <li>
            <strong>mobile</strong>:<span>{user.mobile}</span>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <LocalizedClientLink href="account/profile" className="text-success">
          go to profile
        </LocalizedClientLink>
      </div>
    </div>
  );
};

export default Overview;
