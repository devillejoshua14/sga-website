import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AchievementCard from "@/components/achievements/AchievementCard";
import SeasonHighlight from "@/components/achievements/SeasonHighlight";
import { achievements } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "SGA's career achievements — NBA Champion, MVP, All-Star, Scoring Champion, and more.",
};

export default function AchievementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background">
          <div className="h-full w-full bg-gradient-to-br from-accent-pop/10 via-transparent to-accent-warm/10" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.4em] text-accent-warm">
              Milestones & Records
            </p>
            <h1 className="mt-2 font-display text-6xl uppercase tracking-wider text-white md:text-7xl">
              Achievements
            </h1>
            <p className="mt-4 max-w-lg text-lg text-text-secondary">
              NBA Champion. MVP. Scoring Champion. The accolades keep growing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Season Highlight */}
      <SeasonHighlight />

      {/* All Achievements */}
      <section className="bg-background-dark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Honors"
              subtitle="Career awards and recognition"
            />
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, i) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
