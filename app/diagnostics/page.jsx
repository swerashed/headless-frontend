import componentMap from "@/components/index";
import { fetchDiagnosticsPage } from "@/graphql/pages/GET_DIAGNOSTICS_PAGE";

async function DiagnosticsPage() {
   const data = await fetchDiagnosticsPage();
    const blocks = data?.page?.blocks || [];
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

export default DiagnosticsPage;



// <ExperienceDoctorSection
//   sectionTitle="Our experience doctors"
//   peoples={[
//     {
//       id: crypto.randomUUID(),
//       name: "Jeannie Parker",
//       designation: "Chief Financial Strategist",
//       details:
//         "Overseeing comprehensive financial frameworks to ensure stability and growth. Balances strategic investments with risk management to maximize return. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec. Vulputate ut fermentum ornare ut dictum elementum in. Pharetra eget sit quam nisi dignissim erat molestie eget.",
//       image: "director-1.png",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Lorena Paucek",
//       designation: "Head of Operations Excellence",
//       details:
//         "Drives operational efficiency by refining workflows and ensuring smooth interdepartmental collaboration. Leads initiatives to optimize processes and enhance productivity. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec. Vulputate ut fermentum ornare ut dictum elementum in.",
//       image: "director-2.png",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Miss Jonathan Tremblay",
//       designation: "Chief Innovation Officer",
//       details:
//         "Champions technology-driven advancements and digital transformation initiatives. Identifies growth opportunities through innovation and keeps the organization at the cutting edge. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec.",
//       image: "director-3.png",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Winifred Hand",
//       designation: "Global Marketing Strategist",
//       details:
//         "Expands brand reach and engagement by developing strategic marketing initiatives. Strengthens the company's market positioning through targeted campaigns. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec.",
//       image: "director-4.png",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Mr. Alyssa Armstrong",
//       designation: "Corporate Compliance Lead",
//       details:
//         "Ensures strict adherence to industry regulations and ethical standards. Proactively addresses potential compliance issues to mitigate risk. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec.",
//       image: "director-5.png",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Bobby Schultz",
//       designation: "Chairperson and CEO",
//       details:
//         "Guides strategic vision and ensures sustainable growth through innovative leadership. Fosters a culture of integrity and forward-thinking initiatives. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec.",
//       image: "director-6.png",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Laverne Schaefer IV",
//       designation: "Chief Financial Strategist",
//       details:
//         "Overseeing comprehensive financial frameworks to ensure stability and growth. Balances strategic investments with risk management to maximize return. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec. Vulputate ut fermentum ornare ut dictum elementum in. Pharetra eget sit quam nisi dignissim erat molestie eget.",
//       image: "director-1.png",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Leticia Schmeler",
//       designation: "Head of Operations Excellence",
//       details:
//         "Drives operational efficiency by refining workflows and ensuring smooth interdepartmental collaboration. Leads initiatives to optimize processes and enhance productivity. Lorem ipsum dolor sit amet consectetur. Turpis suspendisse justo imperdiet nibh ultrices tortor nibh. Tortor ultrices molestie lacinia tortor pharetra. Ut quam ullamcorper orci tincidunt aliquam adipiscing dui. Tincidunt donec fermentum blandit sagittis lorem feugiat mattis nunc. Ornare in adipiscing dictum vestibulum enim lobortis donec. Vulputate ut fermentum ornare ut dictum elementum in.",
//       image: "director-2.png",
//     },
//   ]}
// />
// <AppDownloadSection className="bg-surface" />
// <CoverageAreaSectionCenter
//   sectionHeading="Our coverage area"
//   sectionDetails="AKS Pharmacy offers high-quality medicines, expert consultation, and personalized care from dedicated pharmacists, ensuring product safety."
//   outlets={[
//     {
//       id: crypto.randomUUID(),
//       outlet_name: "DMCH",
//       district: "Dhaka",
//       outlet_address:
//         "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
//       outlet_number: "1870787200",
//       map_link: "/",
//     },
//     {
//       id: crypto.randomUUID(),
//       outlet_name: "Lalbagh (Pharmacy and Clinic)",
//       district: "Dhaka",
//       outlet_address:
//         "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
//       outlet_number: "1870787200",
//       map_link: "/",
//     },
//     {
//       id: crypto.randomUUID(),
//       outlet_name: "Lalbagh (Pharmacy and Clinic)",
//       district: "Dhaka",
//       outlet_address:
//         "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
//       outlet_number: "1870787200",
//       map_link: "/",
//     },
//     {
//       id: crypto.randomUUID(),
//       outlet_name: "DMCH",
//       district: "Dhaka",
//       outlet_address:
//         "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
//       outlet_number: "1870787200",
//       map_link: "/",
//     },
//     {
//       id: crypto.randomUUID(),
//       outlet_name: "Lalbagh (Pharmacy and Clinic)",
//       district: "Dhaka",
//       outlet_address:
//         "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
//       outlet_number: "1870787200",
//       map_link: "/",
//     },
//     {
//       id: crypto.randomUUID(),
//       outlet_name: "Lalbagh (Pharmacy and Clinic)",
//       district: "Dhaka",
//       outlet_address:
//         "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
//       outlet_number: "1870787200",
//       map_link: "/",
//     },
//     {
//       id: crypto.randomUUID(),
//       outlet_name: "DMCH",
//       district: "Dhaka",
//       outlet_address:
//         "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
//       outlet_number: "1870787200",
//       map_link: "/",
//     },
//   ]}
// />
// <NewsSliderSection
//   sectionHeading="Recent updates"
//   newsItems={[
//     {
//       id: crypto.randomUUID(),
//       title:
//         "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
//       date: "March 12, 2020",
//       imageLink: "/recent-updates/recent-updates-1.png",
//     },
//     {
//       id: crypto.randomUUID(),
//       title:
//         "AKS Khan Pharmaceuticals crosses major milestone with 500,000 patients Served",
//       date: "March 12, 2020",
//       imageLink: "/recent-updates/recent-updates-2.png",
//     },
//     {
//       id: crypto.randomUUID(),
//       title: "Three new locations in Khulna Division",
//       date: "March 12, 2020",
//       imageLink: "/recent-updates/recent-updates-3.png",
//     },
//     {
//       id: crypto.randomUUID(),
//       title:
//         "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
//       date: "March 12, 2020",
//       imageLink: "/recent-updates/recent-updates-1.png",
//     },
//     {
//       id: crypto.randomUUID(),
//       title:
//         "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
//       date: "March 12, 2020",
//       imageLink: "/recent-updates/recent-updates-2.png",
//     },
//   ]}
//   buttonDetails={{ title: "View all" }}
// />
// <CallToActionSection />
// </>