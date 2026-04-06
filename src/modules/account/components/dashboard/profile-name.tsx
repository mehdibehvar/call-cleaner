
import SubmitButton from "@/components/button/submit-button";
import FormCard from "@/components/card/form-card";
import Input from "@/components/input/input";
import { updateName } from "@/lib/_services/account-services/profiel-actions";
import { getFieldError } from "@/utils/helpers";
import { useActionState } from "react";
const initialState = {
  ok: false,
  defaultValue: null,
  data: null,
  error: undefined,
  errors: undefined,
};
const ProfielName = ({ user }: { user: any }) => {
  const [state, action, pending] = useActionState(updateName, initialState);
  return (
    <FormCard title="update name form">
      <form action={action}>
        <Input type="text" name="name" error={getFieldError("name", state)} />
        <SubmitButton pendingText="updating..." disabled={pending}>
          update name
        </SubmitButton>
      </form>
    </FormCard>
  );
};

export default ProfielName;
