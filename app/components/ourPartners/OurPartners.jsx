"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const investors = [
  { id: crypto.randomUUID(), logoTitle: "partner-1" },
  { id: crypto.randomUUID(), logoTitle: "partner-2" },
  { id: crypto.randomUUID(), logoTitle: "partner-3" },
  { id: crypto.randomUUID(), logoTitle: "partner-4" },
  { id: crypto.randomUUID(), logoTitle: "partner-5" },
  { id: crypto.randomUUID(), logoTitle: "partner-6" },
  { id: crypto.randomUUID(), logoTitle: "partner-1" },
  { id: crypto.randomUUID(), logoTitle: "partner-1" },
  { id: crypto.randomUUID(), logoTitle: "partner-2" },
  { id: crypto.randomUUID(), logoTitle: "partner-3" },
  { id: crypto.randomUUID(), logoTitle: "partner-4" },
  { id: crypto.randomUUID(), logoTitle: "partner-5" },
];

function OurPartners() {
  return (
    <section className="overflow-hidden py-[50px] md:py-[100px]">
      <div className="container">
        <div className="mb-[30px] flex items-center justify-center md:mb-10">
          <h2
            className="font-onest text-[30px] font-medium text-dark"
            data-aos="fade-up"
          >
            Partners
          </h2>
        </div>
      </div>
      <div className="container hidden md:block" data-aos="fade-up">
        <Swiper
          className="h-full cursor-grabbing"
          watchOverflow={true}
          slidesPerGroup={1}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={6}
          breakpoints={{
            768: {
              slidesPerView: 4.3,
            },
            1024: {
              slidesPerView: 5.3,
            },
            1440: {
              slidesPerView: 6,
            },
          }}
          loop={true}
          navigation={false}
          modules={[Autoplay]}
          spaceBetween={30}
          speed={4000}
        >
          {investors.map((investor) => (
            <SwiperSlide key={investor.id} className="rounded-2xl">
              <div
                key={investor.id}
                className="flex items-center justify-center p-3"
              >
                <Image
                  src={`/partners/${investor.logoTitle}.png`}
                  alt="Partner logo"
                  width={143}
                  height={76}
                  className="h-auto w-auto object-contain"
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
        {investors.map((investor, i) => (
          <div
            key={investor.id}
            className="flex items-center justify-center p-3"
          >
            <Image
              src={`/partners/${investor.logoTitle}.png`}
              alt="Partner logo"
              width={143}
              height={76}
              className="h-auto w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurPartners;
