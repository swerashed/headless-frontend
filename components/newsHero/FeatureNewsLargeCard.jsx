import Image from "next/image";
import React from "react";

function FeatureNewsLargeCard({ news }) {
  return (
    <div className="group relative col-span-3 flex h-full overflow-hidden rounded-[20px] xl:col-span-4">
      <div className="overflow-hidden">
        <Image
          src={news.image}
          width={850}
          height={505}
          alt={news.title}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#000511CC] to-[#00206800]">
        <div className="flex flex-col p-10 font-inter text-white">
          <p className="mb-1 text-sm font-normal leading-[22px]">{news.date}</p>
          <h3 className="line-clamp-2 font-onest text-[32px] font-medium leading-[44px]">
            {news.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default FeatureNewsLargeCard;
