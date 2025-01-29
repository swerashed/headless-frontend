"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PrimaryButton from "../buttons/PrimaryButton";
import NewsCard from "./NewsCard";
import SectionHeading from "../headings/SectionHeading";
import SliderNavigationButton from "../buttons/SliderNavigationButton";

function NewsSliderSection({data, blogs, sectionHeading, newsItems, sectionClassName}) {
  const title = data?.title || sectionHeading;
  const btn_url = data?.btn_url || null;
  const btn_title = data?.btn_title || "";
  const section_classname = data?.section_classname || sectionClassName;
  const blogsData = blogs || newsItems;
  const swiperRef = useRef(null);

  return (
    <section
      className={cn(
        "overflow-hidden bg-surface py-[50px] lg:py-[100px]",
        section_classname || sectionClassName,
      )}
    >
      <div className="container">
        <div className="flex flex-row justify-between gap-5">
          <div data-aos="fade-up">
            <SectionHeading>{title || sectionHeading}</SectionHeading>
          </div>
          <div className="hidden sm:block">
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
          "!pr-0 !pt-10 sm:!pr-[15px] md:!pr-0 xl:!pr-[75px]",
        )}
      >
        <div>
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
                slidesPerView: 3,
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
            {blogsData?.map((blog, index) => (
              <SwiperSlide key={index}>
                <NewsCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {btn_url && (
          <div
            className="mt-[30px] flex items-center justify-center md:mt-10"
            data-aos="fade-up"
          >
            <PrimaryButton href={btn_url} border={true}>{btn_title}</PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsSliderSection;
