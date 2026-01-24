"use client";
import SubmitButton from "@/components/button/submit-button";
import FormCard from "@/components/card/form-card";
import Input from "@/components/input/input";
import signUpUser from "auth/actions/signup";
import { useActionState } from "react";

const Signup = () => {
  const [state, action, pending] = useActionState(signUpUser, {});

  return (
    <FormCard title="Sign Up">
      <form action={action} className="space-y-3">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          error={state.errors?.name}
          variant="outline"
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          error={state.errors?.email}
          variant="outline"
          autoComplete="email"
        />
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
    </FormCard>
  );
};

export default Signup;
