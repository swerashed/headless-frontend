"use client";

import Slider from "react-infinite-logo-slider";
import SectionHeading from "../headings/SectionHeading";
import Image from "next/image";

function OurPartners({ data }) {
  const { partners_items, title } = data;
  return (
    <section className="overflow-hidden py-[50px] md:py-[100px]">
      <div data-aos="fade-up" className="container">
        <SectionHeading className="text-center">{title}</SectionHeading>
      </div>

      <div className="container">
        <div className="mt-[30px] flex gap-[30px] justify-center">
          {partners_items.map((partner) => (
            <div
              data-aos="fade-up"
              key={partner._id}
              className="flex items-center justify-center px-[18px] py-3 sm:px-6 sm:py-3 border border-gray-200 rounded-2xl"
            >
              <Image
                src={partner.image}
                alt={partner.title}
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
