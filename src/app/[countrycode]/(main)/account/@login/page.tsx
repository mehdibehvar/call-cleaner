"use client";
import Input from "@/components/input/input";
// import Select from "../../../components/select/select";
import signUpUser from "../actions/signup";
import { useActionState } from "react";
import SubmitButton from "@/components/button/submit-button";

const Login = () => {
  const [state, action, pending] = useActionState(signUpUser, {});

  return (
      <form action={action} className="space-y-3">
        <Input
          type="text"
          name="name"
          defaultValue={state.values?.name}
          placeholder="Name"
          error={state.errors?.name}
          variant="outline"
        />
        <Input
          type="text"
          name="mobile"
          defaultValue={state.values?.mobile}
          placeholder="Mobile"
          error={state.errors?.mobile}
          variant="outline"
          autoComplete="tel"
        />
        <Input
          type="email"
          name="email"
          defaultValue={state.values?.email}
          placeholder="Email"
          error={state.errors?.email}
          variant="outline"
          autoComplete="email"
        />
        {/* <Select
          name="roles"
          multiple={true}
          label="Roles"
          options={["admin", "user", "client"]}
          error={state.errors?.roles}
          variant="outline"
        /> */}
        <div className="flex  gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-100">
            admin
          </label>
          <input type="checkbox" name="roles" value="admin" />
          <label className="text-sm font-medium text-gray-700 dark:text-gray-100">
            client
          </label>
          <input type="checkbox" name="roles" value="client" />
          <label className="text-sm font-medium text-gray-700 dark:text-gray-100">
            company
          </label>
          <input type="checkbox" name="roles" value="company" />
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          error={state.errors?.password}
          variant="outline"
          autoComplete="new-password"
        />
        <SubmitButton pendingText="Signing up..." disabled={pending}>
          Sign Up
        </SubmitButton>
      </form>
  );
};

export default Login;
