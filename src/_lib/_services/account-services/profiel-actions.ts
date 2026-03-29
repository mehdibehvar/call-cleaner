"use server";
import { getAuthHeaders, getCacheTag } from "@/lib/_data/cookies";
import { userRoutes } from "@/lib/api-routes/routes";
import { put, safeApiFetch } from "@/utils/http-client";
import { revalidateTag } from "next/cache";

// Define a type for the return value to make it clearer
interface ActionResponse {
  ok: boolean;
  defaultValues?: Record<string, any>;
  data?: any;
  errors?: Record<string, string>; // Field-specific errors
  error?: string; // General error message
}

export const updateName = async (
  _prevState: ActionResponse | undefined,
  formData: FormData,
) => {
  const authHeaders = await getAuthHeaders();
  const headers = {
    ...authHeaders,
  };
  const name = formData.get("name");
  const res = await safeApiFetch(userRoutes.updateUserName, {
    method: "put",
    headers,
    body: JSON.stringify({ name }),
  });
  const cacheTag = await getCacheTag("users");
  revalidateTag(cacheTag, "max");
  return res;
};

export const updateEmail = async (
  _prevState: ActionResponse | undefined,
  formData: FormData,
) => {
  const authHeaders = await getAuthHeaders();
  const headers = {
    ...authHeaders,
  };
  const email = formData.get("email");
  const res = await safeApiFetch(userRoutes.updateUserEmail, {
    method: "put",
    headers,
    body: JSON.stringify({ email }),
  });
  const cacheTag = await getCacheTag("users");
  revalidateTag(cacheTag, "max");
  return res;
};