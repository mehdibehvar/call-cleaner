import { userRoutes } from "../api/routes";
import { getAuthHeaders, getCacheOptions } from "./cookies";
import { safeApiFetch } from "@/utils/http-client";

export const retriveUser = async (): Promise<any | null> => {
  const authHeaders = await getAuthHeaders();
  const headers = {
    ...authHeaders,
  };
  const next = {
    ...(await getCacheOptions("users")),
  };
  const response = await safeApiFetch(userRoutes.getMeUsers, {
    method: "get",
    headers,
    next,
    cache: "force-cache",
  });
  return  response;
};
