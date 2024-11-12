import Image from "next/image";
import SocialIcons from "../shared/SocialIcons";

function HeroBannerSecondary({ bannerImage, pageTitle, heading, social }) {
  return (
    <section className="relative h-[70vh]">
      <Image
        src={bannerImage}
        alt="Hero banner"
        className="h-full w-full object-cover"
        priority
        as="image"
        width={1331}
        height={438}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-dark/10 bg-gradient-to-t from-dark/50 to-dark/0">
        <div
          className="container flex flex-col gap-[10px] pb-[30px] md:pb-[60px]"
          data-aos="fade-up"
        >
          
          <h3 className={`font-inter text-white ${social ? "font-normal text-[16px] leading-[26px]" :"text-[14px] leading-[22px] md:text-[16px] md:leading-[22px] font-medium uppercase "} `}>
            {pageTitle}
          </h3>
          <h1 className="max-w-4xl font-onest text-[34px] font-medium leading-[44px] text-white md:text-5xl md:leading-[58px]">
            {heading}
          </h1>

          {
            social && <SocialIcons facebookLink="#" LinkedinLink="#"/>
          }
        </div>
      </div>
    </section>
  );
}

export default HeroBannerSecondary;
