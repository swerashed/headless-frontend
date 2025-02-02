import JobDetailsBanner from "@/components/heroBanners/JobDetailsBanner"
import RichTextContainer from "@/components/shared/RichTextContainer"
import { getJob } from "@/graphql/GET_JOB";

const JobDetailsPage = async ({ params }) => {
    const urlSlug = (await params).slug;
    const jobs = await getJob(urlSlug)
    const jobTitle = jobs.job.title
    const content = jobs.job.content
    const date = jobs.job.deadline
    const department = jobs.job.department.label
    const vacancies = jobs.job.vacancies
    const location = jobs.job.location.label

    const dateObject = new Date(date);
// Format the date
const options = { year: "numeric", month: "long", day: "numeric" };
const deadline = new Intl.DateTimeFormat("en-US", options).format(dateObject);
    const data = {
        jobTitle, deadline, department, vacancies, location
    }
    return (
        <div>
            <JobDetailsBanner data={data} />
            <RichTextContainer page="career" content={content} />
        </div>
    )
}

export default JobDetailsPage