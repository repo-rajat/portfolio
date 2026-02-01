import { useMemo, useState } from "react";
import { PageLayout } from "../components/PageLayout";
import projectsData from "../data/projectsData";

function Portfolio() {
  const [activeId, setActiveId] = useState(projectsData[0]?.id ?? 0);
  const activeProject = useMemo(
    () => projectsData.find((project) => project.id === activeId) ?? projectsData[0],
    [activeId]
  );

  return (
    <PageLayout>
      <div className="portfolio-stage" style={{ "--accent": activeProject?.accentColor }}>
        <div className="portfolio-panel">
          <div className="portfolio-left">
            <div className="portfolio-index" aria-hidden="true">
              {String(projectsData.findIndex((project) => project.id === activeProject.id) + 1).padStart(2, "0")}
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

          <div className="portfolio-right">
            <div className="portfolio-media">
              <img
                src={activeProject?.thumbnail}
                alt={activeProject?.title}
                className="portfolio-media-img"
              />
              <div className="portfolio-media-overlay" />
            </div>
          </div>
        </div>

        <div className="portfolio-thumbs" role="tablist" aria-label="Project thumbnails">
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
                <span className="portfolio-thumb-label">{project.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}

export default Portfolio;
