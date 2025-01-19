
import componentMap from "@/components/index";
import { fetchHome } from "@/graphql/pages/GET_HOME";
export default async function HomePage() {
  const data = await fetchHome();
  const blocks = data?.page?.blocks || [];
  console.log(blocks)
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
