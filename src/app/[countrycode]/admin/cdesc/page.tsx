"use client";

import SubmitButton from "@/components/button/submit-button";
import FormCard from "@/components/card/form-card";
import TextArea from "@/components/text-area/text-area";
import { createPageDescriptiobsAction } from "@/lib/_services/admin-services/admin-services";
import { useActionState } from "react";
const initialState: { success: boolean; data: any } = {
  success: false,
  data: null,
};
const Description = () => {
  const [state, action, pending] = useActionState(
    createPageDescriptiobsAction,
    initialState,
  );
  return (
    <div className="p-2 w-1/2 m-auto">
      <FormCard>
        <form action={action} className="space-y-4">
          <TextArea name="descs" label="description"></TextArea>
          <SubmitButton pendingText="creating text" disabled={pending}>
            submit
          </SubmitButton>
        </form>
        {state?.success && (
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-emerald-600">✅ text created</p>
            <p>{state.data.descs}</p>
          </div>
        )}
      </FormCard>
    </div>
  );
};

export default Description;
