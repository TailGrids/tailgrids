"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/registry/core/chart";
import { Cell, Pie, PieChart } from "recharts";

export default function ChartPiePreview() {
  const data = [
    { name: "Desktop", value: 400 },
    { name: "Mobile", value: 300 },
    { name: "Tablet", value: 300 },
    { name: "Other", value: 200 }
  ];

  const COLORS = ['#3758F9', '#13C296', '#F2994A', '#E0E0E0'];

  return (
    <div className="w-80 p-4 md:p-8 md:w-140 aspect-video bg-background-50 rounded">
      <ChartContainer
        initialDimension={{ width: 280, height: 160 }}
        className="w-full h-full min-h-40"
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
