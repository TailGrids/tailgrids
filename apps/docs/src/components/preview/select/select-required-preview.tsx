"use client";

import { Button } from "@/registry/core/button";
import {
  Select,
  SelectContent,
  SelectErrorMessage,
  SelectIndicator,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/registry/core/select";

export default function SelectRequiredPreview() {
  return (
    <form
      className="flex w-full max-w-50 flex-col gap-4"
      onSubmit={e => {
        e.preventDefault();
        alert("Form submitted");
      }}
    >
      <Select isRequired>
        <SelectLabel>
          Select Country <span className="text-error-500">*</span>
        </SelectLabel>
        <SelectTrigger>
          <SelectValue />
          <SelectIndicator />
        </SelectTrigger>
        <SelectErrorMessage>Please select a country.</SelectErrorMessage>
        <SelectContent>
          <SelectItem id="usa">USA</SelectItem>
          <SelectItem id="canada">Canada</SelectItem>
          <SelectItem id="uk">UK</SelectItem>
          <SelectItem id="germany">Germany</SelectItem>
          <SelectItem id="france">France</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit">Submit Form</Button>
    </form>
  );
}
