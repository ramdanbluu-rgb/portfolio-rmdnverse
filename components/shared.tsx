import {
  Sparkles,
  BrainCircuit,
  Zap,
  ShieldCheck,
  Database,
  Code2,
  ServerCog,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const TechMarquee = ({ items }: { items: string[] }) => (
  <div className="relative overflow-hidden border-y border-void py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div className="flex w-max animate-marquee gap-14">
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="font-mono text-sm uppercase tracking-widest text-outline whitespace-nowrap"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

type Feature = { icon: LucideIcon; title: string; desc: string };

export const AI_FEATURES: Feature[] = [
  {
    icon: BrainCircuit,
    title: "LLM Integration",
    desc: "RAG pipelines, agents, and structured outputs wired into real products.",
  },
  {
    icon: Zap,
    title: "Inference at the Edge",
    desc: "Low-latency predictions served close to users with smart caching.",
  },
  {
    icon: ShieldCheck,
    title: "Guardrails by Default",
    desc: "Validation, rate limits, and audit trails on every AI touchpoint.",
  },
];

export const EXPERTISE: Array<{
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  span?: string;
}> = [
  {
    icon: Database,
    title: "API & Database Architecture",
    desc: "Scalable REST & GraphQL with relational and NoSQL stores.",
    tags: ["PostgreSQL", "MongoDB", "Redis"],
    span: "md:col-span-2",
  },
  {
    icon: ServerCog,
    title: "Backend Logic",
    desc: "Robust, tested server-side systems.",
    tags: ["Laravel", "Node.js"],
  },
  {
    icon: ShieldCheck,
    title: "DevOps & CI/CD",
    desc: "Automated pipelines, zero-downtime deploys.",
    tags: ["Docker", "GitHub Actions"],
  },
  {
    icon: Code2,
    title: "Frontend Interfaces",
    desc: "Responsive, accessible, performant UIs.",
    tags: ["React", "Next.js", "TypeScript"],
    span: "md:col-span-2",
  },
];

export const AI_BADGE = Sparkles;