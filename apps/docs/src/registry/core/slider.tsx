"use client";

import { cn } from "@/utils/cn";
import {
  Slider as AriaSlider,
  SliderProps as AriaSliderProps,
  SliderThumb,
  SliderTrack
} from "react-aria-components";

export interface SliderProps<T> extends AriaSliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

export function Slider<T extends number | number[]>({
  label,
  thumbLabels,
  ...props
}: SliderProps<T>) {
  const values = props.value || props.defaultValue || [0];
  const thumbCount = Array.isArray(values) ? values.length : 1;

  return (
    <AriaSlider
      {...props}
      className={cn(
        "grid w-64 max-w-[calc(100%-10px)] grid-cols-[1fr_auto] items-center gap-2 font-sans",
        props.className
      )}
    >
      <SliderTrack
        className="group col-span-2 flex h-5 items-center relative"
        style={renderProps =>
          ({
            "--slider-fill-start":
              renderProps.state.values.length > 1
                ? renderProps.state.getThumbPercent(0) * 100 + "%"
                : "0%",
            "--slider-fill-size":
              renderProps.state.values.length > 1
                ? (renderProps.state.getThumbPercent(1) -
                    renderProps.state.getThumbPercent(0)) *
                    100 +
                  "%"
                : renderProps.state.getThumbPercent(0) * 100 + "%"
          }) as React.CSSProperties
        }
      >
        <div className="w-full h-1.5 bg-[#F3F4F6] rounded-full group-data-disabled:opacity-50" />
        <div
          className="absolute rounded-full h-1.5 bg-[#3758F9] group-data-disabled:bg-neutral-300"
          style={{
            left: "var(--slider-fill-start)",
            width: "var(--slider-fill-size)"
          }}
        />
        {Array.from({ length: thumbCount }).map((_, i) => (
          <SliderThumb
            key={i}
            index={i}
            aria-label={thumbLabels?.[i]}
            className="size-5 rounded-full bg-white border-2 border-[#3758F9] translate-y-1/2 hover:ring-4 hover:ring-[#3758F9]/20 hover:cursor-grab active:cursor-grabbing data-dragging:bg-[#3758F9] data-dragging:hover:ring-0 data-disabled:border-neutral-300"
          />
        ))}
      </SliderTrack>
    </AriaSlider>
  );
}
