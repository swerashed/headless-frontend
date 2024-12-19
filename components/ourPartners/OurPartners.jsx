"use client";

import Slider from "react-infinite-logo-slider";
import SectionHeading from "../headings/SectionHeading";
import Image from "next/image";

function OurPartners({ partners }) {
  return (
    <section className="overflow-hidden py-[50px] md:py-[100px]">
      <div data-aos="fade-up" className="container">
        <SectionHeading className="text-center">Partners</SectionHeading>
      </div>
      <div className="mt-10 hidden sm:block">
        <Slider
          width="190px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor={"#fff"}
        >
          {partners.map((partner) => (
            <Slider.Slide
              key={partner.id}
              className="flex items-center justify-center px-6 py-3"
            >
              <Image
                src={partner.logoLink}
                alt="Partner logo"
                width={145}
                height={80}
                className="object-contain"
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
      <div className="container block sm:hidden">
        <div className="mt-[30px] grid grid-cols-2 gap-5">
          {partners.map((partner) => (
            <div
              data-aos="fade-up"
              key={partner.id}
              className="flex items-center justify-center px-[18px] py-3 sm:px-6 sm:py-3"
            >
              <Image
                src={partner.logoLink}
                alt="Partner logo"
                width={145}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
