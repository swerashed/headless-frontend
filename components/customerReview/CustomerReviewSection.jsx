"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SliderNavigationButton from "../buttons/SliderNavigationButton";
import SectionHeading from "../headings/SectionHeading";
import Image from "next/image";
import CustomerReviewCard from "./CustomerReviewCard";

function CustomerReviewSection({ className, reviews }) {
  const swiperRef = useRef(null);

  return (
    <section className={cn("overflow-hidden py-[50px] md:py-[100]", className)}>
      <div className="container">
        <div className="flex flex-row justify-between gap-5">
          <div data-aos="fade-right">
            <SectionHeading>Customers words</SectionHeading>
          </div>
          <SliderNavigationButton
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
      <div
        className={cn(
          "container",
          "pr-0 pt-10 sm:pr-[15px] md:pr-0 xl:pr-[75px]",
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
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <CustomerReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviewSection;
