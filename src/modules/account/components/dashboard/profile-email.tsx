import SubmitButton from "@/components/button/submit-button";
import FormCard from "@/components/card/form-card";
import Input from "@/components/input/input";
import { updateEmail } from "@/lib/_services/account-services/profiel-actions";
import { getFieldError } from "@/utils/helpers";
import type { ApiResult } from "@/utils/http-client";
import { useActionState, useEffect } from "react";
const initialState: ApiResult<any> = {
  ok: false,
  errors: undefined,
  error: "",
};
const ProfielEmail = ({ user }: { user: any }) => {
  const [state, action, pending] = useActionState(updateEmail, initialState);
  useEffect(() => {
    if (state.ok) {
      alert(state.data.message);
    }
  }, [state.ok]);

  return (
    <FormCard title="update email form">
      <form action={action}>
        <Input type="text" name="email" error={getFieldError("email", state)} />
        <SubmitButton pendingText="updating..." disabled={pending}>
          update email
        </SubmitButton>
      </form>
    </FormCard>
  );
};

export default ProfielEmail;
