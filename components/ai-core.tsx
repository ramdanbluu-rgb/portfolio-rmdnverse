"use client";

import { motion } from "framer-motion";

const NODES = [
  { x: 200, y: 40 },
  { x: 80, y: 110 },
  { x: 320, y: 110 },
  { x: 140, y: 190 },
  { x: 260, y: 190 },
  { x: 200, y: 120 },
];

const EDGES: Array<[number, number]> = [
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [1, 3],
  [2, 4],
];

export default function AiCore() {
  return (
    <div className="relative flex items-center justify-center">
      {/* orbit rings */}
      <div className="absolute w-[320px] h-[320px] rounded-full border border-void animate-orbit">
        <span className="absolute top-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-white/80" />
      </div>
      <div className="absolute w-[240px] h-[240px] rounded-full border border-void animate-orbit-reverse">
        <span className="absolute bottom-0 left-1/2 w-1.5 h-1.5 -ml-[3px] rounded-full bg-accent-red" />
      </div>

      <svg
        viewBox="0 0 400 260"
        className="relative w-full max-w-[420px]"
        role="img"
        aria-label="Animated neural network diagram"
      >
        {EDGES.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="#444748"
            strokeWidth={1}
            strokeDasharray="4 6"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{
              duration: 1.6 + (i % 3) * 0.4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {NODES.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={i === 5 ? 14 : 8}
            fill={i === 5 ? "#ffffff" : "#111111"}
            stroke={i === 5 ? "#ffffff" : "#8e9192"}
            strokeWidth={1.5}
            animate={
              i === 5
                ? { scale: [1, 1.15, 1] }
                : { opacity: [0.55, 1, 0.55] }
            }
            transition={{
              duration: i === 5 ? 2.4 : 2 + i * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          />
        ))}
      </svg>
    </div>
  );
}