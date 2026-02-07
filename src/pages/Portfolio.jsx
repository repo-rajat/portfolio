import React from "react";
import { PageLayout } from "../components/PageLayout";

function Portfolio() {
  const themeName = "emerald";
  const title = "my portfolio";
  const letter = "P";

  // Hardcoded Data
  const projects = [
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
  ];

  const portfolioStrings = {
    ctaLabel: "View Live Project",
    ctaArrow: "↗",
    thumbsLabel: "Project thumbnails",
    thumbLeftLabel: "Scroll thumbnails left",
    thumbRightLabel: "Scroll thumbnails right",
  };

  // State
  const [activeId, setActiveId] = React.useState(1);

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

  // Left Content
  const leftContent = (
    <div style={{ "--accent": activeProject.accentColor }}>
      <div className="portfolio-main-card min-h-[400px] lg:h-[450px]">
        <div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none transition-colors duration-500"
          style={{ background: activeProject.accentColor }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px circle at 20% 20%, " +
              activeProject.accentColor +
              "25, transparent 45%)",
          }}
        />

        <div className="relative z-10 grid lg:grid-cols-2 h-full">
          <div className="p-8 lg:p-14 flex flex-col justify-start">
            <div className="relative mb-6 w-fit">
              <div
                className="absolute inset-0 blur-lg opacity-40 rounded-full"
                style={{ backgroundColor: activeProject.accentColor }}
              />
              <div
                className="relative flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-black/40 text-md font-bold"
                style={{ color: activeProject.accentColor }}
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
                <a
                  className="portfolio-cta"
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {portfolioStrings.ctaLabel}
                  <span aria-hidden="true" className="portfolio-cta-arrow">
                    {portfolioStrings.ctaArrow}
                  </span>
                </a>
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
    <div className="" style={{ "--accent": activeProject.accentColor }}>
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
                style={{ "--accent": project.accentColor }}
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
      themeName={themeName}
      title={title}
      letter={letter}
      headerContent={thumbsContent}
    >
      {leftContent}
    </PageLayout>
  );
}

export default Portfolio;
