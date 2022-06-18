import React from "react";

import "./InfoElement.css";

export default function InfoElement(props) {
  return (
    <div className={"infoElement " + props.type}>
      <div className="img">
        <img src={props.img} />
      </div>
      <div className="content">
        <h2 className="heading">{props.title}</h2>
        <p className="details">{props.details}</p>
      </div>
    </div>
  );
}
