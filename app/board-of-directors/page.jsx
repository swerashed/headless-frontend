import { fetchBoardPage } from "@/graphql/pages/GET_BOARD_PAGE";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata({ params }) {
  const data = (await fetchBoardPage()) || {};
  const seo = data?.page?.seo || {};
  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}

const BoardOfDirectorsPage = async () => {
  const data = await fetchBoardPage()
  return (<RenderBlocksHelper data={data}/>);
};

export default BoardOfDirectorsPage;
