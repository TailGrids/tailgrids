"use client";

import Logo from "@/assets/logo/light-mode.svg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/registry/core/hover-card";
import Image from "next/image";

export default function HoverCardProfilePreview() {
  return (
    <div className="flex justify-center p-10">
      <HoverCard>
        <HoverCardTrigger
          href="https://github.com/tailgrids"
          className="text-primary-500 font-medium hover:underline"
        >
          @tailgrids
        </HoverCardTrigger>
        <HoverCardContent className="w-sm p-4">
          <div className="flex gap-4">
            <div className="relative shrink-0">
              <Image src={Logo} width={120} height={40} alt="Tailgrids Logo" />
            </div>
            <div className="flex-1">
              <div className="space-y-1">
                <h4 className="text-lg font-semibold text-title-50">
                  Tailgrids
                </h4>
                <p className="text-xs text-text-100 leading-relaxed">
                  Premium Tailwind CSS UI Components and Blocks for Web
                  Projects. Built for developers.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-[10px] text-text-200 uppercase tracking-wider font-medium">
                    Verified
                  </span>
                  <span className="text-[10px] text-text-200">•</span>
                  <span className="text-[10px] text-text-200">
                    Started: 2021
                  </span>
                </div>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
