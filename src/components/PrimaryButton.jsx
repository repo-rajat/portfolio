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

  const tooltip =
    props.tooltipTitle || props.tooltipDesc ? (
      <div className="tooltip-panel">
        {props.tooltipTitle && (
          <span className="tooltip-title">{props.tooltipTitle}</span>
        )}
        {props.tooltipDesc && (
          <span className="tooltip-desc">{props.tooltipDesc}</span>
        )}
      </div>
    ) : null;

  if (href) {
    return (
      <div className={tooltip ? "tooltip-wrapper" : ""}>
        <a
          href={href}
          className={baseClasses}
          target={props.target}
          rel={props.rel}
          style={style}
        >
          {content}
        </a>
        {tooltip}
      </div>
    );
  }

  return (
    <div className={tooltip ? "tooltip-wrapper" : ""}>
      <button
        type={type}
        onClick={onClick}
        className={baseClasses}
        style={style}
      >
        {content}
      </button>
      {tooltip}
    </div>
  );
}

export default PrimaryButton;
