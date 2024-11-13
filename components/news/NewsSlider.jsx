"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";
import SliderNavigationButton from "@/app/components/SliderNavigationButton";


const SliderCard = ({singleNews}) => {
  return (
    <Link href={singleNews.link}>
      <div
        className="left-part flex min-h-[375px] max-w-[850px] flex-col items-start justify-end overflow-hidden rounded-[20px] p-[15px]"
        style={{
          background: `linear-gradient(357.65deg, rgba(0, 5, 17, 0.8) 1.97%, rgba(0, 32, 104, 0) 75.74%), url('${singleNews.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="items space-y-[5px]">
          <p className="font-inter text-[12px] leading-[18px] text-white">
            {singleNews.date}
          </p>
          <h4 className="font-onest text-[20px] font-medium leading-[30px] text-white">
            {singleNews.title}
          </h4>
        </div>
      </div>
    </Link>
  );
};


const NewsSlider = ({designType, sectionTitle}) => {
  const swiperRef = useRef(null);
  const featureNews = [
    {
      id: crypto.randomUUID(),
      title:
        "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
      date: "March 12, 2020",
      image: "feature-news.png",
      link: "/healthcare-launches-state-of-the-art",
    },
    {
      id: crypto.randomUUID(),
      title:
        "AKS Khan Pharmaceuticals crosses major milestone with 500,000 patients Served",
      date: "March 12, 2020",
      image: "feature-news.png",
      link: "/pharmaceuticals-500000-patients-served",
    },
    {
      id: crypto.randomUUID(),
      title: "Three new locations in Khulna Division",
      date: "March 12, 2020",
      image: "feature-news.png",
      link: "/new-locations-khulna-division",
    },
    {
      id: crypto.randomUUID(),
      title:
        "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
      date: "March 12, 2020",
      image: "feature-news.png",
      link: "/healthcare-launches-state-of-the-Art",
    },
  ];

   {/* Main Default Design  */}
    if(designType=="Main"){
      return (
        <section className="overflow-hidden py-[50px] lg:py-[100px]">
        <div className="container">
          <div className="mb-[30px] flex items-center justify-between md:mb-10">
            <h2
              className="font-onest text-[30px] leading-[40px] md:text-[40px] md:leading-[50px] font-medium text-dark"
              data-aos="fade-right"
            >
              {sectionTitle ? sectionTitle : "Recent Updates"}
             
            </h2>
            <div className="hidden items-center justify-end gap-[10px] md:flex">
              <div className="updates-pagination mr-5 !flex !w-auto !min-w-10 !items-center !gap-1 font-onest text-[20px] font-medium !leading-[30px] !text-dark/60"></div>
              <SliderNavigationButton
                onPrev={() => swiperRef.current?.slidePrev()}
                onNext={() => swiperRef.current?.slideNext()}
              />
            </div>
          </div>
        </div>
        <div className="container !pr-0 sm:!pr-[15px] md:!pr-[30px] lg:!pr-[45px]" data-aos="fade-left">
          <Swiper
            className="mb-[30px] h-full md:mb-10"
            slidesPerGroup={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={1.16}
            breakpoints={{
              425: {
                slidesPerView: 1.2,
              },
              500: {
                slidesPerView: 1.3,
              },
              640: {
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
            {featureNews.map((singleNews) => (
              <SwiperSlide key={singleNews.id}>
                <div className="group flex cursor-pointer flex-col overflow-hidden rounded-md">
                  <div className="mb-5 h-[175px] w-full overflow-hidden rounded-md md:h-[240px]">
                    <Image
                      src={`/${singleNews.image}`}
                      alt={singleNews.title}
                      width={800}
                      height={750}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <p className="mb-[10px] font-inter text-[14px] leading-[22px] font-normal uppercase text-dark/80">
                    {singleNews.date}
                  </p>
                  <h4 className="font-onest text-[20px] font-medium leading-[30px] text-dark md:text-[24px] md:leading-[34px] line-clamp-2">
                    {singleNews.title}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="container flex items-center justify-center"
          data-aos="fade-up"
        >
          <PrimaryButton border={true}>View all</PrimaryButton>
        </div>
      </section>
      )
    }

 {/* For News Landing Page Banner Design  */}
  return (
    <section className="overflow-hidden ">
      <div className="container !pr-0 md:!pr-[30px]" data-aos="fade-left">
        <Swiper
          className="h-full my-[30px]"
          slidesPerGroup={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1.16}
          breakpoints={{
            425: {
              slidesPerView: 1.2,
            },
            500: {
              slidesPerView: 1.3,
            },
            580: {
              slidesPerView: 1.6,
            },
            768: {
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
          {featureNews.map((singleNews) => (
            <SwiperSlide key={singleNews.id}>
              <SliderCard singleNews={singleNews} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default NewsSlider;
