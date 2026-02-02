import type { Metadata } from "next";
import BioSection from "@/components/about/BioSection";
import CareerTimeline from "@/components/about/CareerTimeline";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Shai Gilgeous-Alexander's journey from Hamilton, Ontario to NBA Champion and MVP.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background">
          <div
            className="h-full w-full bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('/images/sga-about-hero.jpg')",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.4em] text-accent-warm">
              The Story
            </p>
            <h1 className="mt-2 font-display text-6xl uppercase tracking-wider text-white md:text-7xl">
              About SGA
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <BioSection />
      <CareerTimeline />
    </>
  );
}
