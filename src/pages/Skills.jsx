import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Wrench, Zap, CheckCircle } from "lucide-react";

// Renamed from GlowCard to SimpleCard to avoid confusion with the main component
function SimpleCard(props) {
  const children = props.children;
  const className = props.className || "";
  
  return (
    <div className={"simple-card " + className}>
      {children}
    </div>
  );
}

function Skills() {
  const themeName = "sky";
  const title = "my skills";
  const letter = "S";

  const levels = [
    {
      level: "Advanced",
      skills: [
        { name: "HTML/CSS", percentage: 90 },
        { name: "Javascript", percentage: 90 },
      ],
    },
    {
      level: "Proficient",
      skills: [
        { name: "React", percentage: 85 },
        { name: "Typescript", percentage: 80 },
      ],
    },
    {
      level: "Working Knowledge",
      skills: [{ name: "Angular", percentage: 65 }],
    },
  ];

  const toolsItems = [
    "VS Code",
    "Git / GitHub",
    "Browser DevTools",
    "SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "Figma",
    "Jira",
  ];

  const craftItems = [
    "Build responsive, accessible interfaces with clean, scalable UI systems",
    "Translate Figma into production UI with pixel precision and motion",
    "Optimize performance, WCAG compliance, and cross-browser consistency",
  ];

  // Left Content
  const leftContent = (
    <div className="space-y-10">
      {levels.map(function(category) {
        return (
          <div key={category.level} className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[hsl(var(--sky))]">
                {category.level}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4" style={{marginTop: '0.8rem'}}>
              {category.skills.map(function(skill) {
                return (
                  <SimpleCard key={skill.name} className="p-5 pt-3.5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-base font-semibold text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full max-w-[200px] bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[hsl(var(--sky))] transition-all duration-1000 ease-out shadow-[0_0_12px_hsl(var(--sky)/0.5)]"
                        style={{ width: skill.percentage + "%" }}
                      />
                    </div>
                  </SimpleCard>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );

  // Right Content
  const rightContent = (
    <div className="space-y-8 mt-6 lg:mt-0">
      <section className="space-y-4">
        <div className="flex items-center gap-3 text-foreground">
          <Wrench size={20} className="text-[hsl(var(--sky))]" />
          <h3 className="text-xl font-bold tracking-tight">
            Ecosystem Tools
          </h3>
        </div>
        <div className="rounded-2xl border border-[hsl(var(--sky)/0.1)] bg-[hsl(var(--sky)/0.02)] backdrop-blur-sm hover:bg-[hsl(var(--sky)/0.05)] transition-colors group grid gap-3 p-6">
          <div className="flex flex-wrap gap-2">
            {toolsItems.map(function(tool) {
              return (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg border border-[hsl(var(--sky)/0.2)] bg-[hsl(var(--sky)/0.05)] backdrop-blur-md text-sm font-medium text-[hsl(var(--sky))] shadow-[0_0_15px_hsl(var(--sky)/0.03)] hover:bg-[hsl(var(--sky)/0.1)] hover:border-[hsl(var(--sky)/0.4)] transition-all cursor-default"
                >
                  {tool}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-1">
        <div className="flex items-center gap-3 text-foreground">
          <Zap size={20} className="text-[hsl(var(--sky))]" />
          <h3 className="text-xl font-bold tracking-tight">
            The Craft
          </h3>
        </div>
        <div className="rounded-2xl border border-[hsl(var(--sky)/0.1)] bg-[hsl(var(--sky)/0.02)] backdrop-blur-sm hover:bg-[hsl(var(--sky)/0.05)] transition-colors group grid gap-4 p-6">
          {craftItems.map(function(item, i) {
            return (
              <div key={i} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-[hsl(var(--sky))] drop-shadow-[0_0_5px_hsl(var(--sky)/0.5)]" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors leading-normal">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );

  return (
    <PageLayout
      themeName={themeName}
      title={title}
      letter={letter}
      left={leftContent}
      right={rightContent}
    />
  );
}

export default Skills;
