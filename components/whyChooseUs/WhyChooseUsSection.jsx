import Image from "next/image";
import SectionHeading from "../headings/SectionHeading";
import WhyCooseUsAccordion from "./WhyCooseUsAccordion";
import { cn } from "@/lib/utils";

function WhyChooseUsSection({ data }) {
  const {
    section_classnames,
    image,
    title,
    bodyText,
    choose_us_items,
  } = data;
  return (
    <section
      className={cn(
        "overflow-hidden py-[50px] lg:py-[100px]",
        section_classnames,
      )}
    >
      <div className="container">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-10 lg:flex-row lg:items-center lg:gap-10 xl:gap-10">
          <Image
            src={image}
            alt="Why choose us banner"
            width={625}
            height={625}
            className="h-auto min-h-[330px] w-full rounded-[20px] object-cover shadow-md shadow-dark/10 md:min-h-[600px] md:w-1/2 xl:min-h-[625px]"
            data-aos="fade-right"
          />
          <div className="flex flex-col md:w-1/2">
            <div data-aos="fade-left">
              <SectionHeading className="transf mb-5 normal-case xl:mb-10 xl:text-[40px]">
                {title}
              </SectionHeading>
              {bodyText && (
                <p className="mb-5 font-inter text-base font-normal leading-[26px] text-dark/80">
                  {bodyText}
                </p>
              )}
              <WhyCooseUsAccordion qsnAndAns={choose_us_items} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
