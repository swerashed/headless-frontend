import { cn } from "@/lib/utils";
import PeopleCard from "./PeopleCard";

function PeopleCardSection({ peoples, className }) {
  return (
    <section className="my-[50px] md:my-[100px] md:mb-[130px]">
      <div className="container">
        <div
          className={cn(
            "grid grid-cols-1 gap-x-[30px] gap-y-12 sm:grid-cols-2",
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
