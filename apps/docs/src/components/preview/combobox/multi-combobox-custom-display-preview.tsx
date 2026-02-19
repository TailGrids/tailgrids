"use client";

import { Badge } from "@/registry/core/badge";
import {
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputWrapper,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
  MultiCombobox,
  MultiComboboxContext,
  MultiComboboxDisplay
} from "@/registry/core/combobox";
import { XmarkCircle2x } from "@tailgrids/icons";
import React from "react";

const frameworks = [
  { id: "nextjs", name: "Next.js", color: "dark" },
  { id: "react", name: "React", color: "primary" },
  { id: "tailwind", name: "Tailwind CSS", color: "secondary" },
  { id: "typescript", name: "TypeScript", color: "primary" },
  { id: "astro", name: "Astro", color: "error" }
];

export default function MultiComboboxCustomDisplayPreview() {
  return (
    <div className="w-full max-w-sm">
      <MultiCombobox items={frameworks}>
        <ComboboxLabel>Frameworks</ComboboxLabel>

        <ComboboxInputWrapper>
          <ComboboxInput placeholder="Select frameworks..." />
          <ComboboxTrigger />
        </ComboboxInputWrapper>

        <MultiComboboxDisplay
          renderTag={key => {
            const framework = frameworks.find(f => f.id === key);

            return (
              <Badge
                color={(framework?.color as any) || "primary"}
                className="rounded-full px-3 py-1"
                suffixIcon={<MultiComboboxContextConsumer id={key} />}
              >
                {framework?.name || key}
              </Badge>
            );
          }}
        />

        <ComboboxContent>
          <ComboboxList>
            {frameworks.map(framework => (
              <ComboboxItem
                key={framework.id}
                id={framework.id}
                textValue={framework.name}
              >
                {framework.name}
              </ComboboxItem>
            ))}
          </ComboboxList>
          <ComboboxEmpty>No frameworks found</ComboboxEmpty>
        </ComboboxContent>
      </MultiCombobox>
    </div>
  );
}

function MultiComboboxContextConsumer({ id }: { id: any }) {
  const context = React.useContext(MultiComboboxContext);
  return (
    <button
      onClick={() => context?.removeKey(id)}
      className="hover:text-title-50 outline-none ml-1"
    >
      <XmarkCircle2x className="size-3" />
    </button>
  );
}
