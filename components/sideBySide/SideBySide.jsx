import Image from "next/image";
import SectionHeading from "../headings/SectionHeading";
import PrimaryButton from "../buttons/PrimaryButton";
import { cn } from "@/lib/utils";

function SideBySide({
  bannerImage,
  heading,
  details,
  button,
  className,
  reverse,
}) {
  return (
    <section
      className={cn("overflow-hidden border-t border-dark/10", className)}
    >
      <div className="container">
        <div
          className={cn(
            "flex flex-col gap-[30px] md:gap-20 lg:items-center lg:gap-10",
            {
              "lg:flex-row-reverse": !reverse,
              "lg:flex-row": reverse,
            },
          )}
        >
          <Image
            src={bannerImage}
            alt="Section banner"
            width={625}
            height={625}
            className="h-auto w-full rounded-[20px] object-cover shadow-md shadow-dark/10 lg:w-1/2"
          />
          <div className="flex flex-col lg:w-1/2">
            <SectionHeading className="mb-[10px] text-[28px] leading-[38px] md:leading-[48px] xl:mb-5 xl:text-[36px]">
              {heading}
            </SectionHeading>

            <p className="font-inter text-base font-normal leading-[26px] text-dark/80">
              {details}
            </p>
            {button && (
              <div data-aos="fade-up">
                <PrimaryButton
                  border={true}
                  className="gap-2 py-3 pl-6 pr-4 text-base"
                >
                  {button.title}
                </PrimaryButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBySide;
