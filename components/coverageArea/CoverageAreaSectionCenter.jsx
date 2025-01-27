import PrimaryButton from "../buttons/PrimaryButton";
import CoverageAreaHeaderCenter from "./CoverageAreaHeaderCenter";
import CoverageAreaTable from "./CoverageAreaTable";
import CoverageMapContainer from "./CoverageMapContainer";

export function CoverageAreaSectionCenter({title, description, cta_description, cta_url, page, outlets}) {
  console.log(title, description);
  return (
    <section className="overflow-hidden py-[50px] md:py-[100px]">
      <div className="container">
        <CoverageAreaHeaderCenter
          sectionHeading={title}
          sectionDetails={description}
        />
        <div className="mt-[30px] w-full sm:mt-[20px] md:mt-[100px] xl:mt-[60px]">
          <CoverageMapContainer page={page}/>
        </div>
        <CoverageAreaTable outlets={outlets}/>
        <div
          className="mt-[30px] flex items-center justify-center md:mt-10"
          data-aos="fade-up"
        >
          <PrimaryButton href={cta_url} border={true}>{cta_description}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default CoverageAreaSectionCenter;
