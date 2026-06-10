"use client";

import { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "@/registry/core/input-group";
import { Check, Copy4, Link1AngularRight } from "@tailgrids/icons";

export default function InputGroupPreview() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("https://tailgrids.com/docs");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 p-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Link1AngularRight className="size-5" />
        </InputGroupAddon>

        <InputGroupInput defaultValue="https://tailgrids.com/docs" readOnly />

        <InputGroupAddon align="inline-end">
          {copied ? (
            <InputGroupButton size="icon-xs" aria-label="Link copied">
              <Check className="size-5 text-current hover:text-current" />
            </InputGroupButton>
          ) : (
            <InputGroupButton
              size="icon-xs"
              aria-label="Copy link"
              className="hover:text-current"
              onClick={handleCopy}
            >
              <Copy4 className="size-5" />
            </InputGroupButton>
          )}
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
