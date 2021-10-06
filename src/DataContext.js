import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [pictures, setPictures] = useState([]);
  const [rover, setRover] = useState("");
  const [camera, setCamera] = useState("All Cameras");

  return (
    <DataContext.Provider
      value={([pictures, setPictures], [rover, setRover], [camera, setCamera])}
    >
      {props.children}
    </DataContext.Provider>
  );
};
