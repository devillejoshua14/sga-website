const BASE_URL = "https://api.balldontlie.io/v1";
const API_KEY = process.env.BALLDONTLIE_API_KEY!;
const OKC_TEAM_ID = 21;

interface BDLTeam {
  id: number;
  conference: string;
  division: string;
  city: string;
  name: string;
  full_name: string;
  abbreviation: string;
}

interface BDLGame {
  id: number;
  date: string;
  season: number;
  status: string;
  period: number;
  time: string;
  postseason: boolean;
  postponed: boolean;
  home_team_score: number;
  visitor_team_score: number;
  datetime: string;
  home_team: BDLTeam;
  visitor_team: BDLTeam;
}

interface BDLResponse<T> {
  data: T[];
  meta: { next_cursor: number | null; per_page: number };
}

async function fetchBDL<T>(
  endpoint: string,
  params: Record<string, string | string[]>
): Promise<BDLResponse<T>> {
  const url = new URL(`${BASE_URL}${endpoint}`);

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach((v) => url.searchParams.append(`${key}[]`, v));
    } else {
      url.searchParams.set(key, value);
    }
  }

  const res = await fetch(url.toString(), {
    headers: { Authorization: API_KEY },
  });

  if (!res.ok) {
    throw new Error(`BallDontLie API error: ${res.status}`);
  }

  return res.json();
}

export interface ScheduleGame {
  id: number;
  date: string;
  datetime: string;
  status: "final" | "upcoming";
  isHome: boolean;
  opponent: {
    name: string;
    fullName: string;
    abbreviation: string;
  };
  score?: {
    okc: number;
    opponent: number;
    won: boolean;
  };
}

function toISODate(date: Date): string {
  return date.toISOString().split("T")[0];
}

export async function getThunderSchedule(): Promise<{
  upcoming: ScheduleGame[];
  recent: ScheduleGame[];
}> {
  const today = new Date();
  const pastStart = new Date(today);
  pastStart.setDate(pastStart.getDate() - 14);
  const futureEnd = new Date(today);
  futureEnd.setDate(futureEnd.getDate() + 30);

  const { data } = await fetchBDL<BDLGame>("/games", {
    team_ids: [String(OKC_TEAM_ID)],
    start_date: toISODate(pastStart),
    end_date: toISODate(futureEnd),
    per_page: "50",
  });

  const games: ScheduleGame[] = data.map((g) => {
    const isHome = g.home_team.id === OKC_TEAM_ID;
    const opponent = isHome ? g.visitor_team : g.home_team;
    const isFinal = g.status === "Final";
    const okcScore = isHome ? g.home_team_score : g.visitor_team_score;
    const oppScore = isHome ? g.visitor_team_score : g.home_team_score;

    return {
      id: g.id,
      date: g.date,
      datetime: g.datetime,
      status: isFinal ? "final" : "upcoming",
      isHome,
      opponent: {
        name: opponent.name,
        fullName: opponent.full_name,
        abbreviation: opponent.abbreviation,
      },
      ...(isFinal && {
        score: {
          okc: okcScore,
          opponent: oppScore,
          won: okcScore > oppScore,
        },
      }),
    };
  });

  const upcoming = games.filter((g) => g.status === "upcoming").slice(0, 5);
  const recent = games
    .filter((g) => g.status === "final")
    .reverse()
    .slice(0, 5);

  return { upcoming, recent };
}
