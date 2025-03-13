import Image from "next/image";

function CounterCard({ data }) {
  const { title, number, image, prefix } = data;
  return (
    <div
      data-aos="fade-up"
      className="group relative flex flex-col justify-between gap-16 rounded-[10px] border border-dark/10 bg-white p-[15px] shadow-sm shadow-dark/10 transition-all duration-300 hover:shadow-md md:gap-[66px] md:p-[30px]"
    >
      <h4 className="font-onest text-xl font-medium leading-[40px] text-blue md:text-[30px] md:leading-none xl:text-[55px]">
        {number}
        {prefix || ""}
      </h4>
      <p className="font-inter text-sm font-normal leading-[22px] text-dark md:text-base md:leading-[26px]">
        {title}
      </p>
      <Image
        src={
          image ||
          "https://staging.notionhive.com/wordpress/aks-headless/wp-content/uploads/2025/01/condo-1.svg"
        }
        alt="Card icon"
        width={80}
        height={80}
        className="absolute right-[5px] top-[5px] h-[50px] w-[50px] opacity-80 transition-all duration-300 group-hover:opacity-100 md:h-20 md:w-20"
      />
    </div>
  );
}

export default CounterCard;
