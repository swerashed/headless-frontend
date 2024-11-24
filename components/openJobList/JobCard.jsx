import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";

function JobCard() {
  return (
    <div className="lg:p[30px] group relative flex min-h-[104px] cursor-pointer flex-col items-start justify-between overflow-hidden rounded-[20px] border border-dark/10 p-5 shadow-dark/10 transition-all duration-300 hover:shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <h4 className="mb-[30px] line-clamp-2 text-left font-onest text-2xl font-medium leading-[34px] text-dark md:text-xl lg:mb-0 lg:w-[60%] lg:text-2xl">
        Pharmaceutical Sales Representative
      </h4>
      <div className="flex w-full flex-col items-start justify-end lg:flex-row lg:items-center lg:gap-10">
        <div className="mb-[15px] flex flex-col gap-[10px] transition-all duration-500 lg:mb-0 lg:flex-row lg:items-center lg:gap-5 lg:group-hover:hidden">
          <div className="flex items-center gap-3">
            <Image
              src="/icons/job-location.svg"
              width={20}
              height={20}
              alt="Vacancy icon"
            />
            <p className="font-inter text-sm font-normal leading-[22px] text-dark/80">
              Dhaka
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/icons/job-calender.svg"
              width={20}
              height={20}
              alt="Vacancy icon"
            />

            <p className="font-inter text-sm font-normal leading-[22px] text-dark/80">
              Deadline: 20 Aug 2023
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/icons/job-vacancies.svg"
              width={20}
              height={20}
              alt="Vacancy icon"
            />
            <p className="font-inter text-sm font-normal leading-[22px] text-dark/80">
              Vacancies: 1
            </p>
          </div>
        </div>
        <PrimaryButton
          border="false"
          className="w-full bg-white py-[11px] pl-6 pr-[14px] transition-all duration-500 sm:mt-5 lg:absolute lg:right-[-100px] lg:mt-0 lg:w-auto lg:opacity-0 lg:group-hover:right-[30px] lg:group-hover:opacity-100"
        >
          View Details
        </PrimaryButton>
      </div>
    </div>
  );
}

export default JobCard;
