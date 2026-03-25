export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000";
};

export const getApiBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:6000";
};
