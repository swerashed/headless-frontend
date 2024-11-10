import Image from "next/image";

function HeroSecondaryBanner() {
  return (
    <section className="relative h-[70vh]">
      <Image
        src="/hero-sliders/about.png"
        alt="Hero banner"
        className="h-full w-full object-cover"
        priority
        width={1331}
        height={438}
      />
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="container flex flex-col gap-[10px] pb-[30px] md:pb-[60px]">
          <h3 className="font-inter text-sm font-medium uppercase text-white md:text-base">
            About us
          </h3>
          <h2 className="max-w-3xl font-onest text-[34px] font-medium leading-[1.2em] text-white md:text-5xl">
            Innovative Solutions for Critical Health Challenges
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroSecondaryBanner;
