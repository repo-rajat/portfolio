import React from "react";

function PrimaryButton(props) {
  const children = props.children;
  const href = props.href;
  const onClick = props.onClick;
  const className = props.className || "";
  const Icon = props.icon;
  const type = props.type || "button";

  // Base classes for the button
  const baseClasses = "primary-btn " + className;

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
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}

export default PrimaryButton;
