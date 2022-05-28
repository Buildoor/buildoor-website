import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";

import "./MainSection.css";

export default function MainSection() {
  return (
    <Container style={{ paddingTop: "3em" }}>
      <Row>
        <Col sm={7}>
          <h1 className="subtitle">
            <b>Subtitle</b> comes here <b>with text!</b>
          </h1>
          <p className="details">
            Here we put in details of what we do and how we do it
          </p>
          <div>
            <Button className="cstm-btn">Enter</Button>
          </div>
        </Col>
        <Col sm={3}>
          <Image></Image>
        </Col>
      </Row>
    </Container>
  );
}
