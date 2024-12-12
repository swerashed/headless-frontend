import AksStoriesSection from "@/components/aksStories/AksStoriesSection";
import CustomerReviewSection from "@/components/customerReview/CustomerReviewSection";
import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import OpenJobListSection from "@/components/openJobList/OpenJobListSection";
import StorySection from "@/components/storySection/StorySection";
import VideoShowcaseSection from "@/components/videoShowcase/VideoShowcaseSection";
import WhyChooseUsSection from "@/components/whyChooseUs/WhyChooseUsSection";

function page() {
  return (
    <>
      <HeroBannerSecondary
        bannerImage="/hero-banners/career.jpg"
        pageTitle="Career"
        heading="Elevate your career: Steps to achieve professional greatness"
      />
      <WhyChooseUsSection
        sectionClassName="bg-surface"
        image="/section-banners/career/why-choose-us-banner.png"
        heading="Why work with us"
        bodyText="We are dedicated to delivering exceptional diagnostic and healthcare services that prioritize accuracy, reliability, and patient care."
        questionAndAnswers={[
          {
            id: crypto.randomUUID(),
            question: "Health + Well-Being",
            answer:
              "With extensive experience, we deliver high-quality results tailored to your unique needs.",
          },
          {
            id: crypto.randomUUID(),
            question: "Diversity, Equity, Inclusion + Belonging",
            answer:
              "We prioritize customer satisfaction by focusing on your goals and delivering solutions that exceed expectations.",
          },
          {
            id: crypto.randomUUID(),
            question: "Professional Development",
            answer:
              "Our team leverages cutting-edge strategies and tools to provide you with creative solutions that keep you ahead of the competition.",
          },
          {
            id: crypto.randomUUID(),
            question: "Culture",
            answer:
              "We are committed to achieving the highest standards in everything we do, ensuring outstanding results for every project.",
          },
        ]}
      />
      <StorySection
        sectionTitle="Life at aks pharmaceuticals"
        heading="We don’t just work side by side; we collaborate. Our diverse expertise, skills, and experiences allow us to learn from each other and produce exceptional, effective results"
        buttonDetails={{ title: "Contact us" }}
      />
      <VideoShowcaseSection
        thumnailURL="/videos/thumbnails/career-video-thumnail.jpeg"
        videoURL="/videos/pharmaceutical-showcase.mp4"
      />
      <AksStoriesSection
        heading="We don't just work side by side; we collaborate. Our diverse
          expertise, skills, and experiences allow us to learn from each other
          and produce exceptional, effective results"
        cards={[
          {
            id: crypto.randomUUID(),
            title: "AKS Pharmaceuticals team members fun activities",
            label: "Team hangout",
            image: "/aks-stories-cards/story-1.jpeg",
          },
          {
            id: crypto.randomUUID(),
            title: "Team-building event at AKS Pharmaceuticals",
            label: "Team building",
            image: "/aks-stories-cards/story-2.jpeg",
          },
          {
            id: crypto.randomUUID(),
            title: "Celebrating success at AKS Pharmaceuticals",
            label: "Celebration",
            image: "/aks-stories-cards/story-3.jpeg",
          },
          {
            id: crypto.randomUUID(),
            title: "AKS Pharmaceuticals annual team outing",
            label: "Team outing",
            image: "/aks-stories-cards/story-4.jpeg",
          },
          {
            id: crypto.randomUUID(),
            title: "Innovation workshop with AKS Pharmaceuticals team",
            label: "Workshop",
            image: "/aks-stories-cards/story-2.jpeg",
          },
          {
            id: crypto.randomUUID(),
            title: "AKS Pharmaceuticals holiday party",
            label: "Holiday party",
            image: "/aks-stories-cards/story-3.jpeg",
          },
        ]}
      />
      <CustomerReviewSection
        className="bg-surface"
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
      <OpenJobListSection
        sectionTitle="Current openings"
        sectionSubTitle="open positions across all offices and all departments"
        jobPosts={[
          {
            id: crypto.randomUUID(),
            title: "Pharmaceutical Sales Representative",
            location: "Dhaka",
            deadline: "20 Aug 2023",
            vacancy: "1",
          },
          {
            id: crypto.randomUUID(),
            title: "Pharmaceutical Sales Representative",
            location: "Dhaka",
            deadline: "20 Aug 2023",
            vacancy: "1",
          },
          {
            id: crypto.randomUUID(),
            title: "Pharmaceutical Sales Representative",
            location: "Dhaka",
            deadline: "20 Aug 2023",
            vacancy: "1",
          },
          {
            id: crypto.randomUUID(),
            title: "Pharmaceutical Sales Representative",
            location: "Dhaka",
            deadline: "20 Aug 2023",
            vacancy: "1",
          },
        ]}
      />
    </>
  );
}

export default page;
