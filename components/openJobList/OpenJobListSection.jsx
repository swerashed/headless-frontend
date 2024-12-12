import SectionHeading from "../headings/SectionHeading";
import JobCard from "./JobCard";
import JobFilterForm from "./JobFilterForm";

function OpenJobListSection({ sectionTitle, sectionSubTitle, jobPosts }) {
  return (
    <section className="py-[100px]">
      <div className="container">
        <div className="flex flex-col justify-between gap-5 md:gap-10 lg:gap-6 xl:flex-row xl:items-center xl:gap-10">
          <div className="flex flex-col gap-[10px]">
            <SectionHeading>{sectionTitle}</SectionHeading>
            <p className="font-inter text-base font-normal leading-[26px] text-dark/80">
              {jobPosts.length} {sectionSubTitle}
            </p>
          </div>
          <JobFilterForm />
        </div>
      </div>
      <div className="container">
        <div className="mt-10 grid w-full flex-col gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-1 lg:gap-5">
          {jobPosts.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpenJobListSection;
