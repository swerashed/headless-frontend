import SectionHeading from "../headings/SectionHeading";

function CoverageAreaHeaderCenter({ sectionHeading, sectionDetails }) {
  return (
    <>
      <SectionHeading className="mb-5 text-center">
        {sectionHeading}
      </SectionHeading>
      <p className="mx-auto max-w-[844px] text-center font-inter text-base font-normal leading-[26px] text-dark/80">
        {sectionDetails}
      </p>
    </>
  );
}

export default CoverageAreaHeaderCenter;
