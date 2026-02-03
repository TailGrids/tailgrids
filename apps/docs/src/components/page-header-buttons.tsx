"use client";

import claudeIcon from "@/assets/logo/anthropic.svg";
import chatGptIcon from "@/assets/logo/chat-gpt.svg";
import grokIcon from "@/assets/logo/grok.svg";
import v0Icon from "@/assets/logo/v0.svg";
import { ChevronRightIcon, CopyIcon } from "@/components/ui/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/registry/core/dropdown";
import copy from "copy-text-to-clipboard";
import { CheckIcon, FileText } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { usePageContent } from "./page-content-provider";

export function PageHeaderButtons() {
  const content = usePageContent();
  const [isCopied, setIsCopied] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCopy = () => {
    copy(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const openInAI = (baseUrl: string) => {
    const url = `${baseUrl}${encodeURIComponent(content)}`;
    window.open(url, "_blank");
  };

  const menuItems = [
    {
      label: "View as Markdown",
      icon: <FileText className="size-5 font-normal" />,
      onAction: () => {
        const blob = new Blob([content], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      }
    },
    {
      label: "ChatGPT",
      icon: <Image src={chatGptIcon} alt="ChatGPT" className="size-5" />,
      onAction: () => openInAI("https://chatgpt.com/?q=")
    },
    {
      label: "Claude",
      icon: <Image src={claudeIcon} alt="Claude" className="size-5" />,
      onAction: () => openInAI("https://claude.ai/new?q=")
    },
    {
      label: "v0",
      icon: <Image src={v0Icon} alt="v0" className="size-5" />,
      onAction: () => openInAI("https://v0.dev/chat?q=")
    },
    {
      label: "Grok",
      icon: <Image src={grokIcon} alt="Grok" className="size-5" />,
      onAction: () => openInAI("https://grok.com/?q=")
    }
  ];

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 pl-2.5 pr-3 py-1.5 text-sm font-medium text-[#374151] -tracking-[0.2px] bg-white leading-5 rounded-[10px] shadow-[0_0_0_1px_#E5E7EB,0_3px_3px_-1.5px_rgba(41,41,41,0.02),0_6px_6px_-3px_rgba(41,41,41,0.04)] hover:bg-gray-50 hover:text-gray-900 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
      >
        {isCopied ? (
          <CheckIcon className="size-5 stroke-[1.5]" />
        ) : (
          <CopyIcon className="size-5 stroke-[1.5]" />
        )}
        <span>{isCopied ? "Copied" : "Copy Page"}</span>
      </button>

      <DropdownMenu onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger
          data-state={isDropdownOpen ? "open" : "closed"}
          className="group flex items-center gap-1.5 pr-2.5 pl-3 py-1.5 text-sm font-medium text-[#374151] -tracking-[0.2px] bg-white shadow-[0_0_0_1px_#E5E7EB,0_3px_3px_-1.5px_rgba(41,41,41,0.02),0_6px_6px_-3px_rgba(41,41,41,0.04)] leading-5 rounded-[10px] hover:bg-gray-50 hover:text-gray-900 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 outline-none"
        >
          <span>Open in</span>
          <ChevronRightIcon className="size-4 text-[#6B7280] transition-transform duration-200 rotate-90 group-data-[state=open]:-rotate-90" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-52 p-2 border border-[#EDEDED] shadow-lg rounded-xl">
          {menuItems.map(item => (
            <DropdownMenuItem
              key={item.label}
              onAction={item.onAction}
              className="rounded-lg cursor-pointer"
            >
              {item.icon}
              <span className="text-sm font-medium leading-5 -tracking-[0.2px]">
                {item.label}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
