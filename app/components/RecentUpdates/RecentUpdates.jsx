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

const updates = [
  {
    id: crypto.randomUUID(),
    title:
      "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
    date: "March 12, 2020",
    image: "recent-updates-1",
  },
  {
    id: crypto.randomUUID(),
    title:
      "AKS Khan Pharmaceuticals crosses major milestone with 500,000 patients Served",
    date: "March 12, 2020",
    image: "recent-updates-2",
  },
  {
    id: crypto.randomUUID(),
    title: "Three new locations in Khulna Division",
    date: "March 12, 2020",
    image: "recent-updates-3",
  },
  {
    id: crypto.randomUUID(),
    title:
      "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
    date: "March 12, 2020",
    image: "recent-updates-1",
  },
  {
    id: crypto.randomUUID(),
    title:
      "AKS Khan Pharmaceuticals crosses major milestone with 500,000 patients Served",
    date: "March 12, 2020",
    image: "recent-updates-2",
  },
  {
    id: crypto.randomUUID(),
    title: "Three new locations in Khulna Division",
    date: "March 12, 2020",
    image: "recent-updates-3",
  },
];

function RecentUpdates() {
  const swiperRef = useRef(null);

  return (
    <section className="my-[50px] lg:mb-[200px] lg:mt-[100px]">
      <div className="container">
        <div className="mb-[30px] flex items-center justify-between">
          <h2 className="font-onest text-[30px] font-medium text-dark">
            Recent Updates
          </h2>
          <div className="hidden items-center justify-end gap-[10px] md:flex">
            <div className="updates-pagination mr-5 !flex !w-auto !min-w-10 !items-center !gap-1 font-onest text-xl font-medium !leading-none !text-red-900"></div>
            <SliderNavigationButton
              primaryColor="blue"
              secondaryColor="white"
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <Swiper
          className="mb-[30px] h-full cursor-grabbing md:mb-10"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1.1}
          breakpoints={{
            425: {
              slidesPerView: 1.2,
            },
            500: {
              slidesPerView: 1.3,
            },
            580: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
            type: "fraction",
            el: ".updates-pagination",
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay, A11y]}
          spaceBetween={20}
          speed={600}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {updates.map((update) => (
            <SwiperSlide key={update.id}>
              <div className="flex flex-col overflow-hidden rounded-md">
                <Image
                  src={`/recent-updates/${update.image}.png`}
                  alt={update.title}
                  width={800}
                  height={750}
                  className="mb-5 h-[175px] w-full rounded-md object-cover md:h-[240px]"
                />
                <p className="mb-[10px] font-inter text-sm font-normal uppercase text-dark/80">
                  {update.date}
                </p>
                <h4 className="font-onest text-xl font-medium leading-snug text-dark md:text-2xl">
                  {update.title.length > 48
                    ? update.title.slice(0, 48) + "..."
                    : update.title}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center" data-aos="fade-up">
          <ButtonPrimary border={true}>View all</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}

export default RecentUpdates;
