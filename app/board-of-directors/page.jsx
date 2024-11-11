import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary"
import PeopleCardContainer from "@/components/shared/PeopleCards/PeopleCardContainer"


const BoardOfDirectorsPage = () => {
  return (
    <div>
          <HeroBannerSecondary   bannerImage="/hero-banners/about.png"
        pagetitle="About Us"
        heading="Innovative Solutions for Critical Health Challenges"/>
          <PeopleCardContainer variant="3-col"/>
    </div>
  )
}

export default BoardOfDirectorsPage