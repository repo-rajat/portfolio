import { useState } from "react";
import { GlowCard } from "../components/GlowCard";
import { Github, Linkedin, Twitter } from "lucide-react";
import navLinks from "../data/siteData";
import Chip from "../utilities/Chip";
import IconButton from "../utilities/IconButton";

function Index() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialIcons = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <div className="min-h-screen animated-gradient-bg noise-overlay overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Background Orbs */}
      <div className="orb orb-coral w-96 h-96 -top-48 -left-48 animate-float-slow" />
      <div className="orb orb-violet w-[500px] h-[500px] top-1/4 -right-64 animate-float-delayed" />
      <div className="orb orb-sky w-72 h-72 bottom-0 left-1/4 animate-float-delayed-2" />

      <div className="relative z-10 min-h-screen px-6 py-12 lg:py-0 lg:px-16">
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20 page-enter">
          
          {/* Left Content Section */}
          <div className="lg:w-1/2">
            
            {/* 1. Animated Greeting Chip */}
            <div className="animate-slideUp relative flex items-center gap-3 px-5 py-2 bg-black/40 border border-white/10 rounded-full mb-8 w-fit backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-white/80">
                <span className="text-cyan-400">&lt;</span>
                hello_world
                <span className="text-cyan-400"> /&gt;</span>
                <span className="ml-2 text-white/40">|</span>
                <span className="ml-2 text-white font-semibold">I'm</span>
              </p>
            </div>

            <h1 className="type-hero mb-6">
              <span className="text-foreground">Rajat</span>
              <br />
              <span className="text-shimmer">Gulati</span>
            </h1>

            {/* 2. Professional Chip Layout - Clean & Integrated */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Chip name={'6+ Years'} color={'coral'} />
              <Chip name={'Frontend / UI Engineer'} color={'sky'} />
              <Chip name={'React • JS • HTML • CSS'} color={'emerald'} />
            </div>

            <h2 className="type-hero-subtitle text-white/90 mt-12 mb-4 font-medium">
              Frontend Developer specializing in UI Engineering
            </h2>

            <p className="type-body-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
              Building responsive, accessible, and high-performance web interfaces using HTML, CSS, JavaScript, and React.
            </p>

            <div className="flex gap-5">
              {socialIcons.map(({ icon: Icon, href }, i) => (
                <IconButton key={i} href={href} Icon={Icon} />
              ))}
            </div>
          </div>

          {/* Right Navigation Cards Section */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {navLinks.map((item, index) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <GlowCard
                    variant={item.theme}
                    letter={item.letter}
                    title={
                      item.page.charAt(0).toUpperCase() + item.page.slice(1)
                    }
                    description={item.description}
                    to={item.to}
                    icon={item.icon}
                    size={index < 2 ? "large" : "normal"}
                    isHovered={hoveredIndex === index}
                    isDimmed={hoveredIndex !== null && hoveredIndex !== index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
}

export default Index;