import SectionHeading from "../headings/SectionHeading";
import SideBySideWithoutButton from "../sideBySide/SideBySideWithoutButton";

function CustomerCareAboutSection() {
  return (
    <section className="overflow-hidden bg-surface py-[50px]">
      <div className="container">
        <div
          className="mb-10 flex flex-col items-center justify-center gap-5 text-center"
          data-aos="fade-up"
        >
          <SectionHeading>We care about our customers</SectionHeading>
          <p className="max-w-[872px] font-inter text-base font-normal leading-[26px] text-dark/80">
            Our mission is to revolutionize health care by leveraging
            innovation, technology, and patient-centered solutions, ensuring
            accessible, high-quality care for all while promoting wellness
          </p>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col gap-10">
          <SideBySideWithoutButton
            heading="Personalized care"
            details="Tailored medication management and expert guidance to fit your unique health needs"
            bannerImage="/section-banners/about-us/akpl-banner.png"
            reverse={true}
          />
          <SideBySideWithoutButton
            heading="Convenience and accessibility"
            details="Fast, easy prescription refills and free home delivery, ensuring your medications are always within reach."
            bannerImage="/section-banners/about-us/akpl-banner.png"
            reverse={false}
          />
          <SideBySideWithoutButton
            heading="Trusted expertise"
            details="Experienced pharmacists providing professional, reliable advice to help you make informed health decisions."
            bannerImage="/section-banners/about-us/akpl-banner.png"
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}

export default CustomerCareAboutSection;
