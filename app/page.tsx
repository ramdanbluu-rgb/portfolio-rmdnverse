"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, Briefcase, GraduationCap } from "lucide-react";
import SiteNav from "@/components/site-nav";
import Terminal from "@/components/terminal";
import AiCore from "@/components/ai-core";
import Reveal from "@/components/reveal";
import Copyright from "@/components/copyright";
import { TechMarquee, EXPERTISE, AI_BADGE } from "@/components/shared";
import Link from "next/link";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const TECH = [
  "PHP",
  "MySQL",
  "JavaScript",
  "Node.js",
  "Next.js",
  "React",
  "TypeScript",
  "Telegram Bot API",
  "Google Sheets API",
  "Google Cloud",
  "Git",
  "Vercel",
];

const STATS = [
  { value: "3+", label: "Project Nyata" },
  { value: "1x", label: "Guinness World Record" },
  { value: "1x", label: "Juara Lomba Web Design" },
];

const EXPERIENCE = [
  {
    period: "2025",
    role: "Praktek Kerja Lapangan (PKL)",
    company: "Perusahaan ISP",
    icon: Briefcase,
    desc: "Membangun aplikasi pembukuan internal (PHP, MySQL, JavaScript) untuk menggantikan pencatatan manual. Belajar dasar jaringan: IP addressing, VLAN, monitoring bandwidth, dan troubleshooting koneksi pelanggan di lingkungan ISP nyata.",
    tags: ["PHP", "MySQL", "JavaScript", "Jaringan", "ISP Operations"],
  },
  {
    period: "2025",
    role: "Peserta Guinness World Record",
    company: "AWS IDN — Generative AI Creations",
    icon: Award,
    desc: "Mengikuti event pecah rekor dunia MURI/Guinness \"Most participants in a generative AI workshop\" diselenggarakan AWS User Group Indonesia. Mempelajari dasar LLM, prompt engineering, dan mencoba layanan AI AWS (Bedrock, PartyRock) secara hands-on.",
    tags: ["Generative AI", "AWS Bedrock", "Prompt Engineering", "LLM"],
  },
  {
    period: "2025",
    role: "Juara 1 Lomba Web Design",
    company: "Team A2F",
    icon: GraduationCap,
    desc: "Menjuarai lomba desain web tingkat regional/sekolah sebagai tim A2F. Bertanggung jawab pada pengembangan frontend, integrasi API, dan deployment. Mengasah kemampuan kerja tim, manajemen waktu, dan presentasi produk teknis.",
    tags: ["HTML/CSS", "JavaScript", "Responsive Design", "Teamwork", "Deployment"],
  },
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
                  SMK · Web Developer
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="font-sans text-[clamp(40px,6vw,72px)] font-semibold leading-[1.05] tracking-tight text-primary"
              >
                Membangun{" "}
                <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                  solusi web yang bermakna
                </span>{" "}
                dari project nyata.
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant"
              >
                Siswa SMK Kelas 12 dengan pengalaman PKL di perusahaan ISP, membangun aplikasi pembukuan &
                otomatisasi (GMQ Bot), serta juara lomba web design. Fokus pada pengembangan web fullstack,
                integrasi API, dan belajar terus dari project nyata.
              </motion.p>

              <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#work"
                  className="group inline-flex items-center gap-2 bg-primary text-[#050505] rounded-md px-6 py-3 font-mono text-label-mono uppercase tracking-widest hover:bg-on-surface transition-colors"
                >
                  Lihat Project
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 border border-void rounded-md px-6 py-3 font-mono text-label-mono uppercase tracking-widest text-[#e5e2e1] hover:bg-surface-void hover:border-outline-variant transition-colors"
                >
                  Hubungi Saya
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

        {/* ================= KEahlian ================= */}
        <section id="stack" className="relative py-stack-lg">
          <div className="max-w-container-max mx-auto px-gutter">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <span className="font-mono text-label-mono text-primary border border-void rounded px-2 py-1">
                  01
                </span>
                <h2 className="text-headline-lg md:text-[28px] text-primary">
                  Keahlian
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

        {/* ================= PENGALAMAN ================= */}
        <section id="pengalaman" className="relative py-stack-lg border-t border-void">
          <div className="max-w-container-max mx-auto px-gutter">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <span className="font-mono text-label-mono text-primary border border-void rounded px-2 py-1">
                  02
                </span>
                <h2 className="text-headline-lg md:text-[28px] text-primary">
                  Pengalaman
                </h2>
              </div>
            </Reveal>

            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-void" aria-hidden="true" />
              
              <div className="space-y-12 pl-16">
                {EXPERIENCE.map((exp, i) => (
                  <Reveal key={exp.role} delay={i * 0.1}>
                    <article className="relative group">
                      {/* timeline dot */}
                      <div className="absolute -left-16 top-2 w-10 h-10 rounded-full border-2 border-void bg-surface-void flex items-center justify-center transition-colors group-hover:border-primary group-hover:bg-primary/10">
                        <exp.icon size={18} className="text-outline group-hover:text-primary transition-colors" strokeWidth={1.8} />
                      </div>
                      
                      {/* period badge */}
                      <div className="absolute -left-72 top-2 w-60 text-right font-mono text-[11px] uppercase tracking-widest text-outline">
                        {exp.period}
                      </div>
                      
                      {/* card */}
                      <div className="rounded-xl border border-void bg-surface-void p-6 hover:border-outline-variant transition-colors">
                        <div className="flex items-baseline gap-3 mb-3">
                          <span className="font-mono text-label-mono text-primary">{exp.period}</span>
                          <span className="text-primary font-medium">{exp.role}</span>
                        </div>
                        <p className="text-lg text-primary font-medium mb-3">{exp.company}</p>
                        <p className="text-on-surface-variant leading-relaxed mb-4">{exp.desc}</p>
                        <div className="flex gap-2 flex-wrap">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-void rounded px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-outline"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="work" className="relative py-stack-lg border-t border-void">
          <div className="max-w-container-max mx-auto px-gutter">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <span className="font-mono text-label-mono text-primary border border-void rounded px-2 py-1">
                  03
                </span>
                <h2 className="text-headline-lg md:text-[28px] text-primary">
                  Project
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
                        Lihat Detail →
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
              Mari bangun sesuatu yang{" "}
              <span className="text-accent-red">bermanfaat.</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center gap-2 bg-primary text-[#050505] rounded-md px-6 py-3 font-mono text-label-mono uppercase tracking-widest hover:bg-on-surface transition-colors"
                href={`mailto:${site.email}`}
              >
                Mulai Project
              </a>
              <a
                className="inline-flex items-center gap-2 border border-void rounded-md px-6 py-3 font-mono text-label-mono uppercase tracking-widest text-[#e5e2e1] hover:bg-surface-void transition-colors"
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Unduh Resume
              </a>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-void pt-12">
            <Reveal>
              <p className="text-caption text-on-surface-variant mb-4">
                Terhubung di jaringan.
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