import Image from "next/image";
import SectionHeading from "../headings/SectionHeading";
import AtAGlanceCard from "./AtAGlanceCard";

const atAGlanceCardsDetails = [
  {
    id: crypto.randomUUID(),
    details: "Directly sourcing authentic medicines",
    iconName: "authentic-medicine",
  },
  {
    id: crypto.randomUUID(),
    details: "Temperature control ensures efficacy",
    iconName: "temp-controled",
  },
  {
    id: crypto.randomUUID(),
    details: "Convenient home delivery service",
    iconName: "home-delivery",
  },
  {
    id: crypto.randomUUID(),
    details: "General and specialized healthcare service",
    iconName: "health-care",
  },
  {
    id: crypto.randomUUID(),
    details: "Reliable and convenient home doctor service",
    iconName: "reliable-doctor",
  },
  {
    id: crypto.randomUUID(),
    details: "Special discount for AKS Pharmacy cardholders",
    iconName: "discount-offer",
  },
];

function AtAGlanceGridSection() {
  return (
    <section className="my-[50px] overflow-hidden lg:my-[100px]">
      <div className="container">
        <div data-aos="fade-right">
          <SectionHeading>At a glance</SectionHeading>
        </div>
        <div className="mt-[30px] grid grid-cols-2 gap-[15px] md:mt-10 md:gap-[30px] lg:grid-cols-3">
          {atAGlanceCardsDetails.map((card) => (
            <AtAGlanceCard card={card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AtAGlanceGridSection;
