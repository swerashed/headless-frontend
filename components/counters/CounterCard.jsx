import Image from "next/image";

function CounterCard({ counter }) {
  return (
    <div
      data-aos="fade-up"
      className="group relative flex flex-col justify-between gap-16 rounded-[10px] border border-dark/10 p-[15px] shadow-sm shadow-dark/10 transition-all duration-300 hover:shadow-md md:gap-[66px] md:p-[30px]"
    >
      <h4 className="font-onest text-[30px] font-medium leading-[40px] text-blue md:text-[68px] md:leading-none">
        {counter.count}
      </h4>
      <p className="font-inter text-sm font-normal leading-[22px] text-dark md:text-base md:leading-[26px]">
        {counter.details}
      </p>
      <Image
        src={`/counter-icons/${counter.imageName}.svg`}
        alt="Card icon"
        width={80}
        height={80}
        className="absolute right-[5px] top-[5px] h-[50px] w-[50px] opacity-80 transition-all duration-300 group-hover:opacity-100 md:h-20 md:w-20"
      />
    </div>
  );
}

export default CounterCard;
