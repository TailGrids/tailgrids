"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/registry/core/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

export default function ChartPreview() {
  const data = [
    {
      name: "January",
      uv: 400,
      pv: 2400,
      amt: 2400
    },
    {
      name: "February",
      uv: 300,
      pv: 4567,
      amt: 2400
    },
    {
      name: "March",
      uv: 320,
      pv: 1398,
      amt: 2400
    },
    {
      name: "April",
      uv: 200,
      pv: 9800,
      amt: 2400
    },
    {
      name: "May",
      uv: 278,
      pv: 3908,
      amt: 2400
    },
    {
      name: "June",
      uv: 189,
      pv: 4800,
      amt: 2400
    }
  ];

  return (
    <div className="w-80 pl-0 p-4 md:pl-0 md:p-8 md:w-140 aspect-video bg-background-50 rounded">
      <ChartContainer
        initialDimension={{
          width: 280,
          height: 160
        }}
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
          <YAxis dataKey="uv" axisLine={false} tickLine={false} />

          <ChartTooltip content={<ChartTooltipContent />} />
          <CartesianGrid vertical={false} />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
