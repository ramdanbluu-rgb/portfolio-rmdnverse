import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/reveal";
import SiteNav from "@/components/site-nav";
import { getProject, projects } from "@/data/projects";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | rmdnverse`,
    description: project.tagline,
  };
}

export default async function WorkPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <SiteNav />
      <main className="min-h-screen">
      <div className="max-w-container-max mx-auto px-gutter pt-32 pb-stack-lg">
        {/* Header */}
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-label-mono uppercase tracking-widest text-outline hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            All Works
          </Link>
          <div className="flex items-center gap-4 mt-10 mb-6">
            <span className="font-mono text-label-mono text-primary border border-void rounded px-2 py-1">
              {project.index}
            </span>
            <span className="font-mono text-label-mono uppercase tracking-widest text-outline">
              Case Study / {project.year}
            </span>
          </div>
          <h1 className="font-sans font-semibold tracking-tight text-primary text-[clamp(36px,5vw,64px)] leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            {project.tagline}
          </p>
        </Reveal>

        {/* Meta */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-stack-md">
            <div className="rounded-xl border border-void bg-surface-void p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-outline mb-3">
                Role
              </p>
              <p className="text-primary font-medium">{project.role}</p>
            </div>
            <div className="rounded-xl border border-void bg-surface-void p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-outline mb-3">
                Year
              </p>
              <p className="text-primary font-medium">{project.year}</p>
            </div>
            <div className="rounded-xl border border-void bg-surface-void p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-outline mb-3">
                Stack
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-void rounded px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-outline"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Hero image */}
        <Reveal delay={0.15}>
          <div
            role="img"
            aria-label={project.imageAlt}
            className="mt-stack-md w-full h-[55vh] rounded-xl border border-void bg-cover bg-center"
            style={{ backgroundImage: `url('${project.image}')` }}
          />
        </Reveal>

        {/* Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-stack-lg">
          <Reveal>
            <h2 className="font-mono text-label-mono uppercase tracking-widest text-outline border-b border-void pb-4">
              Overview
            </h2>
          </Reveal>
          <div className="md:col-span-2 space-y-5">
            {project.overview.map((paragraph, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p className="leading-relaxed text-on-surface-variant">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-stack-lg border-t border-void mt-stack-lg">
          <Reveal>
            <h2 className="font-mono text-label-mono uppercase tracking-widest text-outline border-b border-void pb-4">
              Key Results
            </h2>
          </Reveal>
          <ul className="md:col-span-2 flex flex-col">
            {project.highlights.map((highlight, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <li className="flex items-baseline gap-4 py-4 border-b border-void last:border-b-0">
                  <span className="font-mono text-[10px] text-accent-red shrink-0 pt-1">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <span>{highlight}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Next project */}
        <Reveal>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group mt-stack-lg p-8 rounded-xl border border-void bg-surface-void flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-outline-variant transition-colors"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-outline mb-2">
                Next Project
              </p>
              <h3 className="text-headline-lg-mobile text-primary group-hover:text-white transition-colors">
                {nextProject.title}
              </h3>
            </div>
            <span className="font-mono text-label-mono uppercase text-primary group-hover:translate-x-1 transition-transform">
              View Case Study →
            </span>
          </Link>
        </Reveal>
      </div>
      </main>
    </>
  );
}