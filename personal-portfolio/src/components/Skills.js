import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                A diverse skillset combining modern AI engineering, full-stack
                web development, and robust data management.<br></br> Dedicated
                to building scalable, intelligent solutions.
              </p>

              <Tab.Container id="skills-tabs" defaultActiveKey="technical">
                <Nav
                  variant="pills"
                  className="nav-pills custom-nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="technical">Technical</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="soft">Soft</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content
                  id="slideInUp"
                  className="animate__animated animate__slideInUp"
                >
                  <Tab.Pane eventKey="technical" className="text-start">
                    <Row className="mt-4 g-4">
                      <Col md={6}>
                        <div
                          className="resume-card p-4 rounded h-100"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <h4
                            style={{ color: "#AA367C", marginBottom: "10px" }}
                          >
                            Programming
                          </h4>
                          <p
                            className="text-muted-custom m-0"
                            style={{ fontSize: "16px" }}
                          >
                            Python, C++, Java
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          className="resume-card p-4 rounded h-100"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <h4
                            style={{ color: "#4A2FBD", marginBottom: "10px" }}
                          >
                            AI & LLMs
                          </h4>
                          <p
                            className="text-muted-custom m-0"
                            style={{ fontSize: "16px" }}
                          >
                            Large Language Models (LLMs), Vision-Language Models
                            (VLMs), Retrieval-Augmented Generation (RAG), Prompt
                            Engineering
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          className="resume-card p-4 rounded h-100"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <h4
                            style={{ color: "#AA367C", marginBottom: "10px" }}
                          >
                            Data & Databases
                          </h4>
                          <p
                            className="text-muted-custom m-0"
                            style={{ fontSize: "16px" }}
                          >
                            PostgreSQL, MySQL, InfluxDB
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          className="resume-card p-4 rounded h-100"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <h4
                            style={{ color: "#4A2FBD", marginBottom: "10px" }}
                          >
                            Web & Systems
                          </h4>
                          <p
                            className="text-muted-custom m-0"
                            style={{ fontSize: "16px" }}
                          >
                            Laravel, REST APIs, Kafka
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          className="resume-card p-4 rounded h-100"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <h4
                            style={{ color: "#AA367C", marginBottom: "10px" }}
                          >
                            Developer Tools
                          </h4>
                          <p
                            className="text-muted-custom m-0"
                            style={{ fontSize: "16px" }}
                          >
                            Git, GitHub, Linux, Docker
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="soft" className="text-start">
                    <Row className="mt-4 g-4">
                      <Col md={6}>
                        <div
                          className="resume-card p-4 rounded h-100"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <h4
                            style={{ color: "#AA367C", marginBottom: "10px" }}
                          >
                            Leadership & Management
                          </h4>
                          <p
                            className="text-muted-custom m-0"
                            style={{ fontSize: "15px" }}
                          >
                            Managing multi-tier committees and organizing
                            large-scale tech festivals.
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          className="resume-card p-4 rounded h-100"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <h4
                            style={{ color: "#4A2FBD", marginBottom: "10px" }}
                          >
                            Event Organization
                          </h4>
                          <p
                            className="text-muted-custom m-0"
                            style={{ fontSize: "15px" }}
                          >
                            Orchestrating hackathons, datathons, and
                            inter-university programming contests.
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          className="resume-card p-4 rounded h-100"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <h4
                            style={{ color: "#AA367C", marginBottom: "10px" }}
                          >
                            Team Collaboration
                          </h4>
                          <p
                            className="text-muted-custom m-0"
                            style={{ fontSize: "15px" }}
                          >
                            Collaborating on autonomous vehicles and overseeing
                            specialized club activities.
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          className="resume-card p-4 rounded h-100"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <h4
                            style={{ color: "#4A2FBD", marginBottom: "10px" }}
                          >
                            Communication & Mentoring
                          </h4>
                          <p
                            className="text-muted-custom m-0"
                            style={{ fontSize: "15px" }}
                          >
                            Facilitating debates, securing corporate
                            sponsorships, and conducting tech workshops.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background Design"
      />
    </section>
  );
};
