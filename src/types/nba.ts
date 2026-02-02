export interface GameStats {
  date: string;
  opponent: string;
  result: string;
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  minutes: number;
}

export interface UpcomingGame {
  date: string;
  time: string;
  opponent: string;
  location: string;
  isHome: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  url: string;
  imageUrl?: string;
  publishedAt: string;
}
