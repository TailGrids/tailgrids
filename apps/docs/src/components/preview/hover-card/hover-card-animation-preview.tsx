"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/registry/core/hover-card";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function HoverCardAnimationPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center p-10">
      <HoverCard open={open} onOpenChange={setOpen}>
        <HoverCardTrigger className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          Animated Hover
        </HoverCardTrigger>
        <AnimatePresence>
          {open && (
            <HoverCardContent className="w-64 p-0 bg-transparent ring-0 shadow-none border-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10, rotateX: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                  mass: 1
                }}
                className="ring-(--border-color-base-50) bg-background-50 text-text-50 w-64 rounded-xl p-4 text-sm shadow-xl ring-1 outline-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 shadow-inner" />
                    <div>
                      <h4 className="font-bold text-title-50 text-[14px]">
                        Framer Motion
                      </h4>
                      <p className="text-[10px] text-text-100 font-medium">
                        Enhanced Animations
                      </p>
                    </div>
                  </div>
                  <p className="text-[13px] text-text-100 leading-relaxed font-medium">
                    This hover card uses <code>framer-motion</code> primitives
                    and spring physics for a more dynamic and responsive feel.
                  </p>
                  <div className="flex gap-2 pt-1">
                    <div className="h-1.5 w-full rounded-full bg-base-100 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          delay: 0.2,
                          duration: 1,
                          ease: "easeInOut"
                        }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </HoverCardContent>
          )}
        </AnimatePresence>
      </HoverCard>
    </div>
  );
}
