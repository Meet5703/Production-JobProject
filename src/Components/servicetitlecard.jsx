/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function ServiceTitleCard({ title, title2 }) {
  return (
    <div>
      <div className="p-10">
        <div className=" custom-img mt-16 w-full h-[15vh] md:h-[25vh] -ml-10 bg-cover">
          <div>
            <h1 className="ml-[10%] h-full  md:ml-[35%] md:pt-16 pt-8 text-sm md:text-2xl w-screen md:w-1/3  font-semibold px-10">
              <span className=" absolute w-2/5 text-center left-[32%] top-32">
                {title}
                <span className="text-blue-500 font-bold">{title2}</span>
              </span>
            </h1>
          </div>
        </div>
        <hr className="mt-6" />
      </div>
    </div>
  );
}
ServiceTitleCard.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string
};
export default ServiceTitleCard;
