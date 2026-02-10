import React from "react";
import { GlowCard } from "../components/GlowCard";
import IconButton from "../components/IconButton";
import { useContent } from "../context/ContentContext";
import { getIcon } from "../utils/iconMap";
import CertificationBadge from "../components/CertificationBadge";
import PrimaryButton from "../components/PrimaryButton";
import { ArrowRight, MessageSquare } from "lucide-react";

function Index() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const { content, loading } = useContent();

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center text-white">
        Loading...
      </div>
    );
  }

  const { home, global } = content;

  return (
    <main className="min-h-[100svh] animated-gradient-bg noise-overlay lg:pb-0 pb-[80px]">
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="orb orb-coral w-96 h-96 -top-48 -left-48 animate-float-slow" />
      <div className="orb orb-violet w-[500px] h-[500px] top-1/4 -right-64 animate-float-delayed" />
      <div className="orb orb-sky w-72 h-72 bottom-0 left-1/4 animate-float-delayed-2" />

      <div className="max-w-7xl mx-auto grid relative z-10 min-h-[100dvh]  px-6 py-10 md:py-12 lg:py-0 lg:px-16">
        <div className="w-full flex flex-col lg:flex-row lg:items-center gap-10 sm:gap-12 lg:gap-15 page-enter">
          <div className="lg:w-1/2">
            <div className="home-greeting animate-slide-up relative flex flex-wrap items-center gap-2.5 px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-full mb-3 lg:mb-2 w-fit backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-green-500/80">
                {home.greeting.label}
                <span className="mx-2 text-white/30">/</span>
                <span className="text-white/90">{home.greeting.intro}</span>
              </p>
            </div>

            <div className="relative mb-6 lg:mb-8">
              <h1 className="type-hero">
                <span className="text-foreground text-8xl lg:text-9xl">
                  {home.name.first}
                </span>
                <span className="last-name text-5xl lg:text-6xl">{home.name.last}</span>
              </h1>
            </div>

            <h2 className="home-subtitle text-xl sm:text-2xl text-white/90 mt-10 mb-4 font-medium leading-tight">
              {home.subtitle.intro}
              <span className="block text-shimmer text-2xl sm:text-3xl font-bold mt-1">
                {home.subtitle.highlight}
              </span>
            </h2>

            <p className="text-lg text-muted-foreground/80 mb-6 max-w-lg leading-relaxed">
              {home.description}
            </p>

            <div className="flex flex-col gap-8">
              {home.certifications && (
                <div className="flex gap-3 animate-slide-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] mb-5 w-[calc(100svw-3rem)] lg:w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                  {home.certifications.map((cert) => (
                    <CertificationBadge key={cert.id} {...cert} />
                  ))}
                </div>
              )}

              <div className="mobile-sticky-bar">
                <PrimaryButton
                  href={`https://wa.me/${content.contact?.info?.find((i) => i.label === "Phone")?.value?.replace(/\D/g, "") || "919876543210"}`}
                  theme={
                    home.navigation.find((n) => n.page === "contact")?.theme ||
                    "violet"
                  }
                  containerClass="flex-1 lg:flex-none"
                  icon={<MessageSquare className="w-4 h-4" />}
                  tooltipTitle="Instant Connection"
                  tooltipDesc="Opens a direct WhatsApp chat window to discuss project ideas or professional opportunities in real-time."
                >
                  Let's Connect
                </PrimaryButton>
                <PrimaryButton
                  href="/portfolio"
                  theme={
                    home.navigation.find((n) => n.page === "portfolio")
                      ?.theme || "emerald"
                  }
                  containerClass="flex-1 lg:flex-none"
                  icon={<ArrowRight className="w-4 h-4" />}
                  tooltipTitle="Browse Portfolio"
                  tooltipDesc="Explore my collection of full-stack projects, creative designs, and technical solutions built with modern technologies."
                >
                  Projects
                </PrimaryButton>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-md mx-auto lg:max-w-none">
              {home.navigation.map(function (item, index) {
                let size = "normal";
                if (index < 2) {
                  size = "large";
                }

                const isHovered = hoveredIndex === index;
                let isDimmed = false;
                if (hoveredIndex !== null) {
                  if (hoveredIndex !== index) {
                    isDimmed = true;
                  }
                }
                const Icon = getIcon(item.icon);

                return (
                  <div
                    key={item.page}
                    onMouseEnter={function () {
                      setHoveredIndex(index);
                    }}
                    onMouseLeave={function () {
                      setHoveredIndex(null);
                    }}
                    className="min-w-0"
                  >
                    <GlowCard
                      variant={item.theme}
                      letter={item.letter}
                      title={
                        item.page.charAt(0).toUpperCase() + item.page.slice(1)
                      }
                      description={item.description}
                      to={item.route}
                      icon={Icon}
                      size={size}
                      isHovered={isHovered}
                      isDimmed={isDimmed}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
