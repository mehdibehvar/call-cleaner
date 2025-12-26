interface IfetchApi {
  url: string;
  cache?: RequestCache;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
}

// Prefer an explicit public API base URL, then fall back to the
// canonical production host, then localhost for development.
const envBase = process.env.NEXT_PUBLIC_API_BASE_URL;
const defaultBase =
  process.env.NODE_ENV === "production"
    ? "https://call-cleaner.vercel.app"
    : "http://localhost:5000";
const baseUrl = envBase || defaultBase;

const joinUrl = (base: string, path: string) => {
  const b = base.replace(/\/+$|\s+$/g, "");
  const p = path.replace(/^\/+/, "");
  return `${b}/${p}`;
};

export const fetchApi = async (args: IfetchApi) => {
  const { url, cache, next } = args;
  const fullUrl = joinUrl(baseUrl, url);
  return await fetch(fullUrl, {
    cache: cache,
    next: next,
  });
};
