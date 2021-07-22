import React from "react";
import "./content-card.css";
// @ts-ignore
import content_images from "../../../assets/images/content__images.png";

import ReadMoreButton from "./ReadMoreButton/ReadMoreButton";

const ContentCard = (props) => {
  return (
    <div className="card col-lg-5 col-xl-3 col-md-5 col-10 m-4 p-4 rounded-3 d-flex flex-column align-items-center">
      <div className="card__image rounded-3">
        <img src={content_images} className="rounded-3" alt="content" />
      </div>
      <div className="card__body text-center mt-4">
        <p className="card__body__text text-center">{props.text}</p>
      </div>
      <div className="card__read-more mx-auto align-self-end mt-auto">
        <ReadMoreButton />
      </div>
    </div>
  );
};

export default ContentCard;
