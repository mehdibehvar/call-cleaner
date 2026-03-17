"use client";

import { useActionState } from "react";
import { createCompany } from "./actions/creat-company";
import type { CreateCompanyState } from "./actions/creat-company";
import Input from "../../components/input/input";
import TextArea from "../../components/text-area/text-area";
import SubmitButton from "../../components/button/submit-button";
import FormCard from "../../components/card/form-card";

const initialState: CreateCompanyState = { editing: false };

export default function CreateCompanyPage() {
  const [state, action, pending] = useActionState(createCompany, initialState);
  return (
    <FormCard title="Create Company">
      <form action={action} className="space-y-4">
        <Input
          id="name"
          label="Company Name "
          name="name"
          defaultValue={state.values?.name}
          placeholder="Acme Co."
          required
          variant="outline"
          error={state.errors?.name}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Phone"
            placeholder="(555) 555-5555"
            variant="outline"
            error={state.errors?.phone}
            id="phone"
            name="phone"
            defaultValue={state.values?.phone}
            type="tel"
          />
          <Input
            label="Address"
            id="address"
            name="address"
            defaultValue={state.values?.address}
            placeholder="Street, City"
            error={state.errors?.address}
            variant="outline"
          />
        </div>
        <Input
          label="  Short description"
          id="shortDescription"
          name="shortDescription"
          defaultValue={state.values?.shortDescription}
          placeholder="One-liner about the company"
          error={state.errors?.shortDescription}
          variant="outline"
        />
        <TextArea
          label="Long description"
          id="longDescription"
          name="longDescription"
          defaultValue={state.values?.longDescription}
          variant="outline"
          placeholder="Full description, services, details"
          error={state.errors?.longDescription}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Thumbnail URL"
            id="thumbnail"
            name="thumbnail"
            defaultValue={state.values?.thumbnail}
            placeholder="https://.../thumb.jpg"
            error={state.errors?.thumbnail}
            variant="outline"
          />

          <Input
            label="Logo URL"
            id="logo"
            name="logo"
            defaultValue={state.values?.logo}
            placeholder="https://.../logo.png"
            error={state.errors?.logo}
            variant="outline"
          />
        </div>

        <div className="flex items-center gap-3">
          <SubmitButton pendingText="Creating..." disabled={pending}>
            Create Company
          </SubmitButton>

          {state?.success && (
            <p className="text-sm text-emerald-600">✅ Company created</p>
          )}
        </div>
      </form>
    </FormCard>
  );
}
