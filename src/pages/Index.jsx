import { useState } from "react";
import { GlowCard } from "../components/GlowCard";
import { Github, Linkedin, Twitter } from "lucide-react";
import navLinks from "../data/siteData";

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

      <div className="orb orb-coral w-96 h-96 -top-48 -left-48 animate-float-slow" />
      <div className="orb orb-violet w-[500px] h-[500px] top-1/4 -right-64 animate-float-delayed" />
      <div className="orb orb-sky w-72 h-72 bottom-0 left-1/4 animate-float-delayed-2" />

      <div className="relative z-10 min-h-screen px-6 py-12 lg:py-0 lg:px-16">
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20 page-enter">
          <div className="lg:w-1/2 inline-block">
            <div className="orbit-wrapper rounded-full mb-5">
            <svg
              className="orbit-svg"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              <defs>
                {/* Radial gradient ensures the "fade" starts from the center out to the edges */}
                <radialGradient id="pillGlowGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--pill-glow)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--pill-glow)" stopOpacity="0" />
                </radialGradient>

                {/* High deviation blur with massive filter bounds to prevent clipping */}
                <filter
                  id="pillGlowSoft"
                  x="-800%"
                  y="-800%"
                  width="1600%"
                  height="1600%"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0  
                            0 1 0 0 0  
                            0 0 1 0 0  
                            0 0 0 1.2 0"
                  />
                </filter>
              </defs>

              {/* Motion Path */}
              <path
                id="pillPath"
                d="M22 5 H78 A15 15 0 0 1 93 20 A15 15 0 0 1 78 35 H22 A15 15 0 0 1 7 20 A15 15 0 0 1 22 5 Z"
                fill="none"
              />

              <g>
                {/* The Glow: Radius reduced by 2px as requested, but with a massive blur */}
                <circle
                  r="20" 
                  fill="url(#pillGlowGradient)"
                  filter="url(#pillGlowSoft)"
                  opacity="0.4"
                >
                  <animateMotion dur="12s" repeatCount="indefinite">
                    <mpath href="#pillPath" />
                  </animateMotion>
                </circle>

                {/* The Core Circle: Increased from 3px to 4px as requested */}
                <circle r="2" fill="var(--pill-glow)" >
                  <animateMotion dur="12s" repeatCount="indefinite">
                    <mpath href="#pillPath" />
                  </animateMotion>
                </circle>
              </g>
            </svg>

              <div className="pill-reactive rounded-full overflow-hidden">
                <div className="pill-surface inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50">
                  <span className="text-2xl">👋</span>
                  <span className="text-sm font-medium text-muted-foreground">
                    Hello, I'm
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-2">
              <span className="text-foreground">Rajat</span>
              <br />
              <span className="text-shimmer">Gulati</span>
            </h1>

            <div className="flex gap-1 my-6 origin-left">
              <div className="w-12 h-1.5 rounded-full bg-[hsl(var(--card-coral))]" />
              <div className="w-12 h-1.5 rounded-full bg-[hsl(var(--card-sky))]" />
              <div className="w-12 h-1.5 rounded-full bg-[hsl(var(--card-emerald))]" />
              <div className="w-12 h-1.5 rounded-full bg-[hsl(var(--card-violet))]" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
              Front-end UI Developer
              <span className="text-gradient-warm"> & Designer</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8">
              Crafting beautiful, interactive experiences with code and
              creativity. Let's create something amazing together.
            </p>

            <div className="flex gap-4">
              {socialIcons.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-12 h-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-secondary hover:border-border transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

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
    </div>
  );
}

export default Index;
