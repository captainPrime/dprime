import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Taiwo Oyindamola Ezekiel</span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />
            I am currently employed as a software developer at CarbonTech.
            <br />
            I have completed Integrated Bachelor of Technology in Computer
            Engineering at Yaba College of Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making music
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport activities: swimming, playing football etc
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dprime</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
