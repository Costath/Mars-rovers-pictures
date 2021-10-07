import React, { useState, useEffect } from "react";
import "./App.css";
import PicturesCarousel from "./components/Pictures/PicturesCarousel";
import SearchParameters from "./components/SearchParameters";

function App() {
  const [camera, setCamera] = useState("");
  const [pictures, setPictures] = useState([]);

  let urlReady;

  const setSearchUrl = () => {
    const baseUrl =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000";
    const apiKey = "&api_key=7W9em6nCYW1xLdBfcviGYFyh9quAQdoQSdxdh3sT";

    let cameraUrlParameter = "";
    camera === "All Cameras"
      ? (cameraUrlParameter = "")
      : (cameraUrlParameter = "&camera=" + camera);

    urlReady = baseUrl + cameraUrlParameter + apiKey;
  };

  const fetchAPIData = async () => {
    setSearchUrl();
    const response = await fetch(urlReady);
    const responseJson = await response.json();
    // console.log(responseJson);
    setPictures(responseJson.photos);
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  const handleCameraChange = (event) => {
    setCamera(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchAPIData();
  };

  return (
    <>
      <SearchParameters
        onCameraChange={handleCameraChange}
        onFormSubmit={handleFormSubmit}
      />
      <PicturesCarousel pictures={pictures} />
    </>
  );
}

export default App;
