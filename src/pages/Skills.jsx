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
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-8">
          {allSkills.map((category) => (
            <div key={category.level}>
              <h3 className="text-[hsl(var(--card-sky))] font-semibold mb-4">
                {category.level}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.percentage}%</span>
                    </div>
                    <div className="progress-bar h-2">
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

        <div className="space-y-8">
          <div className="p-6 rounded-2xl glass-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--card-sky)/0.2)] flex items-center justify-center">
                <Wrench className="w-5 h-5 text-[hsl(var(--card-sky))]" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--card-sky))]">Tools & Technology</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full text-sm bg-[hsl(var(--card-sky)/0.12)] text-[hsl(var(--card-sky))] border border-[hsl(var(--card-sky)/0.2)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--card-sky)/0.2)] flex items-center justify-center">
                <Code className="w-5 h-5 text-[hsl(var(--card-sky))]" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--card-sky))]">What I Do</h3>
            </div>

            <ul className="space-y-3">
              {skillsData.whatIDo.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-[hsl(var(--card-sky))] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
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
