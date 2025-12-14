import JobCard from "./JobCard";
import { Job } from "@/types/job";

interface JobSectionProps {
  title: string;
  linkText: string;
  jobs: Job[];
}

const JobSection = ({ title, linkText, jobs }: JobSectionProps) => {
  return (
    <section className="mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start mb-4 gap-2">
        <h2 className="font-sans text-[16px] sm:text-[18px] font-light text-[var(--primaryHeadColor)]">
          {title}
        </h2>
        <button className="sm:pl-4 font-sans text-[14px] sm:text-[18px] font-light text-[var(--primaryBlue)] underline">
          {linkText}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            postedTime={job.postedTime}
            applicants={job.applicants}
            isPromoted={job.isPromoted}
            workMode={job.workMode}
          />
        ))}
      </div>
    </section>
  );
};

export default JobSection;
