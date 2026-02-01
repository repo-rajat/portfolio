import React from "react";

function Chip({ name, color }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 border rounded-full backdrop-blur-md transition-all duration-300 hover:bg-white/[0.02]"
      style={{
        borderColor: `hsl(var(--${color})/0.25)`,
        color: `hsl(var(--${color})/0.95)`,
        backgroundColor: `hsl(var(--${color})/0.08)`,
        boxShadow: `0 0 15px -5px hsl(var(--${color})/0.2)`,
      }}
    >
      {/* Tiny glowing indicator dot */}
      <span 
        className="w-1.5 h-1.5 rounded-full" 
        style={{ backgroundColor: `hsl(var(--${color}))` }}
      />
      
      <span className="text-xs md:text-sm font-medium tracking-wide cursor-default whitespace-nowrap">
        {name}
      </span>
    </span>
  );
}

export default Chip;