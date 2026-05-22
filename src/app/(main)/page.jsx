import Banner from "@/components/Banner";
import ChoosePage from "@/components/ChooseArea";
import HomePageCard from "@/components/HomePageCard";
import WorkPage from "@/components/Work";

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
