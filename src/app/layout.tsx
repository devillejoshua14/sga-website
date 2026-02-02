import type { Metadata } from "next";
import { inter, bebasNeue } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sgaworld.com"),
  title: {
    default: "SGA | Shai Gilgeous-Alexander",
    template: "%s | SGA",
  },
  description:
    "The ultimate fan site for Shai Gilgeous-Alexander — NBA Champion, MVP, and the most stylish player in the league.",
  keywords: [
    "Shai Gilgeous-Alexander",
    "SGA",
    "Oklahoma City Thunder",
    "NBA",
    "MVP",
    "NBA Champion",
  ],
  openGraph: {
    title: "SGA | Shai Gilgeous-Alexander",
    description:
      "The ultimate fan site for Shai Gilgeous-Alexander — NBA Champion, MVP, and the most stylish player in the league.",
    type: "website",
    siteName: "SGA World",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SGA | Shai Gilgeous-Alexander — NBA Champion & MVP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SGA | Shai Gilgeous-Alexander",
    description:
      "The ultimate fan site for Shai Gilgeous-Alexander — NBA Champion, MVP, and the most stylish player in the league.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SGA World",
              url: "https://sgaworld.com",
              description:
                "The ultimate fan site for Shai Gilgeous-Alexander — NBA Champion, MVP, and the most stylish player in the league.",
              about: {
                "@type": "Person",
                name: "Shai Gilgeous-Alexander",
                alternateName: "SGA",
                jobTitle: "Professional Basketball Player",
                affiliation: {
                  "@type": "SportsTeam",
                  name: "Oklahoma City Thunder",
                  sport: "Basketball",
                  memberOf: {
                    "@type": "SportsOrganization",
                    name: "NBA",
                  },
                },
                birthDate: "1998-07-12",
                birthPlace: "Hamilton, Ontario, Canada",
                nationality: "Canadian",
                sameAs: [
                  "https://www.instagram.com/shai",
                  "https://x.com/shaiglalex",
                  "https://www.tiktok.com/@shai",
                  "https://www.nba.com/player/1628983/shai-gilgeous-alexander",
                ],
              },
            }),
          }}
        />
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
