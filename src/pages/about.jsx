import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from '../components/seo'

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

const about = () => (
 
    <Layout>
      <SEO title='About' />
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
            <Col>
              <Row>
                <div className="about-btn mt-1">
                  <Link to="/contact">
                    <Button variant="outline-primary" className="about-cta" >
                      Let's Connect
                    </Button>
                  </Link>
                </div>
              </Row>
            </Col>
          </div>
        </Col>
      </Row>
    </Layout>
  
)

export default about
