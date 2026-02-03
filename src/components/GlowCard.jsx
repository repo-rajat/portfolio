import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import IconButton from "../utilities/IconButton";

const variantStyles = {
  coral: {
    text: "text-[hsl(var(--coral))]",
    letterColor:
      "text-[hsl(var(--coral)/0.15)] group-hover:text-[hsl(var(--coral)/0.35)]",
    glowClass: "glow-coral",
  },
  sky: {
    text: "text-[hsl(var(--sky))]",
    letterColor:
      "text-[hsl(var(--sky)/0.15)] group-hover:text-[hsl(var(--sky)/0.35)]",
    glowClass: "glow-sky",
  },
  emerald: {
    text: "text-[hsl(var(--emerald))]",
    letterColor:
      "text-[hsl(var(--emerald)/0.15)] group-hover:text-[hsl(var(--emerald)/0.35)]",
    glowClass: "glow-emerald",
  },
  violet: {
    text: "text-[hsl(var(--violet))]",
    letterColor:
      "text-[hsl(var(--violet)/0.15)] group-hover:text-[hsl(var(--violet)/0.35)]",
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
          ${size === "large" ? "h-56 sm:h-72 md:h-80" : "h-44 sm:h-52 md:h-60"}
          rounded-3xl cursor-pointer overflow-hidden p-5 sm:p-6
          transition-all duration-300
          ${styles.glowClass}
          ${isDimmed ? "opacity-40 scale-95" : "opacity-100"}
          ${isHovered ? "scale-[0.98]" : ""}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 100px 30px hsl(var(--${variant}) / 0.4)`
            : undefined,
        }}
      >
        <span
          className={`
            absolute -right-4 -bottom-8
            text-[8rem] sm:text-[10rem] md:text-[14rem] font-black leading-none
            select-none pointer-events-none
            transition-all duration-700 ease-out
            ${styles.letterColor}
          `}
        >
          {letter}
        </span>

        <div className="flex justify-between items-center overflow-hidden">
          <IconButton icon={Icon} theme={variant} size="lg" />
          <ArrowLeft className={`w-6 h-6 ${styles.text} rotate-180 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300`} />
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
