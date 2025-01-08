import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 86, mobile: 80 },
  { month: "February", desktop: 50, mobile: 200 },
  { month: "March", desktop: 37, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 90, mobile: 130 },
  { month: "June", desktop: 14, mobile: 140 },
  { month: "January", desktop: 86, mobile: 80 },
  { month: "February", desktop: 5, mobile: 200 },
  { month: "March", desktop: 37, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 9, mobile: 130 },
  { month: "June", desktop: 14, mobile: 140 },
  { month: "January", desktop: 16, mobile: 80 },
  { month: "February", desktop: 35, mobile: 200 },
  { month: "March", desktop: 23, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 20, mobile: 130 },
  { month: "June", desktop: 21, mobile: 140 },
  { month: "January", desktop: 16, mobile: 80 },
  { month: "February", desktop: 30, mobile: 200 },
  { month: "March", desktop: 27, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 20, mobile: 130 },
  { month: "June", desktop: 21, mobile: 140 },
  { month: "January", desktop: 16, mobile: 80 },
  { month: "February", desktop: 5, mobile: 200 },
  { month: "March", desktop: 27, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 20, mobile: 130 },
  { month: "June", desktop: 21, mobile: 140 },
  { month: "January", desktop: 16, mobile: 80 },
  { month: "February", desktop: 35, mobile: 200 },
  { month: "March", desktop: 23, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 29, mobile: 130 },
  { month: "June", desktop: 21, mobile: 140 },
  { month: "January", desktop: 16, mobile: 80 },
  { month: "February", desktop: 30, mobile: 200 },
  { month: "March", desktop: 23, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 20, mobile: 130 },
  { month: "June", desktop: 24, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

export function Chart() {
  return (
    <div className="p-2 sm:p-3 lg:p-6 mt-10">
      <h1 className="text-center text-4xl font-semibold sticky top-0 bg-background py-3">Chemistry</h1>
      <div className="p-1 sm:p-3 lg:p-6 rounded-xl mb-10">
        <ChartContainer config={chartConfig} className="overflow-auto">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={true}
              tickMargin={4}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
      <h1 className="text-center text-4xl font-semibold sticky top-0 bg-background py-3">Mathematics</h1>
      <div className="p-1 sm:p-3 lg:p-6 rounded-xl mb-10">
        <ChartContainer config={chartConfig} className="overflow-auto">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={true}
              tickMargin={4}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
      <h1 className="text-center text-4xl font-semibold sticky top-0 bg-background py-3">Physics</h1>
      <div className="p-1 sm:p-3 lg:p-6 rounded-xl mb-10">
        <ChartContainer config={chartConfig} className="overflow-auto">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={true}
              tickMargin={4}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}

export default Chart;
