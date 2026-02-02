export interface Article {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  date: string;
  url?: string;
}

/**
 * Curated news articles about SGA.
 * To add a new article, add an entry to the top of this array.
 * Articles are displayed in the order listed here (newest first).
 */
export const articles: Article[] = [
  {
    id: "1",
    title: "Steve Nash admits Shai Gilgeous-Alexander is now the best NBA player to come from Canada",
    excerpt:
      "Nash believes Gilgeous-Alexander is the best Canadian.",
    source: "Yahoo Sports/The Sporting News",
    date: "Jan 31, 2026"
  },
  {
    id: "2",
    title: "Shai Gilgeous-Alexander donates winter coats to OKC women's shelter",
    excerpt:
      "Gilgeous-Alexander donated winter coats to the YWCA OKC organization. The nonprofit organization is a women's shelter that provides help to victims of domestic violence, sexual assault and stalking.",
    source: "The Athletic",
    date: "Jan 31, 2026",
  },
  {
    id: "3",
    title: "Shai Gilgeous-Alexander Is Sports Illustrated’s 2025 Sportsperson of the Year",
    excerpt:
      "The reigning NBA MVP has found the perfect home in Oklahoma City, where he’s leading the Thunder to unprecedented heights, forging a bond with the community and showing that anything is possible in a place where hoops is the only game in town.",
    source: "Sports Illustrauted",
    date: "Jan 2, 2026",
  },
  {
    id: "4",
    title: "SGA's Fashion Evolution: From Rookie to Style Icon",
    excerpt:
      "How Shai Gilgeous-Alexander became one of the NBA's most stylish players, blending high fashion with streetwear.",
    source: "GQ",
    date: "Jan 24, 2025",
  },
  {
    id: "5",
    title: "Breaking Down SGA's Unstoppable Mid-Range Game",
    excerpt:
      "Film study reveals why Shai Gilgeous-Alexander's pull-up midrange jumper is the most efficient shot in the NBA.",
    source: "NBA.com",
    date: "Jan 22, 2025",
  },
  {
    id: "6",
    title: "How SGA Became the Face of Canadian Basketball",
    excerpt:
      "From Hamilton to the NBA Finals — SGA's journey has inspired a new generation of Canadian basketball players.",
    source: "TSN",
    date: "Jan 20, 2025",
  },
  {
    id: "7",
    title: "Thunder's Defensive Identity Starts with SGA",
    excerpt:
      "SGA's elite perimeter defense and steal ability anchor one of the league's top-rated defensive units.",
    source: "The Ringer",
    date: "Jan 18, 2025",
  }
];
