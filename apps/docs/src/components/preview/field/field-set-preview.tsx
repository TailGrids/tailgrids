import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator
} from "@/registry/core/field";
import { Input } from "@/registry/core/input";

export default function FieldSetPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-sm p-4">
      <div className="flex flex-col gap-6 w-full">
        <div>
          <h2 className="text-title-50 block text-lg font-semibold mb-1">
            Profile
          </h2>
          <p>Update your personal information.</p>
        </div>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="profile-name">Full name</FieldLabel>
            <Input id="profile-name" placeholder="Evil Rabbit" />
          </Field>

          <Field>
            <FieldLabel htmlFor="profile-email">Email</FieldLabel>
            <Input
              id="profile-email"
              type="email"
              placeholder="rabbit@example.com"
            />
            <FieldDescription>
              This will be used for account recovery.
            </FieldDescription>
          </Field>

          <FieldSeparator />

          <Field>
            <FieldLabel htmlFor="profile-website">Website</FieldLabel>
            <Input
              id="profile-website"
              type="url"
              placeholder="https://example.com"
            />
          </Field>
        </FieldGroup>
      </div>
    </div>
  );
}
