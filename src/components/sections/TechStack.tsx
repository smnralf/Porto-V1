"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { techStack } from "@/data/tech-stack";
import RevealClip from "@/components/ui/RevealClip";
import Matter from "matter-js";

const allTechs = techStack.flatMap((g) =>
  g.items.map((item) => ({ name: item.name, category: g.category, primary: item.level === "primary" }))
);

interface FallingBody {
  id: number;
  width: number;
  height: number;
  tech: any;
  body: Matter.Body;
}

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const clonesRef = useRef<Record<number, HTMLDivElement>>({});
  const itemsRef = useRef<Record<number, HTMLDivElement>>({});
  
  const [fallenItems, setFallenItems] = useState<number[]>([]);
  const [fallingBodies, setFallingBodies] = useState<FallingBody[]>([]);
  
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const bodiesRef = useRef<FallingBody[]>([]);
  const wallsRef = useRef<Matter.Body[]>([]);

  useEffect(() => {
    // Initialize Physics Engine
    const engine = Matter.Engine.create();
    const runner = Matter.Runner.create();
    engineRef.current = engine;
    runnerRef.current = runner;
    
    // Add boundaries (Static bodies)
    const ground = Matter.Bodies.rectangle(0, 0, 5000, 100, { isStatic: true, friction: 0.8 });
    const topWall = Matter.Bodies.rectangle(0, 0, 5000, 100, { isStatic: true });
    const leftWall = Matter.Bodies.rectangle(0, 0, 100, 5000, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(0, 0, 100, 5000, { isStatic: true });
    wallsRef.current = [ground, topWall, leftWall, rightWall];
    
    Matter.Composite.add(engine.world, wallsRef.current);
    Matter.Runner.run(runner, engine);

    const updateWalls = () => {
      if (!sectionRef.current) return;
      const { width, height } = sectionRef.current.getBoundingClientRect();
      Matter.Body.setPosition(ground, { x: width / 2, y: height + 50 });
      Matter.Body.setPosition(topWall, { x: width / 2, y: -50 });
      Matter.Body.setPosition(leftWall, { x: -50, y: height / 2 });
      Matter.Body.setPosition(rightWall, { x: width + 50, y: height / 2 });
    };

    updateWalls();
    window.addEventListener("resize", updateWalls);

    // Sync DOM clones with physics bodies every tick
    const syncBodies = () => {
      bodiesRef.current.forEach(({ id, body, width, height }) => {
        const el = clonesRef.current[id];
        if (el) {
          el.style.transform = `translate(${body.position.x - width / 2}px, ${body.position.y - height / 2}px) rotate(${body.angle}rad)`;
        }
      });
    };
    
    Matter.Events.on(engine, "afterUpdate", syncBodies);

    // Device orientation for gravity tilt
    const handleOrientation = (e: DeviceOrientationEvent) => {
      let gravityX = 0;
      let gravityY = 1;
      
      // Check if valid accelerometer data is present
      if (e.gamma !== null && e.beta !== null) {
        gravityX = e.gamma / 45; 
        gravityY = e.beta / 45;
        
        // Clamp gravity to prevent crazy fast falling
        gravityX = Math.max(-2, Math.min(2, gravityX));
        gravityY = Math.max(-2, Math.min(2, gravityY));
      }
      
      engine.gravity.x = gravityX;
      engine.gravity.y = gravityY;
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("resize", updateWalls);
      window.removeEventListener("deviceorientation", handleOrientation);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, []);

  const handleDrop = (index: number) => {
    if (fallenItems.includes(index) || !engineRef.current) return;

    // Ask for iOS device orientation permission on first interaction
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      (DeviceOrientationEvent as any).requestPermission().catch(console.error);
    }

    const itemEl = itemsRef.current[index];
    const sectionEl = sectionRef.current;
    if (!itemEl || !sectionEl) return;

    const rect = itemEl.getBoundingClientRect();
    const sectionRect = sectionEl.getBoundingClientRect();

    // Calculate position relative to the section
    const startX = rect.left - sectionRect.left + rect.width / 2;
    const startY = rect.top - sectionRect.top + rect.height / 2;

    const body = Matter.Bodies.rectangle(startX, startY, rect.width, rect.height, {
      restitution: 0.6, // Bounciness
      friction: 0.2,
      density: 0.001,
    });

    // Random angular velocity for a fun tumble
    Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2);

    Matter.Composite.add(engineRef.current.world, body);

    const newFallen: FallingBody = {
      id: index,
      width: rect.width,
      height: rect.height,
      tech: allTechs[index],
      body,
    };

    bodiesRef.current.push(newFallen);
    setFallenItems((prev) => [...prev, index]);
    setFallingBodies((prev) => [...prev, newFallen]);
  };

  return (
    <section ref={sectionRef} id="tech" className="py-24 bg-[#020617] section-rule scroll-mt-16 relative border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <RevealClip inline>
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-6">
                My Tech Stack
              </span>
            </RevealClip>
            <RevealClip delay={0.08}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
                Tools I use to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">digital experiences.</span>
              </h2>
            </RevealClip>
            <RevealClip delay={0.15}>
              <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
                Click on any of the technologies below to knock them out of the grid and watch them fall! (Tilt your device to change gravity).
              </p>
            </RevealClip>
          </motion.div>
        </div>

        {/* Static Grid Container */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto relative pb-40">
          {allTechs.map((tech, i) => {
            const isFallen = fallenItems.includes(i);
            
            return (
              <div
                key={`tech-${i}`}
                ref={(el) => { if (el) itemsRef.current[i] = el; }}
                onClick={() => handleDrop(i)}
                className={`flex-shrink-0 flex items-center gap-3 rounded-xl border px-4 py-2.5 sm:px-5 sm:py-3 select-none ${
                  isFallen ? "opacity-0 pointer-events-none" : "cursor-pointer hover:bg-white/10 hover:border-white/20 transition-colors"
                }`}
                style={{ 
                  borderColor: "rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                <span className="text-[13px] sm:text-[14px] font-medium text-white/80 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>

      {/* Falling Clones Container (Physics Layer) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {fallingBodies.map(({ id, width, height, tech }) => (
          <div
            key={`clone-${id}`}
            ref={(el) => { if (el) clonesRef.current[id] = el; }}
            className="absolute left-0 top-0 flex items-center justify-center gap-3 rounded-xl border px-4 py-2.5 sm:px-5 sm:py-3 select-none"
            style={{ 
              width,
              height,
              borderColor: "rgba(255,255,255,0.2)",
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              // Transform is controlled directly via DOM in Matter.js loop
            }}
          >
            <span className="text-[13px] sm:text-[14px] font-bold text-white whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
