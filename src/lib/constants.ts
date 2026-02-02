export const SGA = {
  name: "Shai Gilgeous-Alexander",
  firstName: "Shai",
  lastName: "Gilgeous-Alexander",
  nickname: "SGA",
  number: 2,
  position: "Guard",
  team: "Oklahoma City Thunder",
  teamAbbr: "OKC",
  birthdate: "1998-07-12",
  birthplace: "Hamilton, Ontario, Canada",
  college: "University of Kentucky",
  draftYear: 2018,
  draftPick: 11,
  height: "6'6\"",
  weight: "195 lbs",
  social: {
    instagram: "https://www.instagram.com/shai",
    twitter: "https://x.com/shaiglalex",
    tiktok: "https://www.tiktok.com/@shai",
  },
} as const;

export const COLORS = {
  background: "#1a1a1a",
  backgroundDark: "#111111",
  accentWarm: "#c4a882",
  accentWarmLight: "#d4bc9a",
  accentWarmDark: "#a8906e",
  accentPop: "#007AC1",
  accentPopLight: "#1a94d4",
  accentPopDark: "#00639e",
  textPrimary: "#ffffff",
  textSecondary: "#b0b0b0",
  textMuted: "#666666",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Achievements", href: "/achievements" },
  { label: "Social", href: "/social" },
] as const;
