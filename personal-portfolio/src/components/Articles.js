import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Articles = () => {
  const articles = [
    {
      title: "Understanding Retrieval-Augmented Generation (RAG) in 2026",
      date: "May 10, 2026",
      excerpt:
        "A deep dive into how RAG systems enhance large language models by retrieving context from external knowledge bases.",
      link: "#",
    },
    {
      title: "Building Scalable AI Architectures for Enterprise",
      date: "March 22, 2026",
      excerpt:
        "Exploring the best practices for deploying robust multimodal AI models in a microservices environment.",
      link: "#",
    },
    {
      title: "The Future of Diffusion Models in Computer Vision",
      date: "January 15, 2026",
      excerpt:
        "How diffusion models are rapidly overtaking GANs in generative tasks and what it means for the industry.",
      link: "#",
    },
  ];

  return (
    <section
      className="articles"
      id="articles"
      style={{ padding: "60px 0", position: "relative" }}
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInUp" : ""
                  }
                >
                  <div className="resume-bx">
                    <h2 className="text-center mb-5">Articles & Blogs</h2>
                    <Row className="g-4">
                      {articles.map((article, index) => (
                        <Col md={4} key={index}>
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="resume-card p-4 rounded h-100 d-flex flex-column"
                              style={{
                                transition: "0.3s ease-in-out",
                                cursor: "pointer",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.transform =
                                  "translateY(-10px)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.transform =
                                  "translateY(0)")
                              }
                            >
                              <p
                                style={{
                                  color: "#AA367C",
                                  fontSize: "14px",
                                  marginBottom: "10px",
                                  fontWeight: "600",
                                }}
                              >
                                {article.date}
                              </p>
                              <h4
                                style={{
                                  color: "#fff",
                                  marginBottom: "15px",
                                  fontSize: "22px",
                                }}
                                className="author-highlight"
                              >
                                {article.title}
                              </h4>
                              <p
                                className="text-muted-custom flex-grow-1"
                                style={{ fontSize: "15px", lineHeight: "1.6" }}
                              >
                                {article.excerpt}
                              </p>
                              <div
                                className="mt-4"
                                style={{
                                  color: "#4A2FBD",
                                  fontWeight: "700",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                Read Article{" "}
                                <span style={{ marginLeft: "5px" }}>→</span>
                              </div>
                            </div>
                          </a>
                        </Col>
                      ))}
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
