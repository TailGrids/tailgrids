import { Label } from "@/registry/core/label";
import { RadioInput } from "@/registry/core/radio-input";

export default function RadioDefaultCheckedPreview() {
  const plans = [
    { label: "Basic Plan", value: "basic" },
    { label: "Pro Plan", value: "pro", defaultChecked: true },
    { label: "Enterprise Plan", value: "enterprise" }
  ];

  return (
    <div className="flex flex-col gap-3">
      {plans.map(plan => (
        <Label
          key={plan.value}
          className="group flex cursor-pointer items-center gap-3 select-none"
        >
          <RadioInput
            name="default-check"
            value={plan.value}
            defaultChecked={plan.defaultChecked}
          />
          <span>{plan.label}</span>
        </Label>
      ))}
    </div>
  );
}
