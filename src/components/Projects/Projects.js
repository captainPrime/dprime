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
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://sofrisofri.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Niptrex"
              description="Niptrex is a start-up talent-hiring agency that specializes in finding and recruiting for job positions on behalf of employers. These agencies work with companies of various sizes and industries to help them fill their job vacancies with qualified and suitable candidates."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
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
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://play.google.com/store/apps/details?id=ng.quickbunny.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sabinus App"
              description="For lovers of the African culture, Sabinus is the first-word game that entertains and sharpens your pidgin language skills."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://play.google.com/store/apps/details?id=io.sabinus.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Afinju"
              description="Welcome to Afinju, where art comes alive and culture finds its visual voice. Our journey began in the captivating world of photography back in 2012. Rooted in a profound appreciation for the essence of culture, especially within the rich tapestry of African heritage, we embarked on a quest to capture its soul-stirring beauty.

              But our story didn’t end there. It evolved into a passion that transcends creation and ventures into the realm of art curation. Afinju Gallery is more than just a space; it’s a gateway to the heart and soul of artistry."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://afinju.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Pikinology"
              description="Pikinology is derived from the word “Pikin”. Pikin meaning child comes from the Portuguese peqquenino for “very small”. This was now adopted by mostly anglophone West African countries like Nigeria, Cameroon, Sierra Leone and Liberia to depict the

              African Child
              
              The depiction of the African child has always been one of hungry children, who are disease ridden, often homeless and parentless due to war and conflicts. It is very rare to see a positive image of an African child in the media and this is what Pikinology is aiming to achieve."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://pikinology.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
