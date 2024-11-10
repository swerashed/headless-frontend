import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import StorySection from "@/components/storySection/StorySection";
import CountersFiveSection from "@/components/counters/CountersFiveSection";
import VideoShowcaseSection from "@/components/videoShowcase/VideoShowcaseSection";
import MissionVissionSection from "@/components/missionVission/MissionVissionSection";

export default function AboutUsPage() {
  return (
    <>
      <HeroBannerSecondary />
      <StorySection />
      <CountersFiveSection />
      <VideoShowcaseSection />
      <MissionVissionSection />
    </>
  );
}
