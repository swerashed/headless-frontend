import PrimaryButton from "../buttons/PrimaryButton";
import SectionHeading from "../headings/SectionHeading";

function StorySection({ sectionTitle, heading, details, buttonDetails }) {
  return (
    <section className="mb-10 mt-[60px] overflow-hidden md:mb-[80px] md:mt-[100px]">
      <div className="container">
        <h3
          className="mb-5 border-b border-b-dark/10 pb-5 font-inter text-sm font-medium uppercase leading-none text-dark md:mb-10 md:pb-6 md:text-base"
          data-aos="fade-right"
        >
          {sectionTitle}
        </h3>

        <div className="flex max-w-[782px] flex-col md:ml-auto">
          <div data-aos="fade-up">
            <SectionHeading className="mb-[30px] text-2xl font-medium md:mb-10 md:text-[32px]">
              {heading}
            </SectionHeading>
          </div>
          <p
            data-aos="fade-up"
            className="font-inter text-base font-normal text-dark/80"
          >
            {details}
          </p>
          {buttonDetails && (
            <div data-aos="fade-up">
              <PrimaryButton className="mt-[30px] md:mt-10">
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
