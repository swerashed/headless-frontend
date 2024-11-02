import Image from "next/image";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";

function ContactUsBanner() {
  return (
    <section className="my-[30px] lg:my-[100px]" data-aos="fade-up">
      <div className="container">
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#2AA781CC] to-[#20637DCC] px-[15px] py-[50px] shadow-xl lg:py-20">
          <Image
            src="/contact-banner.jpg"
            width={3000}
            height={2000}
            alt="Contact banner image"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[20%_30%]"
          />
          <h2 className="mb-[30px] max-w-[550px] text-center font-onest text-[28px] font-medium leading-tight text-white lg:max-w-[850px] lg:text-[40px]">
            If you need any additional information, please contact us.
          </h2>
          <ButtonPrimary border={false}>Let&lsquo;s get started</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}

export default ContactUsBanner;
