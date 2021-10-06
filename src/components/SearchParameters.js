import React, { useContext } from "react";
import { DataContext } from "../DataContext";

const SearchParameters = () => {
  // const [rover, setRover] = useContext(DataContext);
  const [camera, setCamera] = useContext(DataContext);

  // const handleRoverChange = (props) => {
  //   console.log("rover Change");
  //   setRover(props);
  // };

  const handleCameraChange = (event) => {
    setCamera(event.target.value);
  };

  return (
    <>
      <p>camera: {camera}</p>
      <form>
        <p>Select a camera:</p>
        <input
          name="camera"
          type="radio"
          id="allCameras"
          value="All Cameras"
          onChange={handleCameraChange}
        />
        <label htmlFor="allCameras">All cameras</label>
        <br />

        <input
          name="camera"
          type="radio"
          id="cameraFHAZ"
          value="FHAZ"
          onChange={handleCameraChange}
        />
        <label htmlFor="cameraFHAZ">Front Hazard Avoidance Camera</label>
        <br />

        <input
          name="camera"
          type="radio"
          id="cameraRHAZ"
          value="RHAZ"
          onChange={handleCameraChange}
        />
        <label htmlFor="cameraRHAZ">Rear Hazard Avoidance Camera</label>
        <br />

        <input
          name="camera"
          type="radio"
          id="cameraNAVCAM"
          value="NAVCAM"
          onChange={handleCameraChange}
        />
        <label htmlFor="cameraNAVCAM">Navigation Camera</label>
        <br />
      </form>
    </>
  );
};

export default SearchParameters;
