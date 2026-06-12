import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Mistral RAG Application",
      description:
        "Python, FAISS - Built a RAG system integrating retrieved context to enhance LLM responses.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/sunzidulislam/rag-application",
    },
    {
      title: "PDF-Based QA System",
      description:
        "LLM, LangChain - Bilingual RAG chatbot ensuring semantic relevance.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/sunzidulislam/Chatbot-Bangla-English",
    },
    {
      title: "Autonomous Car System",
      description:
        "C++, Arduino - GPS-guided robot vehicle for open environment delivery.",
      imgUrl: projImg3,
      githubUrl:
        "https://github.com/sunzidulislam/Autonomous-CAR-System-Project",
    },
    {
      title: "Blogging Website",
      description:
        "HTML, CSS, Bootstrap, Laravel - Full-stack blog platform with registration and media posts.",
      imgUrl: projImg4,
      githubUrl: "https://github.com/sunzidulislam/blogger",
    },
    {
      title: "E-Commerce DBMS",
      description:
        "SQL, PL/SQL - Relational database system with schema and stored procedures.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/sunzidulislam/Ecommerce-Database-Project",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p className="mb-5">
                    A showcase of my recent work across Multimodal AI, Systems
                    Engineering, and Full-Stack Development. Each project
                    represents a unique challenge solved through innovative
                    technology and robust architecture.
                  </p>
                  <Row
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background Elements"
      ></img>
    </section>
  );
};
