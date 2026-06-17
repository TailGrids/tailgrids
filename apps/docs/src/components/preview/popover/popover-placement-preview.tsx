"use client";

import { Button } from "@/registry/core/button";
import { OverlayWrapper } from "@/registry/core/overlay";
import { Popover, PopoverArrow } from "@/registry/core/popover";
import { cn } from "@/utils/cn";
import { useState, type ComponentProps } from "react";

export default function PopoverPlacementPreview() {
  const [placement, setPlacement] = useState<Placement>("bottom");
  const active = cells.find(c => c.id === placement)!;

  return (
    <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:justify-evenly sm:gap-16">
      <OverlayWrapper>
        <Button appearance="outline">Open Popover</Button>
        <Popover placement={placement} className="max-w-xs shadow-lg">
          <PopoverArrow />

          <p className="mt-1 text-xs text-text-100">
            The popover uses placement=&quot;{active.hint}&quot; and the arrow
            rotates automatically to match.
          </p>
        </Popover>
      </OverlayWrapper>

      <div className="flex flex-col items-center gap-3">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: "repeat(5, 2rem)",
            gridTemplateRows: "repeat(5, 2rem)"
          }}
          role="radiogroup"
          aria-label="Popover placement"
        >
          {Array.from({ length: 25 }).map((_, index) => {
            const row = Math.floor(index / 5);
            const col = index % 5;
            const isCenter = row === 2 && col === 2;
            const cell = cells.find(c => c.row === row && c.col === col);
            if (!cell) {
              return (
                <div
                  key={index}
                  aria-hidden
                  className={cn(
                    isCenter &&
                      "rounded-md border border-dashed border-stroke-100"
                  )}
                />
              );
            }
            const isActive = cell.id === placement;
            return (
              <button
                key={cell.id}
                type="button"
                role="radio"
                aria-checked={isActive}
                aria-label={cell.label}
                onClick={() => setPlacement(cell.id)}
                className={cn(
                  "rounded-md border transition",
                  isActive
                    ? "bg-primary-600 border-primary-600"
                    : "border-stroke-100 bg-background-100 hover:bg-background-200"
                )}
              />
            );
          })}
        </div>

        <p className="text-xs text-text-100">
          Placement: &quot;{active.hint.split("-").join(" ")}&quot;
        </p>
      </div>
    </div>
  );
}

type Placement = NonNullable<ComponentProps<typeof Popover>["placement"]>;

type Cell = {
  id: Placement;
  label: string;
  hint: string;
  /** row in the 5x5 grid (0-4) */
  row: number;
  /** col in the 5x5 grid (0-4) */
  col: number;
};

const cells: Cell[] = [
  { id: "top start", label: "Top Start", hint: "top-start", row: 0, col: 1 },
  { id: "top", label: "Top", hint: "top", row: 0, col: 2 },
  { id: "top end", label: "Top End", hint: "top-end", row: 0, col: 3 },
  { id: "left top", label: "Left Top", hint: "left-top", row: 1, col: 0 },
  { id: "left", label: "Left", hint: "left", row: 2, col: 0 },
  {
    id: "left bottom",
    label: "Left Bottom",
    hint: "left-bottom",
    row: 3,
    col: 0
  },
  { id: "right top", label: "Right Top", hint: "right-top", row: 1, col: 4 },
  { id: "right", label: "Right", hint: "right", row: 2, col: 4 },
  {
    id: "right bottom",
    label: "Right Bottom",
    hint: "right-bottom",
    row: 3,
    col: 4
  },
  {
    id: "bottom start",
    label: "Bottom Start",
    hint: "bottom-start",
    row: 4,
    col: 1
  },
  { id: "bottom", label: "Bottom", hint: "bottom", row: 4, col: 2 },
  { id: "bottom end", label: "Bottom End", hint: "bottom-end", row: 4, col: 3 }
];
