import { cn } from "@/lib/utils";
import CounterCard from "./CounterCard";
import SectionHeading from "../headings/SectionHeading";

function CountersSection({ data }) {
  const { statistics_items, section_classnames, sectionTitle, inner_classnames } = data
  return (
    <section
      className={cn(
        "overflow-hidden pb-[50px] md:pb-[100px]",
        section_classnames || "",
      )}
    >
      <div className="container">
        <SectionHeading className="mb-[30px] md:mb-10">
          {sectionTitle || ""}
        </SectionHeading>
        <div className={cn("grid grid-cols-2 gap-[15px] md:gap-5", inner_classnames || "")}>
          {statistics_items?.map((statistics, index) => (
            <CounterCard key={index} data={statistics} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CountersSection;
