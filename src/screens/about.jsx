import Footer from "../Components/Footer";
import Contact from "../Components/contact";
import Navigation from "../Components/nav";
import Roadmap from "../Components/roadmap";
import ServiceTitleCard from "../Components/servicetitlecard";
import ValueCard from "../Components/value";

const About = () => {
  return (
    <div>
      <Navigation />
      <ServiceTitleCard title={"BRINGING ASPIRATIONS"} title2={"TO LIFE"} />
      <ValueCard
        title={"value &"}
        title2={"Purpose"}
        items={[
          { title: "I1", description: "description of i" },
          { title: "I1", description: "description of i" },
          { title: "I1", description: "description of i" }
        ]}
        items2={[
          { title: "I1", description: "description of i" },
          { title: "I1", description: "description of i" },
          { title: "I1", description: "description of i" }
        ]}
      />
      <Roadmap
        title={"OUR COMMITMENT TO GROWTH"}
        content={
          "Helix Tech IT Solutions Inc is committed to bringing everyone's aspirations to life, we are able to create a positive impact on the tech industry."
        }
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
