import Image from "next/image";
import SocialIcons from "../shared/SocialIcons";
import { cn } from "@/lib/utils";

function HeroBannerSecondary({ bannerImage, pageTitle, heading, social }) {
  return (
    <section className="relative h-[480px] md:h-[550px]">
      <Image
        src={bannerImage}
        alt="Hero banner"
        className="h-full w-full object-cover"
        priority
        as="image"
        width={1331}
        height={550}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-dark/10 bg-gradient-to-t from-dark/50 to-dark/0">
        <div className="container">
          <div
            className="flex flex-col gap-[10px] pb-[30px] md:pb-[60px]"
            data-aos="fade-up"
          >
            <h3
              className={cn(
                "font-inter text-[14px] font-medium uppercase leading-[20px] text-white md:text-[16px] md:leading-[22px]",
                { social: "font-normal leading-[26px]" },
              )}
            >
              {pageTitle}
            </h3>
            <h1 className="max-w-4xl font-onest text-[34px] font-medium leading-[44px] text-white md:text-5xl md:leading-[58px]">
              {heading}
            </h1>

            {social && <SocialIcons facebookLink="#" LinkedinLink="#" />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBannerSecondary;
