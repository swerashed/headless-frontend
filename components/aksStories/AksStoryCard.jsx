import Image from "next/image";

function AksStoryCard({ card }) {
  return (
    <div className="group relative flex h-[400px] cursor-pointer flex-col overflow-hidden rounded-[20px] shadow-md shadow-dark/10 transition-all duration-300 hover:shadow-lg lg:h-[567px]">
      <Image
        src={card.image}
        alt="Story cover image"
        height={567}
        width={410}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
      />
      <h4 className="absolute left-[10px] top-[10px] rounded-full bg-white px-3 py-2 font-inter text-sm font-normal capitalize leading-[22px] text-dark shadow-sm shadow-dark/10 md:text-base">
        {card.label}
      </h4>
      <div className="absolute bottom-0 left-0 hidden w-full rounded-b-[20px] bg-gradient-to-b from-[#66666600] to-[#000000] px-5 pb-[27px] pt-[50px] transition-all duration-300 group-hover:block">
        <h3 className="line-clamp-2 font-onest text-xl font-medium leading-normal text-white md:text-2xl md:leading-[34px]">
          {card.title}
        </h3>
      </div>
    </div>
  );
}

export default AksStoryCard;
