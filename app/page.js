import ContactUsBanner from "./components/ContactUsBanner";
import HeroSlider from "./components/heroSlider/HeroSlider";
import RecentUpdates from "./components/RecentUpdates/RecentUpdates";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <RecentUpdates />
      <ContactUsBanner />
    </>
  );
}
