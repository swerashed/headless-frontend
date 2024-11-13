import Image from "next/image";
import SectionHeading from "../headings/SectionHeading";
import { cn } from "@/lib/utils";

function SideBySideWithoutButton({ bannerImage, heading, details, reverse }) {
  return (
    <div
      className={cn("flex flex-col gap-[30px] md:items-center lg:gap-10", {
        "md:flex-row-reverse": reverse,
        "md:flex-row": !reverse,
      })}
    >
      <Image
        data-aos="fade-up"
        src={bannerImage}
        alt="Section banner"
        width={625}
        height={625}
        className="h-auto w-full rounded-[20px] object-cover shadow-md shadow-dark/10 md:w-1/2"
      />
      <div className="flex flex-col md:w-1/2">
        <div data-aos="fade-up">
          <SectionHeading className="mb-[10px] text-[28px] leading-[38px] md:mb-5 md:text-[36px] md:leading-[48px]">
            {heading}
          </SectionHeading>
        </div>

        <p
          data-aos="fade-up"
          className="font-inter text-base font-normal leading-[26px] text-dark/80"
        >
          {details}
        </p>
      </div>
    </div>
  );
}

export default SideBySideWithoutButton;
