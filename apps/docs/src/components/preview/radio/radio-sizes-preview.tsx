import { RadioInput } from "@/registry/core/radio-input";

export default function RadioSizesPreview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <RadioInput size="sm" name="size" label="Small radio" value="sm" />
      <RadioInput size="md" name="size" label="Medium radio" value="md" />
    </div>
  );
}
