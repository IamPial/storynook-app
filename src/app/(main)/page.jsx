import Banner from "@/components/Banner";
import ChoosePage from "@/components/ChooseArea";
import HomePageCard from "@/components/HomePageCard";
import WorkPage from "@/components/Work";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomePageCard />
      <ChoosePage />
      <WorkPage />
    </div>
  );
};

export default Home;
