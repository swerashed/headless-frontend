import { cn } from "@/lib/utils";
import CounterCard from "./CounterCard";

function CountersSection({
  counterDetails,
  type,
  className,
  SectionClassName,
}) {
  return (
    <section
      className={cn(
        "overflow-hidden pb-[50px] pt-10 md:pb-[100px] md:pt-20",
        SectionClassName,
      )}
    >
      <div className="container">
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
