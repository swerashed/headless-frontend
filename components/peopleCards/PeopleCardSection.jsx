import { cn } from "@/lib/utils";
import PeopleCard from "./PeopleCard";

function PeopleCardSection({ peoples, sectionClassName, className }) {
  return (
    <section
      className={cn("my-[50px] md:my-[100px] md:mb-[134px]", sectionClassName)}
    >
      <div className="container">
        <div
          className={cn(
            "grid w-full grid-cols-1 gap-[30px] sm:grid-cols-2 sm:gap-y-[94px]",
            className,
          )}
        >
          {peoples.map((people) => (
            <PeopleCard people={people} key={people.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PeopleCardSection;
