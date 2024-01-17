import Footer from "../Components/Footer";
import Contact from "../Components/contact";
import Carousel from "../Components/crousel";
import Herocard01 from "../Components/herocard01";
import Navigation from "../Components/nav";
import Roadmap from "../Components/roadmap";
import ServiceCard from "../Components/services";
import Testimonial from "../Components/testimonials";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Herocard01 />
      <ServiceCard />
      <Carousel />
      <Roadmap
        title={
          "SIMPLIFIED CANDIDATE PLACEMENT PROCESS FROM RESUME BUILDING , IT TRAININGS TO PLACEMENT"
        }
        content={
          "At Helix Tech, we follow a step-by-step process to place our candidates with relevant organizations. IT training & placements is one of our USP offerings to aspirant job seekers."
        }
        content2={"Here how we do it"}
      />
      <div className="w-full flex flex-col items-center py-4 bg-blue-100">
        <img
          src="https://helixtechinc.com/assets/videos/infographic.png"
          alt=""
          className="w-11/12"
        />
      </div>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
