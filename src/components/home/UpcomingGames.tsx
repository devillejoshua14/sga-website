import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { getThunderSchedule, ScheduleGame } from "@/lib/api/balldontlie";
import { format, parseISO } from "date-fns";

function formatGameDate(datetime: string) {
  const date = parseISO(datetime);
  return {
    day: format(date, "EEE").toUpperCase(),
    date: format(date, "MMM d"),
    time: format(date, "h:mm a"),
  };
}

export default async function UpcomingGames() {
  let upcoming: ScheduleGame[] = [];
  let recent: ScheduleGame[] = [];

  try {
    const schedule = await getThunderSchedule();
    upcoming = schedule.upcoming;
    recent = schedule.recent;
  } catch {
    // fallback handled below
  }

  const hasUpcoming = upcoming.length > 0;
  const hasRecent = recent.length > 0;

  return (
    <section className="bg-background-dark py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Upcoming Games */}
        {hasUpcoming && (
          <>
            <ScrollReveal>
              <SectionHeading
                title="Upcoming"
                subtitle="Next Thunder games"
              />
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {upcoming.slice(0, 3).map((game, i) => {
                const { day, date, time } = formatGameDate(game.datetime);
                return (
                  <ScrollReveal key={game.id} delay={i * 0.1}>
                    <Card>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-accent-warm">
                            {day} / {date}
                          </p>
                          <p className="mt-2 font-display text-2xl uppercase text-white">
                            {game.isHome ? "vs" : "@"}{" "}
                            {game.opponent.name}
                          </p>
                          <p className="mt-1 text-sm text-text-muted">
                            {game.opponent.fullName}
                          </p>
                        </div>
                        <span className="text-sm text-text-secondary">
                          {time}
                        </span>
                      </div>
                      {game.isHome && (
                        <span className="mt-3 inline-block rounded-full border border-accent-pop/30 px-3 py-1 text-xs uppercase tracking-wider text-accent-pop">
                          Home
                        </span>
                      )}
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </>
        )}

        {/* Recent Results */}
        {hasRecent && (
          <div className={hasUpcoming ? "mt-16" : ""}>
            <ScrollReveal>
              <SectionHeading
                title="Recent"
                subtitle="Latest Thunder results"
              />
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {recent.slice(0, 3).map((game, i) => {
                const { day, date } = formatGameDate(game.datetime);
                return (
                  <ScrollReveal key={game.id} delay={i * 0.1}>
                    <Card>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-accent-warm">
                            {day} / {date}
                          </p>
                          <p className="mt-2 font-display text-2xl uppercase text-white">
                            {game.isHome ? "vs" : "@"}{" "}
                            {game.opponent.name}
                          </p>
                        </div>
                        {game.score && (
                          <div className="text-right">
                            <span
                              className={`font-display text-2xl ${
                                game.score.won
                                  ? "text-green-400"
                                  : "text-red-400"
                              }`}
                            >
                              {game.score.won ? "W" : "L"}
                            </span>
                            <p className="mt-1 text-sm text-text-secondary">
                              {game.score.okc} - {game.score.opponent}
                            </p>
                          </div>
                        )}
                      </div>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        )}

        {/* Fallback if API fails */}
        {!hasUpcoming && !hasRecent && (
          <>
            <ScrollReveal>
              <SectionHeading
                title="Schedule"
                subtitle="Thunder games"
              />
            </ScrollReveal>
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-8 text-center">
              <p className="text-text-muted">
                Schedule data is temporarily unavailable. Check back soon.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
