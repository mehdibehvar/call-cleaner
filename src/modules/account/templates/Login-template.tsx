"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Login from "../components/login";
import Register from "../components/register";

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

export type AccountRole = "client" | "company";

const LoginTemplate = () => {
  const searchParams = useSearchParams();
  const accountType = searchParams.get("type");
  const selectedRole: AccountRole | undefined =
    accountType === "client" || accountType === "company"
      ? accountType
      : undefined;
  const [currentView, setCurrentView] = useState<LOGIN_VIEW>(
    selectedRole ? LOGIN_VIEW.REGISTER : LOGIN_VIEW.SIGN_IN,
  );
  const isRegister = currentView === LOGIN_VIEW.REGISTER;

  return (
    <section className="min-h-[calc(100svh-80px)] bg-gray-50 px-4 py-8 text-gray-900 md:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl md:grid-cols-[0.9fr_1.1fr]">
        <aside className="hidden bg-gray-900 p-8 text-white md:flex md:flex-col md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-secondary-300">
              Call Cleaner
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              {isRegister ? "Create your workspace." : "Welcome back."}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-200">
              {isRegister
                ? "Set up your account to manage companies, requests, and service conversations in one calm place."
                : "Sign in to continue managing your call cleaning workflow and account details."}
            </p>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-gray-200">
            <div className="rounded-md border border-white/10 bg-white/5 p-4">
              Fast access to saved company data
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 p-4">
              Secure account and profile controls
            </div>
          </div>
        </aside>

        <div className="p-5 sm:p-8 lg:p-10">
          <div className="mb-8">
            <p className="text-sm font-medium text-primary-600">
              {isRegister ? "New account" : "Account access"}
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-gray-900">
              {isRegister ? "Register" : "Sign in"}
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              {isRegister
                ? "Enter your details below to create your account."
                : "Use your mobile number and password to continue."}
            </p>
          </div>

          {currentView === LOGIN_VIEW.SIGN_IN ? (
            <Login setCurrentView={setCurrentView} />
          ) : (
            <Register
              selectedRole={selectedRole}
              setCurrentView={setCurrentView}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginTemplate;
