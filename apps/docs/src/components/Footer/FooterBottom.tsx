import { BorderLine } from "../ui/ContainerWithGrid";

export default function FooterBottom() {
  return (
    <div className="relative mb-5 bg-gray-100 dark:bg-gray-900 px-5 py-4 md:mb-15 md:px-10">
      <BorderLine position="top" />
      <BorderLine position="bottom" />
      <div>
        <p className="font-mono text-sm -tracking-[.2px] text-tg-text-color-secondary">
          © Copyright {new Date().getFullYear()} Tailgrids - All rights
          reserved.
        </p>
        <p className="mt-2 text-sm -tracking-[0.2px] text-tg-text-color-secondary">
          The Tailwind name and logos are trademarks of Tailwind Labs Inc.
          TailGrids is not affiliated with, associated with, or part of Tailwind
          Labs or the official Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
