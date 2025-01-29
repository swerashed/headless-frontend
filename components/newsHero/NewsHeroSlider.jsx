"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import NewsHeroSliderCard from "./NewsHeroSliderCard";

function NewsHeroSlider({ news }) {
  return (
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
      }}
      slidesPerView={1.14}
      loop={true}
      navigation={false}
      modules={[Autoplay]}
      spaceBetween={20}
      speed={600}
    >
      {news.map((newsSingle, index) => (
        <SwiperSlide key={index}>
          <NewsHeroSliderCard news={newsSingle} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default NewsHeroSlider;
