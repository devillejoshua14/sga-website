import Link from "next/link";
import { SGA, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-display text-3xl uppercase tracking-widest text-white">
              {SGA.nickname}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              The official fan site dedicated to {SGA.name}. {SGA.team} #{SGA.number}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted">
              Navigate
            </h3>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted">
              Follow SGA
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={SGA.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary transition-colors hover:text-accent-pop"
              >
                Instagram
              </a>
              <a
                href={SGA.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary transition-colors hover:text-accent-pop"
              >
                Twitter / X
              </a>
              <a
                href={SGA.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary transition-colors hover:text-accent-pop"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-text-muted">
            This is an unofficial fan site. Not affiliated with the NBA,{" "}
            {SGA.team}, or {SGA.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
