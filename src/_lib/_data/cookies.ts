import { cookies } from "next/headers";
/// this function is for getting header authorization key
export const getAuthHeaders = async (): Promise<
  { authorization: string } | {}
> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("call-cleaner-jwt")?.value;
    if (!token) return {};
    return {
      authorization: `Bearer ${token}`,
      "x-auth-token": token,
    };
  } catch (err) {
    return {};
  }
};

export const getCacheTag = async (tag: string): Promise<string> => {
  try {
    const cookieStore = await cookies();
    const cacheId = cookieStore.get("call-cleaner-id")?.value;
    if (!cacheId) {
      return "";
    }
    return `${tag}-${cacheId}`;
  } catch (error) {
    return "";
  }
};
export const getCacheOptions = async (
  tag: string,
): Promise<{ tags: string[] } | {}> => {
  if (typeof window !== "undefined") {
    return {};
  }
  const cacheTag = await getCacheTag(tag);
  if (!cacheTag) {
    return {};
  }
  return { tags: [`${cacheTag}`] };
};

export const setAuthToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set("call-cleaner-jwt", token, {
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  cookieStore.set("call-cleaner-id", "123456", {
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
};
