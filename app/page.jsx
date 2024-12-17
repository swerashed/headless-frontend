// import AboutBanner from "./components/aboutBanner/AboutBanner";
// import AtAGlance from "./components/atAGlance/AtAGlance";
// import ContactUsBanner from "./components/ContactUsBanner";
// import Counter from "./components/counter/Counter";
// import CoverageArea from "./components/coverageArea/CoverageArea";
// import Footer from "./components/footer/Footer";
// import HeroSlider from "./components/heroSlider/HeroSlider";
// import HowWeHelp from "./components/howWeHelp/HowWeHelp";
// import OurInvestors from "./components/ourInvestors/OurInvestors";
// import OurPartners from "./components/ourPartners/OurPartners";
// import RecentUpdates from "./components/recentUpdates/RecentUpdates";
// import VideoShowcase from "./components/videoShowcase/VideoShowcase";

import AboutBanner from "@/components/aboutBanner/AboutBanner";
import CallToActionSection from "@/components/callToAction/CallToActionSection";
import CoverageAreaSection from "@/components/coverageArea/CoverageAreaSection";
import HeroSlider from "@/components/heroBanners/HeroSlider";
import NewsSliderSection from "@/components/newsSlider/NewsSliderSection";

export default function HomePage() {
  return (
    <>
      {/* <HeroSlider />
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
       */}
      <HeroSlider
        sectionTitle="Expanding Health Horizons with Trusted Partners"
        slides={[
          {
            id: crypto.randomUUID(),
            imageLink: "/hero-banners/home-sliders/slider-1.jpg",
          },
          {
            id: crypto.randomUUID(),
            imageLink: "/hero-banners/home-sliders/slider-2.jpg",
          },
          {
            id: crypto.randomUUID(),
            imageLink: "/hero-banners/home-sliders/slider-3.jpg",
          },
        ]}
      />
      <AboutBanner
        bodyText="Through AKS Pharmacy and Healthcare, we provide expert consultation, advanced technology, and inclusive care for a healthier life."
        yearOfExperience={{ year: "10+", label: "Years of Experience" }}
        buttonDetails={{ title: "Learn More About" }}
      />
      <CoverageAreaSection />
      <NewsSliderSection
        sectionClassName="bg-white"
        sectionHeading="Recent updates"
        newsItems={[
          {
            id: crypto.randomUUID(),
            title:
              "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-1.png",
          },
          {
            id: crypto.randomUUID(),
            title:
              "AKS Khan Pharmaceuticals crosses major milestone with 500,000 patients Served",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-2.png",
          },
          {
            id: crypto.randomUUID(),
            title: "Three new locations in Khulna Division",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-3.png",
          },
          {
            id: crypto.randomUUID(),
            title:
              "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-1.png",
          },
          {
            id: crypto.randomUUID(),
            title:
              "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-2.png",
          },
        ]}
        buttonDetails={{ title: "View all" }}
      />

      <CallToActionSection />
    </>
  );
}
