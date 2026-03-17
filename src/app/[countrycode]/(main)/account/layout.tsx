import FormCard from "@/components/card/form-card";

export default async function AccountLayout({
  login,
  dashboard,
}: {
  login: React.ReactNode;
  dashboard: React.ReactNode;
}) {
  const retriveCustomer = async (): Promise<{
    isLogin: boolean;
    message: string;
  } | null> => {
    return new Promise((resolve, reject) => {
      const success = false;
      if (success) {
        resolve({
          isLogin: true,
          message: "you are login",
        });
      } else {
        resolve({
          isLogin: false,
          message: "please login first",
        });
      }
    });
  };
  const customer = await retriveCustomer().catch((err)=>{
    console.log(err)
  });
  return (
    <>
      {customer ? (
        <FormCard title={customer.isLogin ? "dashboard" : "login"}>
          {customer.isLogin ? dashboard : login}
        </FormCard>
      ) : (
        <div>somthing went wrong try again</div>
      )}
    </>
  );
}
