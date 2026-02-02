"use client";

import { motion } from "motion/react";
import { seasonHighlight } from "@/data/achievements";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SeasonHighlight() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-pop/5 via-transparent to-accent-warm/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.4em] text-accent-pop">
            {seasonHighlight.season}
          </p>
          <h2 className="mt-3 font-display text-5xl uppercase tracking-wider text-white md:text-6xl">
            {seasonHighlight.title}
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-accent-pop" />
        </ScrollReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed text-text-secondary">
              {seasonHighlight.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-2 gap-4">
              {seasonHighlight.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="rounded-lg border border-white/5 bg-white/[0.03] p-6 text-center"
                >
                  <p className="font-display text-5xl text-accent-pop">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
