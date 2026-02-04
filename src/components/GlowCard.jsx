import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import IconButton from "./IconButton";
import { themes } from "../theme";

export function GlowCard(props) {
  const variant = props.variant;
  const letter = props.letter;
  const title = props.title;
  const description = props.description;
  const to = props.to;
  const Icon = props.icon;
  const className = props.className || "";
  const size = props.size || "normal";
  const isHovered = props.isHovered || false;
  const isDimmed = props.isDimmed || false;

  const styles = themes[variant];

  // Logic for size class
  let sizeClass = "h-44 sm:h-52 md:h-60";
  if (size === "large") {
    sizeClass = "h-56 sm:h-72 md:h-80";
  }

  // Logic for dimmed class
  let dimmedClass = "opacity-100";
  if (isDimmed) {
    dimmedClass = "opacity-40 scale-95";
  }

  // Logic for hovered scale
  let hoveredClass = "";
  if (isHovered) {
    hoveredClass = "scale-[0.98]";
  }

  // Logic for box shadow
  let boxShadowValue = undefined;
  if (isHovered) {
    boxShadowValue = "0 0 100px 30px hsl(var(--" + variant + ") / 0.4)";
  }

  return (
    <Link to={to} className={"block " + className}>
      <div
        className={
          "glow-card-hover group relative flex flex-col justify-between " +
          sizeClass +
          " rounded-3xl cursor-pointer overflow-hidden p-5 sm:p-6 " +
          "transition-all duration-300 " +
          styles.glowClass +
          " " +
          dimmedClass +
          " " +
          hoveredClass
        }
        style={{
          boxShadow: boxShadowValue
        }}
      >
        <span
          className={
            "absolute -right-4 -bottom-8 " +
            "text-[8rem] sm:text-[10rem] md:text-[14rem] font-black leading-none " +
            "select-none pointer-events-none " +
            "transition-all duration-700 ease-out " +
            styles.letterColor
          }
        >
          {letter}
        </span>

        <div className="flex justify-between items-center overflow-hidden">
          <IconButton icon={Icon} theme={variant} size="lg" />
          <ArrowLeft
            className={
              "w-6 h-6 " +
              styles.text +
              " rotate-180 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
            }
          />
        </div>

        <div className="relative z-10">
          <h3 className={"type-card-title mb-1 " + styles.text}>{title}</h3>
          <p className="type-body-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  );
}
