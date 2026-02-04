import React from "react";

const themeStyles = {
  neutral: {
    base: "bg-secondary/50 border border-border/50 text-muted-foreground",
    hover: "hover:bg-secondary hover:border-border hover:text-foreground",
  },
  violet: {
    base: "bg-[hsl(var(--violet)/0.2)] text-[hsl(var(--violet))]",
    hover: "hover:bg-[hsl(var(--violet))] hover:text-white",
    groupHover: "group-hover:bg-[hsl(var(--violet)/0.3)]",
  },
  coral: {
    base: "bg-[hsl(var(--coral)/0.2)] text-[hsl(var(--coral))]",
    groupHover: "group-hover:bg-[hsl(var(--coral)/0.3)]",
  },
  sky: {
    base: "bg-[hsl(var(--sky)/0.2)] text-[hsl(var(--sky))]",
    groupHover: "group-hover:bg-[hsl(var(--sky)/0.3)]",
  },
  emerald: {
    base: "bg-[hsl(var(--emerald)/0.2)] text-[hsl(var(--emerald))]",
    groupHover: "group-hover:bg-[hsl(var(--emerald)/0.3)]",
  },
};

const sizeStyles = {
  sm: "w-10 h-10 rounded-xl",
  md: "w-12 h-12 rounded-xl",
  lg: "w-12 h-12 rounded-2xl",
};

const iconSizeStyles = {
  sm: "w-5 h-5",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

function IconButton(props) {
  const {
    icon,
    Icon,
    theme = "neutral",
    href,
    url,
    onClick,
    size = "md",
    className = "",
    ...rest
  } = props;

  const ResolvedIcon = icon || Icon;
  const resolvedHref = href || url;

  if (!ResolvedIcon) return null;

  const styles = themeStyles[theme] || themeStyles.neutral;
  const isLink = Boolean(resolvedHref);
  const isButton = !isLink && typeof onClick === "function";
  const Element = isLink ? "a" : isButton ? "button" : "span";
  const interactiveClasses = isLink || isButton ? styles.hover || "" : "";

  const elementProps = isLink
    ? { href: resolvedHref }
    : isButton
      ? { type: "button", onClick }
      : {};

  // If consumer opens in a new tab, default rel to prevent reverse-tabnabbing.
  const relProps =
    isLink && rest.target === "_blank" && !rest.rel
      ? { rel: "noopener noreferrer" }
      : {};

  return (
    <Element
      {...elementProps}
      {...relProps}
      {...rest}
      className={`flex items-center justify-center transition-all duration-300 ${sizeStyles[size] || sizeStyles.md} ${styles.base} ${styles.groupHover || ""} ${interactiveClasses} ${className}`}
    >
      <ResolvedIcon className={`${iconSizeStyles[size] || iconSizeStyles.md}`} />
    </Element>
  );
}

export default IconButton;
