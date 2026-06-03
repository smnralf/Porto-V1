"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";

/* Characters used during scramble phase */
const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#&?";

interface ScrambleTextProps {
  text: string;
  /** Total scramble duration in ms (default 700) */
  duration?: number;
  /** Delay before scramble starts in ms (default 0) */
  delay?: number;
  /** If true, begins with all-random chars and resolves to `text` */
  startRandom?: boolean;
  className?: string;
  onComplete?: () => void;
}

function randomChar() {
  return POOL[Math.floor(Math.random() * POOL.length)];
}

export default function ScrambleText({
  text,
  duration = 700,
  delay = 0,
  startRandom = false,
  className,
  onComplete,
}: ScrambleTextProps) {
  const prefersReduced = useReducedMotion();
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const initial = startRandom
    ? text.split("").map((c) => (c === " " || c === "." || c === "_" ? c : randomChar())).join("")
    : text;

  const [display, setDisplay] = useState(initial);

  useEffect(() => {
    /* Respect prefers-reduced-motion */
    if (prefersReduced) {
      setDisplay(text);
      onCompleteRef.current?.();
      return;
    }

    let tween: gsap.core.Tween | null = null;
    const proxy = { progress: 0 };

    function start() {
      tween = gsap.to(proxy, {
        progress: 1,
        duration: duration / 1000,
        ease: "none",
        onUpdate() {
          const p = proxy.progress;
          const result = text
            .split("")
            .map((char, i) => {
              /* Preserve punctuation always */
              if (char === " " || char === "." || char === "_") return char;
              /* Lock characters in left-to-right as progress advances */
              const lockThreshold = (i + 1) / text.replace(/[. _]/g, "").length;
              if (p >= lockThreshold) return char;
              return randomChar();
            })
            .join("");
          setDisplay(result);
        },
        onComplete() {
          setDisplay(text);
          onCompleteRef.current?.();
        },
      });
    }

    let timer: ReturnType<typeof setTimeout>;
    if (delay > 0) {
      timer = setTimeout(start, delay);
    } else {
      start();
    }

    return () => {
      clearTimeout(timer);
      tween?.kill();
    };
  }, [text, duration, delay, prefersReduced]);

  return <span className={className}>{display}</span>;
}
