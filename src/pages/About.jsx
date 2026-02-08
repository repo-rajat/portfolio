import React from "react";
import { PageLayout } from "../components/PageLayout";
import IconButton from "../components/IconButton";
import { Download, Calendar } from "lucide-react";
import { useContent } from "../context/ContentContext";
import { getIcon } from "../utils/iconMap";

// Local component, renamed to avoid confusion
function SimpleCard(props) {
  const children = props.children;
  const className = props.className || "";

  return (
    <div
      className={
        "simple-card transition-transform duration-300 hover:-translate-y-1 " +
        className
      }
    >
      {children}
    </div>
  );
}

function TimelineItem(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const date = props.date;
  const description = props.description;
  const isLast = props.isLast;
  const ItemIcon = props.itemIcon;
  const CalendarIcon = props.calendarIcon;

  return (
    <div className="group relative flex gap-6 pb-12 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] transition-colors duration-300 group-hover:border-orange-500/50 group-hover:text-orange-500 shadow-lg">
          {ItemIcon && <ItemIcon size={18} />}
        </div>
        {!isLast && (
          <div className="h-full w-px bg-gradient-to-b from-white/10 to-transparent group-hover:from-orange-500/40" />
        )}
      </div>
      <div className="w-full pt-1">
        <SimpleCard className="p-6">
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
        </SimpleCard>
      </div>
    </div>
  );
}

function About() {
  const { content, loading } = useContent();
  const [activeTab, setActiveTab] = React.useState("Experience");

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center text-white">
        Loading...
      </div>
    );
  }

  const { about, global } = content;
  const { meta, description, tabs } = about;

  // Logic to find active tab data
  let activeTabData = tabs[0];
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].label === activeTab) {
      activeTabData = tabs[i];
    }
  }

  const presentLabel = "Present";

  const leftContent = (
    <div className="space-y-10">
      <div className="space-y-6 text-lg leading-relaxed text-gray-400">
        {description.map(function (para, i) {
          return <p key={i}>{para}</p>;
        })}
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="flex items-center gap-2 rounded-lg bg-[hsl(var(--coral))] px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 transition-transform">
          <Download size={18} />
          <span>{global.resume.label}</span>
        </button>
        <div className="flex gap-3">
          {global.socialLinks.map(function (link) {
            const Icon = getIcon(link.icon);
            return (
              <IconButton
                key={link.id}
                icon={Icon}
                theme="neutral"
                href={link.url}
                aria-label={link.label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  const rightContent = (
    <div className="relative mt-6 lg:mt-0">
      <div className="sticky top-4 z-10 mb-8 flex justify-center lg:justify-center">
        <div className="flex gap-1 rounded-full border border-white/10 bg-black/60 p-1.5 backdrop-blur-xl shadow-xl">
          {tabs.map(function (tab) {
            const TabIcon = getIcon(tab.icon);
            let activeClass = "text-gray-400 hover:text-white";
            if (activeTab === tab.label) {
              activeClass =
                "bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/20";
            }
            return (
              <button
                key={tab.label}
                onClick={function () {
                  setActiveTab(tab.label);
                }}
                className={
                  "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 " +
                  activeClass
                }
              >
                {TabIcon && <TabIcon size={16} />}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative min-h-[500px]">
        {activeTabData && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {activeTabData.items.map(function (item, index) {
              const date = item.date || presentLabel;
              const isLast = index === activeTabData.items.length - 1;
              const ItemIcon = getIcon(activeTabData.itemIcon);
              return (
                <TimelineItem
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={date}
                  description={activeTabData.timelineDescription}
                  isLast={isLast}
                  itemIcon={ItemIcon}
                  calendarIcon={Calendar}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <PageLayout
      themeName={meta.theme}
      title={meta.title}
      letter={meta.letter}
      left={leftContent}
      right={rightContent}
    />
  );
}

export default About;
