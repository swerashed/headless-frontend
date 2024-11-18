import React from "react";
import SectionHeading from "../headings/SectionHeading";
import PeopleCardSection from "../peopleCards/PeopleCardSection";

function ExperienceDoctorSection({ sectionTitle, peoples }) {
  return (
    <section className="py-[100px]">
      <div className="container">
        <div className="mb-10" data-aos="fade-right">
          <SectionHeading>{sectionTitle}</SectionHeading>
        </div>
      </div>
      <PeopleCardSection
        sectionClassName="my-0 md:my-0"
        className="grid-cols-2 gap-[15px] gap-y-[30px] sm:gap-y-[60px] md:grid-cols-3 md:gap-x-[30px] lg:grid-cols-4"
        peoples={peoples}
      />
    </section>
  );
}

export default ExperienceDoctorSection;
