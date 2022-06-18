import "./LandingPage.css";

import React from "react";
import CustomNavbar from "../components/CustomNavbar/CustomNavbar";
import MainSection from "../components/MainSection/MainSection";
import CuratedSection from "../components/CuratedSection/CuratedSection";
import InformationSection from "../components/InformationSection/InformationSection";
import GetConnectedSection from "../components/GetConnectedSection/GetConnectedSection";
import Footer from "../components/Footer/Footer";
import CardsSection from "../components/CardsSection/CardsSection";
import NumbersSection from "../components/NumbersSection/NumbersSection";

export default function LandingPage() {
  return (
    <div>
      <div className="main-background">
        <CustomNavbar></CustomNavbar>
        <MainSection></MainSection>
        <CuratedSection></CuratedSection>
        <NumbersSection></NumbersSection>
        <InformationSection></InformationSection>
        <CardsSection></CardsSection>
        <GetConnectedSection></GetConnectedSection>
        <Footer></Footer>
      </div>
    </div>
  );
}
