import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import PeopleCardSection from "@/components/peopleCards/PeopleCardSection";

const BoardOfDirectorsPage = () => {
  return (
    <>
      <HeroBannerSecondary
        bannerImage="/hero-banners/board-of-directors.jpg"
        pageTitle="Board of directors"
        heading="Meet the visionary Leaders of our Board"
      />
      <PeopleCardSection
        className="md:grid-cols-3"
        peoples={[
          {
            id: crypto.randomUUID(),
            name: "John Doe",
            designation: "Chief Financial Strategist",
            details:
              "Overseeing comprehensive financial frameworks to ensure stability and growth. Balances strategic investments with risk management to maximize return. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec. Vulputate ut fermentum ornare ut dictum elementum in. Pharetra eget sit quam nisi dignissim erat molestie eget.",
            image: "director-1.png",
          },
          {
            id: crypto.randomUUID(),
            name: "Olivia Martinez",
            designation: "Head of Operations Excellence",
            details:
              "Drives operational efficiency by refining workflows and ensuring smooth interdepartmental collaboration. Leads initiatives to optimize processes and enhance productivity. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec. Vulputate ut fermentum ornare ut dictum elementum in.",
            image: "director-2.png",
          },
          {
            id: crypto.randomUUID(),
            name: "Samuel Green",
            designation: "Chief Innovation Officer",
            details:
              "Champions technology-driven advancements and digital transformation initiatives. Identifies growth opportunities through innovation and keeps the organization at the cutting edge. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec.",
            image: "director-3.png",
          },
          {
            id: crypto.randomUUID(),
            name: "Isabella Carter",
            designation: "Global Marketing Strategist",
            details:
              "Expands brand reach and engagement by developing strategic marketing initiatives. Strengthens the company's market positioning through targeted campaigns. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec.",
            image: "director-4.png",
          },
          {
            id: crypto.randomUUID(),
            name: "William Black",
            designation: "Corporate Compliance Lead",
            details:
              "Ensures strict adherence to industry regulations and ethical standards. Proactively addresses potential compliance issues to mitigate risk. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec.",
            image: "director-5.png",
          },
          {
            id: crypto.randomUUID(),
            name: "Sophia Reynolds",
            designation: "Chairperson and CEO",
            details:
              "Guides strategic vision and ensures sustainable growth through innovative leadership. Fosters a culture of integrity and forward-thinking initiatives. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec.",
            image: "director-6.png",
          },
        ]}
      />
    </>
  );
};

export default BoardOfDirectorsPage;
