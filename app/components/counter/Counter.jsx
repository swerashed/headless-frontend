import Image from "next/image";

const countersDetails = [
  {
    id: crypto.randomUUID(),
    count: "99%",
    details: "Clients satisfaction score",
    imageName: "client-happy",
  },
  {
    id: crypto.randomUUID(),
    count: "12",
    details: "Number of pharmacy locations or areas served",
    imageName: "map-pointer",
  },
  {
    id: crypto.randomUUID(),
    count: "100+",
    details: "Types or number of specialty medications available",
    imageName: "medicine",
  },
  {
    id: crypto.randomUUID(),
    count: "10+",
    details: "Number of health screenings or events held annually",
    imageName: "cells",
  },
];

function Counter() {
  return (
    <section className="my-[50px] lg:my-[120px]">
      <div className="container">
        <div
          className="grid grid-cols-2 gap-[15px] lg:grid-cols-4 lg:gap-5"
          data-aos="fade-up"
        >
          {countersDetails.map((counterCard) => (
            <div
              key={counterCard.id}
              className="relative flex flex-col justify-between gap-5 rounded-xl border border-border-light p-[15px] shadow-sm shadow-white lg:gap-10 lg:p-[30px]"
            >
              <h5 className="font-onest text-[30px] font-medium text-blue lg:text-[64px]">
                {counterCard.count}
              </h5>
              <p className="font-inter text-sm font-normal text-dark lg:text-base">
                {counterCard.details}
              </p>
              <Image
                src={`/counter/${counterCard.imageName}.svg`}
                alt="Card icon"
                width={80}
                height={80}
                className="absolute right-[10px] top-[10px] h-[50px] w-[50px] opacity-50 lg:h-20 lg:w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
