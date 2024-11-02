"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";
import SliderNavigationButton from "../SliderNavigationButton";

const investors = [
  { id: crypto.randomUUID(), logoTitle: "investor-1" },
  { id: crypto.randomUUID(), logoTitle: "investor-2" },
  { id: crypto.randomUUID(), logoTitle: "investor-3" },
  { id: crypto.randomUUID(), logoTitle: "investor-4" },
  { id: crypto.randomUUID(), logoTitle: "investor-5" },
  { id: crypto.randomUUID(), logoTitle: "investor-1" },
  { id: crypto.randomUUID(), logoTitle: "investor-2" },
  { id: crypto.randomUUID(), logoTitle: "investor-3" },
  { id: crypto.randomUUID(), logoTitle: "investor-4" },
  { id: crypto.randomUUID(), logoTitle: "investor-5" },
  { id: crypto.randomUUID(), logoTitle: "investor-5" },
];

function OurInvestors() {
  const swiperRef = useRef(null);

  return (
    <section className="bg-[#F0F7FF] py-[100px]">
      <div className="container">
        <div className="mb-[30px] flex items-center justify-between">
          <h2 className="font-onest text-[30px] font-medium text-dark">
            Our Investors
          </h2>
          <div className="hidden items-center justify-end gap-[10px] md:flex">
            <div className="investors-pagination mr-5 !flex !w-auto !min-w-10 !items-center !gap-1 font-onest text-xl font-medium !leading-none !text-red-900"></div>
            <SliderNavigationButton
              primaryColor="blue"
              secondaryColor="white"
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
      <div className="container hidden md:block">
        <Swiper
          className="mb-[30px] h-full cursor-grabbing md:mb-10"
          data-aos="fade-up"
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
              slidesPerView: 5.3,
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
            <SwiperSlide key={investor.id}>
              <div className="flex items-center justify-center rounded-2xl bg-white p-[22px]">
                <Image
                  src={`/our-investors/${investor.logoTitle}.png`}
                  alt="Investor logo"
                  width={206}
                  height={90}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="container grid grid-cols-2 gap-5 md:hidden"
        data-aos="fade-up"
      >
        {investors.map((investor) => (
          <div
            key={investor.id}
            className="flex items-center justify-center rounded-2xl bg-white p-[22px]"
          >
            <Image
              src={`/our-investors/${investor.logoTitle}.png`}
              alt="Investor logo"
              width={206}
              height={90}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurInvestors;
