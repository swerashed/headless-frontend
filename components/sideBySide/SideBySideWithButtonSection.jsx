import Image from "next/image";
import SectionHeading from "../headings/SectionHeading";
import PrimaryButton from "../buttons/PrimaryButton";
import { cn } from "@/lib/utils";

function SideBySideWithButton({ data }) {
  const { image, title, details, section_classnames, btn_title, btn_url } =
    data;
  return (
    <section
      className={cn(
        "overflow-hidden border-t border-dark/10 py-[50px] lg:py-[100px]",
        section_classnames,
      )}
    >
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-20 xl:flex-row-reverse xl:items-center xl:gap-10">
          <Image
            src={image}
            alt="Section banner"
            width={625}
            height={625}
            className="h-auto w-full rounded-[20px] object-cover shadow-md shadow-dark/10 xl:w-1/2"
            data-aos="fade-left"
          />
          <div className="flex flex-col xl:w-1/2">
            <div data-aos="fade-right">
              <SectionHeading className="mb-5 xl:mb-10 xl:text-[40px]">
                {title}
              </SectionHeading>
            </div>
            <p
              data-aos="fade-right"
              className="mb-10 font-inter text-base font-normal leading-[26px] text-dark/80"
            >
              {details}
            </p>
            <div data-aos="fade-up">
              <PrimaryButton
                href={btn_url}
                border={true}
                className="gap-2 py-3 pl-6 pr-4 text-base"
              >
                {btn_title}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBySideWithButton;
