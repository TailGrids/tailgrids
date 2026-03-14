"use client";

import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import * as RechartsPrimitive from "recharts";

function ChartContainer({
  className,
  children,
  ...props
}: RechartsPrimitive.ResponsiveContainerProps) {
  return (
    <RechartsPrimitive.ResponsiveContainer
      className={cn(
        "text-xs -tracking-[0.2px] [&_.recharts-wrapper_*]:focus:not-focus-visible:outline-none [&_.recharts-wrapper_*]:focus-visible:outline-2 [&_.recharts-cartesian-grid_line]:stroke-(--color-chart-grid) [&_.recharts-cartesian-axis-tick-value]:fill-(--color-chart-tick)",
        className
      )}
      {...props}
    >
      {children}
    </RechartsPrimitive.ResponsiveContainer>
  );
}

const ChartTooltip = RechartsPrimitive.Tooltip;

const chartTooltipVariants = cva(
  "p-2 pl-5 text-title-50 font-medium relative",
  {
    variants: {
      indicator: {
        dot: "before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:size-2 before:rounded-full before:bg-primary-500",
        line: "before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:w-1 before:h-2.5 before:rounded-none before:bg-primary-500"
      },
      indicatorIndex: {
        0: "before:bg-primary-500",
        1: "before:bg-primary-400",
        2: "before:bg-primary-300",
        3: "before:bg-primary-200",
        4: "before:bg-primary-100"
      }
    },
    defaultVariants: {
      indicator: "dot",
      indicatorIndex: 0
    }
  }
);

interface ChartTooltipContentProps
  extends
    Partial<RechartsPrimitive.TooltipContentProps>,
    VariantProps<typeof chartTooltipVariants> {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  className?: string;
}

function ChartTooltipContent({
  payload,
  label,
  labelStyle,
  labelFormatter,
  labelClassName,
  active,
  formatter,
  className,
  hideLabel,
  hideIndicator,
  indicator = "line"
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) {
    return null;
  }

  if (!hideLabel && labelFormatter) {
    return (
      <div style={labelStyle} className={cn("font-medium", labelClassName)}>
        {labelFormatter(label, payload)}
      </div>
    );
  }

  return (
    <div
      className={cn("bg-white rounded-md overflow-hidden min-w-20", className)}
    >
      {!hideLabel && (
        <p className="px-2 py-1 border-b bg-background-soft-100">{label}</p>
      )}

      <ul className="space-y-0.5 last:mb-0">
        {payload
          .filter(item => item.type !== "none")
          .map((item, index) => (
            <li key={item.key}>
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <p
                  className={cn(
                    chartTooltipVariants({
                      indicator: hideIndicator ? null : indicator,
                      indicatorIndex: hideIndicator
                        ? null
                        : (index as 0 | 1 | 2 | 3 | 4)
                    }),
                    hideIndicator && "pl-2"
                  )}
                >
                  {item.value}
                </p>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

const ChartLegend = RechartsPrimitive.Legend;

export { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent };
