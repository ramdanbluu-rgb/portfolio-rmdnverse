"use client";

import { useEffect, useRef, useState } from "react";

type Line = { type: "cmd" | "ok" | "info" | "out"; text: string };

const SCRIPT: Line[] = [
  { type: "cmd", text: "cd website-desa && npm run dev" },
  { type: "ok", text: "✔ Next.js 15 started — localhost:3000" },
  { type: "cmd", text: "node gmq-bot/index.js" },
  { type: "ok", text: "✔ Telegram webhook registered — GMQ Bot online" },
  { type: "info", text: "▲ Google Sheets API connected (service account)" },
  { type: "cmd", text: "php -S localhost:8000 -t aplikasi-pembukuan" },
  { type: "ok", text: "✔ Pembukuan ISP server ready — MySQL connected" },
  { type: "out", text: "● 3 project aktif • PKL selesai • Siap kolaborasi" },
];

const COLORS: Record<Line["type"], string> = {
  cmd: "text-primary",
  ok: "text-emerald-400",
  info: "text-on-surface-variant",
  out: "text-accent-red",
};

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typed, setTyped] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;

    const wait = (ms: number) =>
      new Promise<void>((res) => {
        timeout = setTimeout(res, ms);
      });

    async function run() {
      while (!cancelled) {
        setLines([]);
        setTyped("");
        for (const line of SCRIPT) {
          if (cancelled) return;
          if (line.type === "cmd") {
            for (let i = 0; i <= line.text.length; i++) {
              if (cancelled) return;
              setTyped(line.text.slice(0, i));
              await wait(34 + Math.random() * 46);
            }
            await wait(350);
            setLines((prev) => [...prev, line]);
            setTyped("");
          } else {
            await wait(420);
            if (cancelled) return;
            setLines((prev) => [...prev, line]);
          }
        }
        await wait(4200);
      }
    }
    run();

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  const currentCmd = SCRIPT.find(
    (l) => l.type === "cmd" && !lines.includes(l)
  );

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl border border-void bg-[#0a0a0a]/90 backdrop-blur-sm shadow-[0_0_80px_-20px_rgba(255,255,255,0.08)] overflow-hidden"
    >
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 h-10 border-b border-void">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-outline">
          portfolio — zsh
        </span>
      </div>
      {/* body */}
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[240px] md:min-h-[260px]">
        {lines.map((line, i) => (
          <div key={i} className={COLORS[line.type]}>
            {line.type === "cmd" ? <span>$ </span> : null}
            {line.text}
          </div>
        ))}
        {!currentCmd ? null : (
          <div className="text-primary">
            <span>$ </span>
            {typed}
            <span className="animate-caret text-accent-red">▍</span>
          </div>
        )}
        {currentCmd === undefined && lines.length >= SCRIPT.length ? (
          <div className="text-primary">
            <span>$ </span>
            <span className="animate-caret text-accent-red">▍</span>
          </div>
        ) : null}
      </div>

      {/* glow accent */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
    </div>
  );
}