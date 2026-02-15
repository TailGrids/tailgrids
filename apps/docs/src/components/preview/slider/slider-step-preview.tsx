"use client";

import { Slider } from "@/registry/core/slider";
import { cn } from "@/utils/cn";
import { useState } from "react";

export default function SliderStepPreview() {
  const [value, setValue] = useState([20]);
  const minValue = 0;
  const maxValue = 100;
  const step = 20;

  // Generate steps for the scale
  const steps = [];
  for (let i = minValue; i <= maxValue; i += step) {
    steps.push(i);
  }

  return (
    <div className="w-full max-w-sm mx-auto py-12 px-6">
      <div className="relative flex flex-col gap-8">
        <div className="relative h-12 w-[95%]">
          {/* Main horizontal line of the ruler at the top */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-neutral-200" />

          <div className="relative w-full h-full">
            {steps.map(s => {
              const currentVal = value[0] ?? 0;
              const isActive = s <= currentVal;
              const percentage = ((s - minValue) / (maxValue - minValue)) * 100;

              return (
                <div
                  key={s}
                  className="absolute flex flex-col items-center -translate-x-1/2"
                  style={{ left: `${percentage}%` }}
                >
                  {/* Tick mark pointing DOWN from the line */}
                  <div
                    className={cn(
                      "w-0.5 h-3 transition-colors duration-200",
                      isActive ? "bg-title-50" : "bg-neutral-300"
                    )}
                  />
                  {/* Label */}
                  <span
                    className={cn(
                      "text-sm font-medium mt-1.5 select-none transition-colors duration-200",
                      isActive ? "text-title-50" : "text-tg-text-color-tertiary"
                    )}
                  >
                    {s}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider
            value={value}
            onChange={(val: number | number[]) => {
              setValue(Array.isArray(val) ? val : [val]);
            }}
            maxValue={maxValue}
            minValue={minValue}
            step={step}
            className="w-full mb-0 m-0"
          />
        </div>
      </div>
    </div>
  );
}
