import LocalizedClientLink from "@/components/localized-client-link";

type AccountRole = "admin" | "client" | "company";

type AccountUser = {
  name?: string | null;
  email?: string | null;
  mobile?: string | null;
  roles?: string[] | null;
};

type OverviewProps = {
  user: AccountUser;
};

type RoleAction = {
  title: string;
  description: string;
  href: string;
  label: string;
};

const roleContent: Record<
  AccountRole,
  {
    title: string;
    description: string;
    actions: RoleAction[];
  }
> = {
  admin: {
    title: "Platform control",
    description:
      "Review the account setup and keep user information ready for admin workflows.",
    actions: [
      {
        title: "Check your profile",
        description: "Keep admin contact details accurate for platform work.",
        href: "account/profile",
        label: "Open profile",
      },
      {
        title: "Review dashboard",
        description: "Return to your main account area and recent activity.",
        href: "account",
        label: "View dashboard",
      },
    ],
  },
  company: {
    title: "Company workspace",
    description:
      "Create and manage your company presence so clients can find your services.",
    actions: [
      {
        title: "Create company profile",
        description: "Add service details, media, and company information.",
        href: "company/create",
        label: "Create company",
      },
      {
        title: "Update account details",
        description: "Keep your business contact information up to date.",
        href: "account/profile",
        label: "Edit profile",
      },
    ],
  },
  client: {
    title: "Client dashboard",
    description:
      "Browse companies, manage your account, and keep your request information ready.",
    actions: [
      {
        title: "Find a company",
        description: "Browse available cleaning service companies.",
        href: "client/home",
        label: "Browse services",
      },
      {
        title: "Manage profile",
        description: "Update your email, mobile number, and display name.",
        href: "account/profile",
        label: "Open profile",
      },
    ],
  },
};

const rolePriority: AccountRole[] = ["admin", "company", "client"];

const normalizeRoles = (roles: AccountUser["roles"]) =>
  roles?.filter((role): role is AccountRole =>
    rolePriority.includes(role as AccountRole),
  ) ?? [];

const Overview = ({ user }: OverviewProps) => {
  const roles = normalizeRoles(user.roles);
  const primaryRole = roles[0] ?? "client";
  const content = roleContent[primaryRole];
  const displayName = user.name || "there";

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-primary-600">
            {content.title}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-gray-900">
            Hello {displayName}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            {content.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {(roles.length ? roles : [primaryRole]).map((role) => (
            <span
              key={role}
              className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium capitalize text-primary-700"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_0.75fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {content.actions.map((action) => (
            <article
              key={action.href}
              className="flex min-h-44 flex-col justify-between rounded-lg border border-gray-200 bg-gray-50 p-5"
            >
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {action.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {action.description}
                </p>
              </div>
              <LocalizedClientLink
                href={action.href}
                className="mt-5 inline-flex w-fit items-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-600"
              >
                {action.label}
              </LocalizedClientLink>
            </article>
          ))}
        </div>

        <aside className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="text-base font-semibold text-gray-900">
            Account details
          </h3>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-gray-500">Name</dt>
              <dd className="mt-1 font-medium text-gray-900">
                {user.name || "Not set"}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Email</dt>
              <dd className="mt-1 font-medium text-gray-900">
                {user.email || "Not set"}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Mobile</dt>
              <dd className="mt-1 font-medium text-gray-900">
                {user.mobile || "Not set"}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
};

export default Overview;
