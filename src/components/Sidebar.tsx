import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ProfImg from "@/public/images/User.jpg";

const stats = [
  { label: "Profile Visitors", value: 140 },
  { label: "Resume Viewers", value: 20 },
  { label: "My Jobs", value: 88 },
];
interface SidebarProps {
  candidateTitle: string;
  designation: string;
  coverImg: string;
  location: string;
}

const Sidebar = ({
  candidateTitle,
  coverImg,
  designation,
  location,
}: SidebarProps) => {
  return (
    <aside className="mt-4 w-full lg:w-[350px] space-y-4">
      {/* ================= Profile Card ================= */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {/* Cover */}
        <div className="relative h-[98px]">
          <img
            src={coverImg}
            alt="Cover image"
            className="w-full h-full object-cover"
          />

          {/* Avatar */}
          <Avatar className="w-16 h-16 absolute -bottom-8 left-1/2 -translate-x-1/2 border-2 border-white">
            <AvatarImage src={ProfImg} alt={candidateTitle} />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>
        </div>

        {/* Profile Info */}
        <div className="pt-10 pb-4 px-4 text-center">
          <h3 className="font-sans text-[16px] sm:text-[18px] text-[var(--primaryHeadColor)] font-bold">
            {candidateTitle}
          </h3>

          <p className="font-sans text-[11px] sm:text-[12px] text-[var(--primaryHeadColor)] font-normal px-6 sm:px-[48px] mt-1 leading-relaxed">
            {designation}
          </p>

          <p className="font-sans text-[11px] sm:text-[12px] text-[var(--primaryGray)] font-thin mt-1">
            {location}
          </p>
        </div>
      </div>

      {/* ================= Stats Card ================= */}
      <div className="py-4 bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="flex items-center justify-between px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer"
          >
            <span className="font-sans text-[13px] sm:text-[14px] text-[var(--primaryHeadColor)] font-normal">
              {label}
            </span>
            <span className="font-sans text-[13px] sm:text-[14px] text-[var(--primaryBlue)] font-normal">
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* ================= Calendar Card ================= */}
      <div className="bg-white border border-gray-200 rounded-xl px-4 py-3">
        <button className="font-sans text-[14px] sm:text-[16px] text-[var(--primaryHeadColor)] font-bold flex items-center justify-between w-full">
          My calendar
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

        <p className="mt-1 font-sans text-[13px] sm:text-[14px] text-[var(--primaryGray)] font-normal">
          Upcoming Interviews
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
