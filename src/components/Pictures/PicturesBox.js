import React from "react";
import "./PicturesBox.css";

const PicturesBox = (props) => {
  //Array that will hold the pictures loaded in the pictures box
  let picturesLoaded = [];
  picturesLoaded = props.pictures.map((picture) => (
    <img
      src={picture.img_src}
      className="secondary"
      key={picture.id}
      alt="Collection"
      onClick={props.onPictureClick}
    />
  ));

  return (
    <div className="pictureBox">
      {picturesLoaded.length === 0 ? (
        <h2>No pictures found with the specified parameters</h2>
      ) : (
        <>
          <p>Select a picture to view</p>
          <div className="pictureBoxLabel">
            <button
              onClick={props.onPreviousPageClick}
              disabled={props.currentPage <= 1}
            >
              &lt;
            </button>
            <p>
              Page {props.currentPage}/{props.lastPage}
            </p>
            <button
              onClick={props.onNextPageClick}
              disabled={props.currentPage >= props.lastPage}
            >
              &gt;
            </button>
          </div>
          <div className="pictureBoxImages">{picturesLoaded}</div>
        </>
      )}
    </div>
  );
};

export default PicturesBox;
