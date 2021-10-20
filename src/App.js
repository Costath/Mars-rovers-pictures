import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

import PicturesCarousel from "./components/Pictures/PicturesCarousel";
import SearchParameters from "./components/SearchParameters/SearchParameters";
import PicturesBox from "./components/Pictures/PicturesBox";
import NavBar from "./components/NavBar";
import Rovers from "./pages/Rovers";

function App() {
  const [rover, setRover] = useState("");
  const [camera, setCamera] = useState("");
  const [pictures, setPictures] = useState([]);
  const [pictureUrl, setPictureUrl] = useState("");
  const [{ currentPage, lastPage }, setPage] = useState({
    currentPage: 1,
    lastPage: 1,
  });

  const fetchAPIData = async (page) => {
    //String that will hold the camera query parameter, if any is set (to retrieve results from "all cameras", the key and the value are ommited)
    let cameraUrlParameter = "";
    camera === "All Cameras"
      ? (cameraUrlParameter = "")
      : (cameraUrlParameter = "&camera=" + camera);

    //Fetches the API data and update the state with the response
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&page=${page}${cameraUrlParameter}&api_key=7W9em6nCYW1xLdBfcviGYFyh9quAQdoQSdxdh3sT`
    );
    const responseJson = await response.json();
    setPictures(responseJson.photos || []);
  };

  //Fetches the API again without the page parameter to calculate the number of pages
  const fetchLastPageNumber = async () => {
    let cameraUrlParameter = "";
    camera === "All Cameras"
      ? (cameraUrlParameter = "")
      : (cameraUrlParameter = "&camera=" + camera);

    const pagesResponse = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000${cameraUrlParameter}&api_key=7W9em6nCYW1xLdBfcviGYFyh9quAQdoQSdxdh3sT`
    );
    const lastPageResponse = await pagesResponse.json();

    setPage((previousState) => {
      return {
        currentPage: previousState.currentPage,
        lastPage: Math.ceil(lastPageResponse.photos.length / 25),
      };
    });
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
    setPage({
      currentPage: 1,
      lastPage: 1,
    });

    fetchAPIData(1);
    fetchLastPageNumber();
  };

  //Updates the state with the url to the picture being viewed after clicking a picture in the PictureBox
  const handlePictureClick = (event) => {
    setPictureUrl(event.target.src);
  };

  //When click previous page, updates the state and fetches the API for the previous page
  const handlePreviousPageClick = () => {
    setPage((previousState) => {
      return {
        currentPage: previousState.currentPage - 1,
        lastPage: previousState.lastPage,
      };
    });
    fetchAPIData(currentPage - 1);
  };

  //When click next page, updates the state and fetches the API for the next page
  const handleNextPageClick = () => {
    setPage((previousState) => {
      return {
        currentPage: previousState.currentPage + 1,
        lastPage: previousState.lastPage,
      };
    });
    fetchAPIData(currentPage + 1);
  };

  const handleCloseClick = () => {
    setPictureUrl("");
  };

  return (
    <div>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
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
              <PicturesCarousel
                onCloseClick={handleCloseClick}
                src={pictureUrl}
              />
              <PicturesBox
                pictures={pictures}
                onPictureClick={handlePictureClick}
                onPreviousPageClick={handlePreviousPageClick}
                onNextPageClick={handleNextPageClick}
                currentPage={currentPage}
                lastPage={lastPage}
              />
            </Route>
            <Route path="/rovers">
              <Rovers />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
