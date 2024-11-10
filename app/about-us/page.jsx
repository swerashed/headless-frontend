import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import StorySection from "@/components/storySection/StorySection";
import CountersFiveSection from "@/components/counters/CountersFiveSection";
import VideoShowcaseSection from "@/components/videoShowcase/VideoShowcaseSection";
import MissionVissionSection from "@/components/missionVission/MissionVissionSection";
import AtAGlanceGridSection from "@/components/atAGlance/AtAGlanceGridSection";
import SideBySideWithButton from "@/components/sideBySide/SideBySideWithButtonSection";
import CallToActionSection from "@/components/callToAction/CallToActionSection";

export default function AboutUsPage() {
  return (
    <>
      <HeroBannerSecondary />
      <StorySection />
      <CountersFiveSection />
      <VideoShowcaseSection />
      <MissionVissionSection />
      <AtAGlanceGridSection />
      <SideBySideWithButton
        heading="Pioneering Healthcare with Diagnostic Excellence"
        details="Aks Khan Pharmaceuticals Diagnostics is a leading company specializing in innovative diagnostic solutions and healthcare products. They focus on cutting-edge research, developing reliable medical tests, and improving patient outcomes through advanced diagnostics for better healthcare management and personalized treatments."
        button={{ title: "Learn more" }}
        bannerImage="/section-banners/about-us/Pioneering-healthcare-banner.png"
      />
      <SideBySideWithButton
        heading="AKPL is a concern of AKS Khan Holdings and IFU (Investment Fund for Developing countries), Denmark"
        details="AKS Khan Holdings is a trading, investment and operating company that aggressively identifies and acquires companies in which it can leverage our strengths to generate superior earnings or market value. Consistent with this, we continuously review our current businesses and investments to ensure that our strategies are providing the highest return and value relative to the risk."
        button={{ title: "Visit AKS Khan Holdings website" }}
        bannerImage="/section-banners/about-us/akpl-banner.png"
      />
      <CallToActionSection />
    </>
  );
}
