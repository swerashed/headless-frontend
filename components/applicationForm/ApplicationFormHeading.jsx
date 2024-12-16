function ApplicationFormHeading({ sectionTitle, sectionSubTitle }) {
  return (
    <div className="mb-10 mt-[30px] flex w-full flex-col md:mb-[70px]">
      <h1
        data-aos="fade-up"
        className="mb-[10px] text-center font-onest text-5xl font-medium capitalize leading-[58px] tracking-[-1.5%] text-dark"
      >
        {sectionTitle}
      </h1>
      <p
        data-aos="fade-up"
        className="text-center font-inter text-base font-normal leading-[26px] text-dark/80"
      >
        {sectionSubTitle}
      </p>
    </div>
  );
}

export default ApplicationFormHeading;
