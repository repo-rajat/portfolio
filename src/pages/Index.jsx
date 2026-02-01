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
            <div className="animate-slideUp relative flex items-center gap-3 px-5 py-2 bg-black/40 border border-white/10 rounded-full mb-10 w-fit backdrop-blur-md">
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

            {/* Parent Container with Overlapping Grid */}
            <div className="grid grid-cols-1 grid-rows-1 items-start w-full max-w-2xl">
              {/* 1. The Hero Text (Layer 1) */}
              <div className="col-start-1 row-start-1 z-10">
                <h1 className="type-hero mb-0">
                  {" "}
                  {/* Removed mb-6 to keep grid tight */}
                  <span className="text-foreground">Rajat</span>
                  <br />
                  <span className="text-shimmer ml-[125px]">Gulati</span>
                </h1>
              </div>

              {/* 2. The Chips Container (Layer 2 - Overlaid) */}
              {/* Height is now relative to the H1, adjust top/left values to fine-tune position */}
              <div className="col-start-1 row-start-1 relative w-full h-full min-h-[250px] pointer-events-none">
                <div className="absolute bottom-[44%] left-[-2%] animate-float-slow z-20 pointer-events-auto">
                  <Chip name="6+ Years" color="#FF6B6B" />
                </div>
                <div className="absolute bottom-[10%] right-[17%] animate-float-delayed z-20 pointer-events-auto">
                  <Chip name="Typescript" color="#ff9d43" />
                </div>
                <div className="absolute -bottom-[2%] right-[39%] animate-float-delayed-2 z-20 pointer-events-auto">
                  <Chip name="React" color="#61fb98" />
                </div>
                <div className="absolute top-[25%] right-[24%] animate-float-slow z-30 pointer-events-auto">
                  <Chip name="UI Engineer" color="#A855F7" />
                </div>
                <div className="absolute top-[13%] -right-[1%] animate-float-delayed-2 z-20 pointer-events-auto">
                  <Chip name="Tailwind CSS" color="#ff7ccb" />
                </div>
                <div className="absolute bottom-[20%] left-[6%] animate-float-delayed z-20 pointer-events-auto">
                  <Chip name="Frontend Developer" color="sky" />
                </div>
                <div className="absolute -bottom-[4%] left-[28%] animate-float-slow z-20 pointer-events-auto">
                  <Chip name="JavaScript" color="#F7DF1E" />
                </div>
                <div className="absolute bottom-[35%] right-[4%] animate-float-delayed-2 z-20 pointer-events-auto">
                  <Chip name="HTML/CSS" color="#6471ff" />
                </div>

                {/* Updated Path for the Grid Overlap */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-10"
                  style={{ zIndex: 0 }}
                  viewBox="0 0 500 250"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M462 67.5C462 165.531 364.398 245 244 245C123.602 245 26 165.531 26 67.5" 
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-pulse"
                  />
                  <path
                    d="M462 70.5C462 35.4299 433.57 7 398.5 7C363.43 7 335 35.4299 335 70.5C335.333 78 331 93.6 311 96"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-pulse"
                  />
                  
                </svg>
              </div>
            </div>

            <h2 className="type-hero-subtitle text-white/90 mt-5 mb-4 font-medium">
              Frontend Developer specializing in UI Engineering
            </h2>

            <p className="type-body-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
              Building responsive, accessible, and high-performance web
              interfaces using HTML, CSS, JavaScript, and React.
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
