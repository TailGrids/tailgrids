import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from "@/registry/core/input-group";
import { Locked3, Search1 } from "@tailgrids/icons";

export default function InputGroupAddonPreview() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-4">
      {/* Icon Inline Start */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Search with Icon</label>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <Search1 className="h-4 w-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search components..." />
        </InputGroup>
      </div>

      {/* Text Inline End */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Email Address</label>
        <InputGroup>
          <InputGroupInput placeholder="johndoe" />
          <InputGroupAddon align="inline-end">@tailgrids.com</InputGroupAddon>
        </InputGroup>
      </div>

      {/* Both Sides */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Secure Payment</label>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <Locked3 className="h-4 w-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Amount" type="number" />
          <InputGroupAddon align="inline-end">USD</InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
