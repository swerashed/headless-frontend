import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";

function MobileMenu() {
  return (
    <div
      className="pointer-events-auto fixed flex min-h-[calc(100vh-65.58px)] w-full flex-col bg-white p-5 pr-3 pt-[30px] lg:hidden"
      data-aos="fade-right"
      data-aos-duration="300"
    >
      <div
        data-lenis-prevent
        className="scrollbar-thin mb-[30px] flex h-[0px] w-full flex-grow flex-col overflow-y-auto overflow-x-hidden pr-2"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-b border-dark/10">
            <AccordionTrigger className="py-[15px] font-onest text-lg font-medium leading-[26px] text-dark transition-all duration-300 hover:text-blue hover:no-underline focus:no-underline">
              The Company
            </AccordionTrigger>
            <AccordionContent className="mb-[10px] flex flex-col gap-[10px] rounded-[10px] bg-surface p-[15px] font-inter text-base font-normal leading-[26px] text-dark/80">
              <Link
                className="transition-all duration-300 hover:text-dark hover:underline"
                href="/"
              >
                About Us
              </Link>
              <Link
                className="transition-all duration-300 hover:text-dark hover:underline"
                href="/"
              >
                Board of Directors
              </Link>
              <Link
                className="transition-all duration-300 hover:text-dark hover:underline"
                href="/"
              >
                Management Team
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Link
          className="border-b border-dark/10 py-[15px] font-onest text-lg font-medium leading-[26px] text-dark transition-all duration-300 hover:text-blue"
          href="/"
        >
          Pharmacy
        </Link>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-b border-dark/10">
            <AccordionTrigger className="py-[15px] font-onest text-lg font-medium leading-[26px] text-dark transition-all duration-300 hover:text-blue hover:no-underline focus:no-underline">
              The Company
            </AccordionTrigger>
            <AccordionContent className="mb-[10px] flex flex-col gap-[10px] rounded-[10px] bg-surface p-[15px] font-inter text-base font-normal leading-[26px] text-dark/80">
              <Link
                className="transition-all duration-300 hover:text-dark hover:underline"
                href="/"
              >
                About Us
              </Link>
              <Link
                className="transition-all duration-300 hover:text-dark hover:underline"
                href="/"
              >
                Board of Directors
              </Link>
              <Link
                className="transition-all duration-300 hover:text-dark hover:underline"
                href="/"
              >
                Management Team
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-b border-dark/10">
            <AccordionTrigger className="py-[15px] font-onest text-lg font-medium leading-[26px] text-dark transition-all duration-300 hover:text-blue hover:no-underline focus:no-underline">
              The Company
            </AccordionTrigger>
            <AccordionContent className="mb-[10px] flex flex-col gap-[10px] rounded-[10px] bg-surface p-[15px] font-inter text-base font-normal leading-[26px] text-dark/80">
              <Link
                className="transition-all duration-300 hover:text-dark hover:underline"
                href="/"
              >
                About Us
              </Link>
              <Link
                className="transition-all duration-300 hover:text-dark hover:underline"
                href="/"
              >
                Board of Directors
              </Link>
              <Link
                className="transition-all duration-300 hover:text-dark hover:underline"
                href="/"
              >
                Management Team
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <PrimaryButton className="w-full bg-blue stroke-white font-inter text-base leading-[24px] text-white hover:bg-dark">
        Contact us
      </PrimaryButton>
    </div>
  );
}

export default MobileMenu;
