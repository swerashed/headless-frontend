import { fetchAbout } from "@/graphql/pages/GET_ABOUT";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";


export async function generateMetadata({ params }) {
  const data = (await fetchAbout()) || {};
  const seo = data?.page?.seo || {};
  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}


export default async function AboutUsPage() {
   const data = await fetchAbout();

  return (<RenderBlocksHelper data={data}/>);
}
