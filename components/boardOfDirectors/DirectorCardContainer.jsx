import DirectorCard from "./DirectorCard";

const DirectorCardContainer = () => {
  const directorCards = [
    {
      id: crypto.randomUUID(),
      name: "Verna Quigley",
      title: "Board Chair and Chief Executive Officer",
      details:
        "Leading the organization with a focus on sustainable growth and innovation.",
      image: "director.png",
    },
    {
      id: crypto.randomUUID(),
      name: "John Doe",
      title: "Chief Financial Officer",
      details:
        "Ensuring financial stability and strategic investments for growth.",
        image: "director.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Emily Smith",
      title: "Chief Operations Officer",
      details:
        "Optimizing operational efficiency and excellence across departments.",
        image: "director.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Michael Brown",
      title: "Chief Technology Officer",
      details: "Driving technological advancements and digital transformation.",
      image: "director.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Sarah Johnson",
      title: "Chief Marketing Officer",
      details: "Strengthening brand presence and strategic market positioning.",
      image: "director.png",
    },
    {
      id: crypto.randomUUID(),
      name: "David Lee",
      title: "Chief Legal Officer",
      details: "Ensuring compliance and managing corporate legal affairs.",
      image: "director.png",
    },
  
  ];

  return (
    <section className="my-[50px] lg:my-[100px]">

    <div className="container">
      <div className="card-container grid md:grid-cols-2  lg:grid-cols-3 gap-x-[30px] gap-y-[30px] lg:gap-y-[94px]">
      {directorCards.map((director) =>( 
        <DirectorCard director={director} key={director.id} />
      ))}
      </div>
    </div>
    </section>
  )
}

export default DirectorCardContainer
