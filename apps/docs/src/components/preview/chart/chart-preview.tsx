"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/registry/core/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

export default function ChartPreview() {
  const data = [
    {
      name: "January",
      uv: 1890
    },
    {
      name: "February",
      uv: 2780
    },
    {
      name: "March",
      uv: 2000
    },
    {
      name: "April",
      uv: 3200
    },
    {
      name: "May",
      uv: 3000
    },
    {
      name: "June",

      uv: 3400
    }
  ];

  return (
    <div className="w-80 pl-0 p-4 md:pl-0 md:p-8 md:w-140 aspect-video bg-background-50 rounded">
      <ChartContainer
        initialDimension={{
          width: 280,
          height: 160
        }}
        className="[&_.recharts-tooltip-cursor]:stroke-slate-200"
      >
        <AreaChart data={data}>
          <defs>
            <linearGradient id="background" x1="0" y1="0" x2="0" y2="1">
              <stop offset={"5%"} stopColor="#3758F9" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3758F9" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            dataKey={"uv"}
            stroke="#3758F9"
            fill="url(#background)"
            type="monotone"
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={6}
            tickCount={6}
            tickFormatter={value => value.slice(0, 3)}
          />
          <YAxis axisLine={false} tickLine={false} />

          <ChartTooltip
            content={<ChartTooltipContent indicator={"square"} />}
          />
          <ChartLegend content={<ChartLegendContent />} />
          <CartesianGrid vertical={false} />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
