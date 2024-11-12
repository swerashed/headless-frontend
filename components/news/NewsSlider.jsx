"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";


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


const NewsSlider = () => {
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
