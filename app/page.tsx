"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import SiteNav from "@/components/site-nav";
import Terminal from "@/components/terminal";
import AiCore from "@/components/ai-core";
import Reveal from "@/components/reveal";
import Copyright from "@/components/copyright";
import { TechMarquee, EXPERTISE, AI_FEATURES } from "@/components/shared";
import Link from "next/link";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const TECH = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "Redis",
  "Docker",
  "GraphQL",
  "OpenAI",
  "LangChain",
  "GitHub Actions",
  "React",
];

const STATS = [
  { value: "5+", label: "Years shipping" },
  { value: "20+", label: "Systems deployed" },
  { value: "99.9%", label: "Uptime maintained" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="relative">
        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-white/[0.04] blur-[120px]" />
          <div className="absolute top-[45%] -right-40 h-[420px] w-[420px] rounded-full bg-accent-red/[0.05] blur-[120px]" />
        </div>

        {/* ================= HERO ================= */}
        <section className="relative bg-grid">
          <div className="max-w-container-max mx-auto px-gutter pt-40 pb-stack-lg grid lg:grid-cols-2 gap-16 items-center min-h-[92vh]">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 border border-void rounded-full px-3 py-1.5 mb-8 bg-[#0a0a0a]/60"
              >
                <Sparkles size={13} className="text-accent-red" />
                <span className="font-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
                  Web · Backend · AI
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="font-sans text-[clamp(40px,6vw,72px)] font-semibold leading-[1.05] tracking-tight text-primary"
              >
                Building{" "}
                <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                  intelligent systems
                </span>{" "}
                for the modern web.
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant"
              >
                I architect scalable backends, craft precise interfaces, and
                wire AI into products that actually ship — from database
                schema to deployment pipeline.
              </motion.p>

              <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#work"
                  className="group inline-flex items-center gap-2 bg-primary text-[#050505] rounded-md px-6 py-3 font-mono text-label-mono uppercase tracking-widest hover:bg-on-surface transition-colors"
                >
                  View Works
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 border border-void rounded-md px-6 py-3 font-mono text-label-mono uppercase tracking-widest text-[#e5e2e1] hover:bg-surface-void hover:border-outline-variant transition-colors"
                >
                  Contact Node
                </a>
              </motion.div>

              <motion.div
                variants={item}
                className="mt-14 flex gap-10 border-t border-void pt-8"
              >
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-semibold text-primary font-mono">
                      {s.value}
                    </div>
                    <div className="mt-1 text-caption text-outline uppercase tracking-widest text-xs">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Terminal />
            </motion.div>
          </div>
        </section>

        {/* ================= MARQUEE ================= */}
        <Reveal>
          <TechMarquee items={TECH} />
        </Reveal>

        {/* ================= EXPERTISE ================= */}
        <section id="stack" className="relative py-stack-lg">
          <div className="max-w-container-max mx-auto px-gutter">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <span className="font-mono text-label-mono text-primary border border-void rounded px-2 py-1">
                  01
                </span>
                <h2 className="text-headline-lg md:text-[28px] text-primary">
                  Technical Expertise
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EXPERTISE.map((card, i) => (
                <Reveal key={card.title} delay={i * 0.08} className={card.span}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="group h-full rounded-xl border border-void bg-surface-void p-8 hover:border-outline-variant transition-colors"
                  >
                    <card.icon
                      size={28}
                      className="text-outline group-hover:text-primary transition-colors mb-6"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-headline-lg-mobile text-primary mb-2">
                      {card.title}
                    </h3>
                    <p className="text-caption text-on-surface-variant mb-6">
                      {card.desc}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-void rounded px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-outline"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= AI ================= */}
        <section id="ai" className="relative py-stack-lg border-t border-void">
          <div className="max-w-container-max mx-auto px-gutter grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-label-mono text-primary border border-void rounded px-2 py-1">
                    02
                  </span>
                  <h2 className="text-headline-lg md:text-[28px] text-primary">
                    AI-Native Engineering
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-on-surface-variant max-w-xl">
                  Not demos — production AI. Retrieval pipelines, agents and
                  model integrations engineered with the same rigor as any
                  other backend system: typed, tested, observable.
                </p>
              </Reveal>

              <div className="mt-10 space-y-6">
                {AI_FEATURES.map((f, i) => (
                  <Reveal key={f.title} delay={0.1 + i * 0.08}>
                    <div className="flex gap-5 items-start">
                      <div className="shrink-0 w-11 h-11 rounded-lg border border-void bg-surface-void flex items-center justify-center">
                        <f.icon size={20} className="text-primary" strokeWidth={1.6} />
                      </div>
                      <div>
                        <h3 className="text-primary font-medium">{f.title}</h3>
                        <p className="text-caption text-on-surface-variant mt-1">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.15}>
              <div className="rounded-xl border border-void bg-surface-void/50 p-8">
                <AiCore />
                <div className="mt-6 flex justify-between font-mono text-[10px] uppercase tracking-widest text-outline">
                  <span>neural_mesh :: active</span>
                  <span className="text-emerald-400">8 nodes online</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= WORKS ================= */}
        <section id="work" className="relative py-stack-lg border-t border-void">
          <div className="max-w-container-max mx-auto px-gutter">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <span className="font-mono text-label-mono text-primary border border-void rounded px-2 py-1">
                  03
                </span>
                <h2 className="text-headline-lg md:text-[28px] text-primary">
                  Selected Works
                </h2>
              </div>
            </Reveal>

            <div className="flex flex-col gap-24">
              {projects.map((project) => (
                <Reveal key={project.slug}>
                  <article className="group">
                    <Link href={`/work/${project.slug}`} className="block">
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                        className="relative overflow-hidden rounded-xl border border-void bg-surface-void h-[55vh] mb-6"
                      >
                        <div
                          role="img"
                          aria-label={project.imageAlt}
                          className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-700"
                          style={{ backgroundImage: `url('${project.image}')` }}
                        />
                        <div className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-widest text-primary/80 border border-white/15 bg-black/40 backdrop-blur-sm rounded px-2 py-1">
                          {project.index} / {project.year}
                        </div>
                      </motion.div>
                    </Link>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h3 className="text-headline-lg-mobile text-primary">
                          {project.title}
                        </h3>
                        <p className="text-caption text-on-surface-variant max-w-lg mt-2">
                          {project.tagline}
                        </p>
                      </div>
                      <Link
                        className="font-mono text-label-mono uppercase border-b border-void pb-1 hover:border-primary transition-colors text-primary"
                        href={`/work/${project.slug}`}
                      >
                        View Case Study →
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer id="contact" className="relative border-t border-void bg-[#070707]">
        <div className="max-w-container-max mx-auto px-gutter py-stack-lg">
          <Reveal>
            <h2 className="text-[clamp(36px,5vw,64px)] font-semibold tracking-tight text-primary">
              Let&apos;s build something{" "}
              <span className="text-accent-red">unreasonable.</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center gap-2 bg-primary text-[#050505] rounded-md px-6 py-3 font-mono text-label-mono uppercase tracking-widest hover:bg-on-surface transition-colors"
                href={`mailto:${site.email}`}
              >
                Start a Project
              </a>
              <a
                className="inline-flex items-center gap-2 border border-void rounded-md px-6 py-3 font-mono text-label-mono uppercase tracking-widest text-[#e5e2e1] hover:bg-surface-void transition-colors"
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-void pt-12">
            <Reveal>
              <p className="text-caption text-on-surface-variant mb-4">
                Connect on the network.
              </p>
              <div className="flex gap-6 text-lg text-on-surface-variant">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    className="hover:text-primary transition-colors underline underline-offset-4 decoration-void"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:text-right">
              <Copyright />
            </Reveal>
          </div>
        </div>
      </footer>
    </>
  );
}