import { RadioInput } from "@/registry/core/radio-input";

export default function RadioDefaultCheckedPreview() {
  return (
    <div className="flex flex-col gap-3">
      <RadioInput name="default-check" label="Basic Plan" value="basic" />
      <RadioInput
        name="default-check"
        label="Pro Plan"
        value="pro"
        defaultChecked
      />
      <RadioInput
        name="default-check"
        label="Enterprise Plan"
        value="enterprise"
      />
    </div>
  );
}
