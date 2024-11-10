import Image from "next/image";

function CounterCard({ counter }) {
  return (
    <div
      data-aos="fade-up"
      className={`group relative flex flex-col justify-between gap-5 rounded-xl border border-dark/10 p-[15px] shadow-sm shadow-dark/10 transition-all duration-300 hover:shadow-md md:gap-[66px] md:p-[30px] ${counter.size === "single" ? "md:col-span-2" : "md:col-span-3"}`}
    >
      <h4 className="font-onest text-[30px] font-medium text-blue md:text-[68px]">
        {counter.count}
      </h4>
      <p className="font-inter text-sm font-normal text-dark md:text-base">
        {counter.details}
      </p>
      <Image
        src={`/counter-icons/${counter.imageName}.svg`}
        alt="Card icon"
        width={80}
        height={80}
        className="absolute right-1 top-1 h-[50px] w-[50px] opacity-50 transition-all duration-300 group-hover:opacity-100 md:h-20 md:w-20"
      />
    </div>
  );
}

export default CounterCard;
