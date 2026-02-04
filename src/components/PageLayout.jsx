import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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

export function PageLayout({ page, children, left, right }) {
  if (!page) return null;

  const styles = themeClasses[page.theme];
  const titleWords = page.title.split(" ");

  const hasSplit = Boolean(left || right);
  const rightContent = hasSplit ? right ?? children : children;

  return (
    <div className="min-h-[100svh] animated-gradient-bg noise-overlay overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

      <div
        className={`orb ${styles.orb} w-[600px] h-[600px] -top-64 -right-64 animate-float-slow`}
      />
      <div
        className={`orb ${styles.orb} w-96 h-96 bottom-0 -left-48 animate-float-delayed opacity-50`}
      />

      <div className="page-shell relative z-10 min-h-[100svh] px-6 py-10 md:py-12 lg:px-16 grid items-center">
        <div className="max-w-6xl mx-auto page-enter">
          {hasSplit ? (
            <div className="page-grid grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:items-start">
              <div className="page-left">
                <div className="page-header flex items-center gap-6 mb-10 md:mb-12">
                  <Link
                    to="/"
                    className={`page-back group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border transition-all duration-300 hover:scale-110 ${styles.border} ${styles.bg}`}
                    style={{
                      "--hover-glow": `hsl(var(--${page.theme}))`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 25px 2px var(--hover-glow)";
                      e.currentTarget.style.borderColor = "var(--hover-glow)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    <ArrowLeft
                      className={`w-6 h-6 transition-transform ${styles.text}`}
                    />
                  </Link>

                  <h1 className="type-page-title">
                    {titleWords.map((word, i) => (
                      <span key={i}>
                        {i === titleWords.length - 1 ? (
                          <span className={styles.text}>
                            {word[0].toUpperCase() + word.slice(1)}
                          </span>
                        ) : (
                          <span className="text-foreground">
                            {word[0].toUpperCase() + word.slice(1)}{" "}
                          </span>
                        )}
                      </span>
                    ))}
                  </h1>
                </div>

                <div className="page-left-content">{left}</div>
              </div>

              <div className="page-content lg:pt-2">{rightContent}</div>
            </div>
          ) : (
            <>
              <div className="page-header flex items-center gap-6 mb-10 md:mb-12">
                <Link
                  to="/"
                  className={`page-back group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border transition-all duration-300 hover:scale-110 ${styles.border} ${styles.bg}`}
                  style={{
                    "--hover-glow": `hsl(var(--${page.theme}))`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 25px 2px var(--hover-glow)";
                    e.currentTarget.style.borderColor = "var(--hover-glow)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "";
                  }}
                >
                  <ArrowLeft
                    className={`w-6 h-6 transition-transform ${styles.text}`}
                  />
                </Link>

                <h1 className="type-page-title">
                  {titleWords.map((word, i) => (
                    <span key={i}>
                      {i === titleWords.length - 1 ? (
                        <span className={styles.text}>
                          {word[0].toUpperCase() + word.slice(1)}
                        </span>
                      ) : (
                        <span className="text-foreground">
                          {word[0].toUpperCase() + word.slice(1)}{" "}
                        </span>
                      )}
                    </span>
                  ))}
                </h1>
              </div>

              <div className="page-content">{children}</div>
            </>
          )}

          <div className="absolute right-8 lg:right-16 -translate-y-1/2 pointer-events-none select-none">
            <span
              className={`page-letter text-[18rem] md:text-[30rem] font-black leading-none opacity-[0.03] ${styles.text}`}
              style={{ opacity: 0.05 }}
            >
              {page.letter}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
