import React from "react";

function IconButton({Icon, href}) {
  return (
    <a
      href={href}
      className="w-12 h-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-secondary hover:border-border transition-all duration-300 group"
    >
        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
    </a>
  );
}

export default IconButton;
