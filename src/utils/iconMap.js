import {
  User,
  Zap,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Layers,
  BookOpen,
  GraduationCap,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export const iconMap = {
  User,
  Zap,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Layers,
  BookOpen,
  GraduationCap,
  Phone,
  MapPin,
  ExternalLink,
};

export const getIcon = (iconName) => {
  if (!iconName) return null;
  const IconComponent = iconMap[iconName];
  return IconComponent ? IconComponent : null;
};
