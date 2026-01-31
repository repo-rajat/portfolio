import { PageLayout } from "../components/PageLayout";
import aboutData from "../data/aboutData";
import { Briefcase, GraduationCap } from "lucide-react";

const cardIcons = {
  Experience: Briefcase,
  Education: GraduationCap,
};

function About() {
  return (
    <PageLayout>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-6">
          {aboutData.description.map((paragraph, i) => (
            <p key={i} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-6">
          {aboutData.cards.map((card) => {
            const Icon = cardIcons[card.title] || Briefcase;
            return (
              <div
                key={card.title}
                className="p-6 rounded-2xl glass-card theme-coral"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(var(--card-coral)/0.2)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[hsl(var(--card-coral))]" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--card-coral))]">{card.title}</h3>
                </div>

                <div className="space-y-4">
                  {card.listItems.map((item, i) => (
                    <div key={i} className="border-l-2 border-[hsl(var(--card-coral)/0.3)] pl-4">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <div className="flex justify-between items-center mt-1 text-sm text-muted-foreground">
                        <span>{item.listBody}</span>
                        {item.extra && <span>{item.extra}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}

export default About;
