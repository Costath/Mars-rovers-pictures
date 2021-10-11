import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import PicturesCarousel from "./components/Pictures/PicturesCarousel";
import SearchParameters from "./components/SearchParameters/SearchParameters";
import PicturesBox from "./components/Pictures/PicturesBox";
import NavBar from "./components/NavBar";

function App() {
  const [rover, setRover] = useState("");
  const [camera, setCamera] = useState("");
  const [pictures, setPictures] = useState([]);
  const [pictureUrl, setpictureUrl] = useState("");

  //String that will hold the final url used to make the API request
  let urlReady = "";

  //Preparest the url for the API request
  const setSearchUrl = () => {
    //String that will hold the camera query parameter, if any is set (to retrieve results from "all cameras", the key and the value are ommited)
    let cameraUrlParameter = "";
    camera === "All Cameras"
      ? (cameraUrlParameter = "")
      : (cameraUrlParameter = "&camera=" + camera);

    //concatenates the url before making the request
    urlReady =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/" +
      rover +
      "/photos?sol=1000&page=1" +
      cameraUrlParameter +
      "&api_key=7W9em6nCYW1xLdBfcviGYFyh9quAQdoQSdxdh3sT";
  };

  //Fetches the API data and updates the state
  const fetchAPIData = async () => {
    setSearchUrl();
    const response = await fetch(urlReady);
    const responseJson = await response.json();
    setPictures(responseJson.photos);
    // setpictureUrl(responseJson.photos[0].img_src);
  };

  //Updates the state when the rover is changed
  const handleRoverChange = (event) => {
    setRover(event.target.value);
  };

  //Updates the state when the camera is changed
  const handleCameraChange = (event) => {
    setCamera(event.target.value);
  };

  //Prevents the default form submition and calls fetchAPIData() to make the API request
  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchAPIData();
  };

  const handlePictureClick = (event) => {
    setpictureUrl(event.target.src);
  };

  return (
    <div>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/home">
              <h2>home</h2>
            </Route>
            <Route path="/pictures">
              <SearchParameters
                onRoverChange={handleRoverChange}
                onCameraChange={handleCameraChange}
                onFormSubmit={handleFormSubmit}
                selectedRover={rover}
                selectedCamera={camera}
              />
              <PicturesCarousel src={pictureUrl} />
              <PicturesBox
                pictures={pictures}
                onPictureClick={handlePictureClick}
              />
            </Route>
            <Route path="/rovers">
              <h2>rovers</h2>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
