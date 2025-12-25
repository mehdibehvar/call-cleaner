interface IfetchApi {
  url: string;
  cache?: RequestCache;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
}
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://call-cleaner.vercel.app"
    : process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchApi = async (args: IfetchApi) => {
  const { url, cache, next } = args;
  return await fetch(`${baseUrl}${url}`, {
    cache: cache,
    next: next,
  });
};
