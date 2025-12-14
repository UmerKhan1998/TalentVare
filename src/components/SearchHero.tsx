import { Search, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import SearchIcon from "@/public/images/Icons/SearchIconWhite.svg";
import { FilterTag } from "@/types/job";

interface SearchHeroProps {
  activeFilter: FilterTag | null;
  onFilterChange: (filter: FilterTag | null) => void;
  onSearch: (keyword: string, location: string, jobType: string) => void;
}

const SearchHero = ({
  activeFilter,
  onFilterChange,
  onSearch,
}: SearchHeroProps) => {
  const filterTags: FilterTag[] = ["Frontend", "Backend", "Graphic Designer"];

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("Select Location");
  const [jobType, setJobType] = useState("Job Type");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showJobTypeDropdown, setShowJobTypeDropdown] = useState(false);

  const locations = ["New York", "San Francisco", "London", "Berlin"];
  const jobTypes = ["Full-time", "Part-time", "Internship", "Contract"];

  const handleFilterClick = (tag: FilterTag) => {
    if (activeFilter === tag) {
      onFilterChange(null);
    } else {
      onFilterChange(tag);
    }
  };

  const handleSearch = () => {
    onSearch(keyword, location, jobType);
  };

  return (
    <div className="mb-6">
      {/* Hero Title */}
      <div className="mb-4">
        <h1 className="font-sans text-[18px] sm:text-[22px] text-[var(--primaryHeadColor)] font-bold mb-0">
          Find your Dream Job,{" "}
          <span className="text-[var(--primaryBlue)]">Albert!</span>
        </h1>
        <p className="font-sans text-[12px] sm:text-[14px] text-[var(--primaryTextGray)]">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>
      </div>
      <div className="bg-card border border-border rounded-lg p-3 mb-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Job Title Input */}
          <div className="flex-1">
            <div className="relative">
              <Input
                type="text"
                placeholder="Job Title, Company or Keywords"
                className="font-sans placeholder:text-[12px] sm:placeholder:text-[14px] placeholder:font-normal h-10 text-[12px] sm:text-[14px] border-border"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          </div>

          {/* Location Select */}
          <div className="w-full md:w-44 relative">
            <button
              onClick={() => {
                setShowLocationDropdown(!showLocationDropdown);
                setShowJobTypeDropdown(false);
              }}
              className="w-full h-10 px-3 flex items-center justify-between text-sm text-muted-foreground bg-muted border border-border rounded-md hover:bg-surface-hover transition-colors"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="font-sans text-[12px] sm:text-[14px] font-normal">
                  {location}
                </span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </button>
            {showLocationDropdown && (
              <ul className="absolute z-10 mt-1 w-full bg-card border border-border rounded-md shadow-lg">
                {locations.map((loc) => (
                  <li
                    key={loc}
                    className="px-3 py-2 hover:bg-muted cursor-pointer text-[12px] sm:text-sm"
                    onClick={() => {
                      setLocation(loc);
                      setShowLocationDropdown(false);
                    }}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Job Type Select */}
          <div className="w-full md:w-36 relative">
            <button
              onClick={() => {
                setShowJobTypeDropdown(!showJobTypeDropdown);
                setShowLocationDropdown(false);
              }}
              className="w-full h-10 px-3 flex items-center justify-between text-sm text-muted-foreground bg-muted border border-border rounded-md hover:bg-surface-hover transition-colors"
            >
              <span className="font-sans text-[12px] sm:text-[14px] font-normal">
                {jobType}
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {showJobTypeDropdown && (
              <ul className="absolute z-10 mt-1 w-full bg-card border border-border rounded-md shadow-lg">
                {jobTypes.map((type) => (
                  <li
                    key={type}
                    className="px-3 py-2 hover:bg-muted cursor-pointer text-[12px] sm:text-sm"
                    onClick={() => {
                      setJobType(type);
                      setShowJobTypeDropdown(false);
                    }}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Button */}
          <Button
            onClick={handleSearch}
            className="h-10 px-6 sm:px-10 bg-[var(--primaryBlue)] text-[12px] sm:text-[14px] font-sans flex items-center gap-2"
          >
            <img src={SearchIcon} alt="search" className="text-[#fff]" />
            <span>Search</span>
          </Button>
        </div>
      </div>{" "}
      {/* Filter Tags */}
      <div className="flex align-baseline flex-wrap gap-2 pt-[15px]">
        <p className="font-sans text-[12px] sm:text-[14px] font-normal text-[var(--primaryGray)] flex items-center">
          Similar:
        </p>
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleFilterClick(tag)}
            className={`font-sans px-3 py-1.5 text-[11px] sm:text-xs font-[16px] rounded-[5px] transition-colors ${
              activeFilter === tag
                ? "bg-[var(--primaryBlue)] text-white border border-[var(--primaryBlue)]"
                : "text-muted-foreground bg-transparent border border-[var(--primaryGray)] hover:bg-surface-hover hover:text-[var(--primaryGray)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHero;
