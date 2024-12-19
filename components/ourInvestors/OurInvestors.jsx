"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";
import SliderNavigationButton from "../buttons/SliderNavigationButton";
import SectionHeading from "../headings/SectionHeading";
import OurInvestorCard from "./OurInvestorCard";

function OurInvestors({ investors }) {
  const swiperRef = useRef(null);

  return (
    <section className="overflow-hidden bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div className="mb-[30px] flex items-center justify-between md:mb-10">
          <SectionHeading>Our Investors</SectionHeading>
          <div className="hidden items-center justify-end gap-[10px] md:flex">
            <div className="investors-pagination mr-5 !flex !w-auto !min-w-10 !items-center !gap-1 font-onest text-xl font-medium !leading-none !text-red-900"></div>
            <SliderNavigationButton
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
      <div className="slider-container hidden md:block" data-aos="fade-up">
        <Swiper
          className="h-full cursor-grabbing"
          slidesPerGroup={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          breakpoints={{
            768: {
              slidesPerView: 3.3,
            },
            1024: {
              slidesPerView: 4.3,
            },
            1440: {
              slidesPerView: 5.15,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
            type: "fraction",
            el: ".investors-pagination",
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay, A11y]}
          spaceBetween={20}
          speed={600}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {investors.map((investor) => (
            <SwiperSlide key={investor.id} className="rounded-2xl">
              <OurInvestorCard key={investor.id} card={investor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="container grid grid-cols-2 gap-5 md:hidden"
        data-aos="fade-up"
      >
        {investors.map((investor) => (
          <OurInvestorCard key={investor.id} card={investor} />
        ))}
      </div>
    </section>
  );
}

export default OurInvestors;
