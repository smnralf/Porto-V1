"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "button" | "card";

const LERP_DOT  = 0.75;
const LERP_RING = 0.12;

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse   = useRef({ x: -100, y: -100 });
  const dotPos  = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const shownRef = useRef(false);

  const [isDesktop, setIsDesktop] = useState(false);
  const [visible,   setVisible]   = useState(false);
  const [state,     setState]     = useState<CursorState>("default");

  /* Fix 1 — desktop-only gate, checked once on mount */
  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!shownRef.current) { shownRef.current = true; setVisible(true); }
    };

    /* Fix 2 — mouseover sets state; mouseleave on document resets to default
       so VIEW label never gets stuck when cursor exits the window */
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest("a, button, [role=button]")) setState("button");
      else if (t.closest("article"))              setState("card");
      else                                         setState("default");
    };

    const onLeave = () => setState("default");

    window.addEventListener("mousemove",       onMove,  { passive: true });
    document.addEventListener("mouseover",     onOver,  { passive: true });
    document.addEventListener("mouseleave",    onLeave, { passive: true });

    let raf: number;
    const tick = () => {
      dotPos.current.x  = lerp(dotPos.current.x,  mouse.current.x, LERP_DOT);
      dotPos.current.y  = lerp(dotPos.current.y,  mouse.current.y, LERP_DOT);
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, LERP_RING);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, LERP_RING);

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        const half = ringRef.current.offsetWidth / 2;
        ringRef.current.style.transform =
          `translate(${ringPos.current.x - half}px, ${ringPos.current.y - half}px)`;
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove",    onMove);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  const ringSize  = state === "button" ? 48 : state === "card" ? 40 : 32;
  const ringBlend = state === "button" ? "difference" : "normal";
  const ringFill  = state === "card"   ? "rgba(255,77,0,0.08)" : "transparent";

  return (
    <>
      {/* Dot */}
      <div
        suppressHydrationWarning
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[10001] h-2 w-2 rounded-full bg-ember"
        style={{ opacity: visible ? 1 : 0, willChange: "transform" }}
      />

      {/* Ring — VIEW label uses opacity transition, never conditional mount,
          so it can never get "stuck" from a missed unmount */}
      <div
        suppressHydrationWarning
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full border border-ember/70 flex items-center justify-center"
        style={{
          width: ringSize,
          height: ringSize,
          opacity: visible ? 1 : 0,
          background: ringFill,
          mixBlendMode: ringBlend as React.CSSProperties["mixBlendMode"],
          transition: "width 0.22s ease, height 0.22s ease, background 0.22s ease",
          willChange: "transform",
        }}
      >
        <span
          className="text-[7px] font-black uppercase tracking-widest text-ember/80 select-none"
          style={{
            opacity: state === "card" ? 1 : 0,
            transition: "opacity 0.15s ease",
          }}
        >
          VIEW
        </span>
      </div>
    </>
  );
}
