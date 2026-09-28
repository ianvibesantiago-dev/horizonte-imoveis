"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { images } from "@/content/site";
import { SearchForm, type Filters } from "@/components/sections/SearchForm";

const ease = [0.22, 1, 0.36, 1] as const;
const lines = [
  { text: "Endereços que", italic: false },
  { text: "contam histórias.", italic: true },
];

export function Hero({ filters }: { filters: Filters }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-night text-canvas">
      <motion.div style={{ y }} className="absolute inset-0 -z-20">
        <motion.div initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 3, ease }} className="relative size-full">
          <Image src={images.hero} alt="Fachada de casa contemporânea ao entardecer" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      {/* Degradês azul-noite para contraste do texto (mesmo do Figma) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(15_26_43/0.85),rgb(15_26_43/0.35)_55%,rgb(15_26_43/0.1))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-night/60 to-transparent" />

      <motion.div style={{ opacity: fade }} className="container-page flex flex-col gap-10 pt-40 pb-12 md:pb-16">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 0.4, duration: 1 }} className="overline">
          Residência Alameda · Jardins
        </motion.p>
        <h1 className="display-xl max-w-4xl">
          {lines.map((l, i) => (
            <span key={l.text} className="block overflow-hidden pb-2">
              <motion.span
                className={`block ${l.italic ? "text-bronze italic" : ""}`}
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.5 + i * 0.15, ease }}
              >
                {l.text}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 1, ease }}>
          <SearchForm filters={filters} />
        </motion.div>
      </motion.div>
    </section>
  );
}
