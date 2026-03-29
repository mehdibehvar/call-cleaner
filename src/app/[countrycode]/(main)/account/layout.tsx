import FormCard from "@/components/card/form-card";
import { retriveUser } from "@/lib/_data/users";

export default async function AccountLayout({
  login,
  dashboard,
}: {
  login: React.ReactNode;
  dashboard: React.ReactNode;
}) {
  ///after login we retrive user's info by sendig a request to this api route : /api/v1/users/me
  //// this api authmiddleware check if there is x-auth-token in req header then return user info 
  /// we force-cache this request response by setting next:{tags:['users-id',revalidate:60]}
  /// so if somewhere we need this info we can make this req again but this time it won't go to server it read it form cache
  /// when we update user info we should revalidate it.
  const result = await retriveUser().catch((err) => {
    console.log(err);
  });
  const user = result.ok ? result.data : null;
  return (
    <>
      <div className="min-h-svh">
        <FormCard title={user ? `Hi ${user.name}` : "login"}>
          {user ? dashboard : login}
        </FormCard>
      </div>
    </>
  );
}
