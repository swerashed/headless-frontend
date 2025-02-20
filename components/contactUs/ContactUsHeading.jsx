function ContactUsHeading({ sectionTitle, sectionSubTitle }) {
  return (
    <div className="mb-10 flex w-full flex-col gap-[10px]">
      <p
        data-aos="fade-up"
        className="text-left font-inter text-base font-normal uppercase leading-[26px] text-dark/80"
      >
        {sectionTitle}
      </p>
      <h1
        data-aos="fade-up"
        className="text-left font-onest text-3xl font-medium capitalize tracking-[-1.5%] text-dark sm:text-4xl md:text-5xl md:leading-[58px]"
      >
        {sectionSubTitle}
      </h1>
    </div>
  );
}

export default ContactUsHeading;
