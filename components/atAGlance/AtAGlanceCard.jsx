import Image from "next/image";

function AtAGlanceCard({ card }) {
  return (
    <div
      data-aos="fade-up"
      className="group flex flex-col items-center justify-center gap-5 rounded-[10px] border border-dark/10 px-3 py-5 shadow-sm shadow-dark/10 transition-all duration-300 hover:shadow-md md:gap-10 md:px-[30px] md:py-[60px]"
    >
      <Image
        src={`/at-a-glance-icons/${card.iconName}.svg`}
        alt=""
        width={100}
        height={100}
        className="h-[50px] w-[50px] transition-all duration-300 group-hover:scale-105 md:h-[100px] md:w-[100px]"
      />
      <p className="text-center font-onest text-sm font-medium text-dark md:min-h-14 md:text-xl">
        {card.details}
      </p>
    </div>
  );
}

export default AtAGlanceCard;
