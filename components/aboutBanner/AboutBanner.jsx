import Image from "next/image";

import PrimaryButton from "../buttons/PrimaryButton";

function AboutBanner({ data }) {
  const {
    counter_description,
    counter_prefix,
    counter_number,
    title,
    icon,
    button_title,
    button_url,
  } = data;
  return (
    <section className="mb-[50px] mt-[60px] md:mb-[120px] md:mt-[100px]">
      <div className="container">
        <h4
          className="mb-[20px] font-inter text-base font-medium uppercase leading-[22px] text-dark md:mb-6"
          data-aos="fade-right"
        >
          About Us
        </h4>
        <div className="flex flex-col gap-[60px] border-t border-dark/10 pt-[30px] md:justify-between md:gap-[30px] md:pt-10 lg:flex-row">
          <div
            className="flex items-center gap-[30px] md:min-w-[301px]"
            data-aos="fade-right"
          >
            <Image
              alt="icon"
              src={icon}
              className="h-[100px] w-[100px] xl:h-[120px] xl:w-[120px]"
              width={120}
              height={120}
            ></Image>
            <div className="flex flex-col justify-center gap-[10px]">
              <h5 className="font-onest text-[60px] font-light leading-[70px] text-green md:text-[90px] md:leading-[90px]">
                {counter_number}
                {counter_prefix}
              </h5>
              <p className="font-inter text-base font-normal leading-[26px] text-dark/80">
                {counter_description}
              </p>
            </div>
          </div>
          <div className="flex flex-col" data-aos="fade-up">
            <h2 className="mb-10 font-onest text-2xl font-medium text-dark md:max-w-[782px] md:text-[32px] md:leading-snug">
              {title}
            </h2>
            <PrimaryButton href={button_url}>{button_title}</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
