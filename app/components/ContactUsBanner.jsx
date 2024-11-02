import Image from "next/image";
import Link from "next/link";
import React from "react";

function ContactUsBanner() {
  return (
    <section className="my-[30px]" data-aos="fade-up">
      <div className="mx-auto max-w-[1290px] px-[15px] xl:px-0">
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#2AA781CC] to-[#20637DCC] px-[15px] py-[50px] lg:py-20">
          <Image
            src="/contact-banner.jpg"
            width={3000}
            height={2000}
            alt="Contact banner image"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[20%_30%]"
          />
          <h2 className="mb-[30px] max-w-[850px] text-center font-onest text-[28px] font-medium leading-tight text-white lg:text-[40px]">
            If you need any additional information, please contact us.
          </h2>
          <Link
            href="/"
            className="text-dark stroke-dark hover:bg-dark focus:bg-dark flex items-center justify-center gap-2 rounded-full bg-white py-3 pl-8 pr-5 font-inter font-semibold capitalize transition-all duration-300 hover:stroke-white hover:text-white focus:stroke-white focus:text-white focus:outline-none"
          >
            <p>Let&lsquo;s get started</p>
            <svg
              width={24}
              height={24}
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
      </div>
    </section>
  );
}

export default ContactUsBanner;
