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
              <div className="pill-reactive rounded-full overflow-hidden">
                <div className="pill-surface inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50">
                  <span className="text-2xl">👋</span>
                  <span className="type-body-sm font-medium text-[#8a8485]">
                    Hello, I'm
                  </span>
                </div>
              </div>
            </div>

            <h1 className="type-hero mb-3">
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

            <h2 className="type-hero-subtitle text-foreground mt-10 mb-4">
              Front-end UI Developer
              <span className="text-gradient-warm"> & Designer</span>
            </h2>

            <p className="type-body-lg text-muted-foreground max-w-md mb-8">
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
