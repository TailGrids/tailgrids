"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea
} from "@/registry/core/input-group";
import { Label } from "@/registry/core/label";
import { TextField } from "@/registry/core/text-field";
import { useState } from "react";

export default function InputGroupAlignPreview() {
  const [headerValue, setHeaderValue] = useState("");
  const [commentValue, setCommentValue] = useState("");

  return (
    <div className="flex w-full max-w-sm flex-col gap-10 p-4">
      {/* Block Start */}
      <TextField>
        <Label>Header Addon</Label>

        <InputGroup className="flex-col overflow-hidden items-stretch">
          <InputGroupAddon
            align="block-start"
            className="w-full bg-base-200 justify-start py-2 border-b border-base-300 rounded-t-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-base-500">
              Support Message
            </span>
          </InputGroupAddon>

          <InputGroupTextarea
            placeholder="Type your message here..."
            className="py-3 px-3"
            value={headerValue}
            onChange={e => setHeaderValue(e.target.value)}
          />
        </InputGroup>
      </TextField>

      {/* Block End */}
      <TextField className="flex flex-col gap-2">
        <Label>Footer Actions</Label>

        <InputGroup className="flex-col overflow-hidden items-stretch">
          <InputGroupTextarea
            placeholder="Add a comment..."
            className="py-3 px-3"
            value={commentValue}
            onChange={e => setCommentValue(e.target.value)}
          />

          <InputGroupAddon
            align="block-end"
            className="w-full bg-base-200 justify-end py-1.5 px-3 border-t border-base-300 rounded-b-lg gap-3"
          >
            <span className="text-xs text-base-500 mr-auto">
              Supports Markdown
            </span>

            <InputGroupButton
              size="xs"
              className="p-0 hover:bg-transparent opacity-75"
              onClick={() => setCommentValue("")}
            >
              Cancel
            </InputGroupButton>
            <InputGroupButton
              size="xs"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-0"
              disabled={!commentValue.trim()}
              onClick={() => {
                if (commentValue.trim()) {
                  setCommentValue("");
                }
              }}
            >
              Comment
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </TextField>
    </div>
  );
}
