import React from "react";
import "./NumbersSection.css";

export default function NumbersSection() {
  return (
    <div>
      <div className="introSection">
        <h2 className="heading">
          Proof of Knowledge
          <br />
          that really matters
        </h2>
        <p className="details">
          <b>
            While you are a BUILDoor, no one is really sure.
            <br />
            Earn credentials, certifications that top web3 recruiters care
            about. Buildoor curates these challenges with the help of experts
            that instantly recognize the hireability of someone who solves them.
          </b>
        </p>
      </div>
      <div className="numbers-list">
        <div className="numbers">
          <p className="title">200K+</p>
          <p>Total Students</p>
        </div>
        <div className="numbers">
          <p className="title">30+</p>
          <p>Programs</p>
        </div>
        <div className="numbers">
          <p className="title">9.1/10</p>
          <p>Average Rating</p>
        </div>
        <div className="numbers">
          <p className="title">400K+</p>
          <p>Total Live Hours</p>
        </div>
      </div>
    </div>
  );
}
