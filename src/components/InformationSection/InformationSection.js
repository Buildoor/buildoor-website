import React from "react";
import "./InformationSection.css";

import RightInformationSection from "./RightInformationSection/RightInformationSection";
import LeftInformationSection from "./LeftInformationSection/LeftInformationSection";

export default function InformationSection() {
  return (
    <div>
      <RightInformationSection></RightInformationSection>
      <LeftInformationSection></LeftInformationSection>
      <RightInformationSection></RightInformationSection>
    </div>
  );
}
