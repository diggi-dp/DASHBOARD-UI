import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

type ChartData = {
  week: {
    sales: number;
    amount: number;
  }[];
  month: {
    sales: number;
    amount: number;
  }[];
  year: {
    sales: number;
    amount: number;
  }[];
};

const chartData: ChartData = {
  week: [
    { sales: 186, amount: 87057 },
    { sales: 305, amount: 23745 },
    { sales: 237, amount: 50439 },
    { sales: 73, amount: 38573 },
    { sales: 209, amount: 35545 },
    { sales: 214, amount: 35345 },
  ],
  month: [
    { sales: 186, amount: 90239 },
    { sales: 305, amount: 4892 },
    { sales: 237, amount: 748 },
    { sales: 73, amount: 738 },
    { sales: 209, amount: 48303 },
    { sales: 214, amount: 63489 },
  ],
  year: [
    { sales: 186, amount: 87057 },
    { sales: 305, amount: 23745 },
    { sales: 237, amount: 50439 },
    { sales: 73, amount: 38573 },
    { sales: 209, amount: 35545 },
    { sales: 214, amount: 35345 },
    { sales: 186, amount: 90239 },
    { sales: 305, amount: 4892 },
    { sales: 237, amount: 748 },
    { sales: 73, amount: 738 },
    { sales: 209, amount: 48303 },
    { sales: 214, amount: 63489 },
  ],
};

const formatAmount = (value: number) => {
  if (value > 10000) {
    return `${Math.abs(value / 1000)}k`;
  }
  return value.toString();
};

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function DashboardBarChart() {
  const [selectedOption, setSelectedOption] = useState<keyof ChartData>('year');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as keyof ChartData);
  };

  return (
    <>
      <div className="flex justify-between">
        <h3 className="mb-2 text-xl font-semibold tracking-wider">Activity</h3>
        <select className="text rounded-2xl bg-slate-500 px-3 py-1 text-sm font-semibold" value={selectedOption} onChange={handleSelectChange}>
          <option value="week" className="p-2">
            Week
          </option>
          <option value="month" className="p-2">
            Month
          </option>
          <option value="year" className="p-2">
            Year
          </option>
        </select>
      </div>
      <ChartContainer config={chartConfig} className="mt-2">
        <BarChart accessibilityLayer data={chartData[selectedOption]}>
          <CartesianGrid vertical={false} stroke="#ccc" color="red" width={1} height={1} />
          <XAxis dataKey="sales" tickLine={false} tickMargin={5} axisLine={true} />
          <YAxis tickFormatter={formatAmount} tickLine={false} tickMargin={25} axisLine={false} padding={{ top: 5, bottom: 10 }} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="amount" fill="var(--color-desktop)" radius={16} />
        </BarChart>
      </ChartContainer>
    </>
  );
}
