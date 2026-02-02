export type GalleryItemType = "image" | "instagram" | "twitter";
export type GalleryCategory = "highlights" | "championship" | "fashion" | "offcourt";

export interface GalleryImage {
  id: string;
  type: GalleryItemType;
  src?: string;
  embedUrl?: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
  featured?: boolean;
}

export const galleryCategories = [
  { key: "all", label: "All" },
  { key: "highlights", label: "Highlights" },
  { key: "championship", label: "Championship" },
  { key: "fashion", label: "Fashion" },
  { key: "offcourt", label: "Off Court" },
] as const;

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    type: "instagram",
    embedUrl: "https://www.instagram.com/p/DLOkWWYM_JI/",
    alt: "SGA named 2025 NBA Finals MVP",
    category: "championship",
    caption: "2025 NBA Finals MVP",
    featured: true,
  },
  {
    id: "2",
    type: "twitter",
    embedUrl: "https://x.com/NBA/status/1936983699662209342",
    alt: "Official NBA Finals MVP announcement",
    category: "championship",
    caption: "The NBA crowns SGA Finals MVP",
  },
  {
    id: "3",
    type: "instagram",
    embedUrl: "https://www.instagram.com/p/DKQQNo7RQV4/",
    alt: "SGA — on the hunt for more after WCF win",
    category: "highlights",
    caption: "\"On the hunt for more, I just need like four more\"",
    featured: true,
  },
  {
    id: "4",
    type: "instagram",
    embedUrl: "https://www.instagram.com/p/DRyrDtvEcHx/",
    alt: "NBA — 21 wins, 1 loss streak",
    category: "highlights",
    caption: "21 wins, 1 loss — SGA leading the charge",
  },
  {
    id: "5",
    type: "instagram",
    embedUrl: "https://www.instagram.com/p/DQz-g4tDnnj/",
    alt: "SGA post-championship thoughts",
    category: "championship",
    caption: "Post-championship reflections",
  },
  {
    id: "6",
    type: "instagram",
    embedUrl: "https://www.instagram.com/p/C0aNlNgrslP/",
    alt: "SGA 2024 season reflections",
    category: "offcourt",
    caption: "2024 — looking back on the journey",
  },
  {
    id: "7",
    type: "twitter",
    embedUrl: "https://x.com/alessio_nba/status/1966526322588487939",
    alt: "SGA 2025 Finals MVP highlights compilation",
    category: "championship",
    caption: "Finals MVP highlights reel",
  },
  {
    id: "8",
    type: "instagram",
    embedUrl: "https://www.instagram.com/p/C0fBevjy5Y2/",
    alt: "SGA fashion fit",
    category: "fashion",
    caption: "Pure fashion — SGA's signature style",
  },
  {
    id: "9",
    type: "instagram",
    embedUrl: "https://www.instagram.com/p/DUHrm3YEYnr/",
    alt: "SGA latest fashion fit",
    category: "fashion",
    caption: "Fresh fit — January 2026",
  },
  {
    id: "10",
    type: "instagram",
    embedUrl: "https://www.instagram.com/p/DUCZ6G5kfE3/",
    alt: "SGA fashion fit",
    category: "fashion",
    caption: "Another day, another fit — January 2026",
  },
  {
    id: "11",
    type: "instagram",
    embedUrl: "https://www.instagram.com/p/DTAk5ijgNAu/",
    alt: "SGA off court",
    category: "offcourt",
    caption: "Off the clock",
  },
];
