/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-infinite-logo-slider";

const Carousel = () => {
  return (
    <div>
      <h1 className="text-center text-lg font-bold mb-8 md:text-3xl">
        OUR CANDIDATES ARE PLACED AT
      </h1>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
        className="grid grid-cols-4 gap-10"
      >
        <Slider.Slide>
          <img
            src="https://helixtechinc.com/assets/img/logo/NETFLX.png"
            alt="Netflix Logo"
            className="carousel-image px-8 object-cover col-span-1 "
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="https://helixtechinc.com/assets/img/logo/NETFLX.png"
            alt="Netflix Logo"
            className="carousel-image px-8 object-cover col-span-1"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="https://cdnph.upi.com/ph/st/th/2811606822221/2020/i/16068226305873/v1.2/Google-welcomes-December-with-new-holiday-themed-Doodle.jpg?lg=8 object-cover&=1"
            alt="Google Doodle"
            className="carousel-image px-8 object-cover col-span-1"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
            alt="Flipkart Logo"
            className="carousel-image px-8 object-cover col-span-1"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt="Amazon Logo"
            className="carousel-image"
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default Carousel;
