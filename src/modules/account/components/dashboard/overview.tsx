import LocalizedClientLink from "@/components/localized-client-link";

type OverviewProps = {
  user: any;
};

const Overview = ({ user }: OverviewProps) => {
  return (
    <div data-testid="overview-page-wrapper">
      <div className="">
        <div className="text-xl-semi flex justify-between items-center mb-4">
          <span>Hello {user?.name}</span>
          <span className="text-small-regular text-ui-fg-base">
            Signed in as: <span className="font-semibold">{user?.email}</span>
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <LocalizedClientLink path="account/profile" className="text-success">go to profile</LocalizedClientLink>
      </div>
    </div>
  );
};

export default Overview;
