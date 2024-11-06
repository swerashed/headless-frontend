import AboutBanner from "./components/aboutBanner/AboutBanner";
import AtAGlance from "./components/atAGlance/AtAGlance";
import ContactUsBanner from "./components/ContactUsBanner";
import Counter from "./components/counter/Counter";
import CoverageArea from "./components/coverageArea/CoverageArea";
import Footer from "./components/footer/Footer";
import HeroSlider from "./components/heroSlider/HeroSlider";
import HowWeHelp from "./components/howWeHelp/HowWeHelp";
import OurInvestors from "./components/ourInvestors/OurInvestors";
import OurPartners from "./components/ourPartners/OurPartners";
import RecentUpdates from "./components/recentUpdates/RecentUpdates";
import VideoShowcase from "./components/videoShowcase/VideoShowcase";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutBanner />
      <Counter />
      <AtAGlance />
      <VideoShowcase />
      <HowWeHelp />
      <CoverageArea />
      <OurPartners />
      <OurInvestors />
      <RecentUpdates />
      <ContactUsBanner />
      <Footer />
    </>
  );
}
