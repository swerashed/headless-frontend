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
import AtAGlanceSliderSection from "@/components/atAGlanceSliderSection/AtAGlanceSliderSection";
import CallToActionSection from "@/components/callToAction/CallToActionSection";
import CountersSection from "@/components/counters/CountersSection";
import CoverageAreaSection from "@/components/coverageArea/CoverageAreaSection";
import HeroSlider from "@/components/heroBanners/HeroSlider";
import HowWeHelp from "@/components/howWeHelp/HowWeHelp";
import NewsSliderSection from "@/components/newsSlider/NewsSliderSection";
import OurInvestors from "@/components/ourInvestors/OurInvestors";
import OurPartners from "@/components/ourPartners/OurPartners";
import VideoShowcaseSection from "@/components/videoShowcase/VideoShowcaseSection";

export default function HomePage() {
  return (
    <>
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
      <CountersSection
        SectionClassName="!pb-0 md:!pb-0"
        className="lg:grid-cols-4 lg:gap-5"
        counterDetails={[
          {
            id: crypto.randomUUID(),
            count: "99%",
            details: "Clients satisfaction score",
            imageLink: "/counter-icons/client-happy.svg",
          },
          {
            id: crypto.randomUUID(),
            count: "22",
            details: "Outlet all over the country",
            imageLink: "/counter-icons/map-pointer.svg",
          },

          {
            id: crypto.randomUUID(),
            count: "100+",
            details: "Orders Per Day",
            imageLink: "/counter-icons/medicine-available.svg",
          },
          {
            id: crypto.randomUUID(),
            count: "22,357",
            details: "Loyalty Card Users",
            imageLink: "/counter-icons/loyalty-card.svg",
          },
        ]}
      />
      <AtAGlanceSliderSection
        sectionTitle="At a glance"
        cardDetails={[
          {
            id: crypto.randomUUID(),
            details: "Directly sourcing authentic medicines",
            imagePath: "/at-a-glance-icons/authentic-medicine.svg",
          },
          {
            id: crypto.randomUUID(),
            details: "Temperature control ensures efficacy",
            imagePath: "/at-a-glance-icons/temp-controled.svg",
          },
          {
            id: crypto.randomUUID(),
            details: "Convenient home delivery service",
            imagePath: "/at-a-glance-icons/home-delivery.svg",
          },
          {
            id: crypto.randomUUID(),
            details: "General and specialized healthcare service",
            imagePath: "/at-a-glance-icons/health-care.svg",
          },
          {
            id: crypto.randomUUID(),
            details: "Reliable and convenient home doctor service",
            imagePath: "/at-a-glance-icons/reliable-doctor.svg",
          },
          {
            id: crypto.randomUUID(),
            details: "Special discount for AKS Pharmacy cardholders",
            imagePath: "/at-a-glance-icons/discount-offer.svg",
          },
        ]}
      />
      <VideoShowcaseSection
        thumnailURL="/videos/thumbnails/about-us-video-thumnail.png"
        videoURL="/videos/pharmaceutical-showcase.mp4"
      />
      <HowWeHelp />
      <OurPartners
        partners={[
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-1.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-2.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-3.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-4.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-5.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-1.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-2.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-3.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-4.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-5.png",
          },
        ]}
      />
      <OurInvestors
        investors={[
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-1.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-2.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-3.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-4.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-5.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-1.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-2.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-3.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-4.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-investors/investor-5.png",
          },
        ]}
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
