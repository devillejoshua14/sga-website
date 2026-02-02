import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { articles } from "@/data/news";

const latestArticles = articles.slice(0, 3);

export default function LatestNews() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <SectionHeading
              title="Latest"
              subtitle="News and updates"
            />
            <Link
              href="/news"
              className="mb-12 hidden text-sm uppercase tracking-widest text-accent-warm transition-colors hover:text-accent-pop md:block"
            >
              View all
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {latestArticles.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 0.15}>
              <Card className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent-pop">
                    {article.source}
                  </p>
                  <h3 className="mt-3 font-display text-xl uppercase leading-tight text-white">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {article.excerpt}
                  </p>
                </div>
                <p className="mt-4 text-xs text-text-muted">{article.date}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <Link
          href="/news"
          className="mt-8 block text-center text-sm uppercase tracking-widest text-accent-warm transition-colors hover:text-accent-pop md:hidden"
        >
          View all news
        </Link>
      </div>
    </section>
  );
}
