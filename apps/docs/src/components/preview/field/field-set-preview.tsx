"use client";

import {
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
  FieldTitle
} from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import { TextField } from "@/registry/core/text-field";

export default function FieldSetPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-sm p-4">
      <FieldSet className="flex flex-col gap-6 w-full">
        <div>
          <FieldTitle className="text-title-50 block text-lg font-semibold mb-1">
            Profile
          </FieldTitle>
          <FieldDescription>Update your personal information.</FieldDescription>
        </div>

        <FieldGroup>
          <TextField>
            <FieldLabel htmlFor="profile-name">Full name</FieldLabel>
            <Input id="profile-name" placeholder="Evil Rabbit" />
          </TextField>

          <TextField>
            <FieldLabel htmlFor="profile-email">Email</FieldLabel>
            <Input
              id="profile-email"
              type="email"
              placeholder="rabbit@pimjo.com"
            />
            <FieldDescription>
              This will be used for account recovery.
            </FieldDescription>
          </TextField>

          <FieldSeparator />

          <TextField>
            <FieldLabel htmlFor="profile-website">Website</FieldLabel>
            <Input
              id="profile-website"
              type="url"
              placeholder="https://pimjo.com/"
            />
          </TextField>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
