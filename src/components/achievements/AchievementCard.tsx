"use client";

import { motion } from "motion/react";
import type { Achievement } from "@/data/achievements";
import clsx from "clsx";

const iconMap = {
  trophy: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 22V14a2 2 0 0 1-2-2V4h8v8a2 2 0 0 1-2 2v8" />
    </svg>
  ),
  star: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  ),
  award: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  record: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
};

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export default function AchievementCard({
  achievement,
  index,
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={clsx(
        "group rounded-lg border border-white/5 bg-white/[0.02] p-8 transition-all duration-300",
        "hover:border-accent-pop/20 hover:bg-white/[0.05]"
      )}
    >
      <div className="mb-4 text-accent-pop transition-transform duration-300 group-hover:scale-110">
        {iconMap[achievement.icon]}
      </div>

      <p className="text-xs uppercase tracking-widest text-accent-warm">
        {achievement.year}
      </p>
      <h3 className="mt-2 font-display text-2xl uppercase text-white">
        {achievement.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        {achievement.description}
      </p>

      {achievement.stat && (
        <div className="mt-4 inline-block rounded-full border border-accent-pop/30 bg-accent-pop/5 px-4 py-1.5">
          <span className="font-display text-lg text-accent-pop">
            {achievement.stat}
          </span>
        </div>
      )}
    </motion.div>
  );
}
