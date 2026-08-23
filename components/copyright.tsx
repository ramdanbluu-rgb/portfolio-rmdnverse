"use client";

/**
 * Always-current copyright year — computed at runtime, never hardcoded.
 * suppressHydrationWarning covers the rare New Year's Eve SSR/client mismatch.
 */
export default function Copyright() {
  return (
    <p
      className="font-mono text-label-mono uppercase tracking-widest text-outline"
      suppressHydrationWarning
    >
      © {new Date().getFullYear()} rmdnverse. ALL RIGHTS RESERVED.
    </p>
  );
}