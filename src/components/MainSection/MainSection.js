import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";

import "./MainSection.css";

export default function MainSection() {
  return (
    <Container style={{ paddingTop: "3em", textAlign: "center" }}>
      <Row>
        <Col>
          <p className="heading-subtitle">
            <b>Enter BUILDoor</b>
          </p>
          <h1 className="subtitle">
            <b>Your gateway to Web3</b>
          </h1>
          <p className="details">
            BUILDoor is a proof-of-knowledge powered ecosystem <br />
            that connects web3 talent to its desired destiny.
          </p>
          <h2>Get validation from Top 1%</h2>
          <div className="divider-line"></div>
          <p>
            Theory and application are poles apart.
            <br />
            Get the best of both worlds by attempting our 'paths'
            <br />
            designed by top industry experts.
          </p>
          <button>Explore Paths Now</button>
        </Col>
      </Row>
    </Container>
  );
}
