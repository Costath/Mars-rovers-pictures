import React from "react";
import "./SearchParameters.css";

const SearchParameters = (props) => {
  //Object containing the camera abbreviations and full name
  const cameraNames = {
    "All Cameras": "All Cameras",
    FHAZ: "Front Hazard Avoidance Camera",
    RHAZ: "Rear Hazard Avoidance Camera",
    MAST: "Mast Camera",
    CHEMCAM: "Chemistry and Camera Complex",
    MAHLI: "Mars Hand Lens Imager",
    MARDI: "Mars Descent Imager",
    NAVCAM: "Navigation Camera",
    PANCAM: "Panoramic Camera",
    MINITES: "Miniature Thermal Emission Spectrometer (Mini-TES)",
  };

  //Array of available rovers
  const roverNames = ["Curiosity", "Opportunity", "Spirit"];

  //Object with the relation of cameras per rover
  const camerasAvailableByRover = {
    Curiosity: [
      "All Cameras",
      "FHAZ",
      "RHAZ",
      "MAST",
      "CHEMCAM",
      "MAHLI",
      "MARDI",
      "NAVCAM",
    ],
    Opportunity: ["All Cameras", "FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
    Spirit: ["All Cameras", "FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
  };

  //Checks it the camera passed as parameter is available at the selected rover
  const hasCamera = (cam) => {
    switch (props.selectedRover) {
      case "Curiosity":
        if (camerasAvailableByRover.Curiosity.includes(cam.camera)) {
          return true;
        } else {
          return false;
        }
      case "Opportunity":
        if (camerasAvailableByRover.Opportunity.includes(cam.camera)) {
          return true;
        } else {
          return false;
        }
      case "Spirit":
        if (camerasAvailableByRover.Spirit.includes(cam.camera)) {
          return true;
        } else {
          return false;
        }
      default:
        console.log("error, no rover found");
    }
  };

  //Passes the event of camera change to the parent component and updates the camera state in the current component
  const handleCameraChange = (event) => {
    props.onCameraChange(event);
  };

  return (
    <div className="searchOptions">
      <form onSubmit={props.onFormSubmit}>
        <div className="roverOptions">
          <p>Select a rover:</p>
          {roverNames.map((rover, key) => (
            <span key={key}>
              <input
                name="rover"
                type="radio"
                id={rover}
                value={rover}
                onChange={props.onRoverChange}
              />
              <label htmlFor={rover}>{rover}</label>
              <br />
            </span>
          ))}
          <br />
        </div>
        <div className="cameraOptions">
          <p>Select a camera:</p>
          {Object.keys(cameraNames).map((camera, key) => {
            return (
              <span key={key}>
                <input
                  name="camera"
                  type="radio"
                  id={camera}
                  value={camera}
                  onChange={handleCameraChange}
                  disabled={!hasCamera({ camera })}
                />
                <label htmlFor={camera}>{cameraNames[camera]}</label>
                <br />
              </span>
            );
          })}
          <br />
        </div>
        <br />
        <div id="submitButtonDiv">
          <button
            disabled={props.selectedCamera === "" || props.selectedRover === ""}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchParameters;
