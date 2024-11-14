"use client";
import Image from "next/image";
import Link from "next/link";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useRef } from "react";
import NewsSlider from "./NewsSlider";
const FeatureNewsCard = ({ singleNews, index }) => {
  return (
    <Link href={singleNews.link}>
      <div
        className={`news-card flex w-full gap-[15px] ${index == 2 ? "border-none" : "mb-5 border-b"} border-dark/10 pb-5`}
      >
        <div className="image-content min-h-[135px] min-w-[150.43px] overflow-hidden rounded-t-[8px] rounded-bl-[8px]">
          <Image
            src={`/recent-updates/${singleNews.image}.png`}
            alt=""
            width={150}
            height={135}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-content space-y-2.5">
          <p className="font-inter text-[14px] leading-[22px] text-dark/80">
            {singleNews.date}
          </p>
          <h4 className="line-clamp-2 font-onest text-[20px] font-medium leading-[30px] text-dark">
            {singleNews.title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

const NewsHero = () => {
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
      image: "recent-updates-2",
      link: "/pharmaceuticals-500000-patients-served",
    },
    {
      id: crypto.randomUUID(),
      title: "Three new locations in Khulna Division",
      date: "March 12, 2020",
      image: "recent-updates-3",
      link: "/new-locations-khulna-division",
    },
    {
      id: crypto.randomUUID(),
      title:
        "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
      date: "March 12, 2020",
      image: "recent-updates-1",
      link: "/healthcare-launches-state-of-the-Art",
    },
  ];

  const topNews = featureNews[0];

  const otherTopNews = featureNews.splice(1, 3);

  return (
    <section className="bg-surface">
      {/* NEWS HERO SECTION - WILL BE HIDDEN ON MOBILE DEVICE  */}
      <div className="container hidden gap-[30px] py-[100px] lg:flex">
        <Link href={topNews.link}>
          <div
            className="left-part flex min-h-[505px] max-w-[850px] flex-col items-end justify-end overflow-hidden rounded-[20px] p-[40px]"
            style={{
              background: `linear-gradient(357.65deg, rgba(0, 5, 17, 0.8) 1.97%, rgba(0, 32, 104, 0) 75.74%), url('${topNews.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="items space-y-[5px]">
              <p className="font-inter text-[14px] leading-[22px] text-white">
                {topNews.date}
              </p>
              <h4 className="font-onest text-[32px] font-medium leading-[44px] text-white">
                {topNews.title}
              </h4>
            </div>
          </div>
        </Link>
        <div className="right-part w-full max-w-[410px] space-y-5">
          {otherTopNews.map((singleNews, index) => (
            <FeatureNewsCard
              key={singleNews.id}
              index={index}
              singleNews={singleNews}
            />
          ))}
        </div>
      </div>

      {/* NEWS SECTION - WILL BE HIDDEN ON LARGE DEVICE  */}
      <div className="slider-section lg:hidden">
        <NewsSlider featureNews={featureNews} />
      </div>
    </section>
  );
};

export default NewsHero;
