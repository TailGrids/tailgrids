"use client";

import { motion } from "framer-motion";
import { useId } from "react";

type SegmentedControlProps = {
  items: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
};

export function SegmentedControl({
  items,
  value,
  onChange
}: SegmentedControlProps) {
  const id = useId();

  return (
    <div className="relative p-0.75 rounded-[0.6rem] border bg-gray-100 border-[#EDEDED] dark:border-gray-800 flex text-sm dark:bg-gray-900">
      {items.map(item => (
        <button
          key={item.value}
          type="button"
          onClick={() => onChange(item.value)}
          className={`relative z-10 px-2.5 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer ${
            value === item.value
              ? "text-[#1F2937] dark:text-white/85"
              : "text-[#6B7280] hover:text-gray-800 dark:hover:text-gray-300"
          }`}
        >
          {value === item.value && (
            <motion.div
              layoutId={`segment-${id}`}
              className="absolute inset-0 bg-white dark:bg-gray-950 rounded-lg shadow-tab-active -z-10"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 40
              }}
            />
          )}
          <span className="relative">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
