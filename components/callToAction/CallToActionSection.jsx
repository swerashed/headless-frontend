import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";

function CallToActionSection() {
  return (
    <section className="my-[30px] overflow-hidden lg:my-[100px]">
      <div className="container" data-aos="fade-up">
        <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#2AA781CC] to-[#20637DCC] px-[15px] py-[50px] shadow-xl shadow-dark/10 md:shadow-2xl lg:py-20">
          <Image
            src="/call-to-action/call-to-action-banner.jpg"
            width={3000}
            height={2000}
            alt="Contact banner image"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[20%_30%] transition-all duration-300 group-hover:scale-[1.05]"
          />
          <h2 className="mb-[30px] max-w-[550px] text-center font-onest text-[28px] font-medium leading-tight text-white lg:max-w-[850px] lg:text-[40px]">
            If you need any additional information, please contact us.
          </h2>
          <PrimaryButton border={false}>Let&lsquo;s get started</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
