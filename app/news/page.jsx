
import { fetchNewsPage } from "@/graphql/pages/GET_NEWS_PAGE";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const data = (await fetchNewsPage()) || {};
  const seo = data?.page?.seo || {};
  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}

const NewsPage = async () => {
  const data = await fetchNewsPage();
  return <RenderBlocksHelper data={data}/>;
};

export default NewsPage;

