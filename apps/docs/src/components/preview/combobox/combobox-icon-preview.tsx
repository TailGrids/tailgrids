"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputWrapper,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger
} from "@/registry/core/combobox";
import {
  Briefcase4,
  Buildings11,
  Camera1,
  Cart2,
  Sparkle
} from "@tailgrids/icons";

const categories = [
  { id: "featured", name: "Featured", icon: Sparkle },
  { id: "real-estate", name: "Real Estate", icon: Buildings11 },
  { id: "jobs", name: "Jobs", icon: Briefcase4 },
  { id: "photography", name: "Photography", icon: Camera1 },
  { id: "e-commerce", name: "E-Commerce", icon: Cart2 }
];

export default function ComboboxIconPreview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={categories}>
        <ComboboxLabel>Category</ComboboxLabel>
        <ComboboxInputWrapper>
          <ComboboxInput placeholder="Select category..." />
          <ComboboxTrigger />
        </ComboboxInputWrapper>
        <ComboboxContent>
          <ComboboxList>
            {categories.map(category => (
              <ComboboxItem
                key={category.id}
                id={category.id}
                textValue={category.name}
              >
                <div className="flex items-center gap-2">
                  <category.icon className="size-5" />
                  <span>{category.name}</span>
                </div>
              </ComboboxItem>
            ))}
          </ComboboxList>
          <ComboboxEmpty>No results found</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
