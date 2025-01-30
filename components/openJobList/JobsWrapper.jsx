"use client"
import { useState, useEffect } from "react"
import SectionHeading from "../headings/SectionHeading"
import JobCard from "./JobCard"
import JobFilterForm from "./JobFilterForm"

const JobsWrapper = ({ section_data }) => {
    const {
        sectionTitle,
        sectionSubTitle,
        jobPosts,
    } = section_data

    const [filteredJobs, setFilteredJobs] = useState(jobPosts)
    const [selectedDistrict, setSelectedDistrict] = useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("")

    // Extract unique districts from job posts
    const availableDistrict = [
        ...new Map(
          jobPosts
            ?.filter((job) => job.location?.label && job.location?.value) 
            .map((job) => [job.location.value, { value: job.location.value, label: job.location.label }]) 
        ).values(),
      ];
      
    // Extract unique departments from job posts
    const availableDepartment = [
        ...new Map(
          jobPosts
            ?.filter((job) => job.department?.label && job.department?.value)
            .map((job) => [job.department.value, { value: job.department.value, label: job.department.label }])
        ).values(),
      ];

    // Filter jobs based on selected filters
    useEffect(() => {
        let updatedJobs = jobPosts;

        if (selectedDistrict) {
            updatedJobs = updatedJobs.filter(job => job.location?.value === selectedDistrict);
        }

        if (selectedDepartment) {
            updatedJobs = updatedJobs.filter(job => job.department?.value === selectedDepartment);
        }

        setFilteredJobs(updatedJobs);
    }, [selectedDistrict, selectedDepartment, jobPosts]);

    const filterProps = {
        districts: availableDistrict,
        departments: availableDepartment,
        setSelectedDistrict,
        setSelectedDepartment,
    }

    return (
        <div>
            <div className="container">
                <div className="flex flex-col justify-between gap-5 md:gap-10 lg:gap-6 xl:flex-row xl:items-center xl:gap-10">
                    <div className="flex flex-col gap-[10px]">
                        <SectionHeading>{sectionTitle}</SectionHeading>
                        <p className="font-inter text-base font-normal leading-[26px] text-dark/80">
                            {filteredJobs.length} {sectionSubTitle}
                        </p>
                    </div>
                    <JobFilterForm filterProps={filterProps} />
                </div>
            </div>
            <div className="container">
                <div className="mt-10 grid w-full flex-col gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-1 lg:gap-5">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
                    ) : (
                        <p className="text-center text-gray-500">No jobs found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default JobsWrapper
