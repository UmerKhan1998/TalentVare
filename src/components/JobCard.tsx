import { MapPin, Clock, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import MsTeams from "@/public/images/msTeams.svg";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  postedTime: string;
  applicants: number;
  isPromoted?: boolean;
  workMode: "Remote" | "Hybrid" | "Onsite";
}

const JobCard = ({
  title,
  company,
  location,
  postedTime,
  applicants,
  isPromoted = false,
  workMode,
}: JobCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      {/* Promoted */}
      {isPromoted && (
        <span className="font-sans text-[10px] font-bold text-[var(--primaryHeadColor)] block mb-2">
          Promoted
        </span>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3">
          {/* Company Logo */}
          {/* <div className="w-12 h-12 bg-[#635BFF] rounded-lg flex items-center justify-center text-white font-semibold">
            T
          </div> */}
          <img alt="" src={MsTeams} />

          {/* Job Info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-sans text-[14px] font-normal text-[var(--primaryHeadColor)]">
              {title?.length > 15 ? title.slice(0, 10) + "..." : title}
              {/* {title} */}
            </h3>
            <p className="font-sans text-[12px] font-normal text-[var(--primaryHeadColor)]">
              Teams
            </p>
          </div>
        </div>
      </div>

      {/* Meta */}

      {/* Location */}
      <div className="font-sans text-[12px] font-normal text-[var(--primaryHeadColor)] flex items-center gap-2 mt-3">
        <MapPin className="w-4 h-4" />
        <span className="font-sans font-medium text-[12px] text-[var(--primaryTextGray)]">
          {location} ({workMode})
        </span>
      </div>

      <div className="font-sans text-[12px] font-normal text-[var(--primaryHeadColor)] flex items-center gap-2 mt-1">
        <Clock className="w-4 h-4" />
        <span className="font-sans font-medium text-[10px] text-[var(--primaryTextGray)]">
          {postedTime}
        </span>
        <span>|</span>
        <span className="font-sans font-medium text-[10px] text-[var(--primaryBlue)]">
          {applicants} applicants
        </span>
      </div>

      <div className="flex justify-between items-center mt-4 gap-2">
        {/* Apply Button */}
        {/* <Button className="font-sans w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"> */}
        <Button className="font-sans h-9 px-8 text-[12px] font-thin bg-[var(--primaryBlue)]">
          Apply Now
        </Button>

        {/* Bookmark */}
        <Bookmark className="w-7 h-9 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>
    </div>
  );
};

export default JobCard;
