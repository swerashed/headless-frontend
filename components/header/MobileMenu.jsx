import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";

function MobileMenu({ onMobileMenuOpen, menuData }) {
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
          {menuData?.menu.menuItems.nodes.map((menuItem) => {
            const hasChildren = menuItem.childItems?.edges.length > 0;

            return hasChildren && (
              <AccordionItem key={menuItem.id} value={menuItem.id} className="border-b border-dark/10">
                <AccordionTrigger className="py-[15px] font-onest text-lg font-medium leading-[26px] text-dark transition-all duration-300 hover:text-blue hover:no-underline focus:no-underline">
                  {menuItem.label}
                </AccordionTrigger>
                <AccordionContent className="mb-[10px] flex flex-col gap-[10px] rounded-[10px] bg-surface p-[15px] font-inter text-base font-normal leading-[26px] text-dark/80">
                  {menuItem.childItems.edges.map(({ node }) => (
                    <Link
                      key={node.id}
                      onClick={onMobileMenuOpen}
                      className="transition-all duration-300 hover:text-dark hover:underline"
                      href={node.url}
                    >
                      {node.label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            )}
          )}
        </Accordion>

        {menuData?.menu.menuItems.nodes.map((menuItem) => {
            const hasChildren = menuItem.childItems?.edges.length > 0;

            return !hasChildren &&  (
              <Link
                key={menuItem.id}
                onClick={onMobileMenuOpen}
                className="border-b border-dark/10 py-[15px] font-onest text-lg font-medium leading-[26px] text-dark transition-all duration-300 hover:text-blue"
                href={menuItem.url}
              >
                {menuItem.label}
              </Link>
            );
          })}
       
      </div>
      <PrimaryButton href="/contact-us" className="w-full bg-blue stroke-white font-inter text-base leading-[24px] text-white hover:bg-blue-dark">
        Contact us
      </PrimaryButton>
    </div>
  );
}

export default MobileMenu;

