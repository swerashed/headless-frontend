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
import { fetchAbout } from "@/graphql/pages/GET_ABOUT";
import componentMap from "@/components/index";

export default async function AboutUsPage() {
   const data = await fetchAbout();
   const blocks = data?.page?.blocks || [];

  //  console.log(blocks);
  return (
    <div>
    {blocks &&
    blocks.map((block, index) => {
      const Component = componentMap[block.name];
      if (!Component) {
        console.warn(`Component not found for block "${block.name}"`);
        return null;
      }
      const data = JSON.parse(block.attributesJSON)?.data;
      return <Component key={index} data={data} />;
    })}
</div>

   
  );
}


// <>

// <CardGridSection
//   className="lg:grid-cols-3"
//   sectionHeading="At a glance"
//   cardDetails={[
//     {
//       id: crypto.randomUUID(),
//       details: "Directly sourcing authentic medicines",
//       imagePath: "/at-a-glance-icons/authentic-medicine.svg",
//     },
//     {
//       id: crypto.randomUUID(),
//       details: "Temperature control ensures efficacy",
//       imagePath: "/at-a-glance-icons/temp-controled.svg",
//     },
//     {
//       id: crypto.randomUUID(),
//       details: "Convenient home delivery service",
//       imagePath: "/at-a-glance-icons/home-delivery.svg",
//     },
//     {
//       id: crypto.randomUUID(),
//       details: "General and specialized healthcare service",
//       imagePath: "/at-a-glance-icons/health-care.svg",
//     },
//     {
//       id: crypto.randomUUID(),
//       details: "Reliable and convenient home doctor service",
//       imagePath: "/at-a-glance-icons/reliable-doctor.svg",
//     },
//     {
//       id: crypto.randomUUID(),
//       details: "Special discount for AKS Pharmacy cardholders",
//       imagePath: "/at-a-glance-icons/discount-offer.svg",
//     },
//   ]}
// />
// <SideBySideWithButton
//   sectionClassName="border-t border-dark/10"
//   heading="Pioneering Healthcare with Diagnostic Excellence"
//   details="Aks Khan Pharmaceuticals Diagnostics is a leading company specializing in innovative diagnostic solutions and healthcare products. They focus on cutting-edge research, developing reliable medical tests, and improving patient outcomes through advanced diagnostics for better healthcare management and personalized treatments."
//   button={{ title: "Learn more" }}
//   bannerImage="/section-banners/about-us/Pioneering-healthcare-banner.png"
// />
// <WhyChooseUsSection
//   sectionClassName="bg-surface"
//   image="/section-banners/about-us/why-choose-us-banner.png"
//   heading="Why Choose AKS Khan Pharmaceuticals for your Health Needs"
//   questionAndAnswers={[
//     {
//       id: crypto.randomUUID(),
//       question: "Expertise You Can Trust",
//       answer:
//         "With extensive experience, we deliver high-quality results tailored to your unique needs.",
//     },
//     {
//       id: crypto.randomUUID(),
//       question: "Customer-First Approach",
//       answer:
//         "We prioritize customer satisfaction by focusing on your goals and delivering solutions that exceed expectations.",
//     },
//     {
//       id: crypto.randomUUID(),
//       question: "Innovative Strategies",
//       answer:
//         "Our team leverages cutting-edge strategies and tools to provide you with creative solutions that keep you ahead of the competition.",
//     },
//     {
//       id: crypto.randomUUID(),
//       question: "Dedication to Excellence",
//       answer:
//         "We are committed to achieving the highest standards in everything we do, ensuring outstanding results for every project.",
//     },
//   ]}
// />
// <CoverageAreaSection />
// <SideBySideWithButton
//   sectionClassName="border-t border-dark/10"
//   heading="AKPL is a concern of AKS Khan Holdings and IFU (Investment Fund for Developing countries), Denmark"
//   details="AKS Khan Holdings is a trading, investment and operating company that aggressively identifies and acquires companies in which it can leverage our strengths to generate superior earnings or market value. Consistent with this, we continuously review our current businesses and investments to ensure that our strategies are providing the highest return and value relative to the risk."
//   button={{ title: "Visit AKS Khan Holdings website" }}
//   bannerImage="/section-banners/about-us/akpl-banner.png"
// />
// <CallToActionSection />
// </>