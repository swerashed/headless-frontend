import ContactUsBanner from "./components/ContactUsBanner";
import Footer from "./components/footer/Footer";
import HeroSlider from "./components/heroSlider/HeroSlider";
import OurInvestors from "./components/ourInvestors/OurInvestors";
import OurPartners from "./components/ourPartners/OurPartners";
import RecentUpdates from "./components/recentUpdates/RecentUpdates";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <OurPartners />
      <OurInvestors />
      <RecentUpdates />
      <ContactUsBanner />
      <Footer />
    </>
  );
}
