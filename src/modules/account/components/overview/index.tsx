

type OverviewProps = {
  user: any
}

const Overview = ({ user }: OverviewProps) => {
  return (
    <div data-testid="overview-page-wrapper">
      <div className="">
        <div className="text-xl-semi flex justify-between items-center mb-4">
          <span data-testid="welcome-message" data-value={user?.name}>
            Hello {user?.name}
          </span>
          <span className="text-small-regular text-ui-fg-base">
            Signed in as:{" "}
            <span
              className="font-semibold"
              data-testid="user-email"
              data-value={user?.email}
            >
              {user?.email}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}


export default Overview
