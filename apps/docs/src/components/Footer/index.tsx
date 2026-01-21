import FooterAbout from "./FooterAbout";
import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
// import FooterProducts from "./FooterProducts"; // Reserved for future use

export default function Footer() {
  return (
    <footer className="relative  w-full overflow-x-hidden border-t border-gray-200 bg-white z-40 dark:bg-gray-950 dark:border-gray-800">
      <div className="">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 px-5 pt-10 pb-8 md:flex-row md:gap-16 md:pt-20 md:pb-12 lg:gap-20">
          <FooterAbout />
          <FooterLinks />
        </div>

        {/* Products Section - Reserved for future use */}
        {/* <FooterProducts /> */}

        {/* Bottom Bar */}
        <FooterBottom />
      </div>
    </footer>
  );
}
