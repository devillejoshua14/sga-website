"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { GalleryImage } from "@/data/gallery-sources";

interface LightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (image) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="h-[70vh] w-[90vw] max-w-5xl bg-cover bg-center"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              {/* Placeholder gradient for missing images */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/20 to-accent-pop/10" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <p className="text-lg font-medium text-white">
                {image.caption || image.alt}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-accent-warm">
                {image.category}
              </p>
            </div>

            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
