import "./LandingPage.css";

import React from "react";
import CustomNavbar from "../components/CustomNavbar/CustomNavbar";
import MainSection from "../components/MainSection/MainSection";
import OptionsSection from "../components/OptionsSection/OptionsSection";
import RightInformationSection from "../components/RightInformationSection/RightInformationSection";
import LeftInformationSection from "../components/LeftInformationSection/LeftInformationSection";
import ContactUsSection from "../components/LeftInformationSection/LeftInformationSection";
import Footer from "../components/Footer/Footer";
import { Container } from "react-bootstrap";

export default function LandingPage() {
  return (
    <div>
      <div className="main-background">
        <CustomNavbar></CustomNavbar>
        <MainSection></MainSection>
      </div>
      <OptionsSection></OptionsSection>
      <RightInformationSection></RightInformationSection>
      <LeftInformationSection></LeftInformationSection>
      <ContactUsSection></ContactUsSection>
      <Footer></Footer>
    </div>
  );
}
