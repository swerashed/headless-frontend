import componentMap from "@/components/index";
import { fetchOutltes } from "@/graphql/GET_OUTLETS";
import { fetchServicesPage } from "@/graphql/pages/GET_SERVICES_PAGE";


export default async function ServicesPage() {
   const data = await fetchServicesPage()
    const blocks = data?.page?.blocks || [];
    // console.log(blocks)
   
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

{/* <>

<CoverageAreaSectionCenter
  sectionHeading="Our coverage area"
  sectionDetails="AKS Pharmacy offers high-quality medicines, expert consultation, and personalized care from dedicated pharmacists, ensuring product safety."
  outlets={[
    {
      id: crypto.randomUUID(),
      outlet_name: "DMCH",
      district: "Dhaka",
      outlet_address:
        "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
      outlet_number: "1870787200",
      map_link: "/",
    },
    {
      id: crypto.randomUUID(),
      outlet_name: "Lalbagh (Pharmacy and Clinic)",
      district: "Dhaka",
      outlet_address:
        "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
      outlet_number: "1870787200",
      map_link: "/",
    },
    {
      id: crypto.randomUUID(),
      outlet_name: "Lalbagh (Pharmacy and Clinic)",
      district: "Dhaka",
      outlet_address:
        "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
      outlet_number: "1870787200",
      map_link: "/",
    },
    {
      id: crypto.randomUUID(),
      outlet_name: "DMCH",
      district: "Dhaka",
      outlet_address:
        "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
      outlet_number: "1870787200",
      map_link: "/",
    },
    {
      id: crypto.randomUUID(),
      outlet_name: "Lalbagh (Pharmacy and Clinic)",
      district: "Dhaka",
      outlet_address:
        "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
      outlet_number: "1870787200",
      map_link: "/",
    },
    {
      id: crypto.randomUUID(),
      outlet_name: "Lalbagh (Pharmacy and Clinic)",
      district: "Dhaka",
      outlet_address:
        "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
      outlet_number: "1870787200",
      map_link: "/",
    },
    {
      id: crypto.randomUUID(),
      outlet_name: "DMCH",
      district: "Dhaka",
      outlet_address:
        "Opposite of Chankharpool Masjid Gate(Ground Floor, 14/2 Bakshibazar, Dhaka",
      outlet_number: "1870787200",
      map_link: "/",
    },
  ]}
/>
<CallToActionSection />
</> */}