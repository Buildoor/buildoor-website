import React from "react";
import Cards from "./Cards";

import "./CardsSection.css";

export default function CardsSection() {
  return (
    <div className="cardsSection">
      <h2 className="title">Be a part of the tribe.</h2>
      <div className="cstm-cards">
        <Cards content="Complete" type="heading" active="true" />
        <Cards content="Apply" type="heading" active="false" />
        <Cards content="Work" type="heading" active="false" />
        <Cards content="Build" type="heading" active="false" />
      </div>
      <div className="cstm-cards">
        <Cards
          content="Navigate through streams, paths and challenges to earn tokens as you get validated for a skillset."
          type="details"
        />
        <Cards
          content="Use those tokens to apply for job opportunities. Burning tokens lets you apply for multiple opportunities."
          type="details"
        />
        <Cards
          content="Redeem your burnt tokens if you crack the selection process."
          type="details"
        />
        <Cards
          content="Showcase your project to our DAO that holds the power to fund your dream via native tokens."
          type="details"
        />
      </div>
    </div>
  );
}
