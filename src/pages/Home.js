import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="MarsImage">
        <img src="/images/Mars.gif"></img>
      </div>
      <h2>Meet Mars</h2>
      <p>
        This site will allow you to view the pictures taken by the NASA rovers
        Cusiosity, Opportunity and Spirit on the red planet!
        <br />
        You will also learn more about the photographers (yes, the rovers)
        responsible for the pictures.
      </p>
      <h2>Meet the project</h2>
      <p>
        This website was created using React with the use of hooks and React
        Router. It is currently deployed on Heroku with an automated pipeline
        that deploys the code whenever it gets pushed to the main branch on
        GitHub.
        <br />
        The pictures and the details about the rovers are obtained from an API
        provided by NASA. More specifically, the API called 'Mars Rover Photos'.
        You can find more information on the&nbsp;
        <a href="https://api.nasa.gov/">Official NASA API portal</a>
      </p>
    </>
  );
};

export default Home;
