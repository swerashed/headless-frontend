import AppDownloadSection from "@/components/callToAction/AppDownloadSection";
import CallToActionSection from "@/components/callToAction/CallToActionSection";
import CountersSection from "@/components/counters/CountersSection";
import CustomerReviewSection from "@/components/customerReview/CustomerReviewSection";
import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import StorySection from "@/components/storySection/StorySection";
import WhyChooseUsSection from "@/components/whyChooseUs/WhyChooseUsSection";

function DiagnosticsPage() {
  return (
    <>
      <HeroBannerSecondary
        bannerImage="/hero-banners/diagnostics.jpg"
        pageTitle="Diagnostics"
        heading="Top-Rated Diagnostic Solutions for Accurate and Reliable Results"
      />
      <StorySection
        className="bg-surface"
        sectionTitle="AKS Diagnostics"
        heading="Discover why you can trust us—our values, transparency, and dedication to delivering honest, reliable information always."
        details="AKS Healthcare is a team of dedicated professionals who are passionate about delivering exceptional diagnostic and healthcare services. Our mission is to provide accurate, reliable, and timely diagnoses, empowering healthcare professionals to make informed decisions and deliver quality patient care."
        buttonDetails={{ title: "Get in touch" }}
      />
      <CountersSection
        SectionClassName="bg-surface"
        className="counter-of-3 lg:grid-cols-3"
        counterDetails={[
          {
            id: crypto.randomUUID(),
            count: "30+",
            details: "Convenient locations across the country",
            imageName: "map-pointer",
          },
          {
            id: crypto.randomUUID(),
            count: "1M+",
            details: "Tests performed each year for patients of all ages",
            imageName: "patients",
          },

          {
            id: crypto.randomUUID(),
            count: "3,500+",
            details: "Lab tests available to help you find answers",
            imageName: "tests",
          },
        ]}
      />
      <CustomerReviewSection
        className="border-b border-b-dark/10"
        reviews={[
          {
            id: crypto.randomUUID(),
            customerName: "John Doe",
            customerReview:
              "I had a great experience at AKS Pharmacy! The staff was friendly and knowledgeable, providing excellent service. They offered a wide range of products, making my health journey easier.",
            image: "/customers-reviews/customer-1.png",
          },
          {
            id: crypto.randomUUID(),
            customerName: "Jane Smith",
            customerReview:
              "I had a great experience at AKS Pharmacy! The staff was friendly and knowledgeable, providing excellent service. They offered a wide range of products, making my health journey easier.",
            image: "/customers-reviews/customer-1.png",
          },
          {
            id: crypto.randomUUID(),
            customerName: "Alex Johnson",
            customerReview:
              "I had a great experience at AKS Pharmacy! The staff was friendly and knowledgeable, providing excellent service. They offered a wide range of products, making my health journey easier.",
            image: "/customers-reviews/customer-1.png",
          },
          {
            id: crypto.randomUUID(),
            customerName: "Chris Lee",
            customerReview:
              "I had a great experience at AKS Pharmacy! The staff was friendly and knowledgeable, providing excellent service. They offered a wide range of products, making my health journey easier.",
            image: "/customers-reviews/customer-1.png",
          },
          {
            id: crypto.randomUUID(),
            customerName: "Patricia Brown",
            customerReview:
              "I had a great experience at AKS Pharmacy! The staff was friendly and knowledgeable, providing excellent service. They offered a wide range of products, making my health journey easier.",
            image: "/customers-reviews/customer-1.png",
          },
        ]}
      />
      <WhyChooseUsSection
        image="/section-banners/diagnostics/why-chhose-us.jpg"
        heading="Why Choose AKS Diagnostics for Your Health Needs"
        bodyText="We are dedicated to delivering exceptional diagnostic and healthcare services that prioritize accuracy, reliability, and patient care."
        questionAndAnswers={[
          {
            id: crypto.randomUUID(),
            question: "Advanced Technology Integration",
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
      <AppDownloadSection className="bg-surface" />
      <CallToActionSection />
    </>
  );
}

export default DiagnosticsPage;
