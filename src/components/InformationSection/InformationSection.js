import React from "react";
import InfoElement from "./InfoElement/InfoElement";

import IMAGES from "../../ImagesList";
import "./InformationSection.css";

export default function InformationSection() {
  return (
    <div className="informationSection">
      {IMAGES.ELEMENTS.map((IMAGE) => {
        return (
          <InfoElement
            img={IMAGE.img}
            title={IMAGE.title}
            details={IMAGE.details}
            type={IMAGE.type}
          />
        );
      })}
    </div>
  );
}
