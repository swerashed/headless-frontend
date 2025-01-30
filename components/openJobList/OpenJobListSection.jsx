import { fetchJobs } from "@/graphql/GET_JOBS";
import JobsWrapper from "./JobsWrapper";


async function OpenJobListSection({data}) {
  const jobsData = await fetchJobs()
  const jobPosts = jobsData?.jobs?.nodes || [];
    if (!jobPosts?.length) {
      return null
    }
  const {title, sub_title} = data
  const section_data = {
    sectionTitle: title,
    sectionSubTitle: sub_title,
    jobPosts: jobPosts,
  }


  return (
    <section className="py-[100px]">
      <JobsWrapper section_data={section_data}/>
    </section>
  );
}

export default OpenJobListSection;
