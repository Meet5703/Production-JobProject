/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

function Democard() {
  const { courseid } = useParams();
  return (
    <section className="py-6 bg-gray-200 mt-16 text-black">
      <div className="grid grid-cols-12 w-screen px-10 mx-auto lg:px-8">
        <div className="col-span-12 flex flex-col justify-around md:col-span-8 md:py-0 md:px-3 ml-5">
          <h1 className="text-4xl font-bold">
            {courseid}{" "}
            <span className="text-blue-600 font-semibold">COURSE</span>
          </h1>
          <p className="pt-2 pb-4">
            A DevOps course provides comprehensive training on the principles,
            practices, tools, and methodologies that enable organizations to
            streamline their software development and IT operations processes.
          </p>
          <div className="gap-y-6 md:flex w-[60vw]">
            <div className="flex m-3 md:m-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                alt=""
                className="h-12"
              />
              <div className="flex flex-col items-center">
                <div>
                  <h1 className="text-base">Helix-tech</h1>
                </div>
                <div className="text-yellow-300 scale-75 flex gap-1">
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                </div>
              </div>
            </div>
            <div className="flex m-3 md:m-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                alt=""
                className="h-12"
              />
              <div className="flex flex-col items-center">
                <div>
                  <h1 className="text-base">Helix-tech</h1>
                </div>
                <div className="text-yellow-300 scale-75 flex gap-1">
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                </div>
              </div>
            </div>
            <div className="flex m-3 md:m-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                alt=""
                className="h-12"
              />
              <div className="flex flex-col items-center">
                <div>
                  <h1 className="text-base">Helix-tech</h1>
                </div>
                <div className="text-yellow-300 scale-75 flex gap-1">
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4 md:space-y-0 md:flex justify-between w-2/4 mt-5">
              <ul className="flex flex-col gap-y-4">
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-outlined"> handshake </span>
                  Hands on Training
                </li>
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-outlined">
                    {" "}
                    date_range{" "}
                  </span>
                  Flexible Timings
                </li>
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-outlined">
                    {" "}
                    monitoring{" "}
                  </span>
                  Industry Based Training
                </li>
              </ul>
              <ul className="flex flex-col gap-y-4">
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-sharp"> person </span>
                  Experienced Experts
                </li>
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-outlined">
                    {" "}
                    currency_rupee{" "}
                  </span>
                  Affordable Fees
                </li>
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-sharp">
                    {" "}
                    account_balance{" "}
                  </span>
                  Placement Opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form className="flex bg-white px-6 rounded-xl col-span-12 md:col-span-4 flex-col py-6 space-y-3 md:py-8 md:px-6">
          <h1 className="md:text-3xl font-bold text-center">
            Attend a{" "}
            <span className="text-blue-600 font-semibold">Free Demo</span>
          </h1>
          <p className="text-xs md:text-xl border-b py-2">
            Fill the details and we will call you for further guidance
          </p>
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-blue-200"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-blue-200"
            />
          </label>
          <label className="block">
            <span className="mb-1">Number</span>
            <input
              type="number"
              placeholder="Enter Your MO.Number"
              className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-blue-200"
            />
          </label>
          <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden border-1 border-blue-600 bg-blue-100 text-blue-600 hover:text-blue-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Submit</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Democard;
