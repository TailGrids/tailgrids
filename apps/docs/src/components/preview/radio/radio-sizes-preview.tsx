import { RadioInput } from "@/registry/core/radio-input";

export default function RadioSizesPreview() {
  return (
    <div className="flex items-center gap-3">
      <RadioInput size="sm" name="size" label="Small radio" value="sm" />
      <RadioInput size="md" name="size" label="Medium radio" value="md" />
    </div>
  );
}
