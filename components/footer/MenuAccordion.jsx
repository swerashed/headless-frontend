"use client";

import Link from "next/link";
import { useState } from "react";

function MenuAccordion({ heading, links }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block w-full border-b border-dark/10 md:hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-[15px]"
      >
        <p className="font-onest text-lg font-medium leading-[26px] text-dark">
          {heading}
        </p>
        <svg
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          width={28}
          height={28}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="plus-minus-icon">
            <path
              d="M13.998 7V21"
              stroke="#357691"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${isOpen ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}
            />
            <path
              d="M7 13.999H21"
              stroke="#357691"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
      <div
        className={`flex max-h-0 scale-y-90 flex-col gap-[10px] overflow-hidden font-inter font-normal text-dark/80 opacity-0 transition-all duration-300 ${isOpen ? "mb-[15px] max-h-40 origin-top scale-y-100 opacity-100" : ""}`}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            className="font-inter text-base leading-[26px] transition-all duration-300 hover:underline"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuAccordion;
