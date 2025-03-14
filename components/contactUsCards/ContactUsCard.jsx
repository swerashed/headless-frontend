import Image from "next/image";
import Link from "next/link";

function ContactUsCard({ index, card }) {
  return (
    <div className="flex aspect-[410/336] h-auto w-auto flex-col items-center justify-center rounded-[10px] border border-[#1623401A] bg-white backdrop-blur-sm md:py-5 lg:py-0">
      <Image
        src={`${card?.icon || "/contact-us/call.png"}`}
        width={80}
        height={80}
        alt="call icon"
        className="mb-10 aspect-square h-20 w-20 object-contain sm:h-14 sm:w-14 xl:h-20 xl:w-20"
      />
      <p className="mb-[10px] text-center font-onest text-base font-normal leading-[26px] text-dark/80">
        {card?.card_title}
      </p>
      {index === 0 && (
        <Link
          href={`tel:${card?.card_number}`}
          className="text-center font-onest text-xl font-medium leading-[30px] text-dark"
        >
          {card?.card_number}
        </Link>
      )}
      {index === 1 && (
        <Link
          href={`mailto:${card?.card_number}`}
          className="text-center font-onest text-xl font-medium leading-[30px] text-dark"
        >
          {card?.card_number}
        </Link>
      )}
      {index === 2 && (
        <h3 className="text-center font-onest text-xl font-medium leading-[30px] text-dark">
          {card?.card_number}
        </h3>
      )}
    </div>
  );
}

export default ContactUsCard;
