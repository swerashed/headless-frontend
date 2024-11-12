import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({news}) => {
  
  return (
    <Link href={news.link}>
    <div className="group flex cursor-pointer flex-col overflow-hidden rounded-[10px]">
      <div className="mb-5 h-[175px] w-full overflow-hidden rounded-[10px] md:h-[240px]">
        <Image
          src={`/recent-updates/${news.image}.png`}
          alt={news.title}
          width={410}
          height={240}
          className="h-full w-full object-cover transition-all duration-1000"
        />
      </div>
      <p className="mb-[10px] font-inter text-[14px] leading-[22px] font-normal uppercase text-dark/80">
        {news.date}
      </p>
      <h4 className="font-onest lg:text-[24px] leading-[26px] text-[18px] font-medium lg:leading-[34px] text-dark line-clamp-2">
        {news.title}
      </h4>
    </div>
    </Link>
  );
};

export default NewsCard;
