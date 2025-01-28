"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SliderNavigationButton from "../buttons/SliderNavigationButton";
import SectionHeading from "../headings/SectionHeading";
import DepartmentCard from "./DepartmentCard";
import PrimaryButton from "../buttons/PrimaryButton";

function DepartmentSection({data}) {
  const swiperRef = useRef(null);
const { section_classname, title, card_items, section_button_url, section_button_title } = data;
console.log(data)
  return (
    <section
      className={cn(
        "overflow-hidden bg-surface py-[50px] md:py-[100]",
        section_classname,
      )}
    >
      <div className="container">
        <div className="flex flex-row justify-between gap-5">
          <div data-aos="fade-right">
            <SectionHeading>{title}</SectionHeading>
          </div>
          <div className="hidden sm:block md:hidden">
            <SliderNavigationButton
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
      <div
        className={cn(
          "container",
          "!pr-0 !pt-10 sm:!pr-[15px] md:hidden md:!pr-0 xl:!pr-[75px]",
        )}
      >
        <div data-aos="fade-left">
          <Swiper
            className="cursor-grab"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.14,
              },
              1024: {
                slidesPerView: 2.14,
              },
              1280: {
                slidesPerView: 2,
              },
            }}
            slidesPerView={1.14}
            loop={true}
            navigation={false}
            modules={[Autoplay]}
            spaceBetween={20}
            speed={600}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {card_items.map((department) => (
              <SwiperSlide key={department._id}>
                <DepartmentCard item={department} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div
          className="hidden grid-cols-2 gap-[30px] pt-10 md:grid lg:grid-cols-3"
          data-aos="fade-up"
        >
          {card_items.map((department) => (
            <DepartmentCard key={department._id} item={department} />
          ))}
        </div>
        {section_button_url && (
          <div
            className="mt-[30px] flex items-center justify-center md:mt-10"
            data-aos="fade-up"
          >
            <PrimaryButton border={true} href={section_button_url}>{section_button_title}</PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}

export default DepartmentSection;
