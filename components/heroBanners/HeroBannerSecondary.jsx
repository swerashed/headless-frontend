import Image from "next/image";

function HeroBannerSecondary({ bannerImage, pagetitle, heading }) {
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
          <h3 className="font-inter text-sm font-medium uppercase text-white md:text-base">
            {pagetitle}
          </h3>
          <h1 className="max-w-4xl font-onest text-[34px] font-medium leading-[1.2em] text-white md:text-5xl">
            {heading}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroBannerSecondary;
