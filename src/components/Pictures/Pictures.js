import React from "react";
import "./Pictures.css";

const Pictures = (props) => {
  return (
    <div className="App">
      <img src={props.src} className={props.className} />
    </div>
  );
};

export default Pictures;
