import PeopleCard from "./PeopleCard";

function PeopleCardSection({ peoples }) {
  return (
    <section className="my-[50px] md:my-[100px] md:mb-[130px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          {peoples.map((people) => (
            <PeopleCard people={people} key={people.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PeopleCardSection;
