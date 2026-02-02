import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { SGA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Social",
  description:
    "Follow Shai Gilgeous-Alexander on social media — Twitter, Instagram, and TikTok.",
};

const socialPlatforms = [
  {
    name: "Instagram",
    handle: "@Shai",
    url: SGA.social.instagram,
    description:
      "Style, lifestyle, and behind-the-scenes content from SGA.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Twitter / X",
    handle: "@shaiglalex",
    url: SGA.social.twitter,
    description:
      "Thoughts, game reactions, and real-time updates.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "TikTok",
    handle: "@shai",
    url: SGA.social.tiktok,
    description:
      "Highlights, trends, and short-form content.",
    color: "from-pink-500/20 to-red-500/20",
  },
];

export default function SocialPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-8 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.4em] text-accent-warm">
              Stay Connected
            </p>
            <h1 className="mt-2 font-display text-6xl uppercase tracking-wider text-white md:text-7xl">
              Social
            </h1>
            <p className="mt-4 max-w-lg text-text-secondary">
              Follow SGA across all platforms. Curated content from his official
              accounts.
            </p>
            <div className="mt-4 h-[2px] w-16 bg-accent-pop" />
          </ScrollReveal>
        </div>
      </section>

      {/* Social Platform Links */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Platforms"
              subtitle="Follow SGA on social media"
            />
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {socialPlatforms.map((platform, i) => (
              <ScrollReveal key={platform.name} delay={i * 0.1}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <div className="relative">
                      <h3 className="font-display text-2xl uppercase text-white">
                        {platform.name}
                      </h3>
                      <p className="mt-1 text-sm text-accent-pop">
                        {platform.handle}
                      </p>
                      <p className="mt-3 text-sm text-text-secondary">
                        {platform.description}
                      </p>
                      <span className="mt-4 inline-block text-xs uppercase tracking-widest text-accent-warm transition-colors group-hover:text-white">
                        Visit Profile &rarr;
                      </span>
                    </div>
                  </Card>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Content Placeholder */}
      <section className="bg-background-dark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Feed"
              subtitle="Latest posts and highlights"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-12 text-center">
              <p className="font-display text-2xl uppercase text-text-muted">
                Social Embeds Coming Soon
              </p>
              <p className="mt-3 text-sm text-text-muted">
                Twitter, Instagram, and TikTok posts will be embedded here once
                content URLs are curated in the data files.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
