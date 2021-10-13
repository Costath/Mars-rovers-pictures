import React, { useState, useEffect } from "react";

import "./Rovers.css";
import RoversStory from "../components/RoversStory";

const Rovers = (props) => {
  const [rover, setRover] = useState("");
  const [landing_date, setLanding_date] = useState("");
  const [launch_date, setLaunch_date] = useState("");
  const [status, setStatus] = useState("");
  const [max_sol, setMax_sol] = useState("");
  const [max_date, setMax_date] = useState("");
  const [total_photos, setTotal_photos] = useState("");

  const roversNames = ["Curiosity", "Opportunity", "Spirit"];

  let url = "";
  const setSearchUrl = () => {
    url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?&api_key=7W9em6nCYW1xLdBfcviGYFyh9quAQdoQSdxdh3sT`;
  };

  //Fetches the API data and updates the state
  const fetchAPIData = async () => {
    setSearchUrl();

    const response = await fetch(url);
    const responseJson = await response.json();
    const {
      landing_date,
      launch_date,
      status,
      max_sol,
      max_date,
      total_photos,
    } = responseJson.photo_manifest;
    setLanding_date(landing_date);
    setLaunch_date(launch_date);
    setStatus(status);
    setMax_sol(max_sol);
    setMax_date(max_date);
    setTotal_photos(total_photos);
  };

  useEffect(() => {
    fetchAPIData();
  }, [rover]);

  const onRoverChange = (event) => {
    setRover(event.target.value);
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
            <div className="content">{landing_date}</div>
            <div className="title">Launch date from Earth: </div>
            <div className="content">{launch_date}</div>
            <div className="title">Mission status: </div>
            <div className="content">{status}</div>
            <div className="title">
              The most recent Martian day (sol) from which photos exist:{" "}
            </div>
            <div className="content">{max_sol}</div>
            <div className="title">
              The most recent Earth date from which photos exist:{" "}
            </div>
            <div className="content">{max_date}</div>
            <div className="title">Number of photos taken: </div>
            <div className="content">{total_photos}</div>
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
