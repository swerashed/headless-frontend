import { cn } from "@/lib/utils";
import PrimaryButton from "../buttons/PrimaryButton";
import SectionHeading from "../headings/SectionHeading";

function StorySection({data}) {
  const {
    section_title,
    title,
    description,
    buttonDetails,
    section_classname,
  } = data
  return (
    <section
      className={cn(
        "overflow-hidden pb-10 pt-[60px] md:pb-[80px] md:pt-[100px]",
        section_classname,
      )}
    >
      <div className="container">
        <h3
          className="mb-[30px] border-b border-b-dark/10 pb-5 font-inter text-sm font-medium uppercase leading-[20px] text-dark md:mb-10 md:pb-6 md:text-base md:leading-[22px]"
          data-aos="fade-right"
        >
          {section_title}
        </h3>

        <div className="flex max-w-[782px] flex-col md:ml-auto">
          <h2
            data-aos="fade-up"
            className="mb-[20px] font-onest text-2xl font-medium leading-[34px] text-dark md:mb-[30px] md:text-[32px] md:leading-[44px]"
          >
            {title}
          </h2>

          {description && (
            <p
              data-aos="fade-up"
              className="font-inter text-base font-normal leading-[28px] text-dark md:leading-[26px] md:text-dark/80"
            >
              {description}
            </p>
          )}
          {buttonDetails && (
            <div data-aos="fade-up">
              <PrimaryButton className="hidden md:mt-10 md:flex">
                {buttonDetails.title}
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default StorySection;
