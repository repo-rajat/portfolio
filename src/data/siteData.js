import { User, Zap, Briefcase, Mail } from "lucide-react";

const navLinks = [
  { id: 1, page: "about", title: "about me", to: "/about", theme: "coral", icon: User, description: "My journey & story", letter: "A" },
  { id: 2, page: "skills", title: "my skills", to: "/skills", theme: "sky", icon: Zap, description: "Tech & expertise", letter: "S" },
  { id: 3, page: "portfolio", title: "my portfolio", to: "/portfolio", theme: "emerald", icon: Briefcase, description: "Featured work", letter: "P" },
  { id: 4, page: "contact", title: "get in touch", to: "/contact", theme: "violet", icon: Mail, description: "Let's connect", letter: "C" },
];

export default navLinks;
