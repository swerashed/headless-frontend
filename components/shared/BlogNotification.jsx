"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function BlogNotification({ isVisible, themeOptions, setIsBlogNotificationVisible }) {
  const handleCloseNotification = () => {
    localStorage.setItem("isBlogNotificationVisible", "false");
    setIsBlogNotificationVisible(false);
  };
  return (
    <div
      className={cn(
        "mb-[10px] hidden relative flex-row items-center z-[20000000] justify-center gap-5 bg-blue py-3 font-inter text-base font-normal leading-[26px] text-white lg:flex",
        `transition-transform duration-300 ${isVisible ? "transform-none" : "-translate-y-full"
        }`,
      )}
    >
      <p>{themeOptions?.title}</p>
      <Link
        href={themeOptions?.url || "#"}
        className="flex flex-row items-center justify-center gap-[5px] font-semibold"
      >
        <span>Read Post</span>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.46967 15.4697C7.17678 15.7626 7.17678 16.2374 7.46967 16.5303C7.76256 16.8232 8.23744 16.8232 8.53033 16.5303L7.46967 15.4697ZM16.75 8C16.75 7.58579 16.4142 7.25 16 7.25L9.25 7.25C8.83579 7.25 8.5 7.58579 8.5 8C8.5 8.41421 8.83579 8.75 9.25 8.75H15.25V14.75C15.25 15.1642 15.5858 15.5 16 15.5C16.4142 15.5 16.75 15.1642 16.75 14.75L16.75 8ZM8.53033 16.5303L16.5303 8.53033L15.4697 7.46967L7.46967 15.4697L8.53033 16.5303Z"
            fill="white"
          />
        </svg>
      </Link>

      <button onClick={handleCloseNotification} className="bg-transparent border-none outline-none flex justify-center items-center absolute top-0 right-10 translate-y-full cursor-pointer">
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.743652 2L12.0574 13.3137" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M0.743652 13L12.0574 1.68629" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

export default BlogNotification;
