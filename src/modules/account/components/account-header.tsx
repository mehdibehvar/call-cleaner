type AccountHeaderProps = {
  isSignedIn: boolean;
  user?: {
    name?: string | null;
    email?: string | null;
  } | null;
};

const AccountHeader = ({ isSignedIn, user }: AccountHeaderProps) => {
  const displayName = user?.name || "Your account";
  const email = user?.email;

  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="container flex flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-primary-600">
            Account
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-gray-900 md:text-3xl">
            {isSignedIn ? `Welcome, ${displayName}` : "Sign in to continue"}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            {isSignedIn
              ? "Manage your profile, saved information, and call cleaning activity from one place."
              : "Access your dashboard or create an account to start managing your requests."}
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-md border border-gray-200 bg-gray-50 px-4 py-3">
          <span
            className={
              isSignedIn
                ? "size-2.5 rounded-full bg-success"
                : "size-2.5 rounded-full bg-warning"
            }
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900">
              {isSignedIn ? "Signed in" : "Guest session"}
            </p>
            <p className="truncate text-xs text-gray-500">
              {isSignedIn ? email || "Account active" : "Authentication needed"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AccountHeader;
