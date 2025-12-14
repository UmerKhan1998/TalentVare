import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchHero from "@/components/SearchHero";
import JobSection from "@/components/JobSection";
import EmptyState from "@/components/EmptyState";
import jobsData from "@/data/jobs.json";
import { Job, FilterTag } from "@/types/job";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTag | null>(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("Select Location");
  const [searchJobType, setSearchJobType] = useState("Job Type");

  const allJobs: Job[] = jobsData.jobs as Job[];

  const handleSearch = (keyword: string, location: string, jobType: string) => {
    setSearchKeyword(keyword);
    setSearchLocation(location);
    setSearchJobType(jobType);
  };

  const filterJobs = (jobs: Job[], category: string): Job[] => {
    let categoryJobs = jobs.filter((job) => job.category === category);

    if (activeFilter) {
      categoryJobs = categoryJobs.filter((job) =>
        job.tags.includes(activeFilter)
      );
    }

    if (searchKeyword) {
      categoryJobs = categoryJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          job.company.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    if (searchLocation !== "Select Location") {
      categoryJobs = categoryJobs.filter((job) =>
        job.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (searchJobType !== "Job Type") {
      categoryJobs = categoryJobs.filter(
        (job) => job.jobType === searchJobType
      );
    }

    return categoryJobs;
  };

  const featuredJobs = useMemo(
    () => filterJobs(allJobs, "featured"),
    [allJobs, activeFilter, searchKeyword, searchLocation, searchJobType]
  );

  const recommendedJobs = useMemo(
    () => filterJobs(allJobs, "recommended"),
    [allJobs, activeFilter, searchKeyword, searchLocation, searchJobType]
  );

  const latestJobs = useMemo(
    () => filterJobs(allJobs, "latest"),
    [allJobs, activeFilter, searchKeyword, searchLocation, searchJobType]
  );

  return (
    <div className="min-h-screen bg-[var(--bgSurfaceGray)]">
      <div className="bg-card border-b border-border sticky top-0 z-50">
        <Header />
      </div>
      <div className="flex container mx-auto px-3">
        <Sidebar
          candidateTitle={"Albert Flores"}
          designation={
            "Senior Product Designer | UI/UX Designer | Graphic Designer | Web..."
          }
          location={"Clinton, Maryland, USA"}
        />
        <main className="flex-1 pl-6 pt-6 pb-6 overflow-auto">
          <SearchHero
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            onSearch={handleSearch}
          />
          <div className="w-full h-px bg-[#E9ECEF] my-4"></div>
          {filterJobs(allJobs, "latest").length > 0 ? (
            <>
              {featuredJobs.length > 0 && (
                <JobSection
                  title="Featured Jobs"
                  linkText="See Featured Jobs"
                  jobs={featuredJobs}
                />
              )}
              {featuredJobs.length > 0 && recommendedJobs.length > 0 && (
                <div className="w-full h-px bg-[#E9ECEF] my-4"></div>
              )}
              {recommendedJobs.length > 0 && (
                <JobSection
                  title="Recommended Jobs"
                  linkText="See Recommended Jobs"
                  jobs={recommendedJobs}
                />
              )}
              {recommendedJobs.length > 0 && latestJobs.length > 0 && (
                <div className="w-full h-px bg-[#E9ECEF] my-4"></div>
              )}
              {latestJobs.length > 0 && (
                <JobSection
                  title="Latest Jobs"
                  linkText="See Latest Jobs"
                  jobs={latestJobs}
                />
              )}
            </>
          ) : (
            <EmptyState />
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
