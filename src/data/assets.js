import {
  Briefcase,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  User,
  Zap,
} from "lucide-react";

// Central place for commonly reused assets (icons, images, etc.)
export const ICONS = {
  briefcase: Briefcase,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
  twitter: Twitter,
  user: User,
  zap: Zap,
};

export const SOCIAL_LINKS = [
  { id: "github", label: "GitHub", icon: ICONS.github, href: "#" },
  { id: "linkedin", label: "LinkedIn", icon: ICONS.linkedin, href: "#" },
  { id: "twitter", label: "Twitter", icon: ICONS.twitter, href: "#" },
];

