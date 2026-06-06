import LoginTemplate from "modules/account/templates/Login-template";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Medusa Store account.",
};

export default function Login() {
  return (
    <Suspense fallback={<span>Loading..........</span>}>
      <LoginTemplate />
    </Suspense>
  );
}
