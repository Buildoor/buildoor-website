import React from "react";
import Logo from "./Logo";
import IMAGES from "./ImagesList";

export default function Logos() {
  return (
    <div className="LogosSection">
      <Logo image={IMAGES[0].img} name={IMAGES[0].name}></Logo>
    </div>
  );
}
