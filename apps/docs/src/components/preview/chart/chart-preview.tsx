"use client";

import { ChartContainer } from "@/registry/core/chart";
import { Area, AreaChart, CartesianGrid } from "recharts";

export default function ChartPreview() {
  const data = [
    {
      name: "Page A",
      uv: 400,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 300,
      pv: 4567,
      amt: 2400
    },
    {
      name: "Page C",
      uv: 320,
      pv: 1398,
      amt: 2400
    },
    {
      name: "Page D",
      uv: 200,
      pv: 9800,
      amt: 2400
    },
    {
      name: "Page E",
      uv: 278,
      pv: 3908,
      amt: 2400
    },
    {
      name: "Page F",
      uv: 189,
      pv: 4800,
      amt: 2400
    }
  ];

  return (
    <div className="p-10 bg-background-50 rounded">
      <ChartContainer>
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

          <CartesianGrid vertical={false} />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
