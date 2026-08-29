"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, FileDown } from "lucide-react";
import { site } from "@/data/site";

const NAV_LINKS = [
  { label: "Keahlian", href: "/#stack" },
  { label: "Pengalaman", href: "/#pengalaman" },
  { label: "Project", href: "/#work" },
  { label: "Kontak", href: "/#contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-void"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-mono text-label-mono text-primary font-bold tracking-widest uppercase hover:opacity-80 transition-opacity"
        >
          {site.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-on-surface-variant hover:text-primary transition-colors text-caption uppercase tracking-widest"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-[#050505] rounded-md px-4 py-2 font-mono text-label-mono uppercase tracking-widest hover:bg-on-surface transition-colors"
        >
          <FileDown size={14} strokeWidth={2.4} />
          Resume
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md border border-void text-primary active:scale-95 transition-transform"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-void"
          >
            <div className="flex flex-col px-gutter py-stack-md">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-4 border-b border-void text-primary uppercase tracking-widest text-headline-lg-mobile font-medium"
                  >
                    <span className="font-mono text-xs text-outline">
                      0{i + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-stack-md inline-flex items-center justify-center gap-2 self-stretch bg-primary text-[#050505] rounded-md px-6 py-3 font-mono text-label-mono uppercase tracking-widest"
              >
                <FileDown size={14} strokeWidth={2.4} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}