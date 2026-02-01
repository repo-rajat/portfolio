import { PageLayout } from "../components/PageLayout";
import skillsData from "../data/skillsData";
import { Code, Wrench, CheckCircle } from "lucide-react";

function Skills() {
  const allSkills = [
    { level: "Advanced", skills: skillsData.skills.advanced },
    { level: "Proficient", skills: skillsData.skills.proficient },
    { level: "Working Knowledge", skills: skillsData.skills.workingKnowledge },
  ];

  return (
    <PageLayout>
      <div className="skills-layout" style={{ "--skills-accent": "var(--card-sky)" }}>
        <div className="skills-bars">
          {allSkills.map((category) => (
            <div key={category.level} className="skills-meter-card">
              <div className="skills-meter-head">
                <span className="skills-meter-pill">{category.level}</span>
              </div>

              <div className="skills-meter-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skills-meter-row">
                    <div className="skills-meter-label">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.percentage}%</span>
                    </div>
                    <div className="progress-bar skills-meter-bar">
                      <div
                        className="progress-fill bg-gradient-to-r from-[hsl(var(--card-sky))] to-[hsl(var(--card-sky)/0.7)]"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-side">
          <div className="skills-card skills-card--toolbox">
            <div className="skills-card-head">
              <div className="skills-icon">
                <Wrench className="w-5 h-5 text-[hsl(var(--card-sky))]" />
              </div>
              <div>
                <p className="skills-eyebrow">Toolbox</p>
                <h3 className="skills-card-title">Tools & Technology</h3>
              </div>
            </div>

            <p className="skills-card-desc">
              Daily drivers I use to ship polished UI faster.
            </p>

            <div className="skills-chip-grid">
              {skillsData.tools.map((tool) => (
                <span key={tool} className="skills-chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-card skills-card--craft">
            <div className="skills-card-head">
              <div className="skills-icon">
                <Code className="w-5 h-5 text-[hsl(var(--card-sky))]" />
              </div>
              <div>
                <p className="skills-eyebrow">Craft</p>
                <h3 className="skills-card-title">What I Do</h3>
              </div>
            </div>

            <ul className="skills-do-list">
              {skillsData.whatIDo.map((item, i) => (
                <li key={i}>
                  <span className="skills-do-bullet">
                    <CheckCircle className="w-4 h-4 text-[hsl(var(--card-sky))]" />
                  </span>
                  <span className="skills-do-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Skills;
