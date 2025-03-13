import { fetchImpactsPage } from "@/graphql/pages/GET_IMPACTS_PAGE";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const data = (await fetchImpactsPage()) || {};
  const seo = data?.page?.seo || {};
  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}

async function ImpactPage() {
  const data = await fetchImpactsPage();
  return <RenderBlocksHelper data={data} />;
}

export default ImpactPage;
