"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PrimaryButton from "../buttons/PrimaryButton";
import SliderNavigationButton from "@/app/components/SliderNavigationButton";
import NewsCard from "./NewsCard";
import SectionHeading from "../headings/SectionHeading";

function NewsSliderSection({
  sectionHeading,
  newsItems,
  buttonDetails,
  sectionClassName,
}) {
  const swiperRef = useRef(null);

  return (
    <section
      className={cn(
        "overflow-hidden bg-surface py-[50px] lg:py-[100px]",
        sectionClassName,
      )}
    >
      <div className="container">
        <div className="flex flex-row justify-between gap-5">
          <div data-aos="fade-right">
            <SectionHeading>{sectionHeading}</SectionHeading>
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
            {newsItems.map((news) => (
              <SwiperSlide key={news.id}>
                <NewsCard news={news} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {buttonDetails && (
          <div
            className="mt-[30px] flex items-center justify-center md:mt-10"
            data-aos="fade-up"
          >
            <PrimaryButton border={true}>{buttonDetails.title}</PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsSliderSection;
