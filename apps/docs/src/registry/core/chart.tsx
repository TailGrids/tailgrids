"use client";

import { cn } from "@/utils/cn";
import * as RechartsPrimitives from "recharts";

function ChartContainer({
  width = 480,
  minHeight = 160,
  className,
  children,
  ...props
}: RechartsPrimitives.ResponsiveContainerProps) {
  return (
    <RechartsPrimitives.ResponsiveContainer
      width={width}
      minHeight={minHeight}
      className={cn(
        "text-xs -tracking-[0.2px] [&_.recharts-wrapper_*]:focus:not-focus-visible:outline-none [&_.recharts-wrapper_*]:focus-visible:outline-2 [&_.recharts-cartesian-grid_line]:stroke-(--color-chart-grid)",
        className
      )}
      {...props}
    >
      {children}
    </RechartsPrimitives.ResponsiveContainer>
  );
}

export { ChartContainer };
