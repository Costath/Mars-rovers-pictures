import React from "react";
import "./PicturesCarousel.css";

const PicturesCarousel = (props) => {
  if (props.pictures.length >= 3) {
    return (
      <div className="pictureSet">
        <img
          src={props.pictures[0].img_src}
          alt="Taken on Mars"
          className="secondary picture"
        />
        <img
          src={props.pictures[1].img_src}
          alt="Taken on Mars"
          className="main picture"
        />
        <img
          src={props.pictures[2].img_src}
          alt="Taken on Mars"
          className="secondary picture"
        />
      </div>
    );
  } else if (props.pictures.length == 2) {
    return (
      <div className="pictureSet">
        <img
          src={props.pictures[0].img_src}
          alt="Picture taken on Mars"
          className="secondary picture"
        />
        <img
          src={props.pictures[1].img_src}
          alt="Picture taken on Mars"
          className="main picture"
        />
      </div>
    );
  } else if (props.pictures.length == 1) {
    return (
      <div className="pictureSet">
        <img
          src={props.pictures[0].img_src}
          alt="Picture taken on Mars"
          className="main picture"
        />
      </div>
    );
  } else {
    return null;
  }
};

export default PicturesCarousel;
