import SubmitButton from "@/components/button/submit-button";
import FormCard from "@/components/card/form-card";
import ErrorMessageDisply from "@/components/error-display";
import Input from "@/components/input/input";
import { updateUser } from "@/lib/_services/account-services/profiel-actions";
import { getFieldError } from "@/utils/helpers";
import type { ApiResult } from "@/utils/http-client";
import { useActionState, useEffect, useState } from "react";
const initialState: ApiResult<any> = {
  ok: false,
  errors: undefined,
  error: "",
};
const ProfielGeneral = ({ user }: { user: any }) => {
  const [state, action, pending] = useActionState(updateUser, initialState);
  const [name, setName] = useState(user.name);
  const [mobile, setMobile] = useState(user.mobile);
  const [email, setEmail] = useState(user.email);
  useEffect(() => {
    if (state.ok) {
      alert(state.data.message);
    }
  }, [state.ok]);

  return (
    <FormCard title="update email form">
      <form action={action}>
        <Input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          label="name"
          error={getFieldError("name", state)}
        />
        <Input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="email"
          error={getFieldError("email", state)}
        />
        <Input
          type="text"
          name="mobile"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
          label="mobile"
          error={getFieldError("mobile", state)}
        />

        <SubmitButton pendingText="updating..." disabled={pending}>
          update user
        </SubmitButton>
      </form>
      {!state.ok && state.error && !state.errors ? (
        <ErrorMessageDisply errorMessage={state.error} />
      ) : null}
    </FormCard>
  );
};

export default ProfielGeneral;
