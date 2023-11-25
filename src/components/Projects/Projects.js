import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/afinju.png";
import emotion from "../../Assets/Projects/sabinus.png";
import editor from "../../Assets/Projects/quickbunny.png";
import chatify from "../../Assets/Projects/sofri.png";
import suicide from "../../Assets/Projects/pikinology.png";
import bitsOfCode from "../../Assets/Projects/niptrex.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sofri Pro"
              description="Financial services accessible wherever you are and whenever you want: mobile banking transactions, reliable and instant debit card, and the most effective investment tools "
              demoLink="https://sofrisofri.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Niptrex"
              description="Niptrex is a start-up talent-hiring agency that specializes in finding and recruiting for job positions on behalf of employers. These agencies work with companies of various sizes and industries to help them fill their job vacancies with qualified and suitable candidates."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="QuickBunny"
              description="QuickBunny is a courier aggregation service provider that is focused on delivering all your packages to your doorstep,

They have the finest professionally trained and vetted independent riders dedicated to delivering packages using bicycles, motorbikes, cars, and minivans.

They organize our Hoppers to prioritize speed and safety to your convenience for same-day or scheduled delivery."
              demoLink="https://play.google.com/store/apps/details?id=ng.quickbunny.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sabinus App"
              description="For lovers of the African culture, Sabinus is the first-word game that entertains and sharpens your pidgin language skills."
              demoLink="https://play.google.com/store/apps/details?id=io.sabinus.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Afinju"
              description="Afinju is an art gallery platform. From contemporary masterpieces to avant-garde installations, they curate a collection that captivates and inspires."
              demoLink="https://afinju.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Pikinology"
              description="Pikinology are designing and creating culturally relevant clothes that speaks to the history and culture of every African child and allows them to be proud of who they are and where they are from

Through each button, fabric, trim, lining, illustrations, graphics et al, we want to tell our own stories."
              demoLink="https://pikinology.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
