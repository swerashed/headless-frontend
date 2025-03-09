import { fetchContacPage } from "@/graphql/pages/GET_CONTACT";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata({ params }) {
  const data = (await fetchContacPage()) || {};
  const seo = data?.page?.seo || {};
  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}

async function ContactUsPage() {
  const data = await fetchContacPage();
  return (<RenderBlocksHelper data={data}/>);
}

export default ContactUsPage;
