"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { company, nav, whatsappUrl } from "@/content/site";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 80));
  const dark = solid || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${dark ? "bg-canvas/95 text-night shadow-[0_1px_0_var(--color-line)] backdrop-blur" : "text-canvas"}`}>
      <div className={`container-page flex items-center justify-between transition-all duration-700 ${solid ? "h-18" : "h-24"}`}>
        <a href="#" aria-label={`${company.name} — início`} className="flex flex-col items-center leading-none">
          <span className="font-display text-2xl tracking-[0.35em] md:text-[28px]">HORIZONTE</span>
          <span className="overline mt-1 text-[9px] opacity-80">{company.tagline}</span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="label flex gap-10">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener"
          className={`label hidden rounded-sm border px-6 py-3 transition-colors duration-500 lg:inline-block ${dark ? "border-night hover:bg-night hover:text-canvas" : "border-canvas/60 hover:bg-canvas hover:text-night"}`}
        >
          Fale com um consultor
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid size-11 place-items-center lg:hidden"
        >
          <span aria-hidden className="flex w-7 flex-col gap-2">
            <span className={`h-px bg-current transition ${open ? "translate-y-[4.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-current transition ${open ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav id="menu-mobile" aria-label="Menu móvel" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden lg:hidden">
            <ul className="container-page flex flex-col pb-8">
              {nav.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i }}>
                  <a href={l.href} onClick={() => setOpen(false)} className="display-m block border-b border-line py-4">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
