import Image from "next/image";
import Link from "next/link";

function DiagnosticsCard({ card }) {
  const { card_title, card_sub_title, image, card_url } = card;
  return (
    <div className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-dark/10 shadow-sm shadow-white">
      <div className="h-[240px] w-full overflow-hidden md:h-[273px]">
        <Image
          src={image}
          alt={card_title}
          width={410}
          height={273}
          className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-grow flex-col bg-white px-4 pb-3 pt-6">
        <h4 className="mb-[10px] font-onest text-xl font-medium leading-[30px] md:text-2xl md:leading-[32px]">
          {card_title}
        </h4>
        <p className="mb-10 min-h-[110px] font-inter text-base font-normal leading-[26px] text-dark/80">
          {card_sub_title}
        </p>
        <Link
          href={card_url}
          target="_blank"
          className="flex items-center justify-between border-t border-dark/10 stroke-dark pb-2 pt-4 font-inter font-semibold text-dark transition-all duration-300 hover:stroke-blue/90 hover:text-blue/90 focus:stroke-blue/90 focus:text-blue/90 focus:outline-none"
        >
          <span>View Details</span>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.59961 16.7998L14.3996 11.9998L9.59961 7.19981"
              stroke="current"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default DiagnosticsCard;
