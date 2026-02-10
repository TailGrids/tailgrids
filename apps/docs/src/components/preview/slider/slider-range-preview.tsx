import { Slider } from "@/registry/core/slider";

export default function SliderRangePreview() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <Slider defaultValue={[25, 75]} maxValue={100} minValue={0} />
    </div>
  );
}
