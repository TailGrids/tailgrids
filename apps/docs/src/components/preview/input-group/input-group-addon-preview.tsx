import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from "@/registry/core/input-group";
import { Label } from "@/registry/core/label";
import { TextField } from "@/registry/core/text-field";
import { Locked3, Search1 } from "@tailgrids/icons";

export default function InputGroupAddonPreview() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-4">
      {/* Icon Inline Start */}
      <TextField className="flex flex-col gap-2">
        <Label>Search with Icon</Label>

        <InputGroup>
          <InputGroupAddon align="inline-start">
            <Search1 className="size-4.5" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search components..." />
        </InputGroup>
      </TextField>

      {/* Text Inline End */}
      <TextField className="flex flex-col gap-2">
        <Label>Email Address</Label>

        <InputGroup>
          <InputGroupInput placeholder="johndoe" />
          <InputGroupAddon align="inline-end">@tailgrids.com</InputGroupAddon>
        </InputGroup>
      </TextField>

      {/* Both Sides */}
      <TextField className="flex flex-col gap-2">
        <Label>Secure Payment</Label>

        <InputGroup>
          <InputGroupAddon align="inline-start">
            <Locked3 className="size-4.5" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Amount" type="number" />
          <InputGroupAddon align="inline-end">USD</InputGroupAddon>
        </InputGroup>
      </TextField>
    </div>
  );
}
