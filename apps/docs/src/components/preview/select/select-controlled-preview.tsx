"use client";

import {
  Select,
  SelectContent,
  SelectDescription,
  SelectIndicator,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/registry/core/select";
import { useState } from "react";
import type { Key } from "react-aria-components";

export default function SelectControlledPreview() {
  const [animal, setAnimal] = useState<Key>("");

  return (
    <div className="min-w-50">
      <Select value={animal} onChange={setAnimal}>
        <SelectTrigger className="w-full min-w-56">
          <SelectValue />
          <SelectIndicator />
        </SelectTrigger>
        <SelectDescription>
          <p className="text-text-100 text-sm">
            Selected animal:{" "}
            {animal ? (
              <span className="capitalize font-medium">{animal}</span>
            ) : (
              <span>No animal selected</span>
            )}
          </p>
        </SelectDescription>
        <SelectContent>
          <SelectItem id="cat">Cat</SelectItem>
          <SelectItem id="dog">Dog</SelectItem>
          <SelectItem id="hamster">Hamster</SelectItem>
          <SelectItem id="parrot">Parrot</SelectItem>
          <SelectItem id="rabbit">Rabbit</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
