import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const WorkExperience = () => {
  return (
    <section
      className="work-experience"
      id="experience"
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
                    <h2 className="text-center mb-5">Work Experience</h2>
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
                              Assistant Programmer
                            </h4>
                            <span
                              className="text-muted-custom"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              June 2026 &ndash; Present
                            </span>
                          </div>
                          <h5 className="mt-2">
                            iAutomation, Banani, Dhaka, Bangladesh
                          </h5>
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
                              Junior Data Scientist
                            </h4>
                            <span
                              className="text-muted-custom"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              Sept 2025 &ndash; June 2026
                            </span>
                          </div>
                          <h5 className="mt-2">
                            ConneqtedAgents, Mirpur DOHS, Dhaka, Bangladesh
                          </h5>
                          <div
                            className="mt-3 text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <span>
                              <strong>Technical Skills:</strong> Python, LLMs,
                              Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch,
                              Kafka, Influxdb
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
                          <div className="d-flex flex-column justify-content-between align-items-start mb-2">
                            <h4
                              style={{
                                color: "#AA367C",
                                margin: 0,
                                marginBottom: "8px",
                              }}
                            >
                              Research Collaborator
                            </h4>
                            <span
                              className="text-muted-custom"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              Oct 2025 &ndash; Present
                            </span>
                          </div>
                          <h5 className="mt-2">
                            SPEED Lab, Florida Atlantic University, USA
                          </h5>
                          <div
                            className="mt-3 text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <span>
                              <strong>Research Areas:</strong> Vision-Language
                              Models (VLM), Model Security, Federated Learning,
                              and Diffusion Models
                            </span>
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
                              Research Assistant
                            </h4>
                            <span
                              className="text-muted-custom"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              Sept 2025 &ndash; March 2026
                            </span>
                          </div>
                          <h5 className="mt-2">KUET, Khulna, Bangladesh</h5>
                          <div
                            className="mt-3 text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <span>
                              <strong>Project:</strong> UGC Funded Research
                              Project 2025-2026
                              <br />
                              Distribution Indicator Based Capacity-blended
                              Modified Weighted Opportunity Cost Method for
                              Transportation Problems
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
                          <div className="d-flex flex-column justify-content-between align-items-start mb-2">
                            <h4
                              style={{
                                color: "#AA367C",
                                margin: 0,
                                marginBottom: "8px",
                              }}
                            >
                              Software Engineer (Remote)
                            </h4>
                            <span
                              className="text-muted-custom"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              June 2025 &ndash; August 2025
                            </span>
                          </div>
                          <h5 className="mt-2">
                            Cranium Soft, Dhaka, Bangladesh
                          </h5>
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
                              Teaching Assistant (Remote)
                            </h4>
                            <span
                              className="text-muted-custom"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              June 2025 &ndash; Feb 2026
                            </span>
                          </div>
                          <h5 className="mt-2">Ostad, Dhaka, Bangladesh</h5>
                          <div
                            className="mt-3 text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <span>
                              <strong>Role:</strong> PHP/Laravel Preparation
                            </span>
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
