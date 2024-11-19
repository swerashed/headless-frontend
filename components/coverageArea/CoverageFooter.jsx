import PrimaryButton from "../buttons/PrimaryButton";

function CoverageFooter() {
  return (
    <div
      className="md:col-span-1 md:row-span-1 md:mb-[30px] md:self-end md:justify-self-start lg:mb-[100px]"
      data-aos="fade-up"
    >
      <p className="mb-[30px] max-w-sm font-inter text-base font-normal leading-[26px] text-dark sm:mx-auto sm:text-center md:max-w-max md:text-left">
        We are here to help. Please reach out if you have any questions.
      </p>
      <div className="flex items-center sm:justify-center md:justify-start">
        <PrimaryButton border={true}>Get in touch</PrimaryButton>
      </div>
    </div>
  );
}

export default CoverageFooter;
