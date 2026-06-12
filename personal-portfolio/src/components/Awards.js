import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Awards = () => {
  return (
    <section
      className="awards"
      id="awards"
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
                    <h2 className="text-center mb-5">Awards & Workshops</h2>
                    <Row className="justify-content-center text-start">
                      <Col md={10}>
                        <h3
                          className="mb-4 text-center"
                          style={{ fontSize: "24px" }}
                        >
                          Scholarships & Awards
                        </h3>

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
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                            <h4 style={{ color: "#AA367C", margin: 0 }}>
                              Dean's Award, KUET
                            </h4>
                            <span
                              className="text-muted-custom mt-2 mt-md-0"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              Session: 2021 &ndash; 2022
                            </span>
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
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                            <h4 style={{ color: "#4A2FBD", margin: 0 }}>
                              Dean's Award, KUET
                            </h4>
                            <span
                              className="text-muted-custom mt-2 mt-md-0"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              Session: 2019 &ndash; 2020
                            </span>
                          </div>
                        </div>

                        <div
                          className="resume-card p-4 rounded mb-5"
                          style={{ transition: "0.3s ease-in-out" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                            <h4 style={{ color: "#AA367C", margin: 0 }}>
                              Champion, Hardware Quest
                            </h4>
                            <span
                              className="text-muted-custom mt-2 mt-md-0"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              2022
                            </span>
                          </div>
                        </div>

                        <h3
                          className="mb-4 text-center"
                          style={{ fontSize: "24px" }}
                        >
                          Workshops
                        </h3>

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
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                            <h4 style={{ color: "#4A2FBD", margin: 0 }}>
                              LLMs-Nexus: Bridging Technical Innovation and
                              Ethical Horizons
                            </h4>
                            <span
                              className="text-muted-custom mt-2 mt-md-0"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              May 2025
                            </span>
                          </div>
                          <h5 style={{ fontSize: "16px" }}>
                            Organizer: ORAU Innovation Partnerships Grant
                            Program, Southern Illinois University at Carbondale
                          </h5>
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
