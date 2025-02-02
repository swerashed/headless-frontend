import componentMap from "@/components/index";
import { fetchServicesPage } from "@/graphql/pages/GET_SERVICES_PAGE";

export async function generateMetadata({ params }) {
  const data = (await fetchServicesPage()) || {};
  const seo = data?.page?.seo || {};
  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}

export default async function ServicesPage() {
   const data = await fetchServicesPage()
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
