interface DoodleProps {
  className?: string;
  color?: string;
}

export function CurvedArrow({ className = "", color = "currentColor" }: DoodleProps) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      viewBox="0 0 160 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 67C36 7 49 87 78 36s46 46 77-14"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="m140 17 16 5-10 13"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Starburst({
  className = "",
  size = 32,
  color = "currentColor",
}: DoodleProps & { size?: number }) {
  return (
    <svg
      className={`doodle-star ${className}`}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 2v28M2 16h28M6.1 6.1l19.8 19.8M6.1 25.9 25.9 6.1"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WavyUnderline({ className = "", color = "var(--orange)" }: DoodleProps) {
  return (
    <svg
      className={`doodle-wavy ${className}`}
      viewBox="0 0 200 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 10c20-7 35 7 55 0s35-7 55 0 35-7 55 0 20-5 30-2"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CircularStamp({
  text = "ORBIT CAREER INTELLIGENCE · ",
  centerText = "★",
  className = "",
  size = 100,
}: {
  text?: string;
  centerText?: string;
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={`relative inline-grid place-items-center select-none animate-[spin_20s_linear_infinite] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
        <defs>
          <path id="stamp-circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="text-[9.5px] font-bold tracking-[2.2px] uppercase fill-current">
          <textPath href="#stamp-circle">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center font-display font-black text-xl">
        {centerText}
      </div>
    </div>
  );
}

export function StickerBadge({
  children,
  color = "orange",
  rotate = "-3deg",
  className = "",
}: {
  children: React.ReactNode;
  color?: "orange" | "blue" | "lavender" | "green" | "lime" | "cream" | "black";
  rotate?: string;
  className?: string;
}) {
  const colorMap = {
    orange: "bg-[var(--orange)] text-white border-2 border-[var(--black)]",
    blue: "bg-[var(--blue)] text-[var(--black)] border-2 border-[var(--black)]",
    lavender: "bg-[var(--lavender)] text-[var(--black)] border-2 border-[var(--black)]",
    green: "bg-[var(--green)] text-white border-2 border-[var(--black)]",
    lime: "bg-[var(--lime)] text-[var(--black)] border-2 border-[var(--black)]",
    cream: "bg-[var(--cream)] text-[var(--black)] border-2 border-[var(--black)]",
    black: "bg-[var(--black)] text-white border-2 border-white",
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-display font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_var(--black)] select-none transition-transform hover:scale-105 ${colorMap[color]} ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      {children}
    </div>
  );
}
