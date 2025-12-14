import {
  Search,
  Bell,
  MessageSquare,
  FileText,
  Calendar,
  Briefcase,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Logo from "@/public/images/Logo.jpg";
import ProfImg from "@/public/images/ProfImg.png";
import SearchIcon from "@/public/images/Icons/SearchIcon.svg";

const Header = () => {
  const navItems = [
    { label: "Find Jobs", active: true },
    { label: "Top Companies", active: false },
    { label: "Job Tracker", active: false },
    { label: "My Calendar", active: false },
    { label: "Documents", active: false },
    { label: "Messages", active: false },
    { label: "Notifications", active: false },
  ];

  return (
    <header className="container mx-auto px-3 py-[35px] h-14 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] rounded-lg flex items-center justify-center">
          <img alt="" src={Logo} style={{ width: "40px", height: "40px" }} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-1">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to="/"
            className={`font-sans px-3 py-2 text-[16px] ${
              item?.active
                ? "text-[var(--primaryBlue)]"
                : "text-[var(--primaryGray)]"
            } ${
              item?.active ? "font-bold" : "font-normal"
            } rounded-md transition-colors`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right section */}
      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <img
            alt=""
            src={SearchIcon}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
          />
          <Input
            type="text"
            placeholder="Search"
            className="font-sans placeholder:text-[16px] placeholder:font-normal font-normal text-[16px] pl-9 h-9 w-48 bg-muted border-0 focus-visible:ring-1"
          />
        </div>
        <Button className="font-sans h-9 px-4 text-[16px] font-normal bg-[var(--primaryBlue)]">
          Resume Builder
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-lg flex items-center justify-center">
            <img alt="" src={ProfImg} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
