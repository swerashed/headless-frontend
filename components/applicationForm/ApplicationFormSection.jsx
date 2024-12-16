import { Input } from "@/components/ui/input";

function ApplicationFormSection() {
  return (
    <section className="bg-surface py-20 pt-[170px]">
      <div className="container">
        <h1 className="mb-[10px] text-center font-onest text-5xl font-medium capitalize leading-[58px] tracking-[-1.5%] text-dark">
          Application Form
        </h1>
        <p className="text-center font-inter text-base font-normal leading-[26px] text-dark/80">
          We’re glad you’re here. Fill out this form and one of our client
          representatives will get back to you.
        </p>
      </div>
      <div className="container">
        <form>
          <Input />
        </form>
      </div>
    </section>
  );
}

export default ApplicationFormSection;
