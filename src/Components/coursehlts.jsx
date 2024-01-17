/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import Img2 from "../assets/6311736-removebg-preview.png";
function Coursehlts() {
  const { courseid } = useParams();
  return (
    <div>
      {" "}
      <h1 className="mt-6 text-2xl md:text-5xl text-blue-500 text-center">
        Course Highlights
      </h1>
      <div className="md:flex w-full items-center mx-10 mt-10">
        <div className="w-full md:w-2/6 px-5 md:pl-10">
          <h1 className="mt-6 text-xl md:text-4xl">{courseid}</h1>
          <p className="text-justify text-xs md:text-sm mt-6">
            {courseid} Fundamentals is an in-depth course designed to equip
            participants with the knowledge and skills necessary to adopt and
            implement {courseid} practices effectively. This course is suitable
            for IT professionals, software developers, system administrators,
            and anyone interested in understanding and applying {courseid}{" "}
            principles.
          </p>
          <p className="text-justify text-xs md:text-sm mt-6">
            {courseid} is a set of practices and cultural philosophies that aim
            to automate and integrate the processes of software development and
            IT operations. It focuses on improving collaboration, communication,
            and efficiency between development and operations teams to deliver
            high-quality software faster and more reliably. Understanding the
            fundamental concepts, history, and significance of {courseid} in
            modern software development.
          </p>
          <p className="text-justify text-xs md:text-sm mt-6">
            Emphasizing the importance of a collaborative and customer-centric
            culture within organizations, fostering teamwork and shared
            responsibility.Learning how to automate the building, testing, and
            integration of code changes into a shared repository to ensure
            software quality.Exploring practices for automating the deployment
            and delivery of software to various environments, such as staging
            and production.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pr-10">
          <img className="w-full" src={Img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Coursehlts;
