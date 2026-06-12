import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Summary = () => {
  return (
    <section
      className="summary"
      id="summary"
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
                  <div
                    className="resume-bx"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    {/* Creative abstract background glows */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-20%",
                        left: "-10%",
                        width: "400px",
                        height: "400px",
                        background:
                          "radial-gradient(circle, rgba(170,54,124,0.15) 0%, rgba(0,0,0,0) 70%)",
                        filter: "blur(40px)",
                        zIndex: 0,
                        pointerEvents: "none",
                      }}
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-20%",
                        right: "-10%",
                        width: "400px",
                        height: "400px",
                        background:
                          "radial-gradient(circle, rgba(74,47,189,0.15) 0%, rgba(0,0,0,0) 70%)",
                        filter: "blur(40px)",
                        zIndex: 0,
                        pointerEvents: "none",
                      }}
                    ></div>

                    <div style={{ position: "relative", zIndex: 1 }}>
                      <h2 className="text-center mb-5">Professional Summary</h2>

                      <Row className="justify-content-center text-center">
                        <Col md={10} lg={9}>
                          <h3
                            className="mb-4"
                            style={{ fontSize: "28px", fontWeight: "700" }}
                          >
                            Bridging{" "}
                            <span style={{ color: "#AA367C" }}>
                              Research Innovation
                            </span>{" "}
                            &{" "}
                            <span style={{ color: "#4A2FBD" }}>
                              Scalable Engineering
                            </span>
                          </h3>

                          <div
                            className="resume-card p-5 rounded"
                            style={{
                              transition: "0.4s ease-in-out",
                              background: "rgba(255, 255, 255, 0.02)",
                              border: "1px solid rgba(255, 255, 255, 0.05)",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.transform =
                                "translateY(-5px)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.transform =
                                "translateY(0)")
                            }
                          >
                            <p
                              className="text-muted-custom m-0"
                              style={{
                                fontSize: "18px",
                                lineHeight: "2",
                                fontWeight: "300",
                              }}
                            >
                              I am a Computer Science researcher and software
                              engineer specializing in{" "}
                              <strong className="author-highlight">
                                Multimodal AI, Retrieval-Augmented Generation
                                (RAG), and Diffusion Models
                              </strong>
                              . Currently serving as a Research Collaborator at
                              the{" "}
                              <em>SPEED Lab (Florida Atlantic University)</em>,
                              I contribute to the frontiers of Vision-Language
                              Models and Federated Learning.
                              <br />
                              <br />
                              With top-tier publications in{" "}
                              <strong className="author-highlight">
                                IEEE Access
                              </strong>{" "}
                              and{" "}
                              <strong className="author-highlight">ECCV</strong>
                              , alongside hands-on expertise as a Data Scientist
                              and Full-Stack Developer, I build the critical
                              bridge between theoretical machine intelligence
                              and real-world architectures. A multi-time{" "}
                              <em>Dean's Award</em> scholar, I am driven by a
                              profound passion for engineering robust,
                              next-generation AI systems.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
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
