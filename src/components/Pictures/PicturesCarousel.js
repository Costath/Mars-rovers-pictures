import React from "react";
import "./PicturesCarousel.css";

const PicturesCarousel = (props) => {
  if (props.src !== "") {
    return (
      <div className="pictureSet">
        <img src={props.src} alt="Taken on Mars" className="main picture" />
      </div>
    );
  } else {
    return null;
  }
};

export default PicturesCarousel;
