import { Checkbox } from "@/registry/core/checkbox";
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
    <div className="flex gap-6 w-full justify-center">
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
            <RadioInput
              name="example-list"
              label={feature}
              className="w-full"
            />
          </li>
        ))}
      </List>
    </div>
  );
}
