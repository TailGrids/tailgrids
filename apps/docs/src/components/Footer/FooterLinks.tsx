import { helpAndSupportLinks, resourceLinks, usefulLinks } from "./footerData";
import FooterLinkItem from "./FooterLinkItem";

export default function FooterLinks() {
  return (
    <div className="flex flex-1 flex-col items-start gap-4 max-sm:gap-y-12 sm:flex-row xl:gap-8">
      {/* Resources Column */}
      <div className="flex flex-col items-start gap-6 sm:w-1/2 md:w-1/3 md:gap-7">
        <h3 className="font-mono text-base leading-6 font-normal tracking-[-0.2px] text-gray-500">
          Resources
        </h3>
        <div className="flex flex-col gap-4.5">
          {resourceLinks.map(link => (
            <FooterLinkItem key={link.title} link={link} />
          ))}
        </div>
      </div>

      {/* Useful Links Column */}
      <div className="flex flex-col items-start gap-6 sm:w-1/2 md:w-1/3 md:gap-7">
        <h3 className="font-mono text-base leading-6 font-normal tracking-[-0.2px] text-gray-500">
          Useful Links
        </h3>

        <div className="flex flex-col items-start gap-3 text-base leading-6 font-normal tracking-[-0.2px] text-gray-700 dark:text-gray-300 md:gap-4.5">
          {usefulLinks.map(link => (
            <FooterLinkItem key={link.title} link={link} />
          ))}
        </div>
      </div>

      {/* Help and Support Column */}
      <div className="flex flex-col items-start gap-6 sm:w-1/2 md:w-1/3 md:gap-7">
        <h3 className="text-start font-mono text-base leading-6 font-normal tracking-[-0.2px] text-gray-500">
          Help and Support
        </h3>
        <div className="flex flex-col items-start gap-3 text-base leading-6 font-normal tracking-[-0.2px] text-gray-700 dark:text-gray-300 md:gap-4.5">
          {helpAndSupportLinks.map(link => (
            <FooterLinkItem key={link.title} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
