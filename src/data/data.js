import {
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle,
  Download,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  User,
  Wrench,
  Zap,
} from "lucide-react";

const pages = {
  about: {
    id: 1,
    page: "about",
    title: "about me",
    to: "/about",
    theme: "coral",
    icon: User,
    description: "My journey & story",
    letter: "A",
  },
  skills: {
    id: 2,
    page: "skills",
    title: "my skills",
    to: "/skills",
    theme: "sky",
    icon: Zap,
    description: "Tech & expertise",
    letter: "S",
  },
  portfolio: {
    id: 3,
    page: "portfolio",
    title: "my portfolio",
    to: "/portfolio",
    theme: "emerald",
    icon: Briefcase,
    description: "Featured work",
    letter: "P",
  },
  contact: {
    id: 4,
    page: "contact",
    title: "get in touch",
    to: "/contact",
    theme: "violet",
    icon: Mail,
    description: "Let's connect",
    letter: "C",
  },
};

const data = {
  pages,
  navLinks: [pages.about, pages.skills, pages.portfolio, pages.contact],
  socialLinks: [
    { id: "github", label: "GitHub", icon: Github, href: "#" },
    { id: "linkedin", label: "LinkedIn", icon: Linkedin, href: "#" },
    { id: "twitter", label: "Twitter", icon: Twitter, href: "#" },
  ],
  home: {
    greeting: {
      label: "hello_world",
      intro: "I'm",
    },
    name: {
      first: "Rajat",
      last: "Gulati",
    },
    subtitle: {
      intro: "Frontend Developer specializing in",
      highlight: "UI Engineering",
    },
    description:
      "Building responsive, accessible, and high-performance web interfaces using HTML, CSS, JavaScript, and React.",
  },
  about: {
    description: [
      "I’m a Front-end Developer with 6+ years of experience building scalable, accessible, and high-performance user interfaces.",
      "My work focuses on writing clean, maintainable UI code and translating complex Figma designs into production-ready components that work consistently across devices and browsers.",
      "I’ve worked closely with product managers, designers, and engineers to deliver UI that balances performance, accessibility (WCAG), and visual precision.",
    ],
    resume: {
      label: "Resume",
      icon: Download,
    },
    timelineDescription:
      "Brief overview of responsibilities and achievements in this role.",
    presentLabel: "Present",
    calendarIcon: Calendar,
    tabs: [
      {
        title: "Experience",
        icon: Layers,
        itemIcon: Briefcase,
        items: [
          {
            name: "Senior Web Designer / Frontend Developer",
            listBody: "Bold Technology Systems",
            extra: "Sep 2022 - May 2025",
          },
          {
            name: "UI Developer",
            listBody: "Avalon Infosys.",
            extra: "Jan 2019 - Sep 2022",
          },
        ],
      },
      {
        title: "Education",
        icon: BookOpen,
        itemIcon: GraduationCap,
        items: [
          {
            name: "Bachelor's in Computer Science",
            listBody: "University Name • 2020",
          },
          {
            name: "Bachelor's in Computer Science",
            listBody: "University Name • 2020",
          },
        ],
      },
    ],
  },
  skills: {
    levels: [
      {
        level: "Advanced",
        skills: [
          { name: "HTML/CSS", percentage: 90 },
          { name: "Javascript", percentage: 90 },
        ],
      },
      {
        level: "Proficient",
        skills: [
          { name: "React", percentage: 85 },
          { name: "Typescript", percentage: 80 },
        ],
      },
      {
        level: "Working Knowledge",
        skills: [{ name: "Angular", percentage: 65 }],
      },
    ],
    tools: {
      title: "Ecosystem Tools",
      icon: Wrench,
      items: [
        "VS Code",
        "Git / GitHub",
        "Browser DevTools",
        "SCSS",
        "Tailwind CSS",
        "Bootstrap",
        "Figma",
        "Jira",
      ],
    },
    craft: {
      title: "The Craft",
      icon: Zap,
      items: [
        "Build responsive, accessible interfaces with clean, scalable UI systems",
        "Translate Figma into production UI with pixel precision and motion",
        "Optimize performance, WCAG compliance, and cross-browser consistency",
      ],
    },
    checkIcon: CheckCircle,
  },
  projects: [
    {
      id: 1,
      title: "Docquity - Webinar Landing Page",
      description:
        "Developed a responsive webinar landing page as part of a front-end interview assignment",
      tags: ["Angular", "TypeScript", "HTML5", "CSS3", "Figma"],
      url: "https://docquity-webinar.netlify.app/",
      thumbnail:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      letter: "P",
      accentColor: "#2DD4BF",
    },
    {
      id: 2,
      title: "Design System",
      description:
        "Comprehensive component library with documentation and accessibility features.",
      tags: ["Storybook", "CSS", "Design"],
      url: "https://example.com",
      thumbnail:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      letter: "W",
      accentColor: "#FF5DA8",
    },
    {
      id: 3,
      title: "Portfolio Template",
      description:
        "Clean, minimalist portfolio template for creative professionals.",
      tags: ["React", "Framer Motion", "UI"],
      url: "https://example.com",
      thumbnail:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
      letter: "T",
      accentColor: "#55A7FF",
    },
    {
      id: 4,
      title: "SaaS Landing Page",
      description:
        "High-converting landing page with animations and modern aesthetics.",
      tags: ["Next.js", "Animation", "Design"],
      url: "https://example.com",
      thumbnail:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      letter: "S",
      accentColor: "#9B7CFF",
    },
  ],
  portfolio: {
    ctaLabel: "View Live Project",
    ctaArrow: "↗",
    thumbsLabel: "Project thumbnails",
    thumbLeftLabel: "Scroll thumbnails left",
    thumbRightLabel: "Scroll thumbnails right",
  },
  contact: {
    form: {
      submitLabel: "Send Message",
      icon: Send,
      fields: {
        name: {
          label: "Name",
          placeholder: "Your name",
        },
        email: {
          label: "Email",
          placeholder: "your@email.com",
        },
        message: {
          label: "Message",
          placeholder: "Tell me about your project...",
        },
      },
    },
    infoTitle: "Get in Touch",
    followTitle: "Follow Me",
    info: [
      { icon: Mail, label: "Email", value: "hello@rajatgulati.com" },
      { icon: Phone, label: "Phone", value: "+91 98765 43210" },
      { icon: MapPin, label: "Location", value: "New Delhi, India" },
    ],
    availability: {
      title: "Available for freelance work",
      description: "Currently taking on new projects. Let's discuss your ideas!",
    },
  },
  notFound: {
    title: "404",
    message: "Oops! Page not found",
    linkLabel: "Return to Home",
  },
};

export default data;
