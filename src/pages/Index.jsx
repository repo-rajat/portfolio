import { useState } from "react";
import { GlowCard } from "../components/GlowCard";
import IconButton from "../components/IconButton";

function Index({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { navLinks, socialLinks, home } = data;

  return (
    <main className="min-h-[100svh] animated-gradient-bg noise-overlay">
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="orb orb-coral w-96 h-96 -top-48 -left-48 animate-float-slow" />
      <div className="orb orb-violet w-[500px] h-[500px] top-1/4 -right-64 animate-float-delayed" />
      <div className="orb orb-sky w-72 h-72 bottom-0 left-1/4 animate-float-delayed-2" />

      <div className="max-w-7xl mx-auto grid relative z-10 min-h-[100dvh] px-6 py-10 md:py-12 lg:py-0 lg:px-16">
        <div className="w-full flex flex-col lg:flex-row lg:items-center gap-10 sm:gap-12 lg:gap-15 page-enter">
          <div className="lg:w-1/2">
            <div className="home-greeting animate-slide-up relative flex flex-wrap items-center gap-3 px-4 sm:px-5 py-2 bg-black/40 border border-white/10 rounded-full mb-8 lg:mb-10 w-fit max-w-[calc(100vw-3rem)] backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <p className="text-[10px] sm:text-xs md:text-sm font-mono tracking-widest uppercase text-white/80 break-words">
                <span className="text-cyan-400">&lt;</span>
                {home.greeting.label}
                <span className="text-cyan-400"> /&gt;</span>
                <span className="ml-2 text-white/40">|</span>
                <span className="ml-2 text-white font-semibold">
                  {home.greeting.intro}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 grid-rows-1 items-start w-full max-w-2xl">
              <div className="col-start-1 row-start-1 z-10">
                <h1 className="type-hero mb-0">
                  <span className="text-foreground">{home.name.first}</span>
                  <br />
                  <span className="text-shimmer">{home.name.last}</span>
                </h1>
              </div>
            </div>

            <h2 className="home-subtitle text-2xl sm:text-3xl text-white/90 mt-8 lg:mt-10 mb-3 lg:mb-4 font-medium leading-snug sm:leading-[40px]">
              {home.subtitle.intro}
              <span className="block">{home.subtitle.highlight}</span>
            </h2>

            <p className="type-body-lg text-muted-foreground max-w-md mb-8 lg:mb-10 leading-relaxed">
              {home.description}
            </p>

            <div className="flex gap-4 sm:gap-5">
              {socialLinks.map(({ id, icon: Icon, href, label }) => (
                <IconButton
                  key={id}
                  icon={Icon}
                  theme="neutral"
                  href={href}
                  aria-label={label}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-md mx-auto lg:max-w-none">
              {navLinks.map((item, index) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="min-w-0"
                >
                  <GlowCard
                    variant={item.theme}
                    letter={item.letter}
                    title={item.page.charAt(0).toUpperCase() + item.page.slice(1)}
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
    </main>
  );
}

export default Index;
