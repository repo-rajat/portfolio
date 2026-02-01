import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import navLinks from "../data/siteData";

const themeClasses = {
  coral: {
    text: "text-[hsl(var(--coral))]",
    bg: "bg-[hsl(var(--coral)/0.1)]",
    border: "border-[hsl(var(--coral)/0.3)]",
    orb: "orb-coral",
  },
  sky: {
    text: "text-[hsl(var(--sky))]",
    bg: "bg-[hsl(var(--sky)/0.1)]",
    border: "border-[hsl(var(--sky)/0.3)]",
    orb: "orb-sky",
  },
  emerald: {
    text: "text-[hsl(var(--emerald))]",
    bg: "bg-[hsl(var(--emerald)/0.1)]",
    border: "border-[hsl(var(--emerald)/0.3)]",
    orb: "orb-emerald",
  },
  violet: {
    text: "text-[hsl(var(--violet))]",
    bg: "bg-[hsl(var(--violet)/0.1)]",
    border: "border-[hsl(var(--violet)/0.3)]",
    orb: "orb-violet",
  },
};

export function PageLayout({ children }) {
  const { pathname } = useLocation();
  const currentPage = navLinks.find((item) => pathname.includes(item.to));

  if (!currentPage) return null;

  const styles = themeClasses[currentPage.theme];
  const titleWords = currentPage.title.split(" ");

  return (
    <div className="min-h-screen animated-gradient-bg noise-overlay overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className={`orb ${styles.orb} w-[600px] h-[600px] -top-64 -right-64 animate-float-slow`} />
      <div className={`orb ${styles.orb} w-96 h-96 bottom-0 -left-48 animate-float-delayed opacity-50`} />

      <div className="relative z-10 min-h-screen px-6 py-12 lg:px-16 grid items-center">
        <div className="max-w-6xl mx-auto page-enter">
          <div className="flex items-center gap-6 mb-12">
          <Link
            to="/"
            className={`group flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-300 hover:scale-110 ${styles.border} ${styles.bg}`}
            style={{
              "--hover-glow": `hsl(var(--${currentPage.theme}))`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 25px 2px var(--hover-glow)`;
              e.currentTarget.style.borderColor = `var(--hover-glow)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "";
            }}
          >
            <ArrowLeft className={`w-6 h-6 transition-transform ${styles.text}`} />
          </Link>

            <h1 className="type-page-title">
              {titleWords.map((word, i) => (
                <span key={i}>
                  {i === titleWords.length - 1 ? (
                    <span className={styles.text}>{word[0].toUpperCase() + word.slice(1)}</span>
                  ) : (
                    <span className="text-foreground">{word[0].toUpperCase() + word.slice(1)} </span>
                  )}
                </span>
              ))}
            </h1>
          </div>

          <div className="absolute right-8 lg:right-16 -translate-y-1/2 pointer-events-none select-none">
            <span className={`text-[20rem] md:text-[30rem] font-black leading-none opacity-[0.03] ${styles.text}`} style={{ opacity: 0.05 }}>
              {currentPage.letter}
            </span>
          </div>

          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
