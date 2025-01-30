import { cn } from "@/lib/utils";
import PeopleCard from "./PeopleCard";
import { fetchSelectedMembers } from "@/graphql/GET_MEMBERS";
import SectionHeading from "../headings/SectionHeading";

async function PeopleCardSection({ data }) {
  const {title, section_classnames, inner_section_classnames, memebers_type } = data
  const membersData = await fetchSelectedMembers();
  const members = membersData?.members?.nodes || [];

  const boardMembers = members.filter((member) =>
    member.categories.edges.some((edge) => edge.node.slug === memebers_type)
  );
  return (
    <div>

      <section
        className={cn("my-[50px] md:my-[100px] md:mb-[134px]", section_classnames)}
      >
        <div className="container">
          {title && (<div className="mb-10" data-aos="fade-right">
            <SectionHeading>{title}</SectionHeading>
          </div>)}
          <div
            className={cn(
              "grid w-full grid-cols-1 gap-[30px] sm:grid-cols-2 sm:gap-y-[94px]",
              inner_section_classnames,
            )}
          >
            {boardMembers.map((member, index) => (
              <PeopleCard member={member} key={index} />
            ))}
          </div>
        </div>
      </section>



    </div>
  );
}

export default PeopleCardSection;
