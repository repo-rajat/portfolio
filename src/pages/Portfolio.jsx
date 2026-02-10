import React from "react";
import { PageLayout } from "../components/PageLayout";
import { useContent } from "../context/ContentContext";
import PrimaryButton from "../components/PrimaryButton";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

function Portfolio() {
  const { content, loading } = useContent();
  const [activeId, setActiveId] = React.useState(1);

  // Keyboard navigation
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") {
        navigateProject(-1);
      } else if (e.key === "ArrowRight") {
        navigateProject(1);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [content, activeId]);

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center text-white">
        Loading...
      </div>
    );
  }

  const { portfolio } = content;
  const { meta, cta, projects } = portfolio;

  const portfolioStrings = {
    ctaLabel: cta.label,
    ctaArrow: cta.arrow,
    thumbsLabel: "Project thumbnails",
    thumbLeftLabel: "Scroll thumbnails left",
    thumbRightLabel: "Scroll thumbnails right",
  };

  // Logic to find active project
  let activeProject = projects[0];
  let activeIndex = 0;

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === activeId) {
      activeProject = projects[i];
      activeIndex = i;
      break;
    }
  }

  const showThumbNav = projects.length > 4;

  function scrollThumbs(direction) {
    const thumbs = document.getElementById("portfolio-thumbs");
    if (thumbs) {
      const shift = Math.max(220, thumbs.clientWidth * 0.6);
      thumbs.scrollBy({ left: direction * shift, behavior: "smooth" });
    }
  }

  function navigateProject(direction) {
    if (!projects || projects.length <= 1) return;
    const currentIndex = projects.findIndex((p) => p.id === activeId);
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) nextIndex = projects.length - 1;
    if (nextIndex >= projects.length) nextIndex = 0;

    setActiveId(projects[nextIndex].id);
  }

  // Left Content
  const leftContent = (
    <div style={{ "--accent": activeProject.accent }}>
      <div className="portfolio-main-card min-h-[400px] lg:h-[450px]">
        <div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none transition-colors duration-500"
          style={{ background: activeProject.accent }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px circle at 20% 20%, " +
              activeProject.accent +
              "25, transparent 45%)",
          }}
        />

        <div className="relative z-10 grid lg:grid-cols-2 h-full">
          {/* Floating Navigation Arrows */}
          <button
            onClick={() => navigateProject(-1)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px 2px ${activeProject.accent}44`;
              e.currentTarget.style.borderColor = `${activeProject.accent}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/60 text-white/50 hover:text-white hover:scale-110 transition-all backdrop-blur-xl hidden md:flex items-center justify-center group/nav"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 group-hover/nav:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => navigateProject(1)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px 2px ${activeProject.accent}44`;
              e.currentTarget.style.borderColor = `${activeProject.accent}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/60 text-white/50 hover:text-white hover:scale-110 transition-all backdrop-blur-xl hidden md:flex items-center justify-center group/nav"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 group-hover/nav:translate-x-0.5 transition-transform" />
          </button>

          <div className="p-8 lg:p-14 flex flex-col justify-start">
            <div className="relative mb-6 w-fit">
              <div
                className="absolute inset-0 blur-lg opacity-40 rounded-full"
                style={{ backgroundColor: activeProject.accent }}
              />
              <div
                className="relative flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-black/40 text-md font-bold"
                style={{ color: activeProject.accent }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="portfolio-title text-3xl lg:text-5xl font-bold tracking-tight text-white">
                {activeProject.title}
              </h2>

              <p className="portfolio-desc text-gray-400 text-lg leading-relaxed line-clamp-3">
                {activeProject.description}
              </p>

              <div className="portfolio-tags pt-5">
                {activeProject.tags.map(function (tag) {
                  return (
                    <span key={tag} className="portfolio-tag">
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden bg-black/40 flex items-center justify-center min-h-[300px] lg:min-h-full border-l border-white/5">
            <img
              src={activeProject.thumbnail}
              alt={activeProject.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PrimaryButton
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-[1.4rem] bottom-[1.2rem]"
                    icon={portfolioStrings.ctaArrow}
                    tooltipTitle="Launch Application"
                    tooltipDesc="Opens the live, hosted version of this project in a new tab for you to explore the features and user experience firsthand."
                  >
                    {portfolioStrings.ctaLabel}
                  </PrimaryButton>
                </div>
              </div>
            </div>

            <div
              className="
              absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-black/65 via-black/35 to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Thumbnails (Header Content)
  const thumbsContent = (
    <div className="" style={{ "--accent": activeProject.accent }}>
      <div
        className={"portfolio-thumbs-shell" + (showThumbNav ? "" : " no-nav")}
        role="tablist"
        aria-label={portfolioStrings.thumbsLabel}
      >
        {showThumbNav && (
          <button
            type="button"
            className="portfolio-thumb-nav"
            aria-label={portfolioStrings.thumbLeftLabel}
            onClick={function () {
              scrollThumbs(-1);
            }}
          >
            ←
          </button>
        )}

        <div className="portfolio-thumbs" id="portfolio-thumbs">
          {projects.map(function (project) {
            const isActive = project.id === activeProject.id;
            let activeClass = "";
            if (isActive) {
              activeClass = " is-active";
            }
            return (
              <button
                key={project.id}
                type="button"
                className={"portfolio-thumb" + activeClass}
                style={{ "--accent": project.accent }}
                onClick={function () {
                  setActiveId(project.id);
                }}
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
            aria-label={portfolioStrings.thumbRightLabel}
            onClick={function () {
              scrollThumbs(1);
            }}
          >
            →
          </button>
        )}
      </div>
    </div>
  );

  return (
    <PageLayout
      themeName={meta.theme}
      title={meta.title}
      letter={meta.letter}
      headerContent={thumbsContent}
    >
      {leftContent}
    </PageLayout>
  );
}

export default Portfolio;
