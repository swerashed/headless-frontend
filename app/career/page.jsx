import componentMap from "@/components/index";
import { fetchCareerPage } from "@/graphql/pages/GET_CAREER_PAGE";

async function CareerPage() {
    const data = await fetchCareerPage();
    const blocks = data?.page?.blocks || [];
  return (
    <div>
    {blocks &&
      blocks.map((block, index) => {
        const Component = componentMap[block.name];
        if (!Component) {
          console.warn(`Component not found for block "${block.name}"`);
          return null;
        }
        const data = JSON.parse(block.attributesJSON)?.data;
        return <Component key={index} data={data} />;
      })}
  </div>
  );
}

export default CareerPage;
{/* <>

<OpenJobListSection
  sectionTitle="Current openings"
  sectionSubTitle="open positions across all offices and all departments"
  jobPosts={[
    {
      id: crypto.randomUUID(),
      title: "Pharmaceutical Sales Representative",
      location: "Dhaka",
      deadline: "20 Aug 2023",
      vacancy: "1",
    },
    {
      id: crypto.randomUUID(),
      title: "Pharmaceutical Sales Representative",
      location: "Dhaka",
      deadline: "20 Aug 2023",
      vacancy: "1",
    },
    {
      id: crypto.randomUUID(),
      title: "Pharmaceutical Sales Representative",
      location: "Dhaka",
      deadline: "20 Aug 2023",
      vacancy: "1",
    },
    {
      id: crypto.randomUUID(),
      title: "Pharmaceutical Sales Representative",
      location: "Dhaka",
      deadline: "20 Aug 2023",
      vacancy: "1",
    },
  ]}
/>
</> */}