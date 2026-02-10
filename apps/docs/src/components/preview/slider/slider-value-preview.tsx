import { Slider } from "@/registry/core/slider";

export default function SliderValuePreview() {
  return (
    <div className="flex flex-col gap-12 p-8 max-w-md mx-auto">
      {/* Text Value Type Example */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <h4 className="text-sm font-semibold text-[#111827]">
            Text Value Display
          </h4>
          <p className="text-xs text-[#6B7280]">
            The current value is displayed directly below the thumb. Ideal for
            visible ranges.
          </p>
        </div>
        <div className="pt-2">
          <Slider
            defaultValue={[30, 60]}
            maxValue={100}
            minValue={0}
            thumbValueType="text"
            className="w-full"
          />
        </div>
      </div>

      <div className="h-px bg-[#E5E7EB]" />

      {/* Tooltip Value Type Example */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <h4 className="text-sm font-semibold text-[#111827]">
            Tooltip Value Display
          </h4>
          <p className="text-xs text-[#6B7280]">
            The value appears in a tooltip when interacting. Clean and focused
            UI.
          </p>
        </div>
        <div className="pt-8">
          <Slider
            defaultValue={[60]}
            maxValue={100}
            minValue={0}
            thumbValueType="tooltip"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
