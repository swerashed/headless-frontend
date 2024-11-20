import Image from "next/image";
import SectionHeading from "../headings/SectionHeading";

function MissionVissionSection() {
  return (
    <section className="overflow-hidden bg-surface py-[50px] lg:py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-20 lg:flex-row-reverse lg:items-center lg:gap-10">
          <Image
            src="/section-banners/about-us/mission-vission-banner.png"
            width={625}
            height={625}
            alt="Mission and vission banner"
            className="w-full rounded-[20px] object-cover shadow-md shadow-dark/10 lg:w-1/2"
            data-aos="fade-left"
          />
          <div className="flex flex-col lg:w-1/2">
            <div data-aos="fade-right">
              <SectionHeading className="mb-5 text-[30px] leading-[40px] xl:mb-10 xl:text-[40px] xl:leading-[50px]">
                AKS Khan Pharmaceuticals: Mission and Vision
              </SectionHeading>
            </div>
            <div className="flex flex-col gap-[30px] md:gap-[60px]">
              <div
                data-aos="fade-right"
                className="flex flex-col border-t border-dark/10 pt-[20px]"
              >
                <h3 className="mb-5 font-onest text-lg font-medium leading-[26px] text-dark md:left-[30px] md:text-xl">
                  Our Mission
                </h3>
                <p className="font-inter text-base font-normal leading-[26px] text-dark/80">
                  Our mission is to revolutionize health care by leveraging
                  innovation, technology, and patient-centered solutions,
                  ensuring accessible, high-quality care for all while promoting
                  wellness, efficiency, and sustainable medical advancements.
                </p>
              </div>
              <div
                data-aos="fade-right"
                className="flex flex-col border-t border-dark/10 pt-[20px]"
              >
                <h3 className="mb-5 font-onest text-lg font-medium leading-[26px] text-dark md:left-[30px] md:text-xl">
                  Our Vision
                </h3>
                <p className="font-inter text-base font-normal leading-[26px] text-dark/80">
                  A vision is a clear and inspiring long-term goal that guides
                  direction, decision-making, and motivates people toward
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVissionSection;
