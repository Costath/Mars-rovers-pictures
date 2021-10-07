import React, { useContext } from "react";
import { DataContext } from "../DataContext";

const SearchParameters = (props) => {
  // const [rover, setRover] = useContext(DataContext);
  // const [camera, setCamera] = useContext(DataContext);

  // const handleRoverChange = (props) => {
  //   console.log("rover Change");
  //   setRover(props);
  // };

  // const handleCameraChange = (event) => {
  //   setCamera(event.target.value);
  // };

  return (
    <>
      <form onSubmit={props.onFormSubmit}>
        <p>Select a camera:</p>
        <input
          name="camera"
          type="radio"
          id="allCameras"
          value="All Cameras"
          onChange={props.onCameraChange}
        />
        <label htmlFor="allCameras">All cameras</label>
        <br />

        <input
          name="camera"
          type="radio"
          id="cameraFHAZ"
          value="FHAZ"
          onChange={props.onCameraChange}
        />
        <label htmlFor="cameraFHAZ">Front Hazard Avoidance Camera</label>
        <br />

        <input
          name="camera"
          type="radio"
          id="cameraRHAZ"
          value="RHAZ"
          onChange={props.onCameraChange}
        />
        <label htmlFor="cameraRHAZ">Rear Hazard Avoidance Camera</label>
        <br />

        <input
          name="camera"
          type="radio"
          id="cameraNAVCAM"
          value="NAVCAM"
          onChange={props.onCameraChange}
        />
        <label htmlFor="cameraNAVCAM">Navigation Camera</label>
        <br />
        <br />

        <button>Search</button>
      </form>
    </>
  );
};

export default SearchParameters;
