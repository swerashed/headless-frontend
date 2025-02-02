import Image from "next/image"
import BackButton from "../buttons/BackButton"
import PrimaryButton from "../buttons/PrimaryButton"

const JobDetailsBanner = ({data}) => {


    return (
        <div className="min-h-[400px] " style={{ background: "linear-gradient(46.58deg, rgba(54, 241, 185, 0.2) 0.3%, rgba(52, 132, 164, 0.2) 94.6%)" }}>
           
           <div className="container pt-[110px]">
           <BackButton />
           </div>

            <div className="container flex flex-col justify-center items-center h-full">
                <h1
                    data-aos="fade-up"
                    className="mb-[10px] text-center font-onest text-5xl font-medium capitalize leading-[58px] tracking-[-1.5%] text-dark"
                >
                    {data?.jobTitle}
                </h1>
                <div data-aos="fade-up" className="flex w-full flex-col items-start justify-end lg:flex-row lg:items-center lg:gap-10">
                    <div className="w-full flex justify-center gap-5">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/icons/job-location.svg"
                                width={20}
                                height={20}
                                alt="Vacancy icon"
                            />
                            <p className="font-inter text-sm font-normal leading-[22px] text-dark/80">
                                {data?.location}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image
                                src="/icons/department.svg"
                                width={20}
                                height={20}
                                alt="department icon"
                            />
                            <p className="font-inter text-sm font-normal leading-[22px] text-dark/80">
                                {data?.department}
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
                                Deadline: {data?.deadline}
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
                                Vacancies: {data?.vacancies}
                            </p>
                        </div>
                    </div>

                </div>

                <div data-aos="fade-up">
                    <PrimaryButton href={`/apply-now/${data?.slug}`}  className="bg-blue text-white mt-[30px] fill-white stroke-white" border={true}>
                        Apply Now
                    </PrimaryButton>
                </div>
            </div>
        </div>

    )
}

export default JobDetailsBanner