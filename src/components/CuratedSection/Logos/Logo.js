import React from "react";
import IMAGES from "./ImagesList";

export default function Logo(props) {
  return (
    <div>
      <img src={require("../../../images/1.png").default} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}
