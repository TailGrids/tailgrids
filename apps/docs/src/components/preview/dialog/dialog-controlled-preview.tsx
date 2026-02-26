"use client";

import { Button } from "@/registry/core/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle
} from "@/registry/core/dialog";
import { BarChart2, Bolt1, Sparkle } from "@tailgrids/icons";
import { useState } from "react";

export default function DialogControlledPreview() {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      icon: <Bolt1 size={20} className="text-yellow-500" />,
      title: "Real-time Analytics",
      description: "Get instant insights with 0.1s latency performance metrics."
    },
    {
      icon: <BarChart2 size={20} className="text-blue-500" />,
      title: "Growth Forecasting",
      description: "AI-powered predictions for your next quarterly targets."
    },
    {
      icon: <Sparkle size={20} className="text-purple-500" />,
      title: "Advanced Customization",
      description: "Full control over every aspect of your dashboard layout."
    }
  ];

  return (
    <div className="flex h-100 w-full items-center justify-center bg-gray-50/50 p-10 dark:bg-black/20">
      <div className="text-center">
        <h3 className="mb-4 text-xl font-semibold text-title-50">
          Advanced Statistics
        </h3>
        <p className="mb-6 text-text-100 max-w-sm">
          To view your performance metrics and growth forecasts, you need to
          unlock Pro access.
        </p>

        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/25 transition-all hover:scale-105 active:scale-95 text-white inline-flex items-center"
        >
          <Sparkle size={16} className="mr-2" />
          Unlock Pro Insights
        </Button>
      </div>

      <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay isDismissable>
          <DialogContent className="max-w-md border-none p-0 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="relative h-32 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
              <div className="relative z-10 flex h-full items-center justify-between">
                <div className="space-y-1">
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    Premium Feature
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    Upgrade to Pro
                  </h2>
                </div>
                <div className="relative flex size-16 items-center justify-center rounded-2xl bg-white/20 shadow-inner backdrop-blur-md">
                  <Sparkle size={32} className="text-white animate-pulse" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-xl font-bold text-title-50">
                  Unlock Everything
                </DialogTitle>
                <DialogDescription className="text-text-100">
                  Join 10,000+ businesses using our Pro tools to scale.
                </DialogDescription>
              </DialogHeader>

              <DialogBody className="space-y-5 py-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5">
                      {feature.icon}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-title-50 leading-none">
                        {feature.title}
                      </p>
                      <p className="text-[13px] text-text-soft-100 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </DialogBody>

              <DialogFooter className="mt-8 gap-3 sm:flex-row">
                <Button
                  appearance="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-6 py-2.5 font-medium transition-colors"
                >
                  Maybe Later
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-2.5 font-semibold text-white shadow-md transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Upgrade Now
                </Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </div>
  );
}
