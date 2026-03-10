import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuTrigger
} from "@/registry/core/navigation-menu";
import {
  ArrowRight,
  Bolt1,
  BoxArchive1,
  Chip2,
  Code1,
  CreditCard,
  FileText,
  Globe2,
  OpenBook,
  Shield1Check
} from "@tailgrids/icons";

export default function NavigationMenuSimplePreview() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-3 py-2 text-[15px] font-medium text-title-50 dark:text-gray-300 hover:text-primary-500 dark:hover:text-white transition-colors bg-transparent border-none shadow-none">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-125 p-6 grid grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-6">
              <div>
                <h4 className="text-[13px] font-semibold uppercase tracking-wider text-text-100 mb-4">
                  Payments
                </h4>

                <div className="space-y-4">
                  <StripeLink
                    href="#"
                    title="Payments"
                    description="Online payments"
                    icon={<CreditCard className="size-5 text-title-50" />}
                  />
                  <StripeLink
                    href="#"
                    title="Checkout"
                    description="Prebuilt payment form"
                    icon={<BoxArchive1 className="size-5 text-title-50" />}
                  />
                  <StripeLink
                    href="#"
                    title="Elements"
                    description="Customizable UI components"
                    icon={<Chip2 className="size-5 text-title-50" />}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[13px] font-semibold uppercase tracking-wider text-text-100 mb-4">
                  Financial Services
                </h4>
                <div className="space-y-4">
                  <StripeLink
                    href="#"
                    title="Issuing"
                    description="Card creation"
                    icon={<CreditCard className="size-5 text-title-50" />}
                  />
                  <StripeLink
                    href="#"
                    title="Treasury"
                    description="Banking-as-a-service"
                    icon={<Globe2 className="size-5 text-title-50" />}
                  />
                  <StripeLink
                    href="#"
                    title="Capital"
                    description="Business financing"
                    icon={<Bolt1 className="size-5 text-title-50" />}
                  />
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-3 py-2 text-[15px] font-medium text-title-50 dark:text-gray-300 hover:text-primary-500 dark:hover:text-white transition-colors bg-transparent border-none shadow-none">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-112.5 p-0 overflow-hidden">
            <div className="grid grid-cols-1">
              <div className="p-6 space-y-4">
                <StripeLink
                  href="#"
                  title="Ecommerce"
                  description="Unify online and in-person payments"
                  icon={<Globe2 className="size-5 text-title-50" />}
                />
                <StripeLink
                  href="#"
                  title="SaaS"
                  description="Manage subscriptions and recurring billing"
                  icon={<Bolt1 className="size-5 text-title-50" />}
                />
                <StripeLink
                  href="#"
                  title="Marketplaces"
                  description="Pay out globally and facilitate platform payments"
                  icon={<BoxArchive1 className="size-5 text-title-50" />}
                />
              </div>

              <div className="bg-background-soft-50 dark:bg-white/5 border-t border-base-100 dark:border-white/10">
                <NavigationMenuLink
                  href="#"
                  className="group flex items-center gap-2 text-[14px] font-medium text-text-100 hover:text-title-50 focus-visible:text-title-50 "
                >
                  View all solutions
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-3 py-2 text-[15px] font-medium text-title-50 hover:text-primary-500 dark:hover:text-white transition-colors bg-transparent border-none shadow-none">
            Developers
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-100 p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <StripeLink
                href="#"
                title="Documentation"
                icon={<OpenBook className="size-5 text-title-50" />}
              />
              <StripeLink
                href="#"
                title="API Reference"
                icon={<Code1 className="size-5 text-title-50" />}
              />
              <StripeLink
                href="#"
                title="API Status"
                icon={<Shield1Check className="size-5 text-title-50" />}
              />
              <StripeLink
                href="#"
                title="API Changelog"
                icon={<FileText className="size-5 text-title-50" />}
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className="px-3 py-2 text-[15px] font-medium text-title-50  hover:text-primary-500 dark:hover:text-white transition-colors bg-transparent border-none shadow-none"
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuPositioner />
    </NavigationMenu>
  );
}

function StripeLink({
  href,
  title,
  description,
  icon
}: {
  href: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
}) {
  return (
    <NavigationMenuLink
      href={href}
      className={
        "group p-2 flex items-start justify-start gap-4 rounded-lg hover:bg-background-soft-50 transition-colors"
      }
    >
      <div className="mt-0.5">{icon}</div>
      <div>
        <div className="text-[14px] font-semibold text-text-50 dark:text-white group-hover:text-primary-400 group-focus-visible:text-primary-400 transition-colors">
          {title}
        </div>
        {description && (
          <div className="text-[13px] text-text-100 dark:text-gray-400 mt-0.5">
            {description}
          </div>
        )}
      </div>
    </NavigationMenuLink>
  );
}
