
import AboutBanner from './aboutBanner/AboutBanner';
import CallToActionSection from './callToAction/CallToActionSection';
import CountersSection from './counters/CountersSection';
import CoverageAreaSection from './coverageArea/CoverageAreaSection';
import HeroBannerSecondary from './heroBanners/HeroBannerSecondary';
import HeroSlider from './heroBanners/HeroSlider';
import HowWeHelp from './howWeHelp/HowWeHelp';
import OurInvestors from './ourInvestors/OurInvestors';
import OurPartners from './ourPartners/OurPartners';
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

};

export default componentMap;
