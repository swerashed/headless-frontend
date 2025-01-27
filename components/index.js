
import AboutBanner from './aboutBanner/AboutBanner';
import AtAGlanceSliderSection from './atAGlanceSliderSection/AtAGlanceSliderSection';
import AppDownloadSection from './callToAction/AppDownloadSection';
import CallToActionSection from './callToAction/CallToActionSection';
import CardGridSection from './cardGrid/CardGridSection';
import CountersSection from './counters/CountersSection';
import CoverageAreaSection from './coverageArea/CoverageAreaSection';
import CustomerCareAboutSection from './customerCareAbout/CustomerCareAboutSection';
import CustomerReviewSection from './customerReview/CustomerReviewSection';
import HeroBannerSecondary from './heroBanners/HeroBannerSecondary';
import HeroSlider from './heroBanners/HeroSlider';
import HowWeHelp from './howWeHelp/HowWeHelp';
import MissionVissionSection from './missionVission/MissionVissionSection';
import NewsSliderSection from './newsSlider/NewsSliderSection';
import NewsSliderWrapper from './newsSlider/NewsSliderWrapper';
import OurInvestors from './ourInvestors/OurInvestors';
import OurPartners from './ourPartners/OurPartners';
import PeopleCardSection from './peopleCards/PeopleCardSection';
import ProductCategoriesSection from './productCategories/ProductCategoriesSection';
import SideBySideWithButton from './sideBySide/SideBySideWithButtonSection';
import StorySection from './storySection/StorySection';
import VideoFullWidthSection from './videoShowcase/VideoFullWidthSection';
import VideoShowcaseSection from './videoShowcase/VideoShowcaseSection';
import WhyChooseUsSection from './whyChooseUs/WhyChooseUsSection';



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
  "carbon-fields/secondary-hero": HeroBannerSecondary,
  "carbon-fields/about-us-story": StorySection,
  "carbon-fields/mission-vision": MissionVissionSection,
  "carbon-fields/at-a-glance": AtAGlanceSliderSection,
  "carbon-fields/side-by-side-cta": SideBySideWithButton,
  "carbon-fields/why-choose-us": WhyChooseUsSection,
  "carbon-fields/blog-items": NewsSliderWrapper,
  "carbon-fields/members": PeopleCardSection,
  "carbon-fields/customer-reviews": CustomerReviewSection,
  "carbon-fields/product-categories": ProductCategoriesSection,
  "carbon-fields/full-width-video": VideoFullWidthSection,
  "carbon-fields/card-grid-section": CardGridSection,
  "carbon-fields/app-download-section": AppDownloadSection,
  "carbon-fields/customer-care-about-section": CustomerCareAboutSection,

};

export default componentMap;
