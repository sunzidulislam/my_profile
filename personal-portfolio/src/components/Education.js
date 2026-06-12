import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Education = () => {
  return (
    <section
      className="education"
      id="education"
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
                    <h2 className="text-center mb-5">Education</h2>
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
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-2">
                            <h4 style={{ color: "#AA367C", margin: 0 }}>
                              BSc. in Computer Science and Engineering
                            </h4>
                            <span
                              className="text-muted-custom mt-2 mt-md-0"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              2020 &ndash; 2025
                            </span>
                          </div>
                          <h5 className="mb-2">
                            Khulna University of Engineering & Technology
                            (KUET), Bangladesh
                          </h5>
                          <div
                            className="text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <span>
                              <strong>CGPA:</strong> 3.62/4.00
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
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-2">
                            <h4 style={{ color: "#4A2FBD", margin: 0 }}>
                              Higher Secondary School Certificate (HSC)
                            </h4>
                            <span
                              className="text-muted-custom mt-2 mt-md-0"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              2017 &ndash; 2019
                            </span>
                          </div>
                          <h5 className="mb-2">
                            Saint Joseph Higher Secondary School, Dhaka,
                            Bangladesh
                          </h5>
                          <div
                            className="text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <span>
                              <strong>GPA:</strong> 5.00/5.00
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
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-2">
                            <h4 style={{ color: "#AA367C", margin: 0 }}>
                              Secondary School Certificate (SSC)
                            </h4>
                            <span
                              className="text-muted-custom mt-2 mt-md-0"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              2015 &ndash; 2017
                            </span>
                          </div>
                          <h5 className="mb-2">
                            Imam Hossain Academy, Pabna, Bangladesh
                          </h5>
                          <div
                            className="text-muted-custom"
                            style={{ fontSize: "15px" }}
                          >
                            <span>
                              <strong>GPA:</strong> 5.00/5.00
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
