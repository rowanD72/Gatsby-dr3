import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Row, Col } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import {
  faGraduationCap,
  faPenNib,
  faUserTie,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons"

import avatarLogo from "../images/dr3-avatar.jpeg"

const about = data => (
  <>
    <Layout>
      <SEO title="About" />
      <Row className="about-wrapper">
        <Col className="about-info-section" xs={8} md={12}>
          <div className="about-header-section">
            <div className="about-text-section">
              <img src={avatarLogo} alt="David Rowan" />
              <h3>David Rowan III</h3>
              <small>Full Stack Developer</small>
              <div className="social-media-logo">
                <a
                  href="https://www.linkedin.com/in/david-rowan-27914ba2"
                  target="default"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon about-social-media-logo px-1"
                  />
                </a>
                <a href="https://www.twitter.com/Dr3Webdev" target="default">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="icon about-social-media-logo px-1"
                  />
                </a>
                <a href="https://www.instagram.com/dr3_dev" target="default">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon about-social-media-logo px-1"
                  />
                </a>
              </div>
            </div>
            <div className="about-cred-header mt-5">
              <h4>About DR3 WEB DEV</h4>
              <span>
                <p>
                  From a Network Engineer to a Full Stack Developer. Have a look
                  at my journey.
                </p>
              </span>
            </div>
            <Row className="about-intro-section mt-5" md={true} sm={true}>
              <Col md={6} sm={6} xs={12} className="mb-3">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h6>BIO</h6>
                      <FontAwesomeIcon
                        icon={faUserTie}
                        alt="user"
                        className="about-cred-card-icon"
                      />
                    </div>

                    <div className="flip-card-back">
                      <h4>About Me</h4>
                      <ul>
                        <li className="bio-item">Father</li>
                        <li className="bio-item">Husband</li>
                        <li className="bio-item">GrandFather</li>
                        <li className="bio-item">Javascript Enthusiast</li>
                        <li className="bio-item">Owner/Developer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={6}>
                <div className="flip-card about-edu-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h6>Education</h6>
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        alt="graduation cap"
                        className="about-cred-card-icon"
                      />
                    </div>
                    <div className="flip-card-back">
                      <h4>Degrees</h4>
                      <ul>
                        <li className="school-item">
                          A.A.S Computer Networking Systems
                        </li>
                        <li className="school-item">Barber License</li>
                        <span className="school-item-span">
                          Michigan Louisiana Texas
                        </span>
                        <li className="school-item">Self Taught Developer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="about-intro-section mt-3" md={true} sm={true}>
              <Col md={6} sm={6} className="mb-3">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h6>Design</h6>
                      <FontAwesomeIcon
                        icon={faPenNib}
                        alt="pen nib"
                        className="about-cred-card-icon"
                      />
                    </div>
                    <div className="flip-card-back">
                      <h4>Custom Design</h4>
                      <ul>
                        <li className="design-item">Adobe XD</li>
                        <span className="design-item-span">
                          Mobile/Web App Design
                        </span>
                        <li className="design-item">Adobe Illustrator</li>
                        <span className="design-item-span">
                          Custom Company Logo/Icons
                        </span>
                        <li className="design-item">Adobe Photoshop</li>
                        <li className="design-item">Adobe After Effects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={6}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h6>Coding</h6>
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        alt="laptop"
                        className="about-cred-card-icon"
                      />
                    </div>
                    <div className="flip-card-back">
                      <h4>Coding Toolbox</h4>
                      <ul>
                        <li className="code-item">React JS</li>
                        <li className="code-item">HTML</li>
                        <li className="code-item">CSS</li>
                        <li className="code-item">SASS</li>
                        <li className="code-item">Javascript</li>
                        <li className="code-item">Node JS</li>
                        <li className="code-item">MongoDB</li>
                        <li className="code-item">Github</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="about-btn mt-3">
              <Link to="/contact">
                <Button variant="outline-primary" className="about-cta">
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  </>
)

export default about
