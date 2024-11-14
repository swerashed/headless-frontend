import AppDownloadSection from "@/components/callToAction/AppDownloadSection";
import CallToActionSection from "@/components/callToAction/CallToActionSection";
import CountersSection from "@/components/counters/CountersSection";
import CustomerReviewSection from "@/components/customerReview/CustomerReviewSection";
import DepartmentSection from "@/components/departments/DepartmentSection";
import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import NewsSliderSection from "@/components/newsSlider/NewsSliderSection";
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
      <DepartmentSection
        sectionTitle="Departments"
        items={[
          {
            id: crypto.randomUUID(),
            title: "Cardiology",
            details:
              "Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system",
            icon: "/departments/cardiology.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Pulmonary",
            details:
              "The word pulmonary is used to describe issues about the lungs. It is derived from the Latin root word Pulmo, which means lung.",
            icon: "/departments/pulmonary.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Neurology",
            details:
              "Neurology is a branch of medical science that is concerned with disorders and diseases of the nervous system.",
            icon: "/departments/neurology.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Orthopedics",
            details:
              "Orthopedic surgery, or orthopedics, deals with conditions involving the musculoskeletal system.",
            icon: "/departments/orthopedics.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Gastroenterology",
            details:
              "A gastroenterologist is a medical professional who specializes in diseases of the digestive system and digestive tract.",
            icon: "/departments/gastroenterology.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Laboratory",
            details:
              "Laboratory, a Place where scientific research and development is conducted and analyses performed.",
            icon: "/departments/laboratory.svg",
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
      <DepartmentSection
        sectionTitle="Diagnostics Solutions"
        items={[
          {
            id: crypto.randomUUID(),
            title: "Magnetic Resonance Imaging (MRI)",
            details:
              "Used for detailed imaging of soft tissues, organs, and the central nervous system to diagnose conditions like tumors, spinal cord injuries, and brain disorders.",
            icon: "/dignostics-solutions/mri.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Computed Tomography (CT Scan)",
            details:
              "Combines X-ray images to create detailed cross-sectional views of bones, blood vessels, and soft tissues, often used in trauma or cancer diagnosis.",
            icon: "/dignostics-solutions/ct-scan.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Ultrasound Imaging",
            details:
              "Utilizes sound waves to produce images of organs and tissues, commonly used in prenatal care, abdominal issues, and heart disease evaluation.",
            icon: "/dignostics-solutions/ultrasound-imaging.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Blood Testing Panels",
            details:
              "Includes tests such as Complete Blood Count (CBC), lipid panels, and liver function tests, essential for diagnosing infections, anemia, cholesterol issues, and more.",
            icon: "/dignostics-solutions/blood-testing-panels.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Molecular Diagnostics (PCR Tests)",
            details:
              "Detects specific genetic material or proteins, crucial in diagnosing infectious diseases, cancers, and genetic disorders. Widely used for COVID-19 and other viral diseases.",
            icon: "/dignostics-solutions/pcr.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Electrocardiogram (ECG/EKG)",
            details:
              "Measures the electrical activity of the heart, helping to diagnose heart conditions like arrhythmias, heart attacks, and other cardiovascular diseases.",
            icon: "/dignostics-solutions/ecg.svg",
          },
        ]}
      />
      <AppDownloadSection className="bg-surface" />
      <NewsSliderSection
        sectionHeading="Recent updates"
        newsItems={[
          {
            id: crypto.randomUUID(),
            title:
              "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
            date: "March 12, 2020",
            image: "/recent-updates/recent-updates-1.png",
          },
          {
            id: crypto.randomUUID(),
            title:
              "AKS Khan Pharmaceuticals crosses major milestone with 500,000 patients Served",
            date: "March 12, 2020",
            image: "/recent-updates/recent-updates-2.png",
          },
          {
            id: crypto.randomUUID(),
            title: "Three new locations in Khulna Division",
            date: "March 12, 2020",
            image: "/recent-updates/recent-updates-3.png",
          },
          {
            id: crypto.randomUUID(),
            title:
              "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
            date: "March 12, 2020",
            image: "/recent-updates/recent-updates-1.png",
          },
          {
            id: crypto.randomUUID(),
            title:
              "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
            date: "March 12, 2020",
            image: "/recent-updates/recent-updates-2.png",
          },
        ]}
        buttonDetails={{ title: "View all" }}
      />
      <CallToActionSection />
    </>
  );
}

export default DiagnosticsPage;
