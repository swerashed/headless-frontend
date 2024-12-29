function ContactUsHeading({ sectionTitle, sectionSubTitle }) {
  return (
    <div className="mb-10 mt-[30px] flex w-full flex-col md:mb-[70px]">
      <p
        data-aos="fade-up"
        className="text-left font-inter text-base font-normal leading-[26px] text-dark/80"
      >
        {sectionTitle}
      </p>
      <h1
        data-aos="fade-up"
        className="mb-[10px] text-left font-onest text-5xl font-medium capitalize leading-[58px] tracking-[-1.5%] text-dark"
      >
        {sectionSubTitle}
      </h1>
    </div>
  );
}

export default ContactUsHeading;
