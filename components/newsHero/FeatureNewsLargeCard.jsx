import Image from "next/image";
import Link from "next/link";
import React from "react";

function FeatureNewsLargeCard({ news }) {
  const { title, featuredImage, date } = news;
  // Convert the string to a Date object
  const dateObject = new Date(date);

  // Format the date
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObject,
  );
  return (
    <Link
      href={`/news/${news?.slug}`}
      className="group relative col-span-3 flex h-full overflow-hidden rounded-[20px] xl:col-span-4"
    >
      <div className="overflow-hidden">
        <Link href={`/news/${news?.slug}`}>
          <Image
            src={featuredImage?.node?.sourceUrl || "/aks-thumbnail.png"}
            width={850}
            height={305}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#000511CC] to-[#00206800]">
        <div className="flex flex-col p-10 font-inter text-white">
          <p className="mb-1 text-sm font-normal leading-[22px]">
            {formattedDate}
          </p>
          <div>
            <h1 className="line-clamp-2 font-onest text-[32px] font-medium leading-[44px] text-white">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FeatureNewsLargeCard;
