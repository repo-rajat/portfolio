import { useState } from "react";
import { PageLayout } from "../components/PageLayout";

function Portfolio({ data, page }) {
  const { projects, portfolio } = data;
  const [activeId, setActiveId] = useState(projects[0]?.id ?? 0);

  const activeProject =
    projects.find((project) => project.id === activeId) || projects[0];
  const activeIndex = Math.max(
    0,
    projects.findIndex((project) => project.id === activeId)
  );
  const showThumbNav = projects.length > 4;

  const scrollThumbs = (direction) => {
    const thumbs = document.getElementById("portfolio-thumbs");
    if (!thumbs) return;
    const shift = Math.max(220, thumbs.clientWidth * 0.6);
    thumbs.scrollBy({ left: direction * shift, behavior: "smooth" });
  };

  return (
    <PageLayout
      page={page}
      left={
        <div style={{ "--accent": activeProject?.accentColor }}>
          <div className="portfolio-main-card min-h-[400px] lg:h-[450px]">
            <div
              className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none transition-colors duration-500"
              style={{ background: activeProject?.accentColor }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at 20% 20%, ${activeProject?.accentColor}25, transparent 45%)`,
              }}
            />

            <div className="relative z-10 grid lg:grid-cols-2 h-full">
              <div className="p-8 lg:p-14 flex flex-col justify-start">
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

              <div className="relative group overflow-hidden bg-black/40 flex items-center justify-center min-h-[300px] lg:min-h-full border-l border-white/5">
                <img
                  src={activeProject?.thumbnail}
                  alt={activeProject?.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      className="portfolio-cta"
                      href={activeProject?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {portfolio.ctaLabel}
                      <span aria-hidden="true" className="portfolio-cta-arrow">
                        {portfolio.ctaArrow}
                      </span>
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      }
      right={
        <div
          className="mt-6 lg:mt-0"
          style={{ "--accent": activeProject?.accentColor }}
        >
          <div
            className={`portfolio-thumbs-shell${showThumbNav ? "" : " no-nav"}`}
            role="tablist"
            aria-label={portfolio.thumbsLabel}
          >
            {showThumbNav && (
              <button
                type="button"
                className="portfolio-thumb-nav"
                aria-label={portfolio.thumbLeftLabel}
                onClick={() => scrollThumbs(-1)}
              >
                ←
              </button>
            )}

            <div className="portfolio-thumbs" id="portfolio-thumbs">
              {projects.map((project) => {
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
                aria-label={portfolio.thumbRightLabel}
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
