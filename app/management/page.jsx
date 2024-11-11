import PeopleCardContainer from "@/components/shared/PeopleCards/PeopleCardContainer";
import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";

const ManagementTeamPage = () => {
  return (
    <div>
        <HeroBannerSecondary    bannerImage="/hero-banners/about.png"
        pagetitle="About Us"
        heading="Innovative Solutions for Critical Health Challenges"/>
        <PeopleCardContainer variant="4-col"/>

    </div>
  );
};

export default ManagementTeamPage;
