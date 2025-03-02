import { cn } from "@/lib/utils";
import CounterCard from "./CounterCard";
import SectionHeading from "../headings/SectionHeading";
// five-card-style
// four-card-style
function CountersSection({ data }) {
  const { statistics_items, section_classnames, title, inner_classnames } = data

  const FiveCardsSection = () => {
    return (<div className="grid grid-cols-2 gap-[15px] md:gap-5 counter-of-5 md:grid-cols-6">
      {statistics_items?.map((statistics, index) => (
        <CounterCard key={index} data={statistics} />
      ))}
    </div>)
  }
  const FourCardsSection = () => {
    return (<div className="grid grid-cols-2 gap-[15px] md:gap-5 lg:grid-cols-4 lg:gap-5">
      {statistics_items?.map((statistics, index) => (
        <CounterCard key={index} data={statistics} />
      ))}
    </div>)
  }
  const DefaultCardsSection = () => {
    return (<div className={`grid grid-cols-2 gap-[15px] md:gap-5`}>
      {statistics_items?.map((statistics, index) => (
        <CounterCard key={index} data={statistics} />
      ))}
    </div>)
  }
  return (
    <section
      className={cn(
        "overflow-hidden pb-[50px] md:pb-[100px]",
        section_classnames,
      )}
    >
      <div className="container">
        <SectionHeading className="mb-[30px] md:mb-10">
          {title}
        </SectionHeading>
        {
          inner_classnames === "five-card-style" && <FiveCardsSection />
        }
        {
          inner_classnames === "four-card-style" && <FourCardsSection />
        }
        {
          !inner_classnames && <DefaultCardsSection />
        }
      </div>
    </section>
  );
}

export default CountersSection;
