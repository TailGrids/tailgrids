"use client";

import {
  Select,
  SelectContent,
  SelectDescription,
  SelectIndicator,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/registry/core/select";

export default function SelectWithLabelPreview() {
  return (
    <div className="flex w-full max-w-50 flex-col gap-4">
      <Select>
        <SelectLabel>Favorite Animal</SelectLabel>

        <SelectTrigger>
          <SelectValue />
          <SelectIndicator />
        </SelectTrigger>
        <SelectContent>
          <SelectItem id="cat">Cat</SelectItem>
          <SelectItem id="dog">Dog</SelectItem>
          <SelectItem id="hamster">Hamster</SelectItem>
          <SelectItem id="parrot">Parrot</SelectItem>
          <SelectItem id="rabbit">Rabbit</SelectItem>
        </SelectContent>

        <SelectDescription>
          Choose an animal that you like the most.
        </SelectDescription>
      </Select>
    </div>
  );
}
