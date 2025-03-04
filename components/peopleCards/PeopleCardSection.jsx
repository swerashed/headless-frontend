import { cn } from "@/lib/utils";
import PeopleCard from "./PeopleCard";
import { fetchSelectedMembers } from "@/graphql/GET_MEMBERS";
import SectionHeading from "../headings/SectionHeading";

async function PeopleCardSection({ data }) {
  const {title, section_classnames, inner_section_classnames, members } = data
  const membersData = await fetchSelectedMembers();
  const allMembers = membersData?.members?.nodes || [];
  const membersArray = members?.map(item => item.id);
  
  // Sort finalMembersData based on membersArray order
  const finalMembersData = membersArray
    ?.map(id => allMembers?.find(member => member.databaseId === id))
    .filter(Boolean);

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
            className={`grid w-full grid-cols-1 gap-[30px] sm:grid-cols-2 sm:gap-y-[94px]  ${inner_section_classnames ||"md:grid-cols-4"}`}
          >
            {finalMembersData?.map((member, index) => (
              <PeopleCard member={member} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PeopleCardSection;
