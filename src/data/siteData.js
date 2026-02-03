import { ICONS } from "./assets";

const navLinks = [
  { id: 1, page: "about", title: "about me", to: "/about", theme: "coral", icon: ICONS.user, description: "My journey & story", letter: "A" },
  { id: 2, page: "skills", title: "my skills", to: "/skills", theme: "sky", icon: ICONS.zap, description: "Tech & expertise", letter: "S" },
  { id: 3, page: "portfolio", title: "my portfolio", to: "/portfolio", theme: "emerald", icon: ICONS.briefcase, description: "Featured work", letter: "P" },
  { id: 4, page: "contact", title: "get in touch", to: "/contact", theme: "violet", icon: ICONS.mail, description: "Let's connect", letter: "C" },
];

export default navLinks;
