"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { setLSDone } from "@/lib/loading-signal";

const SESSION_KEY = "smnralf_loaded";
const CHAR_MS     = 10;   // ms per character typed
const HARD_MS     = 6000; // 6 s hard cap — forces exit regardless

// ── GitHub dark palette ───────────────────────────────────────
const GH = {
  bg:     "#0d1117",
  text:   "#e6edf3",
  muted:  "#8b949e",
  blue:   "#79c0ff",
  orange: "#ffa657",
  green:  "#3fb950",
  barOn:  "#238636",
  barOff: "#21262d",
} as const;

// ── Syntax-colored line rendering ─────────────────────────────
// Returns progressively colored JSX as `len` chars are revealed.

function renderLine(text: string, len = text.length): React.ReactNode {
  const t = text.slice(0, len);
  if (!t) return null;

  /* commit <hash> */
  if (text.startsWith("commit ")) {
    const sp = "commit ".length;
    return (
      <>
        <span style={{ color: GH.muted }}>{t.slice(0, Math.min(sp, len))}</span>
        {len > sp && <span style={{ color: GH.blue }}>{t.slice(sp)}</span>}
      </>
    );
  }

  /* Author: smnralf <email> */
  if (text.startsWith("Author: smnralf")) {
    const a = 8, b = 15; // segment boundaries
    return (
      <>
        <span style={{ color: GH.muted  }}>{t.slice(0, Math.min(a, len))}</span>
        {len > a && <span style={{ color: GH.orange }}>{t.slice(a, Math.min(b, len))}</span>}
        {len > b && <span style={{ color: GH.muted  }}>{t.slice(b)}</span>}
      </>
    );
  }

  /* feat: <message> */
  if (text.startsWith("    feat: ")) {
    const sp = "    feat: ".length;
    return (
      <>
        <span style={{ color: GH.muted }}>{t.slice(0, Math.min(sp, len))}</span>
        {len > sp && <span style={{ color: GH.text }}>{t.slice(sp)}</span>}
      </>
    );
  }

  /* remote: … */
  if (text.startsWith("remote:")) {
    return <span style={{ color: GH.green }}>{t}</span>;
  }

  /* Date / bullets / Pushing → muted */
  const isMuted =
    text.startsWith("Date:") ||
    text.startsWith("    -") ||
    text.startsWith("Pushing");

  return <span style={{ color: isMuted ? GH.muted : GH.text }}>{t}</span>;
}

// ── Progress bar ───────────────────────────────────────────────

function Bar({ pct }: { pct: number }) {
  const TOTAL = 18;
  const on  = Math.round((pct / 100) * TOTAL);
  const off = TOTAL - on;

  const label =
    pct < 40  ? "· uploading assets..."   :
    pct < 70  ? "· bundling modules..."    :
    pct < 90  ? "· optimizing..."          :
    pct < 100 ? "· finalizing..."          :
    "· done.";

  return (
    <span>
      <span style={{ color: GH.text   }}>[</span>
      <span style={{ color: GH.barOn  }}>{"█".repeat(on)}</span>
      <span style={{ color: GH.barOff }}>{"░".repeat(off)}</span>
      <span style={{ color: GH.text   }}>] </span>
      <span style={{ color: GH.text   }}>{String(pct).padStart(3)}%</span>
      <span style={{ color: GH.muted  }}> {label}</span>
    </span>
  );
}

// ── Main component ─────────────────────────────────────────────

interface CLine { id: number; node: React.ReactNode }
let _seq = 0;
const nid = () => ++_seq;

