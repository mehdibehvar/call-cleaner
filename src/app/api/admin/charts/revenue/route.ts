import { NextRequest, NextResponse } from 'next/server';

interface RevenueChartPoint {
  date: string;
  revenue: number;
}

export async function GET(request: NextRequest): Promise<NextResponse<RevenueChartPoint[]> | NextResponse<{ error: string }>> {
  try {
    // Option 1: Call your backend service
    // const chartData = await getRevenueData();
    
    // Option 2: Call your dashboard service directly
    // import { getRevenueCharts } from '@/_lib/_services/dashboard/charts';
    // const data = await getRevenueCharts();
    
    // For now, return mock data
    const mockData: RevenueChartPoint[] = [
      { date: "2026-01", revenue: 12000 },
      { date: "2026-02", revenue: 18000 },
      { date: "2026-03", revenue: 16500 },
      { date: "2026-04", revenue: 24000 },
      { date: "2026-05", revenue: 31000 },
      { date: "2026-06", revenue: 28000 },
    ];

    return NextResponse.json(mockData);
  } catch (error) {
    console.error('Revenue chart error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch revenue data' },
      { status: 500 }
    );
  }
}