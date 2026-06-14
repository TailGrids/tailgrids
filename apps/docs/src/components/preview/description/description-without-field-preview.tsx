"use client";

import { Description } from "@/registry/core/description";
import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";

export default function DescriptionWithoutFieldPreview() {
  return (
    <div className="max-w-sm w-full mx-auto grid gap-2">
      <Label>Email</Label>
      <Input
        placeholder="Enter your email"
        aria-describedby="email-description"
      />
      <Description id="email-description">
        We will never share your email with anyone else.
      </Description>
    </div>
  );
}
