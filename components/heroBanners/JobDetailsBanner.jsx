import Image from "next/image";
import BackButton from "../buttons/BackButton";
import PrimaryButton from "../buttons/PrimaryButton";

const JobDetailsBanner = ({ data }) => {
  return (
    <div
      className="pb-20 pt-[110px]"
      style={{
        background:
          "linear-gradient(46.58deg, rgba(54, 241, 185, 0.2) 0.3%, rgba(52, 132, 164, 0.2) 94.6%)",
      }}
    >
      <div className="container mb-[34px]">
        <BackButton />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1
          data-aos="fade-up"
          className="mb-5 text-center font-onest text-3xl font-medium text-dark md:text-[40px] md:leading-[50px] xl:mb-[5px]"
        >
          {data?.jobTitle}
        </h1>
        <div
          data-aos="fade-up"
          className="container mb-[30px] flex flex-row flex-wrap items-center justify-center gap-5"
        >
          <div className="flex flex-row items-center justify-center gap-3">
            <Image
              src="/icons/job-location.svg"
              width={20}
              height={20}
              alt="Vacancy icon"
              className="h-5 w-5 object-contain"
            />
            <p className="font-inter text-sm font-normal leading-[22px]">
              {data?.location}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <Image
              src="/icons/department.svg"
              width={20}
              height={20}
              alt="department icon"
              className="h-5 w-5 object-contain"
            />
            <p className="font-inter text-sm font-normal leading-[22px]">
              {data?.department}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <Image
              src="/icons/job-calender.svg"
              width={20}
              height={20}
              alt="Vacancy icon"
              className="h-5 w-5 object-contain"
            />

            <p className="font-inter text-sm font-normal leading-[22px]">
              Deadline: {data?.deadline}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <Image
              src="/icons/job-vacancies.svg"
              width={20}
              height={20}
              alt="Vacancy icon"
              className="h-5 w-5 object-contain"
            />
            <p className="font-inter text-sm font-normal leading-[22px]">
              Vacancies: {data?.vacancies}
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <PrimaryButton
            href={`/apply-now/${data?.slug}`}
            className="bg-blue fill-white stroke-white text-white"
            border={true}
          >
            Apply Now
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsBanner;
