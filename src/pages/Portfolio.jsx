import { useEffect, useMemo, useRef, useState } from "react";
import { PageLayout } from "../components/PageLayout";
import projectsData from "../data/projectsData";

// --- Sub-component: Glow Effect for Main Card ---
const GlowCard = ({ children, className = "", accentColor }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.015] backdrop-blur-md transition-all duration-300 hover:border-white/10 ${className}`}
    >
      {/* Static Top-Left Ambient Glow */}
      <div 
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none transition-colors duration-500"
        style={{ background: accentColor }}
      />

      {/* Interactive Cursor Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${accentColor}15, transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

function Portfolio() {
  const [activeId, setActiveId] = useState(projectsData[0]?.id ?? 0);
  const thumbsRef = useRef(null);
  const [showThumbNav, setShowThumbNav] = useState(false);

  const activeProject = useMemo(
    () => projectsData.find((project) => project.id === activeId) ?? projectsData[0],
    [activeId]
  );
  
  const activeIndex = useMemo(
    () => Math.max(0, projectsData.findIndex((project) => project.id === activeId)),
    [activeId]
  );

  const scrollThumbs = (direction) => {
    if (!thumbsRef.current) return;
    const shift = Math.max(220, thumbsRef.current.clientWidth * 0.6);
    thumbsRef.current.scrollBy({ left: direction * shift, behavior: "smooth" });
  };

  useEffect(() => {
    if (!thumbsRef.current) return;
    const updateNav = () => {
      const hasOverflow = thumbsRef.current.scrollWidth > thumbsRef.current.clientWidth + 8;
      setShowThumbNav(projectsData.length > 4 || hasOverflow);
    };
    updateNav();
    const observer = new ResizeObserver(updateNav);
    observer.observe(thumbsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout
      left={
        <div style={{ "--accent": activeProject?.accentColor }}>
          {/* Main Glassmorphic Card */}
          <GlowCard
            accentColor={activeProject?.accentColor || "hsl(var(--sky))"}
            className="min-h-[400px] lg:h-[450px]"
          >
            <div className="grid lg:grid-cols-2 h-full">
              {/* Left Content */}
              <div className="p-8 lg:p-14 flex flex-col justify-start">
                {/* Glowing interesting Number Index */}
                <div className="relative mb-6 w-fit">
                  <div
                    className="absolute inset-0 blur-lg opacity-40 rounded-full"
                    style={{ backgroundColor: activeProject?.accentColor }}
                  />
                  <div
                    className="relative flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-black/40 text-md font-bold"
                    style={{ color: activeProject?.accentColor }}
                  >
                    {String(activeIndex + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="portfolio-title text-3xl lg:text-5xl font-bold tracking-tight text-white">
                    {activeProject?.title}
                  </h2>

                  <p className="portfolio-desc text-gray-400 text-lg leading-relaxed line-clamp-3">
                    {activeProject?.description}
                  </p>

                  <div className="portfolio-tags pt-5">
                    {activeProject?.tags.map((tag) => (
                      <span key={tag} className="portfolio-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Media Section with Floating Action Button */}
              <div className="relative group overflow-hidden bg-black/40 flex items-center justify-center min-h-[300px] lg:min-h-full border-l border-white/5">
                <img
                  src={activeProject?.thumbnail}
                  alt={activeProject?.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Action Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      className="portfolio-cta"
                      href={activeProject?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Project
                      <span aria-hidden="true" className="portfolio-cta-arrow">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </GlowCard>
        </div>
      }
      right={
        <div className="mt-6 lg:mt-0" style={{ "--accent": activeProject?.accentColor }}>
          {/* Thumbnail Navigation */}
          <div
            className={`portfolio-thumbs-shell${showThumbNav ? "" : " no-nav"}`}
            role="tablist"
            aria-label="Project thumbnails"
          >
            {showThumbNav && (
              <button
                type="button"
                className="portfolio-thumb-nav"
                aria-label="Scroll thumbnails left"
                onClick={() => scrollThumbs(-1)}
              >
                ←
              </button>
            )}

            <div className="portfolio-thumbs" ref={thumbsRef}>
              {projectsData.map((project) => {
                const isActive = project.id === activeProject?.id;
                return (
                  <button
                    key={project.id}
                    type="button"
                    className={`portfolio-thumb${isActive ? " is-active" : ""}`}
                    style={{ "--accent": project.accentColor }}
                    onClick={() => setActiveId(project.id)}
                    aria-pressed={isActive}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>

            {showThumbNav && (
              <button
                type="button"
                className="portfolio-thumb-nav"
                aria-label="Scroll thumbnails right"
                onClick={() => scrollThumbs(1)}
              >
                →
              </button>
            )}
          </div>
        </div>
      }
    />
  );
}

export default Portfolio;
