import { cn } from "@/lib/utils";

const STATUS: Record<string, { bg: string; text: string; border: string }> = {
  "Case Study": { bg: "#06B6D4", text: "#111",    border: "#111" },
  Prototype:    { bg: "#7C3AED", text: "#fff",    border: "#111" },
  Demo:         { bg: "#F4F1E8", text: "#111",    border: "#111" },
  Concept:      { bg: "#222226", text: "#B8B2A7", border: "rgba(245,242,234,0.15)" },
  Live:         { bg: "#B6FF4D", text: "#111",    border: "#111" },
};

export default function Badge({
  children,
  status,
  className,
}: {
  children: React.ReactNode;
  status?: string;
  className?: string;
}) {
  const s = status ? (STATUS[status] ?? STATUS["Concept"]) : STATUS["Concept"];
  return (
    <span
      className={cn("inline-flex items-center px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider border", className)}
      style={{ background: s.bg, color: s.text, borderColor: s.border }}
    >
      {children}
    </span>
  );
}
