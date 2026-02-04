import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import IconButton from "../components/IconButton";

const GlowCard = ({ children, className = "" }) => (
  <div
    className={`simple-card transition-transform duration-300 hover:-translate-y-1 ${className}`}
  >
    {children}
  </div>
);

const TimelineItem = ({
  title,
  subtitle,
  date,
  description,
  isLast,
  itemIcon: ItemIcon,
  calendarIcon: CalendarIcon,
}) => (
  <div className="group relative flex gap-6 pb-12 last:pb-0">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] transition-colors duration-300 group-hover:border-orange-500/50 group-hover:text-orange-500 shadow-lg">
        <ItemIcon size={18} />
      </div>
      {!isLast && (
        <div className="h-full w-px bg-gradient-to-b from-white/10 to-transparent group-hover:from-orange-500/40" />
      )}
    </div>
    <div className="w-full pt-1">
      <GlowCard className="p-6">
        <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-[hsl(var(--coral))] transition-colors">
              {title}
            </h3>
            <p className="text-sm font-medium text-gray-400">{subtitle}</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 border border-white/5">
            <CalendarIcon size={12} className="text-[hsl(var(--coral))]" />
            <span>{date}</span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </GlowCard>
    </div>
  </div>
);

export default function About({ data, page }) {
  const { about, socialLinks } = data;
  const [activeTab, setActiveTab] = useState(about.tabs[0]?.title);

  const ResumeIcon = about.resume.icon;
  const tabs = about.tabs;
  const activeTabData = tabs.find((tab) => tab.title === activeTab) || tabs[0];

  return (
    <PageLayout
      page={page}
      left={
        <div className="space-y-10">
          <div className="space-y-6 text-lg leading-relaxed text-gray-400">
            {about.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-[hsl(var(--coral))] px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 transition-transform">
              <ResumeIcon size={18} />
              <span>{about.resume.label}</span>
            </button>
            <div className="flex gap-3">
              {socialLinks.map(({ id, icon: Icon, href, label }) => (
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
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.title}
                    onClick={() => setActiveTab(tab.title)}
                    className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.title
                        ? "bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/20"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <TabIcon size={16} />
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[500px]">
            {activeTabData && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {activeTabData.items.map((item, index) => (
                  <TimelineItem
                    key={index}
                    title={item.name}
                    subtitle={item.listBody}
                    date={item.extra || about.presentLabel}
                    description={about.timelineDescription}
                    isLast={index === activeTabData.items.length - 1}
                    itemIcon={activeTabData.itemIcon}
                    calendarIcon={about.calendarIcon}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      }
    />
  );
}
