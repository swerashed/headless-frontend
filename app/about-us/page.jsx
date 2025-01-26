import { fetchAbout } from "@/graphql/pages/GET_ABOUT";
import componentMap from "@/components/index";

export default async function AboutUsPage() {
   const data = await fetchAbout();
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
