import componentMap from "@/components/index";
import { fetchContacPage } from "@/graphql/pages/GET_CONTACT";

async function ContactUsPage() {
     const data = await fetchContacPage();
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

export default ContactUsPage;
