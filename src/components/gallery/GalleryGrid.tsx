"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import {
  galleryImages,
  galleryCategories,
  type GalleryImage,
} from "@/data/gallery-sources";
import Lightbox from "./Lightbox";
import SocialEmbed from "./SocialEmbed";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Category Filters */}
      <div className="mb-12 flex flex-wrap gap-3">
        {galleryCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={clsx(
              "rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-all",
              activeCategory === cat.key
                ? "border-accent-pop bg-accent-pop/10 text-accent-pop"
                : "border-white/10 text-text-secondary hover:border-white/30 hover:text-white"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, i) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={clsx(
                "group relative overflow-hidden rounded-lg",
                image.type === "image" && "cursor-pointer",
                image.featured && "sm:col-span-2"
              )}
              onClick={() => {
                if (image.type === "image") {
                  setSelectedImage(image);
                }
              }}
            >
              {image.type === "image" ? (
                <>
                  <div
                    className="h-[300px] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 md:h-[350px]"
                    style={{ backgroundImage: `url(${image.src})` }}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div>
                      <p className="text-sm font-medium text-white">
                        {image.caption || image.alt}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-accent-warm">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <SocialEmbed item={image} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox — only for static images */}
      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
