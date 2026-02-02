"use client";

import { motion } from "motion/react";
import { timeline } from "@/data/timeline";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import clsx from "clsx";

export default function CareerTimeline() {
  return (
    <section className="bg-background-dark py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Timeline"
            subtitle="The road to greatness"
            align="center"
          />
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Center Line */}
          <div className="absolute left-4 top-0 h-full w-[1px] bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((entry, i) => (
            <ScrollReveal
              key={entry.year}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={clsx(
                  "relative mb-12 pl-12 md:w-1/2 md:pl-0",
                  i % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12"
                )}
              >
                {/* Dot */}
                <motion.div
                  className={clsx(
                    "absolute left-[13px] top-1 h-3 w-3 rounded-full border-2 md:top-1",
                    entry.highlight
                      ? "border-accent-pop bg-accent-pop"
                      : "border-accent-warm bg-background-dark",
                    i % 2 === 0
                      ? "md:left-auto md:-right-[6.5px]"
                      : "md:-left-[6.5px]"
                  )}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                />

                <p
                  className={clsx(
                    "font-display text-3xl",
                    entry.highlight ? "text-accent-pop" : "text-accent-warm"
                  )}
                >
                  {entry.year}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {entry.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
