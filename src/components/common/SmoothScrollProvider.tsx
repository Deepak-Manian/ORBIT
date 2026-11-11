import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Disable on touch-only mobile devices if preferred, but Lenis works great across modern viewports
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let frameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

