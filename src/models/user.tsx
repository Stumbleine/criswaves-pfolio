import { ReactNode } from "react";

export interface User {
  name: string;
  nickname: string;
  headline: string;
  resumeUrl: string;
  logo: string;
  about: string;
  birthDate: string;
  joinedDate: string;
  status: statusType;
  languages: Language[];
  skills: string[];
  profilePicture: string;
  interests: string;
  location: Location;
  education: {
    university: University;
    certifications: Certification[];
  };
  projects: Project[];
  experiences: Experience[];
  links: Link[];
  contact: { name: string; data: string; icon: ReactNode }[];
}

interface Location {
  city: string;
  country: string;
}

interface Language {
  name: string;
  level: string;
}

type statusType = "Available" | "Not available";

interface University {
  name: string;
  dateJoined: string;
  dateFinished: string;
  degree: string;
  location: Location;
}

interface Certification {
  name: string;
  description: string;
  skills?: string;
  date: string;
  institution: string;
  credential?: string;
  url?: string;
}

interface Link {
  name: string;
  url: string;
  icon?: ReactNode;
}

interface Project {
  title: string;
  description: string;
  url?: string;
  repositoryUrl?: string;
  technologies?: string[];
  img?: string;
}

interface Experience {
  role: string;
  dateStarted: string;
  dateEnded?: string;
  description: string;
  technologies: string[];
  links?: Link[];
  company: Company;
  employmentType: employmentType;
}

interface Company {
  name: string;
  website?: string;
  industry?: string;
}

type employmentType = "freelance" | "full-time" | "part-time" | "internship";
