import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import projectsData from "../data/projectsData";
import { ExternalLink, X } from "lucide-react";

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <PageLayout>
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-2xl overflow-hidden cursor-pointer glass-card border border-border/50 hover:border-[hsl(var(--card-emerald)/0.5)] transition-all duration-300 hover:-translate-y-2"
            onClick={() => setActiveProject(project)}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[2px]"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[hsl(var(--card-emerald))] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full bg-[hsl(var(--card-emerald)/0.15)] text-[hsl(var(--card-emerald))] group-hover:bg-[hsl(var(--card-emerald))] group-hover:text-background transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-background/80"
          onClick={() => setActiveProject(null)}
        >
          <div className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden glass-card border border-border" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <h3 className="font-bold text-foreground">{activeProject.title}</h3>
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-[hsl(var(--card-emerald))] hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in new tab
                </a>
              </div>

              <button onClick={() => setActiveProject(null)} className="p-2 rounded-full hover:bg-secondary transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <iframe src={activeProject.url} className="w-full h-[calc(100%-60px)] bg-white" title={activeProject.title} />
          </div>
        </div>
      )}
    </PageLayout>
  );
}

export default Portfolio;
