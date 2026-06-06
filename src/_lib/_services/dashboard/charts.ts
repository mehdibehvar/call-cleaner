import { safeApiFetch } from "@/_lib/utils/http-client";

interface RevenueChartPoint {
  date: string;
  revenue: number;
}

export const getRevenueChartData = async (): Promise<RevenueChartPoint[]> => {
  const baseUrl = typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const url = `${baseUrl}/api/admin/charts/revenue`;
  
  const res = await safeApiFetch<RevenueChartPoint[]>(url);
  
  if (!res.ok) {
    throw new Error(res.error || "Failed to fetch revenue data");
  }
  
  return res.data;
};
