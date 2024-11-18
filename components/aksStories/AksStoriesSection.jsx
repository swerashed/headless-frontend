"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AksStoryCard from "./AksStoryCard";

function AksStoriesSection({ cards }) {
  return (
    <section className="mb-[100px] mt-[140px]">
      <div className="container">
        <h2
          data-aos="fade-up"
          className="mb-[60px] max-w-[1070px] font-onest text-2xl font-medium leading-[34px] text-dark md:mb-[100px] md:text-[32px] md:leading-[44px]"
        >
          We don't just work side by side; we collaborate. Our diverse
          expertise, skills, and experiences allow us to learn from each other
          and produce exceptional, effective results.
        </h2>
      </div>
      <div className="slider-container">
        <Swiper
          className="cursor-grab"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1.15}
          breakpoints={{
            640: {
              slidesPerView: 2.12,
            },
            840: {
              slidesPerView: 2.6,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.8,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3.16,
              spaceBetween: 30,
            },
            1920: {
              slidesPerView: 4.15,
              spaceBetween: 30,
            },
          }}
          loop={true}
          navigation={false}
          modules={[Autoplay]}
          spaceBetween={20}
          speed={600}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <AksStoryCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default AksStoriesSection;
