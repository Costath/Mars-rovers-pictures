import React from "react";
import "./PicturesBox.css";

const PicturesBox = (props) => {
  //Array that will hold the pictures loaded in the picture box
  let picturesLoaded = [];
  return (
    <div className="pictureBox">
      {
        (picturesLoaded = props.pictures.map((picture) => (
          <img
            src={picture.img_src}
            className="secondary"
            key={picture.id}
            alt="Collection"
            onClick={props.onPictureClick}
          />
        )))
      }
      {picturesLoaded.length === 0 ? (
        <h2>No pictures found with the specified parameters</h2>
      ) : (
        console.log("picturesLoaded")
      )}
    </div>
  );
};

export default PicturesBox;
