export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  postedTime: string;
  applicants: number;
  isPromoted: boolean;
  category: "featured" | "recommended" | "latest";
  tags: string[];
  jobType: string;
  workMode: "Remote" | "Hybrid" | "Onsite";
}

export type FilterTag = "Frontend" | "Backend" | "Graphic Designer";
