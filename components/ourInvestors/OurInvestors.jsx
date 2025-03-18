import SectionHeading from "../headings/SectionHeading";
import OurInvestorCard from "./OurInvestorCard";

function OurInvestors({ data }) {
  const { investors_items, title } = data;

  return (
    <section className="overflow-hidden bg-surface py-[50px] md:py-[100px]">
       <div data-aos="fade-up" className="container">
        <SectionHeading className="text-center">{title}</SectionHeading>
      </div>
      <div
        className="container mt-[30px] flex gap-5 w-full justify-center"
        data-aos="fade-up"
      >
        {investors_items.map((investor) => (
          <OurInvestorCard key={investor._id} card={investor} />
        ))}
      </div>
    </section>
  );
}

export default OurInvestors;
