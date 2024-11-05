import AtAGlance from "./components/atAGlance/AtAGlance";
import ContactUsBanner from "./components/ContactUsBanner";
import Counter from "./components/counter/Counter";
import CoverageArea from "./components/coverageArea/CoverageArea";
import Footer from "./components/footer/Footer";
import HeroSlider from "./components/heroSlider/HeroSlider";
import HowWeHelp from "./components/howWeHelp/HowWeHelp";
import OurPartners from "./components/ourPartners/OurPartners";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Counter />
      <AtAGlance />
      <HowWeHelp />
      <CoverageArea />
      <OurPartners />
      <ContactUsBanner />
      <Footer />
    </>
  );
}
