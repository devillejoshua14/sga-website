export interface Achievement {
  title: string;
  year: string;
  description: string;
  stat?: string;
  icon: "trophy" | "star" | "award" | "record";
}

export const achievements: Achievement[] = [
  {
    title: "NBA Champion",
    year: "2025",
    description:
      "Led the Oklahoma City Thunder to their first NBA Championship with a dominant playoff performance.",
    icon: "trophy",
  },
  {
    title: "NBA Most Valuable Player",
    year: "2024",
    description:
      "Won the MVP award after leading the Thunder to the best record in the Western Conference.",
    icon: "award",
  },
  {
    title: "All-NBA First Team",
    year: "2023, 2024",
    description:
      "Selected to the All-NBA First Team in back-to-back seasons for his elite two-way play.",
    icon: "star",
  },
  {
    title: "NBA All-Star",
    year: "2023, 2024, 2025",
    description:
      "Three-time NBA All-Star, representing the best of the Western Conference.",
    icon: "star",
  },
  {
    title: "Scoring Champion",
    year: "2024",
    description:
      "Led the NBA in scoring with a remarkable points-per-game average.",
    stat: "31.4 PPG",
    icon: "record",
  },
  {
    title: "Steals Leader",
    year: "2024",
    description:
      "Led the league in steals, showcasing his elite defensive ability and anticipation.",
    stat: "2.0 SPG",
    icon: "record",
  },
];

export const seasonHighlight = {
  season: "2024-25",
  title: "A Season for the Ages",
  description:
    "The 2024-25 season saw Shai Gilgeous-Alexander reach the pinnacle of basketball. Coming off his MVP campaign, SGA led the Thunder on an incredible playoff run, culminating in an NBA Championship. His combination of scoring, playmaking, and defense made him the most complete player in the league.",
  stats: [
    { label: "PPG", value: "31.4" },
    { label: "RPG", value: "5.5" },
    { label: "APG", value: "6.2" },
    { label: "SPG", value: "2.0" },
  ],
};
