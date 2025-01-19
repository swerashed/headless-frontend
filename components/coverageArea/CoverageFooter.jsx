import PrimaryButton from "../buttons/PrimaryButton";

function CoverageFooter({cta_description, cta_url}) {
  return (
    <div
      className="md:col-span-1 md:row-span-1 md:mb-[30px] md:self-end md:justify-self-start lg:mb-[100px]"
      data-aos="fade-up"
    >
      <p className="mb-[30px] max-w-sm font-inter text-base font-normal leading-[26px] text-dark sm:mx-auto sm:text-center md:max-w-max md:text-left">
     {cta_description}
      </p>
      <div className="flex items-center sm:justify-center md:justify-start">
        <PrimaryButton href={cta_url} border={true}>Get in touch</PrimaryButton>
      </div>
    </div>
  );
}

export default CoverageFooter;
