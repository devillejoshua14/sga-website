import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BioSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-accent-warm">
                The Journey
              </p>
              <h2 className="mt-3 font-display text-5xl uppercase tracking-wider text-white md:text-6xl">
                From Hamilton
                <br />
                <span className="text-accent-pop">to the Top</span>
              </h2>
              <div className="mt-4 h-[2px] w-16 bg-accent-pop" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6 text-text-secondary">
              <p className="text-lg leading-relaxed">
                Born in Hamilton, Ontario, Shai Gilgeous-Alexander was destined
                for greatness. The son of Vaughn Alexander, a former college
                basketball player, and Charmaine Alexander, a track and field
                sprinter, athleticism runs deep in his blood.
              </p>
              <p className="leading-relaxed">
                After a standout season at the University of Kentucky, SGA was
                selected 11th overall in the 2018 NBA Draft. He spent his rookie
                year with the LA Clippers, where he showed flashes of the
                brilliance that would come to define his career.
              </p>
              <p className="leading-relaxed">
                The pivotal moment came in 2019, when SGA was traded to the
                Oklahoma City Thunder as part of the Paul George deal. What some
                saw as a rebuilding move, SGA saw as an opportunity. He embraced
                the role of franchise cornerstone and never looked back.
              </p>
              <blockquote className="border-l-2 border-accent-pop pl-6 text-lg italic text-white">
                &ldquo;I want to be the best. Not one of the best — the
                best.&rdquo;
              </blockquote>
              <p className="leading-relaxed">
                Season after season, SGA elevated his game. His unique blend of
                size, skill, and basketball IQ made him virtually unguardable.
                His mid-range game became the most lethal in the league, and his
                defensive intensity earned him recognition as a true two-way
                superstar.
              </p>
              <p className="leading-relaxed">
                The 2024 MVP award validated what everyone already knew — Shai
                Gilgeous-Alexander is the best player in the world. And with an
                NBA Championship trophy now in his hands, his legacy is only
                beginning.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
