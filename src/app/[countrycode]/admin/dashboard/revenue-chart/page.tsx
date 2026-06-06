import { getRevenueChartData } from "@/_lib/_services/dashboard/charts";

interface RevenueChartPoint {
  date: string;
  revenue: number;
}

const RevenueChart = async () => {
  try {
    const data: RevenueChartPoint[] = await getRevenueChartData();
    
    return (
      <div className="rounded-lg bg-white p-4">
        <h2 className="mb-4 text-lg font-semibold">Revenue Chart</h2>
        <div className="space-y-2">
          {data.map((point) => (
            <div key={point.date} className="flex justify-between">
              <span>{point.date}</span>
              <span className="font-medium">${point.revenue.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <div className="text-red-500">Failed to load revenue data</div>;
  }
};

export default RevenueChart;