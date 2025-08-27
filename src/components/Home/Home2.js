import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a <b className="purple">Full-Stack Developer</b> focused on
              building secure, scalable web applications with{" "}
              <b className="purple">React, Angular, and Node.js</b>.
              <br />
              <br />
              I enjoy turning complex product requirements into clean, reusable
              components and reliable APIs. My recent work includes{" "}
              <b className="purple">data-heavy dashboards</b>,{" "}
              <b className="purple">real-time features</b> (WebSockets/SSE), and{" "}
              <b className="purple">cloud-native services</b>.
              <br />
              <br />
              Whenever possible, I apply strong engineering practices—
              <b className="purple"> TypeScript, testing, CI/CD,</b> and solid
              state management—to ship features with confidence.
            </p>

            {/* ---- Skills (simple, recruiter-friendly) ---- */}
            <div className="mt-4">
              <h3 className="purple" style={{ fontSize: "1.6em" }}>
                Core Skills
              </h3>
              <ul className="skills-list">
                <li>
                  <b>Frontend:</b> React (Hooks, Context, Redux), Angular
                  (RxJS, NgRx), TypeScript, HTML5, CSS/SCSS, Bootstrap/Material UI
                </li>
                <li>
                  <b>Backend:</b> Node.js, Express/NestJS, REST & GraphQL, Auth
                  (JWT/OAuth2), WebSockets/SSE
                </li>
                <li>
                  <b>Data & Infra:</b> PostgreSQL, MySQL, MongoDB, Redis,
                  Kafka/RabbitMQ, Docker/Kubernetes, AWS/Azure, CI/CD
                </li>
                <li>
                  <b>Quality:</b> Jest, React Testing Library, ESLint, Prettier
                </li>
              </ul>
            </div>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt glareEnable={true} glareMaxOpacity={0.1} tiltMaxAngleX={8} tiltMaxAngleY={8}>
              <img src={myImg} className="img-fluid" alt="Developer avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saipooja-git"  // ← update if different
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"  // ← optional
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pooja345/"  // ← update slug
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"  // ← optional
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
