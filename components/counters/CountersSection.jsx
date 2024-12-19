import { cn } from "@/lib/utils";
import CounterCard from "./CounterCard";
import SectionHeading from "../headings/SectionHeading";

function CountersSection({
  sectionTitle,
  counterDetails,
  className,
  SectionClassName,
}) {
  return (
    <section
      className={cn(
        "overflow-hidden pb-[50px] md:pb-[100px]",
        SectionClassName,
      )}
    >
      <div className="container">
        <SectionHeading className="mb-[30px] md:mb-10">
          {sectionTitle}
        </SectionHeading>
        <div className={cn("grid grid-cols-2 gap-[15px] md:gap-5", className)}>
          {counterDetails.map((counter) => (
            <CounterCard key={counter.id} counter={counter} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CountersSection;
