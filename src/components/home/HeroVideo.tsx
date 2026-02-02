"use client";

import { motion } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function HeroVideo() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Video / Image Background */}
      <div className="absolute inset-0">
        {!isMobile ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/sga-hero-poster.jpg"
            className="h-full w-full object-cover"
          >
            <source src="/videos/sga-hero.mp4" type="video/mp4" />
            <source src="/videos/sga-hero.webm" type="video/webm" />
          </video>
        ) : (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/sga-hero-poster.jpg')" }}
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-[#1a1a1a]/30 to-[#1a1a1a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-12 pt-24 md:pb-16">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-sm font-light uppercase tracking-[0.4em] text-accent-warm">
              Oklahoma City Thunder / #2
            </p>
            <h1 className="mt-3 font-display text-5xl uppercase leading-none tracking-wider text-white md:text-6xl lg:text-7xl">
              Shai
              <br />
              <span className="text-accent-pop">Gilgeous-</span>
              <br />
              Alexander
            </h1>
            <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-text-secondary">
              NBA Champion. MVP. The most complete player in the game.
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              className="h-8 w-[1px] bg-accent-warm"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs uppercase tracking-widest text-text-muted">
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
