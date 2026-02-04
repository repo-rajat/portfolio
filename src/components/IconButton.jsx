import React from "react";
import { themes } from "../theme";

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

// Default styles for neutral since it's not in the main theme file
const neutralStyles = {
  base: "bg-secondary/50 border border-border/50 text-muted-foreground",
  hover: "hover:bg-secondary hover:border-border hover:text-foreground",
};

function IconButton(props) {
  const icon = props.icon;
  const Icon = props.Icon;
  const theme = props.theme || "neutral";
  const href = props.href;
  const url = props.url;
  const onClick = props.onClick;
  const size = props.size || "md";
  const className = props.className || "";

  const ResolvedIcon = icon || Icon;
  const resolvedHref = href || url;

  if (!ResolvedIcon) {
    return null;
  }

  // Get color styles
  let styles = neutralStyles;
  if (theme !== "neutral" && themes[theme]) {
    styles = {
      base: themes[theme].buttonBase,
      hover: themes[theme].buttonHover,
      groupHover: themes[theme].buttonGroupHover
    };
  }

  const isLink = Boolean(resolvedHref);
  let isButton = false;
  
  if (!isLink) {
    if (typeof onClick === "function") {
      isButton = true;
    }
  }

  // Determine element type
  let Element = "span";
  if (isLink) {
    Element = "a";
  } else if (isButton) {
    Element = "button";
  }

  // Classes
  let interactiveClasses = "";
  if (isLink || isButton) {
     if (styles.hover) {
        interactiveClasses = styles.hover;
     }
  }
  
  // Group hover
  let groupHoverClass = "";
  if (styles.groupHover) {
    groupHoverClass = styles.groupHover;
  }

  // Props for the element
  const elementProps = {};
  if (isLink) {
    elementProps.href = resolvedHref;
    if (props.target === "_blank") {
        elementProps.target = "_blank";
        if (!props.rel) {
            elementProps.rel = "noopener noreferrer";
        }
    }
  } else if (isButton) {
    elementProps.type = "button";
    elementProps.onClick = onClick;
  }

  return (
    <Element
      {...elementProps}
      className={
        "flex items-center justify-center transition-all duration-300 " +
        (sizeStyles[size] || sizeStyles.md) + " " +
        styles.base + " " +
        groupHoverClass + " " +
        interactiveClasses + " " +
        className
      }
    >
      <ResolvedIcon className={iconSizeStyles[size] || iconSizeStyles.md} />
    </Element>
  );
}

export default IconButton;
