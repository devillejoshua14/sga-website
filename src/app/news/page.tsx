import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card from "@/components/ui/Card";
import { articles } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news, articles, and updates about Shai Gilgeous-Alexander and the Oklahoma City Thunder.",
};

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-8 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.4em] text-accent-warm">
              Updates & Stories
            </p>
            <h1 className="mt-2 font-display text-6xl uppercase tracking-wider text-white md:text-7xl">
              News
            </h1>
            <p className="mt-4 max-w-lg text-text-secondary">
              The latest articles, updates, and stories about SGA.
            </p>
            <div className="mt-4 h-[2px] w-16 bg-accent-pop" />
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => {
              const card = (
                <Card className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent-pop">
                      {article.source}
                    </p>
                    <h2 className="mt-3 font-display text-xl uppercase leading-tight text-white">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs text-text-muted">{article.date}</p>
                    {article.url && (
                      <span className="text-xs uppercase tracking-widest text-accent-warm">
                        Read &rarr;
                      </span>
                    )}
                  </div>
                </Card>
              );

              return (
                <ScrollReveal key={article.id} delay={i * 0.1}>
                  {article.url ? (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
