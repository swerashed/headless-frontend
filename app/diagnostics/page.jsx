import { fetchDiagnosticsPage } from "@/graphql/pages/GET_DIAGNOSTICS_PAGE";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata({ params }) {
  const data = (await fetchDiagnosticsPage()) || {};
  const seo = data?.page?.seo || {};
  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}


async function DiagnosticsPage() {
   const data = await fetchDiagnosticsPage();
  return (
    <div>
   <RenderBlocksHelper data={data} />
  </div>
  );
}

export default DiagnosticsPage;