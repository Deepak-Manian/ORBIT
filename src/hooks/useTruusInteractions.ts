import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTruusInteractions() {
  useEffect(() => {
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    // ----------------- 1. Momentum-based Cards & Sticker Hover Inertia -----------------
    const xyMultiplier = 25;
    const rotationMultiplier = 18;
    const clampXY = gsap.utils.clamp(-60, 60);
    const clampRot = gsap.utils.clamp(-35, 35);

    let prevX = 0,
      prevY = 0;
    let velX = 0,
      velY = 0;
    let rafId: number | null = null;

    const onWindowMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        velX = e.clientX - prevX;
        velY = e.clientY - prevY;
        prevX = e.clientX;
        prevY = e.clientY;
        rafId = null;
      });
    };

    window.addEventListener("mousemove", onWindowMouseMove);

    // Attach hover inertia to every [data-inertia-element]
    const elements = document.querySelectorAll("[data-inertia-element]");
    const listeners: { el: Element; onEnter: (e: Event) => void }[] = [];

    elements.forEach((el) => {
      const onEnter = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const target = (el.querySelector("[data-inertia-child]") as HTMLElement) || (el as HTMLElement);
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const offsetX = mouseEvent.clientX - centerX;
        const offsetY = mouseEvent.clientY - centerY;

        const rawTorque = offsetX * velY - offsetY * velX;
        const leverDist = Math.hypot(offsetX, offsetY) || 1;
        const angularForce = rawTorque / leverDist;

        const shiftX = clampXY(velX * xyMultiplier * 0.05);
        const shiftY = clampXY(velY * xyMultiplier * 0.05);
        const rot = clampRot(angularForce * rotationMultiplier * 0.4);

        gsap.to(target, {
          x: shiftX,
          y: shiftY,
          rotation: rot,
          duration: 0.5,
          ease: "elastic.out(1, 0.45)",
          overwrite: "auto",
          onComplete: () => {
            gsap.to(target, {
              x: 0,
              y: 0,
              rotation: 0,
              duration: 0.6,
              ease: "elastic.out(1.2, 0.5)",
            });
          },
        });
      };

      el.addEventListener("mouseenter", onEnter);
      listeners.push({ el, onEnter });
    });

    // ----------------- 2. Accordion Fan-out Cards Physics (initMWG25) -----------------
    const servicesRow = document.querySelector(".services__row-cards") as HTMLElement | null;
    let cleanupServices: (() => void) | null = null;

    if (servicesRow) {
      const cards = servicesRow.querySelectorAll(".services-card__wrap") as NodeListOf<HTMLElement>;
      const cardsCount = cards.length;
      let currentPortion = -1;

      const onServicesMouseMove = (e: MouseEvent) => {
        if (window.innerWidth < 1024) return;
        const rect = servicesRow.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(1, mouseX / rect.width));
        const activeIdx = Math.floor(percent * cardsCount);

        if (activeIdx !== currentPortion && activeIdx >= 0 && activeIdx < cardsCount) {
          currentPortion = activeIdx;
          cards.forEach((card, idx) => {
            const isCenter = idx === activeIdx;
            const xOffset = isCenter ? 0 : 55 / (idx - activeIdx);
            gsap.to(card, {
              xPercent: xOffset,
              scale: isCenter ? 1.08 : 0.98,
              zIndex: isCenter ? 30 : 10,
              duration: 0.7,
              ease: "elastic.out(1, 0.75)",
              overwrite: "auto",
            });
          });
        }
      };

      const onServicesMouseLeave = () => {
        currentPortion = -1;
        cards.forEach((card) => {
          gsap.to(card, {
            xPercent: 0,
            scale: 1,
            zIndex: 1,
            duration: 0.7,
            ease: "elastic.out(1, 0.75)",
            overwrite: "auto",
          });
        });
      };

      servicesRow.addEventListener("mousemove", onServicesMouseMove);
      servicesRow.addEventListener("mouseleave", onServicesMouseLeave);

      cleanupServices = () => {
        servicesRow.removeEventListener("mousemove", onServicesMouseMove);
        servicesRow.removeEventListener("mouseleave", onServicesMouseLeave);
      };
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onWindowMouseMove);
      listeners.forEach(({ el, onEnter }) => el.removeEventListener("mouseenter", onEnter));
      if (cleanupServices) cleanupServices();
    };
  }, []);
}

