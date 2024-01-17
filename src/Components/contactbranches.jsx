// eslint-disable-next-line no-unused-vars
import React from "react";

function Contactbranches() {
  return (
    <div>
      <div className="items-center text-center w-full mt-8 text-4xl font-bold bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 inline-block text-transparent bg-clip-text">
        <h1>Our Branches</h1>
      </div>
      <div className="md:flex w-fit md:w-full justify-center">
        <div className="parent">
          <div className="card">
            <div className="content-box bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
              <span
                style={{ textAlign: "center", width: "100%" }}
                className="card-title"
              >
                US
              </span>

              <div className="card-content">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    {" "}
                    location_on{" "}
                  </span>
                  <h1 className="text-xl">
                    Oaktree House 408 Oakwood Lane Leeds, England LS8 3LG
                  </h1>
                </div>
              </div>

              <div className="card-content">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    {" "}
                    contact_mail{" "}
                  </span>
                  <h1 className="text-xl">hr@helixtechinc.com</h1>
                </div>
              </div>
              <div className="card-content">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined"> call </span>
                  <h1 className="text-xl">+44 2045799169</h1>
                </div>
              </div>
              <div className="card-content">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    nest_clock_farsight_analog
                  </span>
                  <h1 className="text-xl">Working Hours</h1>
                </div>
                <div className="text-sm ml-14">
                  <h1 className="">Monday-Friday</h1>
                  <h3 className="text-xs">09:00AM-06:00PM</h3>
                </div>
                <div className="text-sm ml-14">
                  <h1 className="">Saturday-Sunday</h1>
                  <h3 className="text-xs">Closed</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parent">
          <div className="card">
            <div className="content-box bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
              <span
                style={{ textAlign: "center", width: "100%", fontSize: "32px" }}
                className="card-title"
              >
                INDIA
              </span>

              <div className="card-content">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    {" "}
                    location_on{" "}
                  </span>
                  <h1 className="text-xl">
                    B-10, Privilon, Iskcon Temple, Ahmedabad, Gujarat 380015
                  </h1>
                </div>
              </div>

              <div className="card-content">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    {" "}
                    contact_mail{" "}
                  </span>
                  <h1 className="text-xl">hr@helixtechinc.com</h1>
                </div>
              </div>
              <div className="card-content">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined"> call </span>
                  <h1 className="text-xl">+91 9023397214</h1>
                </div>
              </div>
              <div className="card-content">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    nest_clock_farsight_analog
                  </span>
                  <h1 className="text-xl">Working Hours</h1>
                </div>
                <div className="text-sm ml-14">
                  <h1 className="">Monday-Friday</h1>
                  <h3 className="text-xs">09:00AM-06:00PM</h3>
                </div>
                <div className="text-sm ml-14">
                  <h1 className="">Saturday-Sunday</h1>
                  <h3 className="text-xs">Closed</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactbranches;
