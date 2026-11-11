interface LogoProps {
  light?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export function Logo({ light = false, size = "md", onClick, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const orbSizes = {
    sm: "w-5 h-5 text-xs",
    md: "w-7 h-7 text-sm",
    lg: "w-9 h-9 text-base",
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
      <span className="font-display font-extrabold tracking-tight">
        orbit<em className="text-[var(--orange)] not-italic">.</em>
      </span>
    </button>
  );
}

