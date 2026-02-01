import React from "react";

function Chip({ name, color, className = "" }) {
  // Check if color is a Hex code or a CSS variable name
  const isHex = color.startsWith("#");
  const bgColor = isHex ? `${color}1A` : `hsl(var(--${color})/0.05)`; // 1A is ~10% opacity hex
  const borderColor = isHex ? `${color}33` : `hsl(var(--${color})/0.2)`; // 33 is ~20% opacity hex
  const textColor = isHex ? color : `hsl(var(--${color})/0.95)`;
  const glowColor = isHex ? `${color}4D` : `hsl(var(--${color})/0.3)`; // 4D is ~30% opacity hex

  return (
    <div
      className={`relative group px-3 py-1.5 rounded-xl border transition-all duration-500 cursor-default flex items-center justify-center ${className}`}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        backdropFilter: "blur(12px)",
        boxShadow: `0 4px 15px -5px rgba(0,0,0,0.4)`,
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <span 
        className="text-[11px] md:text-xs font-semibold tracking-wide whitespace-nowrap"
        style={{ color: textColor }}
      >
        {name}
      </span>

      <div 
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"
        style={{ backgroundColor: glowColor }}
      />
    </div>
  );
}

export default Chip;