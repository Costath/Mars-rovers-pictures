import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataContext";

const Button = () => {
  const [pictures, setPictures] = useState([]);
  const [camera, setCamera] = useContext(DataContext);

  return <>{/* <button onClick={fetchAPIData}>Search</button> */}</>;
};

export default Button;
