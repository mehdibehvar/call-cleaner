"use client";

import { useActionState } from "react";
import { createCompany } from "../actions/creat-company";
import Button from "@/app/components/button/button";
import { cn } from "@/app/utils/helpers";

const initialState = {

};

export default function CreateCompanyPage() {
  const [state, action, pending] = useActionState(createCompany, initialState);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
        <div className="px-6 py-8">
          <h1 className="text-2xl font-semibold mb-4">Create Company</h1>

          <form action={action} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                placeholder="Acme Co."
                className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              {state?.errors?.name && (
                <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={"09123456789"}
                  placeholder="(555) 555-5555"
                  className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {state?.errors?.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  value={"Street, City"}
                  placeholder="Street, City"
                  className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {state?.errors?.address && (
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.address}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="shortDescription"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Short description
              </label>
              <input
                id="shortDescription"
                name="shortDescription"
                value={"One-liner about the company"}
                placeholder="One-liner about the company"
                className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {state?.errors?.shortDescription && (
                <p className="mt-1 text-sm text-red-600">
                  {state.errors.shortDescription}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="longDescription"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Long description
              </label>
              <textarea
                id="longDescription"
                value={"Full description, services, details"}
                name="longDescription"
                placeholder="Full description, services, details"
                className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 min-h-[120px]"
              />
              {state?.errors?.longDescription && (
                <p className="mt-1 text-sm text-red-600">
                  {state.errors.longDescription}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="thumbnail"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Thumbnail URL
                </label>
                <input
                  id="thumbnail"
                  name="thumbnail"
                  value={"https://example.com/logo.png"}
                  placeholder="https://.../thumb.jpg"
                  className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {state?.errors?.thumbnail && (
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.thumbnail}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="logo"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Logo URL
                </label>
                <input
                  id="logo"
                  name="logo"
                  value={"https://example.com/logo.png"}
                  placeholder="https://.../logo.png"
                  className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {state?.errors?.logo && (
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.logo}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                type="submit"
                disabled={pending}
                className={cn(pending && "opacity-70 cursor-not-allowed")}
              >
                {pending && <span className="animate-spin mr-2">⏳</span>}
                {pending ? "Creating..." : "Create Company"}
              </Button>

              {state?.success && (
                <p className="text-sm text-emerald-600">✅ Company created</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
