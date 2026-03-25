import FormCard from "@/components/card/form-card";
import { retriveUser } from "@/lib/_data/users";

export default async function AccountLayout({
  login,
  dashboard,
}: {
  login: React.ReactNode;
  dashboard: React.ReactNode;
}) {

  const result = await retriveUser().catch((err) => {
    console.log(err);
  });
  const user=result.ok?result.data:null;
  return (
    <>

        <FormCard title={user ? `Hi ${user.name}` : "login"}>
          {user ? dashboard : login}
        </FormCard>
      
    </>
  );
}
