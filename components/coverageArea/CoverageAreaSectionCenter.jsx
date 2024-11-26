import PrimaryButton from "../buttons/PrimaryButton";
import CoverageAreaHeaderCenter from "./CoverageAreaHeaderCenter";
import CoverageAreaTable from "./CoverageAreaTable";
import CoverageMapContainer from "./CoverageMapContainer";

function CoverageAreaSectionCenter({
  sectionHeading,
  sectionDetails,
  outlets,
}) {
  return (
    <section className="overflow-hidden py-[50px] md:py-[100px]">
      <div className="container">
        <CoverageAreaHeaderCenter
          sectionHeading={sectionHeading}
          sectionDetails={sectionDetails}
        />
        <div className="mt-[30px] w-full sm:mt-[20px] md:mt-[100px] xl:mt-[60px]">
          <CoverageMapContainer />
        </div>
        <CoverageAreaTable outlets={outlets} />
        <div
          className="mt-[30px] flex items-center justify-center md:mt-10"
          data-aos="fade-up"
        >
          <PrimaryButton border={true}>Load More</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default CoverageAreaSectionCenter;
