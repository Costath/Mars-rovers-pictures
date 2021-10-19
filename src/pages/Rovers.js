import React, { useState } from "react";

import "./Rovers.css";
import RoversStory from "../components/RoversStory";

const Rovers = (props) => {
  //Holds the rover information returned from the API
  const [roverInformation, setRoverInformation] = useState({});

  //Holds the current rover selected
  const [rover, setRover] = useState("");

  //Holds the names of the available rovers
  const roversNames = ["Curiosity", "Opportunity", "Spirit"];

  //Fetches the API data and updates the state
  const fetchAPIData = async (roverName) => {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?&api_key=7W9em6nCYW1xLdBfcviGYFyh9quAQdoQSdxdh3sT`
    );
    const responseJson = await response.json();

    setRoverInformation(responseJson.photo_manifest);
  };

  //Updates the state and fetches the API when the rover radio button is changed
  const onRoverChange = (event) => {
    setRover(event.target.value);
    fetchAPIData(event.target.value);
  };

  return (
    <>
      <p>Select a rover:</p>
      <div>
        {roversNames.map((roverName, key) => (
          <span key={key}>
            <input
              name="rover"
              type="radio"
              id={roverName}
              value={roverName}
              onChange={onRoverChange}
            />
            <label htmlFor={roverName}>{roverName}</label>
            <br />
          </span>
        ))}
      </div>
      {rover !== "" ? (
        <div className="roverInformation">
          <div className="roverDetails">
            <div className="title">Name: </div>
            <div className="content">{rover}</div>
            <div className="title">Landing date on Mars: </div>
            <div className="content">{roverInformation.landing_date}</div>
            <div className="title">Launch date from Earth: </div>
            <div className="content">{roverInformation.launch_date}</div>
            <div className="title">Mission status: </div>
            <div className="content">{roverInformation.status}</div>
            <div className="title">
              The most recent Martian day (sol) from which photos exist:{" "}
            </div>
            <div className="content">{roverInformation.max_sol}</div>
            <div className="title">
              The most recent Earth date from which photos exist:{" "}
            </div>
            <div className="content">{roverInformation.max_date}</div>
            <div className="title">Number of photos taken: </div>
            <div className="content">{roverInformation.total_photos}</div>
          </div>
          <div className="roverStory">
            <RoversStory rover={rover} />
          </div>
          <img
            src={`/images/${rover}.jpg`}
            alt={`Nasa's ${rover} rover`}
            className="roverImg"
          />
        </div>
      ) : (
        <h2>Select a rover to learn more about it</h2>
      )}
    </>
  );
};

export default Rovers;
