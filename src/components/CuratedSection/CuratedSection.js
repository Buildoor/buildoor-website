import React from "react";
import Logos from "./Logos/Logos";
import "./CuratedSection.css";

export default function CuratedSection() {
  return (
    <div style={{ paddingTop: "5em" }}>
      <h2 className="title">Curated by the OGs</h2>
      <Logos></Logos>
    </div>
  );
}
