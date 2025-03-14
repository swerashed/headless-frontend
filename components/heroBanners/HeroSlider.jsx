"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HeroSlider({ data }) {
  const slides = data?.hero_items || [];
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handlePlayPause = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
        swiperRef.current.slideNext();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const updateActiveIndex = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="relative flex h-[90dvh] items-end justify-center">
      <Swiper
        className="h-full cursor-grabbing"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          type: "fraction",
          el: ".custom-pagination",
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay, A11y]}
        spaceBetween={0}
        speed={600}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={updateActiveIndex}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id} className="h-full">
            <Image
              src={slide.image}
              alt="Slider image"
              className="h-full w-full object-cover"
              priority
              width={1440}
              height={795}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col bg-hero-gradient px-[15px] pb-[30px] pt-[70px] lg:px-[75px] lg:pt-[75px]">
        <h1
          data-aos="fade-down"
          className="mb-10 max-w-[740px] font-onest text-[34px] font-medium leading-[44px] text-white md:mb-[60px] md:text-5xl md:leading-[58px]"
        >
          {slides[activeIndex]?.title}
        </h1>
        <div className="flex items-center">
          <button
            onClick={handlePlayPause}
            className="mr-5 flex items-center justify-center rounded-full fill-transparent stroke-white transition-all duration-300 hover:fill-white hover:stroke-[#162340] focus:fill-white focus:stroke-[#162340] focus:outline-none"
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="current"
                stroke="current"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} stroke="current" />
                <line x1={10} y1={15} x2={10} y2={9} />
                <line x1={14} y1={15} x2={14} y2={9} />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="current"
                stroke="current"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-play-circle"
              >
                <circle cx={12} cy={12} r={10} stroke="current" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            )}
          </button>
          <div className="custom-pagination mr-5 !flex !w-auto !min-w-10 !items-center !gap-1 font-onest text-xl font-medium !leading-none !text-white"></div>
          <div className="mr-5 flex flex-grow items-center justify-center gap-[10px] md:mr-10">
            {[...Array(slides.length)].map((_, index) => (
              <div
                key={index}
                className="h-[1.5px] flex-grow rounded-md bg-gray-600 md:h-0.5"
              >
                <div
                  className={`h-full rounded-md bg-white ${
                    isPlaying && index === activeIndex ? "animate-progress" : ""
                  } ${index === activeIndex ? "w-full" : "w-0"}`}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[10px]">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-8 w-8 items-center justify-center rounded-full fill-transparent stroke-white transition-all duration-300 hover:fill-white hover:stroke-[#162340] focus:fill-white focus:stroke-[#162340] focus:outline-none"
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width={31}
                  height={31}
                  rx="15.5"
                  stroke="current"
                />
                <path
                  d="M18 20L14 16L18 12"
                  stroke="current"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-8 w-8 items-center justify-center rounded-full fill-transparent stroke-white transition-all duration-300 hover:fill-white hover:stroke-[#162340] focus:fill-white focus:stroke-[#162340] focus:outline-none"
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width={31}
                  height={31}
                  rx="15.5"
                  stroke="current"
                />
                <path
                  d="M14 20L18 16L14 12"
                  stroke="current"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
