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
      <div className="absolute inset-0 flex flex-col justify-end bg-dark bg-opacity-10">
        <div className="flex flex-col gap-[10px] px-[75px] py-[60px]">
          <h3 className="font-inter text-base font-medium uppercase text-white">
            About us
          </h3>
          <h2 className="max-w-3xl font-onest text-5xl font-medium leading-[1.2em] text-white">
            Innovative Solutions for Critical Health Challenges
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroSecondaryBanner;
