import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an experienced Javascript developer with 5+ years in the
              industry. <br /> <br />I have a strong foundation in web
              development and a passion for creating intuitive and interactive
              user experiences. I have experience building and maintaining
              full-stack web applications, with a focus on the front-end using{" "}
              <i>
                <b className="purple"> React </b>{" "}
              </i>{" "}
              and the back-end using{" "}
              <i>
                <b className="purple"> Node.js.</b>{" "}
              </i>
              <br /> <br />I am experienced in using modern JavaScript libraries
              and frameworks, such as{" "}
              <i>
                {" "}
                <b className="purple">React, Redux, and Express</b>{" "}
              </i>
              , to build scalable and performant web applications. I have also
              developed a strong understanding of RESTful API design and
              development, as well as experience with data modeling and
              management using{" "}
              <i>
                <b className="purple"> MongoDB.</b>{" "}
              </i>
              <br /> <br />
              In addition to my technical skills, I am a strong communicator and
              team player, with the ability to collaborate effectively with
              cross- functional teams.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid  img-circle "
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/captainPrime"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/captainprime007?s=21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/taiwo-oyindamola-347081171/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/dprimetech?igshid=NGVhN2U2NjQ0Yg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
