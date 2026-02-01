import { Link } from "react-router-dom";

const variantStyles = {
  coral: {
    text: "text-[hsl(var(--card-coral))]",
    letterColor:
      "text-[hsl(var(--card-coral)/0.15)] group-hover:text-[hsl(var(--card-coral)/0.35)]",
    iconBg:
      "bg-[hsl(var(--card-coral)/0.2)] group-hover:bg-[hsl(var(--card-coral)/0.3)]",
    glowClass: "glow-coral",
  },
  sky: {
    text: "text-[hsl(var(--card-sky))]",
    letterColor:
      "text-[hsl(var(--card-sky)/0.15)] group-hover:text-[hsl(var(--card-sky)/0.35)]",
    iconBg:
      "bg-[hsl(var(--card-sky)/0.2)] group-hover:bg-[hsl(var(--card-sky)/0.3)]",
    glowClass: "glow-sky",
  },
  emerald: {
    text: "text-[hsl(var(--card-emerald))]",
    letterColor:
      "text-[hsl(var(--card-emerald)/0.15)] group-hover:text-[hsl(var(--card-emerald)/0.35)]",
    iconBg:
      "bg-[hsl(var(--card-emerald)/0.2)] group-hover:bg-[hsl(var(--card-emerald)/0.3)]",
    glowClass: "glow-emerald",
  },
  violet: {
    text: "text-[hsl(var(--card-violet))]",
    letterColor:
      "text-[hsl(var(--card-violet)/0.15)] group-hover:text-[hsl(var(--card-violet)/0.35)]",
    iconBg:
      "bg-[hsl(var(--card-violet)/0.2)] group-hover:bg-[hsl(var(--card-violet)/0.3)]",
    glowClass: "glow-violet",
  },
};

export function GlowCard(props) {
  const {
    variant,
    letter,
    title,
    description,
    to,
    icon: Icon,
    className = "",
    size = "normal",
    isHovered = false,
    isDimmed = false,
  } = props;

  const styles = variantStyles[variant];

  return (
    <Link to={to} className={`block ${className}`}>
      <div
        className={`
          glow-card-hover group relative flex flex-col justify-between
          ${size === "large" ? "h-72 md:h-80" : "h-52 md:h-60"}
          rounded-3xl cursor-pointer overflow-hidden p-6
          transition-all duration-300
          ${styles.glowClass}
          ${isDimmed ? "opacity-40 scale-95" : "opacity-100"}
          ${isHovered ? "scale-[0.98]" : ""}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 100px 30px hsl(var(--card-${variant}) / 0.4)`
            : undefined,
        }}
      >
        <span
          className={`
            absolute -right-4 -bottom-8
            text-[10rem] md:text-[14rem] font-black leading-none
            select-none pointer-events-none
            transition-all duration-700 ease-out
            ${styles.letterColor}
          `}
        >
          {letter}
        </span>

        <div className="flex justify-between items-center overflow-hidden">
          <div
            className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${styles.iconBg}`}
          >
            <Icon className={`w-6 h-6 ${styles.text}`} />
          </div>
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center opacity-0 translate-x-[-200%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ${styles.iconBg}`}
          >
            <svg
              className={`w-5 h-5 ${styles.text}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10">
          <h3 className={`type-card-title mb-1 ${styles.text}`}>{title}</h3>
          <p className="type-body-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
