import { useEffect, useMemo, useRef, useState } from "react";
import { PageLayout } from "../components/PageLayout";
import projectsData from "../data/projectsData";

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
    <PageLayout>
      <div className="portfolio-stage" style={{ "--accent": activeProject?.accentColor }}>
        <div className="portfolio-panel">
          <div className="portfolio-left">
            <div className="portfolio-index" aria-hidden="true">
              {String(activeIndex + 1).padStart(2, "0")}
            </div>
            <h2 className="portfolio-title">{activeProject?.title}</h2>
            <p className="portfolio-desc">{activeProject?.description}</p>

            <div className="portfolio-tags">
              {activeProject?.tags.map((tag) => (
                <span key={tag} className="portfolio-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="portfolio-right">
            <div className="portfolio-media">
              <img
                src={activeProject?.thumbnail}
                alt={activeProject?.title}
                className="portfolio-media-img"
              />
              <div className="portfolio-media-overlay" />
              <div className="portfolio-media-cta-glow" aria-hidden="true" />
              <a
                className="portfolio-cta"
                href={activeProject?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Project
                <span aria-hidden="true" className="portfolio-cta-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

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
                  <img src={project.thumbnail} alt={project.title} loading="lazy" />
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
    </PageLayout>
  );
}

export default Portfolio;
