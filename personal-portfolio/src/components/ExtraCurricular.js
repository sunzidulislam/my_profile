import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ExtraCurricular = () => {
  return (
    <section
      className="extracurricular"
      id="extracurricular"
      style={{ padding: "60px 0", position: "relative" }}
    >
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
                  <div className="resume-bx">
                    <h2 className="text-center mb-5">
                      Extra-Curricular Activities
                    </h2>
                    <Row className="text-start g-4">
                      <Col md={6}>
                        <div
                          className="resume-card p-4 rounded mb-4"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <div className="d-flex flex-column justify-content-between align-items-start mb-2">
                            <h4
                              style={{
                                color: "#AA367C",
                                margin: 0,
                                marginBottom: "8px",
                              }}
                            >
                              Chief Organizer
                            </h4>
                            <span
                              className="text-muted-custom"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              2025
                            </span>
                          </div>
                          <h5 className="mt-2">
                            BitFest 2025 (3rd KUET CSE National Fest)
                          </h5>
                          <div
                            className="mt-3 text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <ul style={{ paddingLeft: "20px", margin: 0 }}>
                              <li className="mb-2">
                                Spearheaded the revival of KUET's flagship
                                national tech festival after a 5-year hiatus,
                                managing a multi-tier organizing committee.
                              </li>
                              <li className="mb-2">
                                Orchestrated an Inter-University Programming
                                Contest (IUPC) for 160+ teams and a 24-hour
                                National AI & API Hackathon.
                              </li>
                              <li className="mb-2">
                                Directed a diverse range of segments including
                                the Game of Datathon, Project Showcases, and
                                Robotics competitions (LFR & Soccer Bot).
                              </li>
                              <li>
                                Secured corporate sponsorships (e.g., Miaki,
                                BdREN, BS23) and facilitated networking sessions
                                between industry experts and 1,500+ attendees.
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div
                          className="resume-card p-4 rounded mb-4"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <div className="d-flex flex-column justify-content-between align-items-start mb-2">
                            <h4
                              style={{
                                color: "#4A2FBD",
                                margin: 0,
                                marginBottom: "8px",
                              }}
                            >
                              President
                            </h4>
                            <span
                              className="text-muted-custom"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              2024 &ndash; 2025
                            </span>
                          </div>
                          <h5 className="mt-2">Hardware Acceleration Club</h5>
                          <div
                            className="mt-3 text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <p className="mb-0">
                              Orchestrated specialized workshops and tournaments
                              focused on FPGA, GPU computing, and
                              high-performance hardware technologies.
                            </p>
                          </div>
                        </div>

                        <div
                          className="resume-card p-4 rounded mb-4"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <div className="d-flex flex-column justify-content-between align-items-start mb-2">
                            <h4
                              style={{
                                color: "#AA367C",
                                margin: 0,
                                marginBottom: "8px",
                              }}
                            >
                              Publication Secretary
                            </h4>
                            <span
                              className="text-muted-custom"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              2024 &ndash; 2025
                            </span>
                          </div>
                          <h5 className="mt-2">KUET Debating Society</h5>
                          <div
                            className="mt-3 text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <p className="mb-0">
                              Facilitated inter-university debate tournaments
                              and oversaw the production of all promotional and
                              educational publications.
                            </p>
                          </div>
                        </div>
                      </Col>

                      <Col md={6}>
                        <div
                          className="resume-card p-4 rounded mb-4"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <div className="d-flex flex-column justify-content-between align-items-start mb-2">
                            <h4
                              style={{
                                color: "#4A2FBD",
                                margin: 0,
                                marginBottom: "8px",
                              }}
                            >
                              Publication & Publicity Secretary
                            </h4>
                            <span
                              className="text-muted-custom"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              2024 &ndash; 2025
                            </span>
                          </div>
                          <h5 className="mt-2">OKS, KUET</h5>
                          <div
                            className="mt-3 text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <p className="mb-0">
                              Directed organizational communications and digital
                              marketing strategies to enhance event visibility
                              and engagement.
                            </p>
                          </div>
                        </div>

                        <div
                          className="resume-card p-4 rounded mb-4"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <div className="d-flex flex-column justify-content-between align-items-start mb-2">
                            <h4
                              style={{
                                color: "#AA367C",
                                margin: 0,
                                marginBottom: "8px",
                              }}
                            >
                              Executive Member (Control & Safety)
                            </h4>
                            <span
                              className="text-muted-custom"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              2023
                            </span>
                          </div>
                          <h5 className="mt-2">KUET</h5>
                          <div
                            className="mt-3 text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <p className="mb-0">
                              Collaborated on the development of an autonomous
                              vehicle, focusing on safety protocols for the SAE
                              Japan 2023 international competition.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
