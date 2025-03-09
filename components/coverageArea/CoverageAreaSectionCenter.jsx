import PrimaryButton from "../buttons/PrimaryButton";
import CoverageAreaHeaderCenter from "./CoverageAreaHeaderCenter";
import CoverageAreaTable from "./CoverageAreaTable";
import CoverageMapContainer from "./CoverageMapContainer";

export function CoverageAreaSectionCenter({data, outlets}) {
  const { title, description, cta_description, cta_url, page } = data
  return (
    <section className="overflow-hidden py-[50px] md:py-[100px]">
      <div className="container">
        <CoverageAreaHeaderCenter
          sectionHeading={title}
          sectionDetails={description}
        />
        <div className="mt-[30px] w-full sm:mt-[20px] md:mt-[100px] xl:mt-[60px]">
          <CoverageMapContainer imageData={data.image || null} page={page}/>
        </div>
        <CoverageAreaTable cta_description={cta_description}  cta_url={cta_url} outlets={outlets}/>
       
      </div>
    </section>
  );
}

export default CoverageAreaSectionCenter;
