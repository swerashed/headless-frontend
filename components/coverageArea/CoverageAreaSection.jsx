import { fetchOutlets } from "@/graphql/GET_OUTLETS";
import CoverageAreaSectionCenter from "./CoverageAreaSectionCenter";
import CoverageFooter from "./CoverageFooter";
import CoverageHeader from "./CoverageHeader";
import CoverageMapContainer from "./CoverageMapContainer";

async function CoverageAreaSection({ data }) {
  const { title, description, districts, cta_description, cta_url, page, image} = data;

  const pharmacyData = await fetchOutlets("pharmacy")
  const pharmacyOutlets = pharmacyData?.outlets?.edges || [];

  const diagnosticsData = await fetchOutlets("diagnostics")
  const diagnosticsOutlets = pharmacyData?.outlets?.edges || [];

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
            <CoverageMapContainer image={image} page={page} districts={districts} />
            <CoverageFooter cta_description={cta_description} cta_url={cta_url} />
          </div>
        </div>
      </section>
    );
  }

  if (page === "service") {
    return <CoverageAreaSectionCenter data={data} outlets={pharmacyOutlets} />
  }
  if(page === "diagnostics"){
    return <CoverageAreaSectionCenter data={data} outlets={diagnosticsOutlets} />
  }

}

export default CoverageAreaSection;
