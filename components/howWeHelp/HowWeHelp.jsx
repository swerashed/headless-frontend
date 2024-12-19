"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

import SliderNavigationButton from "../buttons/SliderNavigationButton";
import PrimaryButton from "../buttons/PrimaryButton";
import SectionHeading from "../headings/SectionHeading";
import HowWeHelpCard from "./HowWeHelpCard";

function HowWeHelp({ cards }) {
  const swiperRef = useRef(null);

  return (
    <section className="overflow-hidden bg-surface py-[50px] lg:py-[100px]">
      <div className="container">
        <div
          data-aos="fade-right"
          className="mb-[30px] flex items-center justify-between md:mb-10"
        >
          <SectionHeading>How we help</SectionHeading>
          <div className="flex items-center justify-end gap-[10px] md:hidden">
            <SliderNavigationButton
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
      <div className="slider-container md:hidden" data-aos="fade-left">
        <Swiper
          className="mb-[30px] h-full md:mb-10"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1.15}
          breakpoints={{
            460: {
              slidesPerView: 1.3,
            },
          }}
          loop={true}
          navigation={false}
          modules={[Autoplay]}
          spaceBetween={20}
          speed={600}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <HowWeHelpCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <div
          className="mb-10 hidden grid-cols-2 gap-[30px] md:grid lg:grid-cols-3"
          data-aos="fade-left"
        >
          {cards.map((card) => (
            <HowWeHelpCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      <div
        className="container flex items-center justify-center"
        data-aos="fade-up"
      >
        <PrimaryButton border={true}>View all services</PrimaryButton>
      </div>
    </section>
  );
}

export default HowWeHelp;
