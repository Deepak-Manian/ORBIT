import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Detect [data-cursor-text]
      const target = e.target as HTMLElement | null;
      if (target) {
        const cardTarget = target.closest("[data-cursor-text]") as HTMLElement | null;
        setHoveredText(cardTarget ? cardTarget.getAttribute("data-cursor-text") : null);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth lerp ticker
    const tick = () => {
      currentX += (mouseX - currentX) * 0.22;
      currentY += (mouseY - currentY) * 0.22;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200 will-change-transform ${
        isVisible && hoveredText ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      style={{ transform: "translate3d(-100px, -100px, 0)" }}
    >
      <div className="w-20 h-20 rounded-full bg-[var(--orange)] text-[var(--black)] font-display font-black text-[11px] tracking-wider uppercase border-2 border-[var(--black)] shadow-[3px_3px_0px_var(--black)] grid place-items-center select-none animate-[scaleUp_0.15s_ease-out]">
        <span>{hoveredText}</span>
      </div>
    </div>
  );
}
