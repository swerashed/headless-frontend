import BackButton from "../buttons/BackButton";
import ApplicationForm from "./ApplicationForm";
import ApplicationFormHeading from "./ApplicationFormHeading";

function ApplicationFormSection({ data, sectionTitle, sectionSubTitle }) {
  return (
    <section className="border-b border-dark/10 bg-surface py-[100px] pb-16 md:pb-[100px] md:pt-[120px]">
      <div className="container">
        <BackButton />
        <ApplicationFormHeading
          sectionTitle={sectionTitle}
          sectionSubTitle={sectionSubTitle}
        />
      </div>
      <div className="container !max-w-[940px]">
        <ApplicationForm data={data} />
      </div>
    </section>
  );
}

export default ApplicationFormSection;
