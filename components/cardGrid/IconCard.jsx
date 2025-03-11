import Image from "next/image";

function IconCard({ card }) {
  const { card_image, card_details, details, image } = card;
  return (
    <div
      data-aos="fade-up"
      className="group flex flex-col items-center justify-center gap-5 rounded-[10px] border border-dark/10 bg-white px-3 py-5 shadow-sm transition-all duration-300 hover:shadow-sm md:gap-10 md:px-[30px] md:py-[60px]"
    >
      <Image
        src={card_image || image}
        alt={card_details || details}
        width={100}
        height={100}
        className="h-[50px] w-[50px] transition-all duration-300 group-hover:scale-105 md:h-[100px] md:w-[100px]"
      />
      <p className="flex-grow text-center font-inter text-sm font-medium leading-[22px] text-dark md:min-h-14 md:text-xl md:leading-[30px] lg:min-h-[120px]">
        {card_details || details}
      </p>
    </div>
  );
}

export default IconCard;
