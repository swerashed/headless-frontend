import { cn } from "@/lib/utils";
import CounterCard from "./CounterCard";

function CountersSection({ counterDetails, type, className }) {
  return (
    <section className="my-10 overflow-hidden md:my-20">
      <div className="container">
        <div
          className={cn(
            "grid grid-cols-2 gap-[15px] md:gap-5",
            className,
            type,
          )}
        >
          {counterDetails.map((counter) => (
            <CounterCard key={counter.id} counter={counter} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CountersSection;
