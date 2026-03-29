import SubmitButton from "@/components/button/submit-button";
import FormCard from "@/components/card/form-card";
import Input from "@/components/input/input";
import { updateEmail } from "@/lib/_services/account-services/profiel-actions";
import { getFieldError } from "@/utils/helpers";
import { useActionState, useEffect } from "react";
const initialState = {
  ok: false,
  defaultValue: null,
  data: null,
  error: undefined,
  errors: undefined,
};
const ProfielEmail = ({ user }: { user: any }) => {
  const [state, action, pending] = useActionState(updateUser, initialState);
  useEffect(() => {
    if (state.ok) {
      alert(state.data.message);
    }
  }, [state.ok]);

  return (
    <FormCard title="update email form">
      <form action={action}>
        <Input type="text" name="name" error={getFieldError("name", state)} />
        <Input type="text" name="email" error={getFieldError("email", state)} />
        <Input
          type="text"
          name="mobile"
          error={getFieldError("mobile", state)}
        />

        <SubmitButton pendingText="updating..." disabled={pending}>
          update user
        </SubmitButton>
      </form>
    </FormCard>
  );
};

export default ProfielEmail;
