import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import StorySection from "@/components/storySection/StorySection";
import CountersSection from "@/components/counters/CountersSection";
import VideoShowcaseSection from "@/components/videoShowcase/VideoShowcaseSection";
import MissionVissionSection from "@/components/missionVission/MissionVissionSection";
import CardGridSection from "@/components/cardGrid/CardGridSection";
import SideBySideWithButton from "@/components/sideBySide/SideBySideWithButtonSection";
import WhyChooseUsSection from "@/components/whyChooseUs/WhyChooseUsSection";
import CoverageAreaSection from "@/components/coverageArea/CoverageAreaSection";
import CallToActionSection from "@/components/callToAction/CallToActionSection";

export default function AboutUsPage() {
  return (
    <>
      <HeroBannerSecondary
        bannerImage="/hero-banners/about.png"
        pageTitle="About Us"
        heading="Innovative Solutions for Critical Health Challenges"
      />
      <StorySection
        sectionTitle="story of AKS Khan Pharmaceuticals"
        heading="Through AKS Khan Pharmacy and Diagnostics, we provide expert consultation, advanced technology, and inclusive care for a healthier life."
        details="Innovative solutions are key to addressing the world’s toughest health challenges, from chronic diseases and pandemics to mental health crises. By leveraging advancements in technology, research, and collaboration, we can tackle complex problems and improve global health outcomes. These efforts aim to not only treat illnesses but also prevent them, ensuring healthier futures for communities worldwide."
      />
      <CountersSection
        SectionClassName="pb-0 md:pb-0"
        className="counter-of-5 md:grid-cols-6"
        counterDetails={[
          {
            id: crypto.randomUUID(),
            count: "99%",
            details: "Clients satisfaction score",
            imageName: "client-happy",
          },
          {
            id: crypto.randomUUID(),
            count: "12",
            details: "Number of pharmacy locations or areas served",
            imageName: "map-pointer",
          },
          {
            id: crypto.randomUUID(),
            count: "10+",
            details: "Years in Operation",
            imageName: "building",
          },
          {
            id: crypto.randomUUID(),
            count: "100+",
            details: "Types or number of specialty medications available",
            imageName: "medicine-available",
          },
          {
            id: crypto.randomUUID(),
            count: "10+",
            details: "Number of health screenings or events held annually",
            imageName: "loyalty-card",
          },
        ]}
      />
      <VideoShowcaseSection
        thumnailURL="/videos/thumbnails/about-us-video-thumnail.png"
        videoURL="/videos/pharmaceutical-showcase.mp4"
      />
      <MissionVissionSection />
      <CardGridSection
        className="lg:grid-cols-3"
        sectionHeading="At a glance"
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
      <SideBySideWithButton
        sectionClassName="border-t border-dark/10"
        heading="Pioneering Healthcare with Diagnostic Excellence"
        details="Aks Khan Pharmaceuticals Diagnostics is a leading company specializing in innovative diagnostic solutions and healthcare products. They focus on cutting-edge research, developing reliable medical tests, and improving patient outcomes through advanced diagnostics for better healthcare management and personalized treatments."
        button={{ title: "Learn more" }}
        bannerImage="/section-banners/about-us/Pioneering-healthcare-banner.png"
      />
      <WhyChooseUsSection
        sectionClassName="bg-surface"
        image="/section-banners/about-us/why-choose-us-banner.png"
        heading="Why Choose AKS Khan Pharmaceuticals for your Health Needs"
        questionAndAnswers={[
          {
            id: crypto.randomUUID(),
            question: "Expertise You Can Trust",
            answer:
              "With extensive experience, we deliver high-quality results tailored to your unique needs.",
          },
          {
            id: crypto.randomUUID(),
            question: "Customer-First Approach",
            answer:
              "We prioritize customer satisfaction by focusing on your goals and delivering solutions that exceed expectations.",
          },
          {
            id: crypto.randomUUID(),
            question: "Innovative Strategies",
            answer:
              "Our team leverages cutting-edge strategies and tools to provide you with creative solutions that keep you ahead of the competition.",
          },
          {
            id: crypto.randomUUID(),
            question: "Dedication to Excellence",
            answer:
              "We are committed to achieving the highest standards in everything we do, ensuring outstanding results for every project.",
          },
        ]}
      />
      <CoverageAreaSection />
      <SideBySideWithButton
        sectionClassName="border-t border-dark/10"
        heading="AKPL is a concern of AKS Khan Holdings and IFU (Investment Fund for Developing countries), Denmark"
        details="AKS Khan Holdings is a trading, investment and operating company that aggressively identifies and acquires companies in which it can leverage our strengths to generate superior earnings or market value. Consistent with this, we continuously review our current businesses and investments to ensure that our strategies are providing the highest return and value relative to the risk."
        button={{ title: "Visit AKS Khan Holdings website" }}
        bannerImage="/section-banners/about-us/akpl-banner.png"
      />
      <CallToActionSection />
    </>
  );
}
