import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "SGA highlights, championship moments, and off-court style — straight from Instagram and X.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-8 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.4em] text-accent-warm">
              Style & Media
            </p>
            <h1 className="mt-2 font-display text-6xl uppercase tracking-wider text-white md:text-7xl">
              Gallery
            </h1>
            <p className="mt-4 max-w-lg text-text-secondary">
              Highlights, championship moments, and off-court style — straight
              from social media.
            </p>
            <div className="mt-4 h-[2px] w-16 bg-accent-pop" />
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
