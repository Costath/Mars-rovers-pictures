import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataContext";

const Button = () => {
  const [pictures, setPictures] = useState([]);
  const [camera, setCamera] = useContext(DataContext);

  let urlReady;

  const setSearchUrl = () => {
    const baseUrl =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000";
    const apiKey = "&api_key=7W9em6nCYW1xLdBfcviGYFyh9quAQdoQSdxdh3sT";

    urlReady = baseUrl + "&camera=" + camera + apiKey;
  };

  const fetchAPIData = async () => {
    setSearchUrl();
    const response = await fetch(urlReady);
    const responseJson = await response.json();
    console.log(responseJson);
    setPictures(responseJson.photos);
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  const logPicturesJson = () => {
    console.log("pictures: ");
    console.log(pictures);
  };

  return (
    <>
      <button onClick={fetchAPIData}>Search</button>
      <button onClick={logPicturesJson}>log JSON</button>
    </>
  );
};

export default Button;
