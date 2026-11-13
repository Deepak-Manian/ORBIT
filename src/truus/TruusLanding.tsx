import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import "./truus.css";
import "./orbit-extra.css";
import { Floating } from "./Floating";
import { SiteHeader } from "./SiteHeader";
import { HomeHeader } from "./HomeHeader";
import { HorizontalWords } from "./HorizontalWords";
import { Future } from "./Future";
import { Flick } from "./Flick";
import { Team } from "./Team";
import { Services } from "./Services";
import { Clients } from "./Clients";
import { Footer } from "./Footer";
import { initTruusMotion, type TruusMotion } from "./motion";

/** State attributes the reference's CSS + JS read from <body>. */
const BODY_ATTRS: Record<string, string> = {
  "data-theme-page": "dark",
  "data-theme-nav": "dark",
  "data-bg-nav": "video",
  "data-transition": "not-active",
  "data-scrolling-started": "false",
  "data-scrolling-direction": "down",
};

export function TruusLanding({ onEnterApp }: { onEnterApp: () => void }) {
  const motion = useRef<TruusMotion | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.add("truus-on");
    body.classList.add("body");
    for (const [k, v] of Object.entries(BODY_ATTRS)) body.setAttribute(k, v);
    const prevRestoration = history.scrollRestoration;
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const m = initTruusMotion();
    motion.current = m;
    return () => {
      m.destroy();
      motion.current = null;
      html.classList.remove("truus-on");
      body.classList.remove("body");
      for (const k of Object.keys(BODY_ATTRS)) body.removeAttribute(k);
      history.scrollRestoration = prevRestoration;
    };
  }, []);

  // "Enter workspace": play the scribble page-leave transition, then swap to the app.
  const enter = () => (motion.current ? motion.current.enter(onEnterApp) : onEnterApp());

  // Anchor links scroll through Lenis; stop the browser's own hash jump (it would also trip the hash router).
  const stopHashJump = (e: MouseEvent) => {
    const a = (e.target as HTMLElement).closest("a[data-anchor-target]");
    if (a) e.preventDefault();
  };

  return (
    <div onClickCapture={stopHashJump}>
      <Floating />
      <main id="main" className="main">
        <SiteHeader onEnter={enter} />
        <div className="main-wrap" data-scroll-container="">
          <HomeHeader />
          <HorizontalWords />
          <Future />
          <Flick onEnter={enter} />
          <Team />
          <Services />
          <Clients />
          <Footer onEnter={enter} />
        </div>
      </main>
    </div>
  );
}
