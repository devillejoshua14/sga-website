export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    year: "1998",
    title: "Born in Hamilton, Ontario",
    description:
      "Shai Gilgeous-Alexander was born on July 12, 1998, in Hamilton, Ontario, Canada. Raised in a family of athletes, his father Vaughn played college basketball and his mother Charmaine was a track and field sprinter.",
  },
  {
    year: "2017",
    title: "Kentucky Wildcats",
    description:
      "Committed to the University of Kentucky, where he quickly established himself as one of the top guards in college basketball under Coach John Calipari.",
  },
  {
    year: "2018",
    title: "NBA Draft — 11th Overall Pick",
    description:
      "Selected 11th overall by the Charlotte Hornets and immediately traded to the LA Clippers. Made an instant impact as a rookie, showing poise beyond his years.",
  },
  {
    year: "2019",
    title: "Traded to Oklahoma City Thunder",
    description:
      "Acquired by the Thunder as part of the blockbuster Paul George trade. This move set the stage for SGA to become the franchise cornerstone.",
  },
  {
    year: "2021",
    title: "First All-Star Caliber Season",
    description:
      "Averaged 23.7 points per game, establishing himself as one of the league's premier young guards and the undisputed leader of the Thunder.",
  },
  {
    year: "2023",
    title: "All-NBA First Team",
    description:
      "Named to the All-NBA First Team for the first time. Averaged over 31 points per game, cementing his status among the league's elite players.",
  },
  {
    year: "2024–25",
    title: "MVP & NBA Champion",
    description:
      "Won his first NBA Most Valuable Player award after leading the league in scoring at 32.7 points per game, then led the Thunder to their first NBA Championship — becoming only the fourth player in history to win MVP, Finals MVP, and the scoring title in the same season.",
    highlight: true,
  },
];
