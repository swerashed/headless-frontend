import ContactUsBanner from "./components/ContactUsBanner";
import HeroSlider from "./components/heroSlider/HeroSlider";
import OurInvestors from "./components/OurInvestors/OurInvestors";
import RecentUpdates from "./components/RecentUpdates/RecentUpdates";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <OurInvestors />
      <RecentUpdates />
      <ContactUsBanner />
    </>
  );
}
