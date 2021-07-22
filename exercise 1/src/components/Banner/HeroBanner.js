import React from "react";
import "./hero-banner.css";

const HeroBanner = () => {
  return (
    <header className="row hero-banner mx-0 px-0">
      <div className="hero-banner__overlay"></div>
      <div className="hero-banner__background-image"></div>
      <div className="col m-auto hero-banner__content">
        <h1 className="hero-banner__content__heading text-center fw-bolder text-break">
          Hello Developer!
        </h1>
        <p className="hero-banner__content__text text-center text-break">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </header>
  );
};

export default HeroBanner;
