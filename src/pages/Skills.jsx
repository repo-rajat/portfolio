import React, { useState, useRef } from 'react';
import { Wrench, CheckCircle, Cpu, Zap } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import skillsData from "../data/skillsData";

// --- Sub-component: Glow Effect (Matches your Premium UI) ---
const GlowCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-[hsl(var(--card-sky)/0.3)] ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, hsl(var(--card-sky) / 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

function Skills() {
  const allSkills = [
    { level: "Advanced", skills: skillsData.skills.advanced },
    { level: "Proficient", skills: skillsData.skills.proficient },
    { level: "Working Knowledge", skills: skillsData.skills.workingKnowledge },
  ];

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto pt-4 lg:pt-4">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Skill Meters (7/12 Width) */}
          <div className="lg:col-span-7 space-y-10">
            {allSkills.map((category) => (
              <div key={category.level} className="space-y-6">
                <div className="flex items-center gap-3">
                   <span className="text-sm font-bold uppercase tracking-[0.2em] text-[hsl(var(--card-sky))]">
                    {category.level}
                  </span>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <GlowCard key={skill.name} className="p-5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-base font-semibold text-foreground">{skill.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">{skill.percentage}%</span>
                      </div>
                      <div className="h-1.5 w-full max-w-[200px] bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[hsl(var(--card-sky))] transition-all duration-1000 ease-out shadow-[0_0_12px_hsl(var(--card-sky)/0.5)]"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Toolbox & Craft (5/12 Width) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            
            {/* Toolbox Section - Vibrant Glass Pills */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Wrench size={20} className="text-[hsl(var(--card-sky))]" />
                <h3 className="text-xl font-bold tracking-tight">Ecosystem Tools</h3>
              </div>
              <GlowCard className="p-5">
                <div className="flex flex-wrap gap-2">
                  {skillsData.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="px-3 py-1.5 rounded-lg border border-[hsl(var(--card-sky)/0.2)] bg-[hsl(var(--card-sky)/0.05)] backdrop-blur-md text-sm font-medium text-[hsl(var(--card-sky))] shadow-[0_0_15px_hsl(var(--card-sky)/0.03)] hover:bg-[hsl(var(--card-sky)/0.1)] hover:border-[hsl(var(--card-sky)/0.4)] transition-all cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </section>

            {/* Craft Section - Premium List */}
            <section className="space-y-4 pt-1">
              <div className="flex items-center gap-3 text-foreground">
                <Zap size={20} className="text-[hsl(var(--card-sky))]" />
                <h3 className="text-xl font-bold tracking-tight">The Craft</h3>
              </div>
              <div className="space-y-3">
                {skillsData.whatIDo.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-2xl border border-[hsl(var(--card-sky)/0.1)] bg-[hsl(var(--card-sky)/0.02)] backdrop-blur-sm hover:bg-[hsl(var(--card-sky)/0.05)] transition-colors group">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-[hsl(var(--card-sky))] drop-shadow-[0_0_5px_hsl(var(--card-sky)/0.5)]" />
                    <span className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Skills;