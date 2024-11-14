import Image from "next/image";
import Link from "next/link";
import React from "react";

function DepartmentCard({ item }) {
  return (
    <div className="group flex cursor-pointer flex-col rounded-[10px] border border-dark/10 bg-white px-3 pb-3 pt-5 shadow-md shadow-dark/10 transition-all duration-300 hover:shadow-lg sm:px-[30px] sm:pt-10 md:px-3 md:pt-5 xl:px-[30px] xl:pt-10">
      <Image
        src={item.icon}
        alt={item.title}
        width={100}
        height={100}
        className="mb-10 h-20 w-20 origin-left object-contain transition-all duration-300 group-hover:scale-105 xl:h-[100px] xl:w-[100px]"
      />
      <h3 className="mb-[15px] font-onest text-xl font-medium leading-[30px] text-dark sm:text-2xl sm:leading-[34px]">
        {item.title}
      </h3>
      <p className="mb-10 grow font-inter text-sm font-normal leading-[22px] text-dark/80 sm:text-base sm:leading-[26px]">
        {item.details}
      </p>
      <Link
        href="/"
        className="group flex flex-row items-center justify-between gap-2 border-t border-dark/10 fill-dark stroke-dark pb-3 pt-5 font-inter text-base font-semibold leading-[24px] text-dark"
      >
        <span className="flex-grow origin-left">Read More</span>
        <svg
          className="transition-all duration-300 group-hover:scale-105"
          width={28}
          height={28}
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
  );
}

export default DepartmentCard;
