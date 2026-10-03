export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  education: EducationProps[];
  about: AboutProps;
  projects: ProjectProps[];
  skills: SkillGroupProps[];
  certifications: CertificationGroupProps[];
  contact: ContactProps;
}

export interface HeroProps {
  name: string;
  roles: string[];
  summary: string;
  email: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image?: string;
  status?: string;
  tags: string[];
  links: { text: string; href: string }[];
}

export interface SkillGroupProps {
  title: string;
  items: string[];
}

export interface CertificationProps {
  name: string;
  issuer: string;
  year: string;
  logo: string;
  href: string;
}

export interface CertificationGroupProps {
  title: string;
  items: CertificationProps[];
}

export interface ContactProps {
  email: string;
  formAction: string;
}

export interface HeaderProps {
  navLinks: { text: string; href: string }[];
}

export interface ExperienceProps {
  company: string;
  role: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  summary: string[];
  tech?: string[];
}

export interface EducationProps {
  school: string;
  degree: string;
  location: string;
  period: string;
  detail?: string;
}

export interface AboutProps {
  description: string[];
}
