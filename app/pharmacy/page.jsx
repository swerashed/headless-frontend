import { fetchServicesPage } from "@/graphql/pages/GET_SERVICES_PAGE";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

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
    return (<RenderBlocksHelper data={data}/>);
 
}
