import { fetchManagementPage } from "@/graphql/pages/GET_MANAGEMENT_PAGE";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const data = (await fetchManagementPage()) || {};
  const seo = data?.page?.seo || {};
  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}

const ManagementTeamPage = async () => {
  const data = await fetchManagementPage();
  return <RenderBlocksHelper data={data} />;
};

export default ManagementTeamPage;
