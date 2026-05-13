"use server";

import { setAuthToken } from "@/lib/_data/cookies";
import { authRoutes } from "@/lib/api-routes/routes";
import { UserHttp } from "@/types/http-types";
import { pickFormData } from "@/utils/helpers";
import { post } from "@/utils/http-client";

type SubmittedValue = string | number | readonly string[] | FormDataEntryValue[] | undefined;

// Define a type for the return value to make it clearer
export interface ActionResponse {
  ok: boolean;
  defaultValues?: Record<string, SubmittedValue>;
  data?: unknown;
  errors?: Record<string, string>; // Field-specific errors
  error?: string; // General error message
}

export const signUpUser = async (
  prevState: ActionResponse | undefined,
  formData: FormData,
): Promise<ActionResponse> => {
  const submittedValues = pickFormData(formData, [
    "name",
    "email",
    "password",
    "mobile",
  ]);
  const roles = formData.getAll("roles");
  const defaultValues = { ...submittedValues, roles };

  try {
    const res = await post(authRoutes.signup, { ...submittedValues, roles });

    // Assuming your API returns a structure like:
    // { ok: true, data: { user: {...} } } on success
    // { ok: false, errors: { fieldName: "Error message" }, error: "General error" } on failure
    if (res.ok) {
      // On success, return ok: true and the user data, along with the submitted values
      return {
        ok: true,
        data: res.data,
        errors: undefined,
        error: undefined,
      };
    } else {
      // On API-level validation errors, return ok: false with errors and submitted values
      return {
        ok: false,
        defaultValues,
        errors: res.errors, // Assuming API returns errors in this format
        error: res.error, // General error if any
      };
    }
  } catch (error) {
    // Handle network errors or unexpected exceptions
    console.error("Signup API call failed:", error);
    return {
      ok: false,
      defaultValues,
      errors: undefined,
      error: "An unexpected error occurred during signup. Please try again.", // Generic error message
    };
  }
};

export const signInUser = async (
  _currentState: unknown,
  formData: FormData,
) => {
  const { mobile, password } = pickFormData(formData, ["mobile", "password"]);
  const res = await post<UserHttp>(authRoutes.loginWithPassword, {
    mobile,
    password,
  });
  if (res.ok) {
    await setAuthToken(res.data.token);
  }
  return res;
};
