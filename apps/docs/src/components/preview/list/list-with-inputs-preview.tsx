import { Checkbox } from "@/registry/core/checkbox";
import { Label } from "@/registry/core/label";
import { List } from "@/registry/core/list";
import { RadioInput } from "@/registry/core/radio-input";

export default function ListWithInputsPreview() {
  const features = [
    "Complete documentation work.",
    "Add new template to TailAdmin.",
    "Try to make Meku.dev featureful",
    "Review Sera UI pr's",
    "Review TailAdmin pr's"
  ];

  return (
    <div className="flex w-full justify-center gap-6">
      {/* Checkbox List */}
      <List className="max-w-70">
        {features.map((feature, index) => (
          <li key={index}>
            <Checkbox label={feature} className="w-full" />
          </li>
        ))}
      </List>

      {/* Radio List */}
      <List className="max-w-70">
        {features.map((feature, index) => (
          <li key={index}>
            <Label className="group flex w-full cursor-pointer items-center gap-3 select-none">
              <RadioInput name="example-list" value={`feature-${index}`} />
              <span>{feature}</span>
            </Label>
          </li>
        ))}
      </List>
    </div>
  );
}
