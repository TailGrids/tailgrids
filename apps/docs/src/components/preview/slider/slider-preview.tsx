import { Slider } from "@/registry/core/slider";

export default function SliderPreview() {
  return (
    <div>
      <Slider
        defaultValue={[50, 75]}
        maxValue={100}
        minValue={0}
        label="Range"
      />
    </div>
  );
}
