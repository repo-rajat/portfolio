import React from "react";

function PrimaryButton(props) {
  const children = props.children;
  const href = props.href;
  const onClick = props.onClick;
  const className = props.className || "";
  const Icon = props.icon;
  const type = props.type || "button";
  const theme = props.theme;

  // Base classes for the button
  const baseClasses = "primary-btn " + className;

  const style = {};
  if (theme && theme !== "neutral") {
    style["--accent"] = "hsl(var(--" + theme + "))";
  }

  const content = (
    <>
      {children}
      {Icon && <span className="primary-btn-icon">{Icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={props.target}
        rel={props.rel}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} style={style}>
      {content}
    </button>
  );
}

export default PrimaryButton;
