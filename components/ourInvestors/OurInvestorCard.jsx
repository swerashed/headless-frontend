import Image from "next/image";

function OurInvestorCard({ card }) {
  const {_id, title, image } = card;
  return (
    <div
      data-aos="fade-up"
      key={_id}
      className="flex items-center justify-center rounded-2xl bg-white p-[22px] shadow-sm hover:shadow-md"
    >
      <Image
        src={image}
        alt={title}
        width={206}
        height={90}
        className="object-contain"
      />
    </div>
  );
}

export default OurInvestorCard;
