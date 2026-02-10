import { Slider } from "@/registry/core/slider";

export default function SliderDisabledPreview() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <Slider defaultValue={[50]} maxValue={100} minValue={0} isDisabled />
    </div>
  );
}
