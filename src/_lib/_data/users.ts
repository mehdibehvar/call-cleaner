import { userRoutes } from "../api-routes/routes";
import { getAuthHeaders, getCacheOptions } from "./cookies";
import { safeApiFetch } from "@/utils/http-client";

export const retriveUser = async (): Promise<any | null> => {
  const authHeaders = await getAuthHeaders();
  const headers = {
    ...authHeaders,
  };
  const next = {
    ...(await getCacheOptions("users")),revalidate: 60
  };
  const response = await safeApiFetch(userRoutes.getMeUsers, {
    method: "get",
    headers,
    next,
    cache: "force-cache", ///this cache the userinfo you can disable it by :cache:  no-store
  });
  return response;
};
