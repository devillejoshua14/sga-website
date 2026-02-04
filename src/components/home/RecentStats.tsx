import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const lastGameStats = {
  date: "Feb 3, 2026",
  opponent: "vs. Orlando Magic",
  result: "W 92-128",
  stats: [
    { label: "PTS", value: "22" },
    { label: "REB", value: "5" },
    { label: "AST", value: "9" },
    { label: "STL", value: "2" },
    { label: "MIN", value: "28" },
  ],
};

export default function RecentStats() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Last Game"
            subtitle={`${lastGameStats.opponent} — ${lastGameStats.result}`}
          />
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {lastGameStats.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-6 text-center">
                <p className="font-display text-5xl text-white md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-text-muted">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="mt-6 text-sm text-text-muted">{lastGameStats.date}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
