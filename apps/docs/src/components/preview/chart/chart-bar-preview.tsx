"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/registry/core/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

export default function ChartBarPreview() {
  const data = [
    { name: "Jan", desktop: 400, mobile: 240 },
    { name: "Feb", desktop: 300, mobile: 139 },
    { name: "Mar", desktop: 200, mobile: 980 },
    { name: "Apr", desktop: 278, mobile: 390 },
    { name: "May", desktop: 189, mobile: 480 },
    { name: "Jun", desktop: 239, mobile: 380 }
  ];

  return (
    <div className="w-80 p-4 md:p-8 md:w-140 aspect-video bg-background-50 rounded">
      <ChartContainer
        initialDimension={{ width: 280, height: 160 }}
      >
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={8}
            tickCount={6}
          />
          <YAxis axisLine={false} tickLine={false} />
          <ChartTooltip content={<ChartTooltipContent indicator="square" />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey="desktop"
            fill="#3758F9"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="mobile"
            fill="#13C296"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
