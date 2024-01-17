/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "../Components/nav";
import Contact from "../Components/contact";
import Footer from "../Components/Footer";
import ServiceTitleCard from "../Components/servicetitlecard";
import Roadmap from "../Components/roadmap";
import ValueCard from "../Components/value";

function ServiceDetail() {
  return (
    <div>
      <Navigation />
      <ServiceTitleCard
        title={"Your trusted partner in job hunting process:"}
        title2={"Helix Tech IT Solutions"}
      />
      <section className="bg-blue-100 w-screen -ml-10 p-8 md:p-16">
        <h1 className="md:text-2xl lg: font-bold text-center md:mx-32 mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          ANSWERS TO ALL YOUR JOB HUNTING QUERIES: CANADA IT STAFFING SERVICES
          FROM HELIX TECH-IT
        </h1>
        <p className="text-justify text-sm md:text-base lg:text-lg xl:text-xl">
          Helix Tech-IT understands your need to get your ideal recruiter, which
          coordinates with your plans and skill sets. To save you from the heavy
          charges of consultancies, we have been providing Canada IT staffing
          services for the past decades, so we have got the hang of what
          candidates are looking for; this helps us provide you with our service
          in a tailored way so that you can experience our uniqueness. For
          freshers, we also provide ideal trainers so they can develop along
          with searching for jobs for them.
        </p>
      </section>
      <div className="p-8">
        <h1 className="text-center pb-6 text-[16px] text-xl md:text-3xl border-b border-blue-950">
          NUTURE YOUR TECH TALENT WITH OUR BRILIANT IT STAFFING SERVICES IN
          <span className="text-blue-600"> CANADA </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-10">
          <div className="text-justify my-5 md:mx-5">
            <div className="space-y-4 pt-6 text-[13px] md:text-[16px]">
              <p>
                At Helix, we have such team of tech experts who have gained
                extensive experience in different IT fields. So they can help
                candidates to get better regarding their careers.
              </p>
              <p>
                As a result of in-depth knowledge of the Canadian tech
                landscape, experts can understand candidates needs more
                extensively and provide you with services accordingly.
              </p>
              <p>
                We have dedicated departments for each part of your job-hunting
                journey to provide your needs with undivided attention.
              </p>
              <p>
                To provide you with the uniqueness of our services, our experts
                will study your whole journey and accordingly work in such a way
                that it aligns with your goals.
              </p>
              <p>
                Regarding Interviews, right from screening to technical rounds,
                we will be there with you to be there where you need any kind of
                support.
              </p>
            </div>
            <button className="relative mt-6 flex h-[50px] w-40 items-center justify-center overflow-hidden border-1 border-blue-600 bg-blue-100 text-blue-600 hover:text-blue-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56">
              <span className="relative z-10">EXPLORE MORE</span>
            </button>
          </div>
          <div>
            <img
              src="https://helixtechinc.com/assets/videos/usa-it.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <ValueCard
        title={"WHY CHOOSE HELIX TECH-IT AS YOUR"}
        title2={"JOB HUNTING PARTNER?"}
        title3={
          "Define your success in the most innovative jobs with the most extensive and thorough Staffing solutions of Helix Tech-IT."
        }
        items={[
          { title: "Item 1", description: "Description for Item 1" },
          { title: "Item 2", description: "Description for Item 2" },
          { title: "Item 1", description: "Description for Item 1" }
        ]}
        items2={[
          { title: "Item 1", description: "Description for Item 1" },
          { title: "Item 2", description: "Description for Item 2" },
          { title: "Item 1", description: "Description for Item 1" }
        ]}
      />
      <Roadmap
        title={"AS AN IT STAFFING AGENCY HOW DO WE WORK BEST FOR YOU?"}
      />

      <Contact />
      <Footer />
    </div>
  );
}

export default ServiceDetail;
