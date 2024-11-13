import CallToActionSection from "@/components/callToAction/CallToActionSection";
import CardGridSection from "@/components/cardGrid/CardGridSection";
import CountersSection from "@/components/counters/CountersSection";
import CustomerReviewSection from "@/components/customerReview/CustomerReviewSection";
import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import StorySection from "@/components/storySection/StorySection";
import VideoFullWidthSection from "@/components/videoShowcase/VideoFullWidthSection";
import CustomerCareAboutSection from "@/components/customerCareAbout/CustomerCareAboutSection";
import ProductCategoriesSection from "@/components/productCategories/ProductCategoriesSection";
import AppDownloadSection from "@/components/callToAction/AppDownloadSection";

export default function ServicesPage() {
  return (
    <>
      <HeroBannerSecondary
        bannerImage="/hero-banners/services.png"
        pageTitle="AKS Pharmacy"
        heading="Your trusted partner for health, care, and wellness."
      />
      <StorySection
        sectionTitle="AKS Pharmacy"
        heading="AKS Pharmacy provides prescription medications, over-the-counter products, health consultations, immunizations, and wellness services."
        details="Innovative solutions are key to addressing the world’s toughest health challenges, from chronic diseases and pandemics to mental health crises. By leveraging advancements in technology, research, and collaboration, we can tackle complex problems and improve global health outcomes. These efforts aim to not only treat illnesses but also prevent them, ensuring healthier futures for communities worldwide."
        buttonDetails={{ title: "Contact us" }}
      />
      <CountersSection
        counterDetails={[
          {
            id: crypto.randomUUID(),
            count: "99%",
            details: "Clients satisfaction score",
            imageName: "client-happy",
          },
          {
            id: crypto.randomUUID(),
            count: "22",
            details: "Outlet all over the country",
            imageName: "map-pointer",
          },

          {
            id: crypto.randomUUID(),
            count: "100+",
            details: "Orders Per Day",
            imageName: "medicine-available",
          },
          {
            id: crypto.randomUUID(),
            count: "22,357",
            details: "Loyalty Card Users",
            imageName: "loyalty-card",
          },
        ]}
      />
      <CustomerReviewSection
        className="border-b border-b-dark/10 bg-surface"
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
      <ProductCategoriesSection
        sectionTitle="Product categories"
        productList={[
          {
            productCategoryName: "Health and Wealth",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Fitness and Wellness",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Technology and Gadgets",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Home and Kitchen",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Books and Literature",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Fashion and Apparel",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Beauty and Skincare",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Toys and Games",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Sports and Outdoors",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Travel and Leisure",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Pet Supplies",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Automotive and Accessories",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Garden and Outdoor",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Office Supplies",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Groceries and Gourmet Food",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
          {
            productCategoryName: "Groceries and Gourmet Food",
            id: crypto.randomUUID(),
            image: "/product-categories/product-1.jpg",
          },
        ]}
      />
      <VideoFullWidthSection
        videoDetails={{
          thumbnail: "/videos/thumbnails/services-video-thumnail.jpg",
          videoPath: "/videos/pharmaceutical-showcase.mp4",
        }}
      />

      <CardGridSection
        sectionClassName="bg-surface"
        className="bg-surface lg:grid-cols-4"
        sectionHeading="What do we offer?"
        cardDetails={[
          {
            id: crypto.randomUUID(),
            details: "Prescription, over-the-counter, complementary medicines",
            imagePath: "/what-we-offer/prescription.svg",
          },
          {
            id: crypto.randomUUID(),
            details:
              "Trusted store for 100% authentic vitamins and supplements",
            imagePath: "/what-we-offer/vitamins.svg",
          },
          {
            id: crypto.randomUUID(),
            details: "Discover safe personal care products for all skin types",
            imagePath: "/what-we-offer/skin-product.svg",
          },
          {
            id: crypto.randomUUID(),
            details: "Convenient home delivery service",
            imagePath: "/what-we-offer/home-delivery.svg",
          },
        ]}
      />
      <AppDownloadSection />
      <CustomerCareAboutSection />
      <CallToActionSection />
    </>
  );
}
