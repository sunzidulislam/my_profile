import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Publications = () => {
  return (
    <section
      className="publications"
      id="publications"
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
                    <h2 className="text-center mb-5">Publications & Thesis</h2>
                    <Row className="justify-content-center text-start">
                      <Col md={10}>
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
                          <h4
                            style={{ color: "#AA367C", marginBottom: "15px" }}
                          >
                            Automatic Scene Generation: State-of-the-Art
                            Techniques, Models, Datasets, Challenges, and Future
                            Prospects
                          </h4>
                          <h5 className="mb-2" style={{ fontSize: "16px" }}>
                            <em>
                              Published in IEEE Access (Impact Factor: 3.6), May
                              2025.
                            </em>
                          </h5>
                          <div
                            className="text-muted-custom mt-3"
                            style={{ fontSize: "15px" }}
                          >
                            <span>
                              Awal Ahmed Fime, Saifuddin Mahmud, Arpita Das,{" "}
                              <strong className="author-highlight">
                                Md. Sunzidul Islam
                              </strong>
                              , Jong-Hoon Kim
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
                          <h4
                            style={{ color: "#4A2FBD", marginBottom: "15px" }}
                          >
                            [ECCV] FuzzyDiff: Fuzzy Logical Diffusion for
                            Structured and Graded Image Generation
                          </h4>
                          <h5 className="mb-2" style={{ fontSize: "16px" }}>
                            <em>
                              Submitted to 18th European Conference on Computer
                              Vision (ECCV 2026).
                            </em>
                          </h5>
                          <div
                            className="text-muted-custom mt-3"
                            style={{ fontSize: "15px" }}
                          >
                            <span>
                              Awal Ahmed Fime,{" "}
                              <strong className="author-highlight">
                                Md. Sunzidul Islam
                              </strong>
                              , Md Zarif Hossain, Ahmed Imteaj
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
                          <h4
                            style={{ color: "#AA367C", marginBottom: "15px" }}
                          >
                            [ICCA Thesis] MedRAG: Retrieval-Augmented Multimodal
                            Generation for Automated X-Ray Report Synthesis
                          </h4>
                          <h5 className="mb-2" style={{ fontSize: "16px" }}>
                            <em>
                              Submitted to 4th International Conference on
                              Computing Advancements (ICCA 2026).
                            </em>
                          </h5>
                          <div
                            className="text-muted-custom mt-3"
                            style={{ fontSize: "15px" }}
                          >
                            <span>
                              <strong className="author-highlight">
                                Md. Sunzidul Islam
                              </strong>
                              , Md. Badiuzzaman Shuvo, Anisa Walida
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
