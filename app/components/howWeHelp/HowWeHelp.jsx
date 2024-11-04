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
import Link from "next/link";

const howWeHelps = [
  {
    id: crypto.randomUUID(),
    title: "AKS Khan Pharmacy",
    imageTitle: "how-we-help-1",
    details:
      "AKS Pharmacy offers high-quality medicines, expert consultation, and personalized care from dedicated pharmacists, ensuring product safety.",
  },
  {
    id: crypto.randomUUID(),
    title: "AKS Khan Diagnostics",
    imageTitle: "how-we-help-2",
    details:
      "AKS Healthcare provides walk-in clinics with expert consultations, advanced testing, and tech-enhanced care and support.",
  },
  {
    id: crypto.randomUUID(),
    title: "Impacts",
    imageTitle: "how-we-help-3",
    details:
      "AKS Healthcare provides walk-in clinics with expert consultations, advanced testing, and tech-enhanced care and support.",
  },
];

function HowWeHelp() {
  const swiperRef = useRef(null);

  return (
    <section className="overflow-hidden bg-light-blue py-[50px] lg:py-[100px]">
      <div className="container">
        <div className="mb-[30px] flex items-center justify-between md:mb-10">
          <h2
            className="font-onest text-[30px] font-medium text-dark"
            data-aos="fade-right"
          >
            How We Help
          </h2>
          <div className="flex items-center justify-end gap-[10px] md:hidden">
            <SliderNavigationButton
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
      <div className="container md:hidden">
        <Swiper
          className="mb-[30px] h-full md:mb-10"
          data-aos="fade-left"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1.1}
          breakpoints={{
            460: {
              slidesPerView: 1.3,
            },
          }}
          loop={true}
          navigation={false}
          modules={[Autoplay]}
          spaceBetween={20}
          speed={600}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {howWeHelps.map((howWeHelp) => (
            <SwiperSlide key={howWeHelp.id}>
              <div className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border-light shadow-sm shadow-white">
                <div className="h-[240px] w-full overflow-hidden">
                  <Image
                    src={`/how-we-help/${howWeHelp.imageTitle}.jpg`}
                    alt={howWeHelp.title}
                    width={410}
                    height={273}
                    className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col bg-white px-4 pb-3 pt-6">
                  <h4 className="pb-[10px] font-onest text-2xl font-medium">
                    {howWeHelp.title}
                  </h4>
                  <p className="mb-10 min-h-32 font-inter text-base font-normal text-dark/80">
                    {howWeHelp.details}
                  </p>
                  <Link
                    href="/"
                    className="flex items-center justify-between border-t border-border-light stroke-dark pb-2 pt-4 font-inter font-semibold text-dark transition-all duration-300 hover:stroke-blue/90 hover:text-blue/90 focus:stroke-blue/90 focus:text-blue/90 focus:outline-none"
                  >
                    <span>View Details</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.59961 16.7998L14.3996 11.9998L9.59961 7.19981"
                        stroke="current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <div
          className="mb-10 hidden grid-cols-2 gap-[30px] md:grid lg:grid-cols-3"
          data-aos="fade-left"
        >
          {howWeHelps.map((howWeHelp) => (
            <div
              key={howWeHelp.id}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border-light shadow-sm shadow-white"
            >
              <div className="h-[270px] w-full overflow-hidden">
                <Image
                  src={`/how-we-help/${howWeHelp.imageTitle}.jpg`}
                  alt={howWeHelp.title}
                  width={410}
                  height={273}
                  className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col bg-white px-4 pb-3 pt-6">
                <h4 className="pb-[10px] font-onest text-2xl font-medium">
                  {howWeHelp.title}
                </h4>
                <p className="mb-10 min-h-32 font-inter text-base font-normal text-dark/80">
                  {howWeHelp.details}
                </p>
                <Link
                  href="/"
                  className="flex items-center justify-between border-t border-border-light stroke-dark pb-2 pt-4 font-inter font-semibold text-dark transition-all duration-300 hover:stroke-blue/90 hover:text-blue/90 focus:stroke-blue/90 focus:text-blue/90 focus:outline-none"
                >
                  <span>View Details</span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59961 16.7998L14.3996 11.9998L9.59961 7.19981"
                      stroke="current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="container flex items-center justify-center"
        data-aos="fade-up"
      >
        <ButtonPrimary border={true}>View all services</ButtonPrimary>
      </div>
    </section>
  );
}

export default HowWeHelp;
