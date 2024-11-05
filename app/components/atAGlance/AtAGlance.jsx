"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import ButtonPrimary from "../ButtonPrimary";
import { useRef } from "react";
import SliderNavigationButton from "../SliderNavigationButton";

const atAGlances = [
  {
    id: crypto.randomUUID(),
    details: "Directly sourcing authentic medicines",
    iconName: "authentic-medicine",
  },
  {
    id: crypto.randomUUID(),
    details: "Temperature control ensures efficacy",
    iconName: "temp-controled",
  },
  {
    id: crypto.randomUUID(),
    details: "Convenient home delivery service",
    iconName: "home-delivery",
  },
  {
    id: crypto.randomUUID(),
    details: "General and specialized healthcare service",
    iconName: "health-care",
  },
  {
    id: crypto.randomUUID(),
    details: "Reliable and convenient home doctor service",
    iconName: "reliable-doctor",
  },
  {
    id: crypto.randomUUID(),
    details: "Special discount for AKS Pharmacy cardholders",
    iconName: "discount-offer",
  },
];

function AtAGlance() {
  const swiperRef = useRef(null);

  return (
    <section className="my-[50px] overflow-hidden lg:my-[120px]">
      <div className="container">
        <div className="mb-[30px] flex items-center justify-between md:mb-10">
          <h2
            className="font-onest text-[30px] font-medium text-dark"
            data-aos="fade-right"
          >
            At A Glance
          </h2>
          <div className="hidden items-center justify-end gap-[10px] md:flex">
            <div className="at-a-glance-pagination mr-5 !flex !w-auto !min-w-10 !items-center !gap-1 font-onest text-xl font-medium !leading-none !text-red-900"></div>
            <SliderNavigationButton
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
      <div className="container hidden md:block" data-aos="fade-left">
        <Swiper
          className="h-full"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.1,
            },
            1220: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            type: "fraction",
            el: ".at-a-glance-pagination",
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay, A11y]}
          speed={600}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {atAGlances.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="flex flex-col items-center justify-center gap-5 rounded-[10px] border border-border-light px-3 py-5 shadow-sm shadow-white md:gap-10 md:px-[30px] md:py-[60px]">
                <Image
                  src={`/at-a-glance/${card.iconName}.svg`}
                  alt=""
                  width={100}
                  height={100}
                  className="h-[50px] w-[50px] md:h-[100px] md:w-[100px]"
                />
                <p className="text-center font-onest text-sm font-medium text-dark md:min-h-14 md:text-xl">
                  {card.details}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 gap-5 md:hidden">
          {atAGlances.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center justify-center gap-5 rounded-[10px] border border-border-light px-3 py-5 shadow-sm shadow-white md:gap-10 md:px-[30px] md:py-[60px]"
            >
              <Image
                src={`/at-a-glance/${card.iconName}.svg`}
                alt=""
                width={100}
                height={100}
                className="h-[50px] w-[50px] md:h-[100px] md:w-[100px]"
              />
              <p className="text-center font-onest text-sm font-medium text-dark md:min-h-14 md:text-xl">
                {card.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AtAGlance;