export default function LoadingScreen() {
  /* shouldRender starts false — avoids hydration mismatch.
     Set to true inside useEffect after sessionStorage check.
     The screen renders fully visible the moment it mounts,
     then dismisses after the sequence. */
  const [shouldRender, setShouldRender] = useState(false);
  const [lines,        setLines]        = useState<CLine[]>([]);
  const [active,       setActive]       = useState<React.ReactNode>(null);
  const [barPct,       setBarPct]       = useState<number | null>(null);
  const [exiting,      setExiting]      = useState(false);

  const alive  = useRef(true);
  const inited = useRef(false);
  const kills  = useRef<(() => void)[]>([]);

  // ── Utility helpers ────────────────────────────────────────

  /* setState only if component is still mounted */
  function safe(fn: () => void) { if (alive.current) fn(); }

  /* Schedule a callback, register its cancel */
  function after(ms: number, fn: () => void) {
    const t = setTimeout(() => safe(fn), ms);
    kills.current.push(() => clearTimeout(t));
  }

  /* Commit a completed line to the output stack */
  function addLine(node: React.ReactNode) {
    safe(() => {
      setActive(null);
      setLines(prev => [...prev, { id: nid(), node }]);
    });
  }

  /* Add an invisible blank line (maintains line-height rhythm) */
  function blank() {
    addLine(<span style={{ visibility: "hidden" }} aria-hidden>x</span>);
  }

  /* Reveal `text` character by character, then commit to lines */
  function typeText(text: string, cb: () => void) {
    let i = 0;
    const iv = setInterval(() => {
      if (!alive.current) { clearInterval(iv); return; }
      i++;
      setActive(renderLine(text, i));
      if (i >= text.length) {
        clearInterval(iv);
        addLine(renderLine(text));
        cb();
      }
    }, CHAR_MS);
    kills.current.push(() => clearInterval(iv));
  }

  /* Drive progress bar through five phases with stutter at 62–71% */
  function driveProgress(cb: () => void) {
    safe(() => setBarPct(0));
    let pct = 0;

    // [target%, msPerPoint | "stutter"]
    const phases: Array<[number, number | "stutter"]> = [
      [35,  8],          // 0–35   fast    ~280 ms
      [62,  15],         // 35–62  medium  ~405 ms
      [71,  "stutter"],  // 62–71  STUTTER ~600 ms (the character)
      [89,  17],         // 71–89  med-fast ~306 ms
      [100, 18],         // 89–100 fast    ~198 ms
    ];

    let pi = 0;

    function runPhase() {
      if (pi >= phases.length) {
        /* Commit bar as static completed line, hide live bar */
        const finalNode = <Bar pct={100} />;
        safe(() => {
          setBarPct(null);
          setActive(null);
          setLines(prev => [...prev, { id: nid(), node: finalNode }]);
        });
        cb();
        return;
      }

      const [target, speed] = phases[pi];

      if (speed === "stutter") {
        /* Random per-step delay to simulate a real hung deploy */
        function step() {
          if (!alive.current) return;
          if (pct >= target) { pi++; runPhase(); return; }
          pct++;
          safe(() => setBarPct(pct));
          const hang  = Math.random() < 0.4;
          const delay = hang ? 40 + Math.floor(Math.random() * 80) : 30;
          after(delay, step);
        }
        step();
      } else {
        const iv = setInterval(() => {
          if (!alive.current) { clearInterval(iv); return; }
          pct++;
          safe(() => setBarPct(pct));
          if (pct >= target) { clearInterval(iv); pi++; runPhase(); }
        }, speed);
        kills.current.push(() => clearInterval(iv));
      }
    }

    runPhase();
  }

  function doExit() { safe(() => setExiting(true)); }

  // ── Sequence ───────────────────────────────────────────────
  // Nested callbacks = precise control over timing without
  // fighting React batching or accumulated-delay drift.

  function runSequence() {
    /* Phase 1 — Commit block */
    addLine(renderLine("commit a3f9c2e")); // instant, no typing

    typeText("Author: smnralf <hi@smnralf.dev>", () => {
      typeText("Date:   Wed Jun 2026", () => {
        blank();
        after(100, () => {
          typeText("    feat: ship portfolio to production", () => {
            blank();
            after(100, () => {
              typeText("    - redesign from scratch", () => {
                typeText("    - add human, remove bugs", () => {
                  typeText("    - status: open for freelance", () => {

                    /* Phase 2 — Push + progress bar */
                    after(400, () => {
                      blank();
                      typeText("Pushing to origin/main...", () => {
                        after(300, () => {
                          driveProgress(() => {

                            /* Phase 3 — Deploy confirmation */
                            after(300, () => {
                              blank();
                              typeText("remote: deployed to smnralf.dev  ✓", () => {
                                after(600, doExit); // breathe, then wipe
                              });
                            });
                          });
                        });
                      });
                    });

                  });
                });
              });
            });
          });
        });
      });
    });
  }

  // ── Effects ───────────────────────────────────────────────

  /* Cleanup on unmount */
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      kills.current.forEach(k => k());
    };
  }, []);

  /* One-time init — guarded against React Strict Mode double-invoke */
  useEffect(() => {
    if (inited.current) return;
    inited.current = true;

    const isDev = process.env.NODE_ENV === "development";

    /* Mobile: skip loading screen entirely, stay hidden */
    if (window.matchMedia("(pointer: coarse)").matches) {
      setLSDone();
      window.dispatchEvent(new Event("ls:done"));
      return;
    }

    /* Prod: skip if already shown this browser session */
    if (!isDev && sessionStorage.getItem(SESSION_KEY)) {
      setLSDone();
      window.dispatchEvent(new CustomEvent("ls:done"));
      return;
    }

    /* Prod: mark seen so same-session refreshes skip it */
    if (!isDev) sessionStorage.setItem(SESSION_KEY, "1");

    setShouldRender(true);

    /* 6 s hard cap — forces exit if something hangs */
    after(HARD_MS, doExit);

    /* Small initial paint delay, then start typing */
    after(80, runSequence);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!shouldRender) return null;

  return (
    <motion.div
      suppressHydrationWarning
      className="fixed inset-0 z-[9999] flex items-center justify-center select-none"
      style={{ backgroundColor: GH.bg }}
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={exiting ? { clipPath: "inset(100% 0 0% 0)" } : { clipPath: "inset(0 0 0% 0)" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (exiting) {
          setLSDone();
          window.dispatchEvent(new CustomEvent("ls:done"));
          /* Give Hero time to receive event before unmount */
          setTimeout(() => setShouldRender(false), 100);
        }
      }}
    >
      {/* Subtle grain — matches site texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Terminal output */}
      <div
        className="w-full max-w-[680px] px-6 sm:px-8 font-mono text-[12px] sm:text-[14px] leading-6"
        style={{ color: GH.text }}
      >
        {/* Committed / completed lines */}
        {lines.map(l => (
          <div key={l.id}>{l.node}</div>
        ))}

        {/* Live progress bar (replaced by static line on completion) */}
        {barPct !== null && (
          <div><Bar pct={barPct} /></div>
        )}

        {/* Currently typing line + blinking cursor */}
        {active && (
          <div>
            {active}
            <span
              className="animate-cursor-blink"
              style={{ color: GH.text, marginLeft: "1px" }}
            >
              ▋
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
