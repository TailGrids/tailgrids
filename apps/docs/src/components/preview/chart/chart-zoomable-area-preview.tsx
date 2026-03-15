"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/registry/core/chart";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceArea,
  XAxis,
  YAxis
} from "recharts";

const initialData = [
  { name: 1, uv: 31, pv: 43 },
  { name: 2, uv: 42, pv: 74 },
  { name: 3, uv: -31, pv: 71 },
  { name: 4, uv: -58, pv: -17 },
  { name: 5, uv: -81, pv: -71 },
  { name: 6, uv: -36, pv: -41 },
  { name: 7, uv: 16, pv: 22 },
  { name: 8, uv: 61, pv: 60 },
  { name: 9, uv: 106, pv: 110 },
  { name: 10, uv: 147, pv: 153 },
  { name: 11, uv: 162, pv: 191 },
  { name: 12, uv: 165, pv: 194 },
  { name: 13, uv: 157, pv: 180 },
  { name: 14, uv: 144, pv: 157 },
  { name: 15, uv: 130, pv: 139 },
  { name: 16, uv: 115, pv: 121 },
  { name: 17, uv: 99, pv: 100 },
  { name: 18, uv: 81, pv: 76 },
  { name: 19, uv: 65, pv: 54 },
  { name: 20, uv: 53, pv: 38 }
];

export default function ChartZoomableAreaPreview() {
  const [data, setData] = useState(initialData);
  const [left, setLeft] = useState<number | string>("dataMin");
  const [right, setRight] = useState<number | string>("dataMax");
  const [refAreaLeft, setRefAreaLeft] = useState<number | null>(null);
  const [refAreaRight, setRefAreaRight] = useState<number | null>(null);
  const [bottom, setBottom] = useState<number | string>("dataMin");
  const [top, setTop] = useState<number | string>("dataMax");

  const getAxisYDomain = (
    from: number,
    to: number,
    ref: keyof Omit<typeof initialData[0], "name">,
    offset: number
  ) => {
    const fromIndex = data.findIndex(d => d.name === from);
    const toIndex = data.findIndex(d => d.name === to);
    const refData = data.slice(
      Math.min(fromIndex, toIndex),
      Math.max(fromIndex, toIndex) + 1
    );

    let [min, max] = [refData[0]?.[ref] || 0, refData[0]?.[ref] || 0];
    refData.forEach(d => {
      if (d[ref] > max) max = d[ref];
      if (d[ref] < min) min = d[ref];
    });

    return [Math.ceil(min | 0) - offset, Math.ceil(max | 0) + offset] as [
      number,
      number
    ];
  };

  const zoom = () => {
    if (
      refAreaLeft === refAreaRight ||
      refAreaRight === null ||
      refAreaLeft === null
    ) {
      setRefAreaLeft(null);
      setRefAreaRight(null);
      return;
    }

    let min = refAreaLeft;
    let max = refAreaRight;
    const minIndex = data.findIndex(d => d.name === min);
    const maxIndex = data.findIndex(d => d.name === max);
    if (minIndex > maxIndex) {
      min = refAreaRight;
      max = refAreaLeft;
    }

    const [bottomVal, topVal] = getAxisYDomain(min, max, "uv", 10);
    const [bottomVal2, topVal2] = getAxisYDomain(min, max, "pv", 10);

    setRefAreaLeft(null);
    setRefAreaRight(null);
    setData(data.slice());
    setLeft(min);
    setRight(max);
    setBottom(Math.min(bottomVal, bottomVal2));
    setTop(Math.max(topVal, topVal2));
  };

  const zoomOut = () => {
    setData(initialData);
    setRefAreaLeft(null);
    setRefAreaRight(null);
    setLeft("dataMin");
    setRight("dataMax");
    setTop("dataMax");
    setBottom("dataMin");
  };

  return (
    <div className="w-80 p-4 md:p-8 md:w-140 aspect-video bg-background-50 rounded select-none relative">
      <button
        onClick={zoomOut}
        className="absolute top-2 right-2 z-10 text-xs px-2 py-1 bg-white border rounded shadow-sm hover:bg-slate-50 cursor-pointer"
      >
        Zoom Out
      </button>
      <ChartContainer initialDimension={{ width: 280, height: 160 }}>
        <AreaChart
          data={data}
          onMouseDown={e => e?.activeLabel && setRefAreaLeft(e.activeLabel as number)}
          onMouseMove={e =>
            e?.activeLabel && refAreaLeft && setRefAreaRight(e.activeLabel as number)
          }
          onMouseUp={zoom}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            allowDataOverflow
            dataKey="name"
            domain={[left, right]}
            type="number"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            allowDataOverflow
            domain={[bottom, top]}
            type="number"
            yAxisId="1"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            allowDataOverflow
            domain={[bottom, top]}
            type="number"
            yAxisId="2"
            orientation="right"
            hide
          />
          <ChartTooltip content={<ChartTooltipContent indicator="square" />} />
          <Area
            yAxisId="1"
            type="monotone"
            dataKey="uv"
            stroke="#3758F9"
            fill="#3758F9"
            fillOpacity={0.2}
            animationDuration={300}
          />
          {refAreaLeft && refAreaRight ? (
            <ReferenceArea
              yAxisId="1"
              x1={refAreaLeft}
              x2={refAreaRight}
              strokeOpacity={0.3}
            />
          ) : null}
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
