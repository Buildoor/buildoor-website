import React from "react";
import "./NumbersSection.css";

export default function NumbersSection() {
  return (
    <div>
      <h2>
        Proof of Knowledge
        <br />
        that really matters
      </h2>
      <p>
        <b>
          While you are a BUILDoor, no one is really sure.
          <br />
          Earn credentials, certifications that top web3 recruiters care about.
          Buildoor curates these challenges with the help of experts that
          instantly recognize the hireability of someone who solves them.
        </b>
      </p>
      <div className="numbers-list">
        <div className="numbers">
          <text className="title">200K+</text>
          <p>Total Students</p>
        </div>
        <div className="numbers">
          <text className="title">30+</text>
          <p>Programs</p>
        </div>
        <div className="numbers">
          <text className="title">9.1/10</text>
          <p>Average Rating</p>
        </div>
        <div className="numbers">
          <text className="title">400K+</text>
          <p>Total Live Hours</p>
        </div>
      </div>
    </div>
  );
}
