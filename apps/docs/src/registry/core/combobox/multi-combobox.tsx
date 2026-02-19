import { cn } from "@/utils/cn";
import { Xmark2x } from "@tailgrids/icons";
import React, { useContext, useState } from "react";
import { type Key } from "react-aria-components";
import { Badge } from "../badge";
import { Combobox, type ComboboxProps, MultiComboboxContext } from "./combobox";

// MultiCombobox (Root)

export interface MultiComboboxProps<T extends object> extends Omit<
  ComboboxProps<T>,
  "value" | "defaultValue" | "onChange"
> {
  value?: Key[];
  defaultValue?: Key[];
  onChange?: (keys: Key[]) => void;
  onSelectionChange?: (key: Key | null) => void;
}

export function MultiCombobox<T extends object>({
  children,
  value,
  defaultValue,
  onChange,
  onSelectionChange,
  ...props
}: MultiComboboxProps<T>) {
  const [internalValue, setInternalValue] = useState<Set<Key>>(
    new Set(defaultValue || [])
  );

  const selectedKeys = value ? new Set(value) : internalValue;

  const handleSelectionChange = (key: Key | null) => {
    if (key === null) return;

    const newKeys = new Set(selectedKeys);
    if (newKeys.has(key)) {
      newKeys.delete(key);
    } else {
      newKeys.add(key);
    }

    if (!value) {
      setInternalValue(newKeys);
    }

    onChange?.(Array.from(newKeys));
    onSelectionChange?.(key);
  };

  const removeKey = (key: Key) => {
    const newKeys = new Set(selectedKeys);
    newKeys.delete(key);
    if (!value) {
      setInternalValue(newKeys);
    }
    onChange?.(Array.from(newKeys));
  };

  return (
    <MultiComboboxContext.Provider value={{ selectedKeys, removeKey }}>
      <Combobox
        {...props}
        value={null} // Keep it null so it doesn't show a selection in the input
        onChange={handleSelectionChange}
      >
        {children}
      </Combobox>
    </MultiComboboxContext.Provider>
  );
}

// MultiCombobox Display (Tags)

export interface MultiComboboxDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  renderTag?: (key: Key) => React.ReactNode;
}

export function MultiComboboxDisplay({
  className,
  renderTag,
  ...props
}: MultiComboboxDisplayProps) {
  const context = useContext(MultiComboboxContext);
  if (!context) return null;

  return (
    <div className={cn("flex flex-wrap gap-2 mb-2", className)} {...props}>
      {Array.from(context.selectedKeys).map(key => (
        <React.Fragment key={key}>
          {renderTag ? (
            renderTag(key)
          ) : (
            <Badge
              color="primary"
              suffixIcon={
                <button
                  onClick={() => context.removeKey(key)}
                  className="hover:text-title-50 outline-none"
                >
                  <Xmark2x />
                </button>
              }
            >
              {key}
            </Badge>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
