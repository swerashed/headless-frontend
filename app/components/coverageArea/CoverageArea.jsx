import CoverageFooter from "./CoverageFooter";
import CoverageHeader from "./CoverageHeader";
import CoverageMapContainer from "./CoverageMapContainer";

function CoverageArea() {
  return (
    <section
      className="overflow-hidden py-[50px] lg:py-[100px]"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 md:grid-rows-2 md:gap-x-20 lg:gap-x-[100px]">
          <CoverageHeader />
          <CoverageMapContainer />
          <CoverageFooter />
        </div>
      </div>
    </section>
  );
}

export default CoverageArea;
