import React from "react";
import Logo from "./Logo";
import IMAGES from "./ImagesList";
import "./Logos.css";

export default function Logos() {
  return (
    <div className="LogosSection">
      {IMAGES.map((IMAGE) => {
        return <Logo img={IMAGE.img} name={IMAGE.name} color={IMAGE.color} />;
      })}
    </div>
  );
}
