
import AboutBanner from './aboutBanner/AboutBanner';
import CallToActionSection from './callToAction/CallToActionSection';
import CardGridSection from './cardGrid/CardGridSection';
import CountersSection from './counters/CountersSection';
import CoverageAreaSection from './coverageArea/CoverageAreaSection';
import HeroBannerSecondary from './heroBanners/HeroBannerSecondary';
import HeroSlider from './heroBanners/HeroSlider';
import HowWeHelp from './howWeHelp/HowWeHelp';
import MissionVissionSection from './missionVission/MissionVissionSection';
import OurInvestors from './ourInvestors/OurInvestors';
import OurPartners from './ourPartners/OurPartners';
import StorySection from './storySection/StorySection';
import VideoShowcaseSection from './videoShowcase/VideoShowcaseSection';



const componentMap = {
  'carbon-fields/hero': HeroSlider,
  "carbon-fields/about-us" : AboutBanner,
  "carbon-fields/statistics": CountersSection,
  "carbon-fields/video": VideoShowcaseSection,
  "carbon-fields/how-we-help": HowWeHelp,
  "carbon-fields/coverge" : CoverageAreaSection,
  "carbon-fields/partners" : OurPartners,
  "carbon-fields/our-investors": OurInvestors,
  "carbon-fields/cta": CallToActionSection,

  // ABOUT US PAGE COMPONETS 
  "carbon-fields/secondary-hero": HeroBannerSecondary,
  "carbon-fields/about-us-story": StorySection,
  "carbon-fields/mission-vision": MissionVissionSection,
  "carbon-fields/at-a-glance": CardGridSection,


};

export default componentMap;
