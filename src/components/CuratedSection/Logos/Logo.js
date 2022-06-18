import React from "react";
import IMAGES from "./ImagesList";
import "./Logo.css";

export default function Logo(props) {
  return (
    <div className="logoDiv">
      <div className={"logoImage " + props.color}>
        <img src={props.img} alt={props.name} />
      </div>
      <h2>{props.name}</h2>
    </div>
  );
}
