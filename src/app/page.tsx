import HeroVideo from "@/components/home/HeroVideo";
import LatestNews from "@/components/home/LatestNews";
import RecentStats from "@/components/home/RecentStats";
import UpcomingGames from "@/components/home/UpcomingGames";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <RecentStats />
      <LatestNews />
      <UpcomingGames />
    </>
  );
}
