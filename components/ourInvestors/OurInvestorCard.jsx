import Image from "next/image";

function OurInvestorCard({ card }) {
  return (
    <div
      data-aos="fade-up"
      key={card.id}
      className="flex items-center justify-center rounded-2xl bg-white p-[22px] shadow-sm hover:shadow-md"
    >
      <Image
        src={card.logoLink}
        alt="Investor logo"
        width={206}
        height={90}
        className="object-contain"
      />
    </div>
  );
}

export default OurInvestorCard;
