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
import { usePathname } from "next/navigation";
import { useState } from "react";
import { usePageContent } from "./page-content-provider";

export function PageHeaderButtons() {
  const content = usePageContent();
  const pathname = usePathname();
  const [isCopied, setIsCopied] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const slug = pathname.split("/").filter(Boolean).pop();
  const componentName = slug
    ? slug.charAt(0).toUpperCase() + slug.slice(1)
    : "Component";

  const getPrompt = (base?: string) => {
    const url = `https://tailgrids.com/docs${pathname}`;
    const prompt = `I need help understanding the ${componentName} component from the TailGrids library. Here is the link: ${url}\n\nPlease explain the available props, styling options, and provide usage examples.`;
    if (base) {
      return `${base}${encodeURIComponent(prompt)}`;
    }
    return prompt;
  };

  const handleCopy = () => {
    copy(getPrompt());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const menuItems = [
    {
      label: "View as Markdown",
      icon: <FileText className="size-5 font-normal dark:text-white/75" />,
      onAction: () => {
        const blob = new Blob([content], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      }
    },
    {
      label: "ChatGPT",
      icon: (
        <Image src={chatGptIcon} alt="ChatGPT" className="size-5 dark:invert" />
      ),
      href: getPrompt("https://chatgpt.com/?q=")
    },
    {
      label: "Claude",
      icon: (
        <Image src={claudeIcon} alt="Claude" className="size-5 dark:invert" />
      ),
      href: getPrompt("https://claude.ai/new?q=")
    },
    {
      label: "v0",
      icon: <Image src={v0Icon} alt="v0" className="size-5 dark:invert" />,
      href: getPrompt("https://v0.dev/chat?q=")
    },
    {
      label: "Grok",
      icon: <Image src={grokIcon} alt="Grok" className="size-5 dark:invert" />,
      href: getPrompt("https://grok.com/?q=")
    }
  ];

  const buttonClasses =
    "flex items-center gap-1.5 pl-2.5 pr-3 py-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 -tracking-[0.2px] bg-white dark:bg-white/5 leading-5 rounded-[10px] shadow-navbar-icon dark:shadow-none hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:shadow-none transition-colors outline-none dark:border-[#111827] border border-transparent";

  return (
    <div className="flex items-center gap-2">
      <button onClick={handleCopy} className={buttonClasses}>
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
          className={`group ${buttonClasses}`}
        >
          <span>Open in</span>
          <ChevronRightIcon className="size-4 text-[#6B7280] transition-transform duration-200 rotate-90 group-data-[state=open]:-rotate-90" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-52 p-2 border border-[#EDEDED] shadow-lg rounded-xl bg-white text-gray-700 dark:bg-gray-950 dark:border-gray-800 dark:text-gray-300">
          {menuItems.map(item => (
            <DropdownMenuItem
              key={item.label}
              onAction={item.onAction}
              href={item.href}
              target={item.href ? "_blank" : undefined}
              className="rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:bg-gray-800 dark:focus:text-white"
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
