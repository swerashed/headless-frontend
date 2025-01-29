
import componentMap from "@/components/index";
import { fetchNewsPage } from "@/graphql/pages/GET_NEWS_PAGE";

const NewsPage = async () => {
  const data = await fetchNewsPage();
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
};

export default NewsPage;

