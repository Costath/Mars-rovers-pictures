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

  const roversData = [
    {
      Name: "Curiosity",
      Information: `Surveying Gale Crater
  Curiosity explores Gale Crater and acquires rock, soil, and air samples for onboard analysis. The car-size rover is about as tall as a basketball player and uses a 7 foot-long arm to place tools close to rocks selected for study. Curiosity's large size allows it to carry an advanced kit of 10 science instruments. It has tools including 17 cameras, a laser to vaporize and study small pinpoint spots of rocks at a distance, and a drill to collect powdered rock samples. It hunts for special rocks that formed in water and/or have signs of organics.
  
  Strong, Smart and Curious
  Curiosity carries the biggest, most advanced instruments for scientific studies ever sent to the Martian surface. The history of Martian climate and geology is written in the chemistry and structure of the rocks and soil. Curiosity reads this record by analyzing powdered samples drilled from rocks. It also measures the chemical fingerprints present in different rocks and soils to determine their composition and history, especially their past interactions with water.
  
  Coming in for a Landing
  Mars Science Laboratory arrived at Mars through technological innovations that tested a completely new landing method. The spacecraft descended on a parachute, then during the final seconds before landing, the landing system fired rockets to allow it to hover while a tether lowered Curiosity to the surface. The rover landed on its wheels, the tether was cut, and the landing system flew off to crash-land a safe distance away.`,
    },
    {
      Name: "Opportunity",
      Information: `NASA's Opportunity rover was one of the most successful and enduring interplanetary missions. Opportunity landed on Mars in early 2004 soon after its twin rover Spirit. Opportunity operated almost 15 years, setting several records and making a number of key discoveries.

    Opportunity and its twin Spirit were tasked with studying sites on Mars where conditions may once have been favorable for life.
    Opportunity found evidence that Mars may once have been able to sustain microbial life.
    Opportunity exceeded its life expectancy by 60 times and had traveled more than 28 miles (45 kilometers) by the time it reached its appropriate final resting spot on Mars – Perseverance Valley.
    Opportunity stopped communicating with Earth after a severe Mars-wide dust storm blanketed its location in June 2018.
    `,
    },
    {
      Name: "Spirit",
      Information: `NASA's Spirit rover—and it's twin Opportunity—studied the history of climate and water at sites on Mars where conditions may once have been favorable to life.

  Spirit uncovered strong evidence that Mars was once much wetter than it is now.
  Described as a "wonderful workhorse"—Spirit operated for 6 years, 2 months, and 19 days, more than 25 times its original intended lifetime.
  The rover traveled 4.8 miles (7.73 kilometers) across the Martian plains.
  On May 25, 2011, NASA ended efforts to contact the marooned rover and declared its mission complete. The rover had been silent since March 2010.
  `,
    },
  ];

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
      {roversData.map((roverObj, key) => (
        <span key={key}>
          <input
            name="rover"
            type="radio"
            id={roverObj.Name}
            value={roverObj.Name}
            onChange={onRoverChange}
          />
          <label htmlFor={roverObj.Name}>{roverObj.Name}</label>
          <br />
        </span>
      ))}
      {rover !== "" ? (
        <>
          <img
            src={`/images/${rover}.jpg`}
            alt={`Nasa's ${rover} rover`}
            className="roverImg"
          />

          <div className="roverDetails">
            <div className="title">Name: </div>
            <div className="content">{rover}</div>
            <div className="title">Landing date on Mars: </div>
            <div className="content">{landing_date}</div>
            <div className="title">Launch date from Earth: </div>
            <div className="content">{launch_date}</div>
            <div className="title">The Rover's mission status: </div>
            <div className="content">{status}</div>
            <div className="title">
              The most recent Martian sol from which photos exist:{" "}
            </div>
            <div className="content">{max_sol}</div>
            <div className="title">
              The most recent Earth date from which photos exist:{" "}
            </div>
            <div className="content">{max_date}</div>
            <div className="title">Number of photos taken: </div>
            <div className="content">{total_photos}</div>
          </div>
          <div className="roverHistory">
            <div className="roverInformation">
              <RoversStory rover={rover} />
            </div>
          </div>
        </>
      ) : (
        <h2>Select a rover to learn more about it</h2>
      )}
    </>
  );
};

export default Rovers;
