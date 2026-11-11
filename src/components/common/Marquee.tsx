import { ReactNode } from "react";

interface MarqueeProps {
  children?: ReactNode;
  items?: string[];
  separator?: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export function Marquee({
  items = [
    "YOUR CAREER",
    "YOUR INTELLIGENCE",
    "YOUR NEXT MOVE",
    "8 SPECIALIZED AGENTS",
    "NO ROBOT SPAM",
    "EVIDENCE BEFORE CONFIDENCE",
    "100% PRIVATE BYOA",
    "INDIA-FIRST SIGNALS",
  ],
  separator = "✳",
  speed = "normal",
  direction = "left",
  className = "",
  bgColor = "bg-[var(--black)]",
  textColor = "text-white",
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_45s_linear_infinite]",
    normal: "animate-[marquee_25s_linear_infinite]",
    fast: "animate-[marquee_15s_linear_infinite]",
  }[speed];

  const directionClass = direction === "right" ? "[animation-direction:reverse]" : "";

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-3.5 border-y-2 border-[var(--black)] ${bgColor} ${textColor} ${className}`}
      aria-hidden="true"
    >
      <div className={`flex w-fit whitespace-nowrap ${speedClass} ${directionClass}`}>
        {/* Sequence 1 */}
        <div className="flex items-center gap-6 shrink-0 font-display font-black text-sm md:text-base uppercase tracking-wider">
          {items.map((item, idx) => (
            <span key={`seq1-${idx}`} className="inline-flex items-center gap-6">
              <span>{item}</span>
              <span className="text-[var(--orange)] text-sm not-italic">{separator}</span>
            </span>
          ))}
        </div>
        {/* Sequence 2 for continuous loop */}
        <div className="flex items-center gap-6 shrink-0 font-display font-black text-sm md:text-base uppercase tracking-wider ml-6">
          {items.map((item, idx) => (
            <span key={`seq2-${idx}`} className="inline-flex items-center gap-6">
              <span>{item}</span>
              <span className="text-[var(--orange)] text-sm not-italic">{separator}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

