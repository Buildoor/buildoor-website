import React from "react";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div className={"cstm-card " + props.type + " " + props.active}>
      {props.content}
    </div>
  );
}
