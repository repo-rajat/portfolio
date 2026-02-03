import React, { useState, useRef } from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Download,
  Layers,
  BookOpen,
} from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import aboutData from "../data/aboutData";
import IconButton from "../utilities/IconButton";
import { SOCIAL_LINKS } from "../data/assets";

// --- GlowCard Component Logic ---
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
      className={`relative rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-white/10 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(249, 115, 22, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- Timeline Item Logic ---
const TimelineItem = ({ title, subtitle, date, description, type, isLast }) => (
  <div className="group relative flex gap-6 pb-12 last:pb-0">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] transition-colors duration-300 group-hover:border-orange-500/50 group-hover:text-orange-500 shadow-lg">
        {type === 'Experience' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
      </div>
      {!isLast && <div className="h-full w-px bg-gradient-to-b from-white/10 to-transparent group-hover:from-orange-500/40" />}
    </div>
    <div className="w-full pt-1">
      <GlowCard className="p-6 group-hover:-translate-y-1 transform transition-transform duration-300">
        <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-[hsl(var(--coral))] transition-colors">{title}</h3>
            <p className="text-sm font-medium text-gray-400">{subtitle}</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 border border-white/5">
            <Calendar size={12} className="text-[hsl(var(--coral))]" />
            <span>{date}</span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </GlowCard>
    </div>
  </div>
);

export default function About() {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <PageLayout
      left={
        <div className="space-y-10">
          <div className="space-y-6 text-lg leading-relaxed text-gray-400">
            {aboutData.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-[hsl(var(--coral))] px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 transition-transform">
              <Download size={18} />
              <span>Resume</span>
            </button>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ id, icon: Icon, href, label }) => (
                <IconButton
                  key={id}
                  icon={Icon}
                  theme="neutral"
                  href={href}
                  aria-label={label}
                />
              ))}
            </div>
          </div>
        </div>
      }
      right={
        <div className="relative mt-6 lg:mt-0">
          <div className="sticky top-4 z-10 mb-8 flex justify-center lg:justify-center">
            <div className="flex gap-1 rounded-full border border-white/10 bg-black/60 p-1.5 backdrop-blur-xl shadow-xl">
              {["Experience", "Education"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab === "Experience" ? (
                    <Layers size={16} />
                  ) : (
                    <BookOpen size={16} />
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[500px]">
            {aboutData.cards
              .filter((card) => card.title === activeTab)
              .map((card) => (
                <div
                  key={card.title}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  {card.listItems.map((item, index) => (
                    <TimelineItem
                      key={index}
                      type={card.title}
                      title={item.name}
                      subtitle={item.listBody}
                      date={item.extra || "Present"}
                      description="Brief overview of responsibilities and achievements in this role."
                      isLast={index === card.listItems.length - 1}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      }
    />
  );
}
