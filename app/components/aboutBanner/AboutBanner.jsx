import Image from "next/image";

import buildingIcon from "../../assets/icons/building.svg";
import ButtonPrimary from "../ButtonPrimary";

function AboutBanner() {
  return (
    <section className="mb-[50px] mt-[60px]">
      <div className="container">
        <h3
          className="mb-[20px] font-inter text-base font-medium uppercase text-dark"
          data-aos="fade-right"
        >
          About Us
        </h3>
        <div className="mb-[60px] flex flex-col gap-[60px] border-t border-dark/10 pt-[30px] md:flex-row md:justify-between md:gap-[30px]">
          <div
            className="flex items-center gap-[30px] md:min-w-[301px]"
            data-aos="fade-right"
          >
            <Image
              src={buildingIcon}
              alt="Building icon"
              className="h-[100px] w-[100px] md:h-[120px] md:w-[120px]"
            />
            <div className="flex flex-col justify-center gap-[10px]">
              <h5 className="font-onest text-[60px] font-light leading-[1.16em] text-green md:text-[90px]">
                10+
              </h5>
              <p className="font-inter text-base font-normal text-dark/80">
                Years of Experience
              </p>
            </div>
          </div>
          <div className="flex flex-col" data-aos="fade-up">
            <h3 className="mb-10 font-onest text-2xl font-medium text-dark md:max-w-[782px] md:text-[32px] md:leading-snug">
              Through AKS Pharmacy and Healthcare, we provide expert
              consultation, advanced technology, and inclusive care for a
              healthier life.
            </h3>
            <ButtonPrimary border={true}>Learn more about</ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
