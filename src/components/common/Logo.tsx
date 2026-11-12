import { OrbitScriptLogo } from "./OrbitScriptLogo";

interface LogoProps {
  light?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  className?: string;
  variant?: "badge" | "script";
}

export function Logo({
  light = false,
  size = "md",
  onClick,
  className = "",
  variant = "badge",
}: LogoProps) {
  if (variant === "script") {
    const scriptWidths = {
      sm: 90,
      md: 120,
      lg: 160,
      xl: 220,
    };
    return (
      <button
        type="button"
        onClick={onClick}
        className={`border-none bg-transparent p-0 cursor-pointer select-none transition-transform hover:scale-105 active:scale-95 ${
          light ? "text-white" : "text-[var(--black)]"
        } ${className}`}
        aria-label="ORBIT Home"
      >
        <OrbitScriptLogo
          width={scriptWidths[size]}
          color={light ? "#FFFFFF" : "#080808"}
          className="h-auto"
        />
      </button>
    );
  }

  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  const orbSizes = {
    sm: "w-5 h-5 text-xs",
    md: "w-7 h-7 text-sm",
    lg: "w-9 h-9 text-base",
    xl: "w-11 h-11 text-lg",
  };

  return (
    <button
      type="button"
      className={`logo-brand inline-flex items-center gap-2 border-none bg-transparent p-0 font-bold tracking-tight cursor-pointer select-none transition-transform hover:scale-[1.02] active:scale-[0.98] ${
        light ? "text-white" : "text-[var(--black)]"
      } ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      aria-label="ORBIT Home"
    >
      <span
        className={`logo-orb relative inline-grid place-items-center rounded-full bg-[var(--orange)] text-[var(--black)] font-serif italic shadow-sm transition-transform duration-300 group-hover:rotate-12 ${orbSizes[size]}`}
      >
        <svg
          className="absolute inset-0 w-full h-full -rotate-45 pointer-events-none"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="16"
            cy="16"
            rx="14"
            ry="6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeDasharray="2 3"
            opacity="0.8"
          />
        </svg>
        <span className="relative z-10 leading-none">o</span>
      </span>
      <span className="font-display font-black tracking-tight leading-none">
        orbit<span className="text-[var(--orange)]">.</span>
      </span>
    </button>
  );
}
