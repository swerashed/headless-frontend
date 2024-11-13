"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Grid, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionHeading from "../headings/SectionHeading";
import { cn } from "@/lib/utils";
import ProductCategoryCard from "./ProductCategoryCard";
import { useRef } from "react";
import SliderNavigationButton from "../buttons/SliderNavigationButton";

function ProductCategoriesSection({ sectionTitle, productList }) {
  const swiperRef = useRef(null);
  return (
    <section
      className={cn(
        "overflow-hidden border-b border-dark/10 bg-surface py-[50px] md:py-20",
      )}
    >
      <div className="container">
        <div className="flex flex-row justify-between gap-5">
          <div data-aos="fade-right">
            <SectionHeading>{sectionTitle}</SectionHeading>
          </div>
          <div className="hidden md:block">
            <SliderNavigationButton
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-10 hidden md:block">
          <Swiper
            className="h-full cursor-grabbing"
            slidesPerView={6}
            grid={{
              rows: 2,
              fill: "row",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={false}
            modules={[Autoplay, Grid]}
            spaceBetween={15}
            breakpoints={{
              768: {
                slidesPerView: 4,
                grid: { rows: 2, fill: "row" },
              },
              1280: {
                slidesPerView: 6,
                grid: { rows: 2, fill: "row" },
              },
            }}
            speed={600}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {productList.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCategoryCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div className="mt-[30px] grid grid-cols-2 gap-[15px] sm:grid-cols-3 sm:gap-5 md:hidden">
          {productList.map((product) => (
            <ProductCategoryCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategoriesSection;
