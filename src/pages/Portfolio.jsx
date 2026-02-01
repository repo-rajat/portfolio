import { PageLayout } from "../components/PageLayout";
import projectsData from "../data/projectsData";

function Portfolio() {
  return (
    <PageLayout>
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group project-card"
            style={{ "--accent": project.accentColor }}
            aria-label={`${project.title} (opens in a new tab)`}
          >
            <span className="project-letter" aria-hidden="true">
              {project.letter}
            </span>

            <div className="aspect-video project-media">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-media-img"
              />
            </div>

            <div className="project-overlay" />

            <div className="project-content">
              <h3 className="project-title">
                {project.title}
              </h3>
              <p className="project-desc">
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="project-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </PageLayout>
  );
}

export default Portfolio;
