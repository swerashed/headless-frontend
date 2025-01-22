import Image from "next/image";

function IconCard({ card }) {
  return (
    <div
      data-aos="fade-up"
      className="group flex flex-col items-center justify-center gap-5 rounded-[10px] border border-dark/10 bg-white px-3 py-5 shadow-sm transition-all duration-300 hover:shadow-sm md:gap-10 md:px-[30px] md:py-[60px]"
    >
      <Image
        src={card.image}
        alt={card.details}
        width={100}
        height={100}
        className="h-[50px] w-[50px] transition-all duration-300 group-hover:scale-105 md:h-[100px] md:w-[100px]"
      />
      <p className="text-center font-inter text-sm font-medium leading-[22px] text-dark md:min-h-14 md:text-xl md:leading-[30px]">
        {card.details}
      </p>
    </div>
  );
}

export default IconCard;
