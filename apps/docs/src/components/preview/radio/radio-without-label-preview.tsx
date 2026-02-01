import { RadioInput } from "@/registry/core/radio-input";

export default function RadioWithoutLabelPreview() {
  return (
    <div className="flex items-center gap-3">
      <RadioInput name="option" value="1" size="sm" />
      <RadioInput name="option" value="2" size="md" />
    </div>
  );
}
