import { fetchOutltes } from "@/graphql/GET_OUTLETS";
import CoverageAreaSectionCenter from "./CoverageAreaSectionCenter";
import CoverageFooter from "./CoverageFooter";
import CoverageHeader from "./CoverageHeader";
import CoverageMapContainer from "./CoverageMapContainer";

async function CoverageAreaSection({ data }) {
  const { title, description, districts, cta_description, cta_url, page } = data;
  const allOutlets = await fetchOutltes()
  const outlets = allOutlets?.outlets?.edges || [];

  if (!page) {
    return null;
  }

  if (page === "homepage") {
    return (
      <section
        className="overflow-hidden py-[50px] lg:py-[100px]"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="grid grid-cols-1 justify-center md:grid-cols-2 md:grid-rows-2 md:gap-x-20 lg:gap-x-[100px]">
            <CoverageHeader title={title} description={description} />
            <CoverageMapContainer page={page} districts={districts} />
            <CoverageFooter cta_description={cta_description} cta_url={cta_url} />
          </div>
        </div>
      </section>
    );
  }

  if (page === "service" || page === "diagnostics") {
    return <CoverageAreaSectionCenter data={data} outlets={outlets} />
  }

}

export default CoverageAreaSection;
