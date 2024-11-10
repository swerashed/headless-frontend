import CounterCard from "./CounterCard";

const CounterDetails = [
  {
    id: crypto.randomUUID(),
    count: "99%",
    details: "Clients satisfaction score",
    imageName: "client-happy",
    size: "single",
  },
  {
    id: crypto.randomUUID(),
    count: "12",
    details: "Number of pharmacy locations or areas served",
    imageName: "map-pointer",
    size: "single",
  },
  {
    id: crypto.randomUUID(),
    count: "10+",
    details: "Years in Operation",
    imageName: "building",
    size: "single",
  },
  {
    id: crypto.randomUUID(),
    count: "100+",
    details: "Types or number of specialty medications available",
    imageName: "medicine-available",
    size: "double",
  },
  {
    id: crypto.randomUUID(),
    count: "10+",
    details: "Number of health screenings or events held annually",
    imageName: "cells",
    size: "double",
  },
];

function CountersFiveSection() {
  return (
    <section className="my-10 overflow-hidden md:my-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-[15px] md:grid-cols-6 md:gap-5">
          {CounterDetails.map((counter) => (
            <CounterCard key={counter.id} counter={counter} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CountersFiveSection;
