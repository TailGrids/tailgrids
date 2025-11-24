import {
  Tabs,
  TabsTrigger,
  TabsContent,
  TabsList
} from "fumadocs-ui/components/tabs.unstyled";
import { CopyToClipboard } from "./copy-to-clipboard";
import { CodeBlock } from "./code-block";

const ITEMS = [
  {
    label: "Preview",
    value: "preview"
  },
  {
    label: "Code",
    value: "code"
  }
];

type PropsType = {
  codeSnippetLang?: string;
  codeSnippet: string;
  children: React.ReactNode;
};

export function ComponentPreview({
  codeSnippet,
  codeSnippetLang = "tsx",
  children
}: PropsType) {
  return (
    <Tabs defaultValue="preview">
      <div className="flex justify-between gap-5 items-center">
        <TabsList className="p-[3px] rounded-[0.6rem] border bg-gray-100 border-[#EDEDED] dark:border-gray-800 max-w-fit flex text-sm dark:bg-gray-900 text-[#6B7280]">
          {ITEMS.map(item => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="px-2.5 py-1.5 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:shadow-tab-active data-[state=active]:text-[#1F2937] dark:data-[state=active]:text-white/85"
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <CopyToClipboard
          className="py-2 pr-3 pl-2.5 gap-2 font-medium rounded-[10px] border"
          content={codeSnippet}
          showLabel
        />
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-[1.75rem] border p-2.5 my-4">
        <TabsContent
          value="preview"
          className="px-15 py-10 min-h-100 flex flex-col items-center justify-center rounded-[20px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
        >
          {children}
        </TabsContent>

        <TabsContent
          value="code"
          className="max-h-180 h-full overflow-y-auto overflow-x-auto custom-scrollbar"
        >
          <CodeBlock
            lang={codeSnippetLang}
            showLineNumbers
            snippet={codeSnippet}
          />
        </TabsContent>
      </div>
    </Tabs>
  );
}
