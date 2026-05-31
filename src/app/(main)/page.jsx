import Banner from "@/components/Banner";
import ChoosePage from "@/components/ChooseArea";
import HomePageCard from "@/components/HomePageCard";
import WorkPage from "@/components/Work";

export const metadata = {
  title: "StoryNook - Home",
  description:
    "StoryNook is an online platform for booking quiet library rooms and enjoying a peaceful reading experience.",
};

const Home = () => {
  return (
    <div>
      <Banner />
      <HomePageCard />
      <WorkPage />
      <ChoosePage />
    </div>
  );
};

export default Home;
