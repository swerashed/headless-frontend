"use client";

import Link from "next/link";
import { useState } from "react";

function MenuAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-y border-b-dark/10">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-[15px]"
      >
        <p className="font-onest text-lg font-medium text-dark">The Company</p>
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
        className={`flex max-h-0 scale-y-90 flex-col overflow-hidden font-inter font-normal text-dark/80 opacity-0 transition-all duration-300 ${isOpen ? "max-h-40 origin-top scale-y-100 opacity-100" : ""}`}
      >
        <Link
          href="/"
          className="mb-4 transition-all duration-300 hover:underline"
        >
          About Us
        </Link>
        <Link
          href="/"
          className="mb-4 transition-all duration-300 hover:underline"
        >
          Board of Directors
        </Link>
        <Link
          href="/"
          className="mb-4 transition-all duration-300 hover:underline"
        >
          Management Team
        </Link>
      </div>
    </div>
  );
}

export default MenuAccordion;
