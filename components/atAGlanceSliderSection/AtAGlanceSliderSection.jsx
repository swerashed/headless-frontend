"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SliderNavigationButton from "../buttons/SliderNavigationButton";
import IconCard from "../cardGrid/IconCard";
import SectionHeading from "../headings/SectionHeading";

function AtAGlanceSliderSection({ data }) {
  const { glance_items, title, section_classnames } = data;
  const swiperRef = useRef(null);

  return (
    <section
      className={cn(
        "my-[50px] overflow-hidden md:my-[120]",
        section_classnames,
      )}
    >
      <div className="container">
        <div className="flex flex-row justify-between gap-5">
          <div data-aos="fade-right">
            <SectionHeading>{title}</SectionHeading>
          </div>
          <div className="hidden lg:block">
            <SliderNavigationButton
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
      <div className={cn("slider-container hidden lg:block")}>
        <div data-aos="fade-left !ml-40">
          <Swiper
            className="cursor-grab"
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3.17,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 4.19,
                spaceBetween: 30,
              },
              1920: {
                slidesPerView: 4.17,
                spaceBetween: 30,
              },
            }}
            slidesPerView={4.17}
            loop={true}
            navigation={false}
            modules={[Autoplay]}
            spaceBetween={30}
            speed={600}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {glance_items.map((card) => (
              <SwiperSlide key={card._id} className="!flex !h-auto">
                <IconCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container lg:hidden">
        <div className="mt-[30px] grid grid-cols-2 gap-[15px] md:mt-10 md:gap-[30px]">
          {glance_items.map((card) => (
            <IconCard key={card._id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AtAGlanceSliderSection;
