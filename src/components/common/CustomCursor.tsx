import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [customText, setCustomText] = useState<string>("");
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Only run on non-touch devices with fine pointer
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    cursor.setAttribute("data-cursor-init", "true");

    const cursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mousePos = { x: cursorPos.x, y: cursorPos.y };
    const speed = 0.16;

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;

      // Find any element with data-custom-cursor or clickable elements
      const target = e.target as HTMLElement | null;
      const customEl = target?.closest("[data-custom-cursor]") as HTMLElement | null;
      const clickableEl = target?.closest("a, button, [role='button'], [data-hover]") as HTMLElement | null;

      if (customEl) {
        const type = customEl.getAttribute("data-custom-cursor") || "false";
        if (type === "mute") {
          cursor.setAttribute("data-cursor-type", isMuted ? "mute-true" : "mute-false");
        } else if (type === "drag" || type === "click" || type === "home") {
          cursor.setAttribute("data-cursor-type", type);
        } else {
          // Custom text tag like "view", "lens", "scout", "explore"
          setCustomText(type);
          cursor.setAttribute("data-cursor-type", "text");
        }
      } else if (clickableEl && !clickableEl.closest("[data-no-cursor-tag]")) {
        cursor.setAttribute("data-cursor-type", "click");
      } else {
        cursor.setAttribute("data-cursor-type", "false");
      }
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const muteEl = target?.closest("[data-custom-cursor='mute']") as HTMLElement | null;
      if (muteEl) {
        setIsMuted((prev) => {
          const next = !prev;
          cursor.setAttribute("data-cursor-type", next ? "mute-true" : "mute-false");
          return next;
        });
      }
    };

    const onMouseLeave = () => {
      cursor.setAttribute("data-cursor-init", "false");
    };

    const onMouseEnter = () => {
      cursor.setAttribute("data-cursor-init", "true");
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // GSAP Ticker for buttery smooth 120Hz lerp
    const tick = () => {
      const dt = 1 - Math.pow(1 - speed, gsap.ticker.deltaRatio());
      cursorPos.x += (mousePos.x - cursorPos.x) * dt;
      cursorPos.y += (mousePos.y - cursorPos.y) * dt;
      xSet(cursorPos.x);
      ySet(cursorPos.y);
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      gsap.ticker.remove(tick);
    };
  }, [isMuted]);

  return (
    <div
      ref={cursorRef}
      data-cursor-type="false"
      data-cursor-init="false"
      className="custom-cursor fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{ transform: "translate(-100px, -100px)" }}
    >
      {/* 1. Mute / Audio Speech Bubble Cursor */}
      <div className="cursor-mute text-[var(--color-lightgreen)] relative w-24 h-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 166 170"
          fill="none"
          className="w-full h-full drop-shadow-[0_6px_16px_rgba(0,0,0,0.3)] text-[var(--color-lightgreen)]"
        >
          <path
            d="M149.641 82.9313C147.433 95.9844 149.259 108.779 153.674 121.766C153.923 122.483 154.338 123.751 153.915 124.134L153.874 124.176C153.542 124.518 152.761 124.476 151.824 124.293C148.188 123.617 144.885 122.791 141.249 122.299C130.476 121.34 119.561 122.875 109.693 127.612C101.194 131.449 95.4749 136.262 90.0467 143.81C83.8715 150.858 81.174 157.889 80.4685 167.306C80.2776 170.684 78.7504 170.934 77.2232 167.706C74.1356 161.409 71.546 154.636 67.3462 149.015C63.2211 143.752 58.7972 138.455 53.535 134.393C50.6383 132.241 47.9574 129.789 44.8864 127.879C43.3094 126.887 41.5083 126.303 39.9147 125.385C34.3786 121.54 27.971 119.213 21.5468 117.328C15.1807 115.21 8.54067 114.042 1.83427 113.567C0.489666 113.533 -0.647434 113.425 0.423266 111.957C1.41927 110.689 2.43187 109.488 3.31997 108.128C5.68547 104.575 7.90157 100.839 8.83117 96.5683C9.37897 93.7992 10.2671 91.0718 10.375 88.2443C10.3252 81.6218 8.64857 74.8324 4.74757 69.4277C2.16627 65.8996 3.43617 65.0989 7.43677 65.1656C14.3922 65.1656 21.1318 63.364 27.722 61.2121C34.196 59.2687 40.919 57.659 46.4302 53.547C52.9706 49.0931 59.3118 44.1721 64.3167 38C65.5119 36.5153 66.2672 34.7304 67.313 33.1457C69.0643 30.7269 71.0978 28.4832 72.293 25.6974C73.9364 22.2611 74.7581 18.391 75.7209 14.7044C76.3434 12.1355 77.0655 9.56653 77.3477 6.93087C77.7544 5.36282 76.7252 -0.275484 78.4682 -0.000241284C79.4559 0.216617 80.7175 2.25175 81.4728 3.35272C83.2739 5.99672 85.1165 8.62403 86.7848 11.3598C88.8432 14.9713 92.1549 17.5069 95.1927 20.1842C96.9606 21.7523 98.4878 23.704 100.413 25.1469C102.314 26.5982 104.455 27.6575 106.53 28.8252C112.897 32.9038 120.043 35.1641 127.106 37.6997C129.903 38.784 132.833 39.4429 135.796 39.8432C144.586 41.0526 153.351 42.971 162.232 42.9543C164.257 43.0127 167.735 42.579 164.954 45.7818C156.115 56.8666 151.948 69.5027 149.632 82.9229L149.641 82.9313Z"
            fill="currentColor"
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center text-[var(--color-black)]">
          {isMuted ? (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </div>
      </div>

      {/* 2. Drag Tag */}
      <div className="cursor-drag">
        <div data-theme="Pink" className="tag">
          <h4 className="tag__h4 font-display font-black text-xs uppercase tracking-wider">Drag</h4>
        </div>
      </div>

      {/* 3. Click Tag */}
      <div className="cursor-click">
        <div data-theme="Pink" className="tag">
          <h4 className="tag__h4 font-display font-black text-xs uppercase tracking-wider">Click</h4>
        </div>
      </div>

      {/* 4. Home Tag */}
      <div className="cursor-home">
        <div data-theme="Pink" className="tag">
          <h4 className="tag__h4 font-display font-black text-xs uppercase tracking-wider">to Home</h4>
        </div>
      </div>

      {/* 5. Custom Word Tag (e.g. "view", "lens", "scout") */}
      <div className="cursor-text-tag">
        <div data-theme="Orange" className="tag">
          <h4 className="tag__h4 font-display font-black text-xs uppercase tracking-wider">{customText}</h4>
        </div>
      </div>
    </div>
  );
}
