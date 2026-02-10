"use client";

import { cn } from "@/utils/cn";
import { useRef } from "react";
import {
  useFocusRing,
  useNumberFormatter,
  useSlider,
  useSliderThumb,
  VisuallyHidden,
  type AriaSliderProps
} from "react-aria";
import { useSliderState, type SliderState } from "react-stately";

export interface SliderProps extends AriaSliderProps {
  thumbLabels?: string[];
  className?: string;
  thumbValueType?: "hidden" | "text" | "tooltip";
  name?: string;
}

export function Slider(props: SliderProps) {
  const { thumbValueType = "hidden" } = props;
  const trackRef = useRef<HTMLDivElement>(null);
  const numberFormatter = useNumberFormatter();
  const state = useSliderState({ ...props, numberFormatter });
  const { groupProps, trackProps } = useSlider(props, state, trackRef);

  return (
    <div
      {...groupProps}
      className={cn(
        "flex flex-col w-64 max-w-[calc(100%-10px)] gap-6 font-sans mb-8",
        props.isDisabled && "opacity-50 cursor-not-allowed",
        props.className
      )}
    >
      <div
        {...trackProps}
        ref={trackRef}
        className={cn(
          "relative h-5 flex items-center group cursor-pointer",
          props.isDisabled && "cursor-not-allowed"
        )}
      >
        <div className="w-full h-1.5 bg-[#F3F4F6] rounded-full" />
        <div
          className="absolute h-1.5 bg-primary-500 rounded-full"
          style={{
            left:
              state.values.length > 1
                ? `${state.getThumbPercent(0) * 100 - 1}%`
                : "0%",
            width:
              state.values.length > 1
                ? `${
                    (state.getThumbPercent(state.values.length - 1) -
                      state.getThumbPercent(0)) *
                    100
                  }%`
                : `${state.getThumbPercent(0) * 100}%`
          }}
        />

        {state.values.map((_, i) => (
          <Thumb
            key={i}
            index={i}
            state={state}
            trackRef={trackRef}
            thumbValueType={thumbValueType}
            name={props.name}
          />
        ))}
      </div>
    </div>
  );
}

interface ThumbProps {
  state: SliderState;
  trackRef: React.RefObject<HTMLDivElement | null>;
  index: number;
  name?: string;
  thumbValueType: "hidden" | "text" | "tooltip";
}

function Thumb(props: ThumbProps) {
  const { state, trackRef, index, name, thumbValueType } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { thumbProps, inputProps, isDragging } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
      name
    },
    state
  );

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      {...thumbProps}
      style={{
        ...thumbProps.style,
        left: `max(10px, ${state.getThumbPercent(index) * 100}%)`
      }}
      className={cn(
        "absolute top-1/2 -translate-x-1/2 size-5 rounded-full bg-white border-2 border-primary-500 hover:ring-4 hover:ring-primary-500/20 hover:cursor-grab active:cursor-grabbing outline-none",
        isDragging && "bg-primary-500 hover:ring-0",
        isFocusVisible && "ring-4 ring-primary-500/20",
        state.isDisabled && "border-neutral-300 pointer-events-none"
      )}
    >
      <VisuallyHidden>
        <input ref={inputRef} {...inputProps} {...focusProps} />
      </VisuallyHidden>

      {thumbValueType === "text" && (
        <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-sm text-[#374151]">
          {state.getThumbValueLabel(index)}
        </span>
      )}

      {thumbValueType === "tooltip" && (
        <div className="absolute bottom-full min-w-6 text-center mb-3.25 left-1/2 -translate-x-1/2 bg-white px-1.5 py-1 rounded shadow-md text-xs leading-4 text-[#374151] after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-1/2 after:size-1.5 after:rotate-45 after:bg-white after:shadow-md after:[clip-path:polygon(100%_0%,200%_200%,0%_100%)]">
          {state.getThumbValueLabel(index)}
        </div>
      )}
    </div>
  );
}
