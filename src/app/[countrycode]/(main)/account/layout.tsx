import AccountHeader from "@/modules/account/components/account-header";
import { retriveUser } from "@/lib/_data/users";

export default async function AccountLayout({
  login,
  dashboard,
}: {
  login: React.ReactNode;
  dashboard: React.ReactNode;
}) {
  const result = await retriveUser().catch(() => null);
  const user = result?.ok ? result.data : null;

  return (
    <div className="relative min-h-svh overflow-hidden bg-gray-50 text-gray-900">
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-56 bg-gradient-to-t from-primary-50 to-transparent" />

      <div className="relative z-10">
        <AccountHeader isSignedIn={Boolean(user)} user={user} />
        <main className="container px-4 py-6 md:px-6 md:py-8 lg:px-8">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
            {user ? dashboard : login}
          </div>
        </main>
      </div>
    </div>
  );
}
