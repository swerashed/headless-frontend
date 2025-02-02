import ApplicationFormSection from "@/components/applicationForm/ApplicationFormSection";
import { getJob } from "@/graphql/GET_JOB";

async function ApplyNowPage({params}) {
      const urlSlug = (await params).slug;
      const jobs = await getJob(urlSlug)
      const jobTitle = jobs.job.title
      const content = jobs.job.content
      const date = jobs.job.deadline
      const vacancies = jobs.job.vacancies

      const data = {
        title: jobTitle,
        content,
        date,
        vacancies
      }
  return (
    <ApplicationFormSection
    data={data}
      sectionTitle="Application Form"
      sectionSubTitle="We're glad you're here. Fill out this form and one of our client representatives will get back to you"
    />
  );
}

export default ApplyNowPage;
