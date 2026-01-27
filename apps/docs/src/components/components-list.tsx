"use client";

import { componentImages } from "@/components/component-images";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { REGISTRIES } from "../../../../packages/cli/src/registries";

export function ComponentsList() {
  return (
    <div className="grid  gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-12 pb-16">
      {REGISTRIES.map(component => {
        const image = componentImages[component.id];
        return (
          <Link
            key={component.id}
            href={`/components/${component.id}`}
            className="group block h-full no-underline"
          >
            <div
              className={cn(
                "h-full overflow-hidden rounded-2xl border border-[#EDEDED] transition-all duration-200  dark:border-gray-800"
              )}
            >
              <div className="relative w-full  dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                {image ? (
                  <Image
                    src={image}
                    alt={component.name}
                    className="object-cover !m-0"
                    placeholder="blur"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-400">
                    <span className="text-sm">No Preview</span>
                  </div>
                )}
              </div>
              <div className="px-5 py-4">
                <h3
                  className={cn(
                    "text-base font-medium !no-underline !m-0  tracking-tight text-gray-900 dark:text-gray-100"
                  )}
                >
                  {component.name}
                </h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
