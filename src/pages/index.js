import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMobileAlt,
  faDesktop,
  faEdit,
} from "@fortawesome/free-solid-svg-icons"
import { Button, Row, Col } from "react-bootstrap"
import iPhoneLogo from "../images/iso-phone4.png"
import laptopLogo from "../images/iso-laptop.png"

const Container = styled.div`
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
  font-family: "Montserrat", sans-serif;
`

const IndexPage = props => (
  <>
    <Layout>
      <SEO title="Home" />
      <main>
        <section className="jumbo">
          <div className="jumbo-info-container">
            <div className="jumbo-text">
              <h1>DR3 WEB DEV & DESIGN</h1>
              <p>Building Web and Mobile Apps For Small Businesses</p>
            </div>
            <div className="home-button-section">
              <Link to="/design">
                <Button variant="primary" className="mobile-select">
                  Mobile Designs
                </Button>
        
                <Button variant="outline-primary" className="web-select">
                  Web Designs
                </Button>
              </Link>
            </div>
          </div>
          <div className="home-image-cover">
            <img src={iPhoneLogo} alt="iphone logo" />
          </div>
        </section>
      </main>
      <Container className="header-container">
        <Row className="header-logo">
          <Col md={4} xs={8} lg={12} xl={12}>
            <FontAwesomeIcon icon={faMobileAlt} className="icon mobile" />
            <h3>Mobile Apps</h3>
            <p>
              We provide mobile apps for both iOS and Android platforms. With
              more and more businesses doing online business, mobile apps are in
              high demand. Let DR3 Web Dev & Design take care of your mobile app
              needs today.
            </p>
          </Col>

          <Col md={4} xs={8} lg={12} xl={12}>
            <FontAwesomeIcon icon={faDesktop} className="icon web" />
            <h3>Web Apps</h3>
            <p>
              DR3 Web Dev & Design is here to help solve all your company needs
              when it comes to building a website from scratch or redesigning
              the company's current website. We build custom, user-friendly, and
              mobile responsive web apps for your small business.
            </p>
            <p>
              Websites play a vital role in our everyday lives. From shopping,
              to ordering food, and everything in between. Especially during
              today's current COVID-19 pandemic. Don't let your business be left
              behind, because of a non-user-friendly website or NO website at
              all.
            </p>
          </Col>

          <Col md={4} xs={8} lg={12} xl={12}>
            <FontAwesomeIcon icon={faEdit} className="icon design" />
            <h3>Designs</h3>
            <p>
              Let DR3 Web Dev & Design take care of all your design needs. From
              company logos to company specific icons, we have your business
              design ideas covered. Using only the best vector graphic tools to
              provide pixel perfect logos and icons every time.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <main>
              <section className="mission-info-section">
                <div className="mission-header-section">
                  <div className="mission-text-section">
                    <h3>DR3 WEB DEV Mission</h3>
                    <p>
                      Our mission is to ensure that your company has the online
                      presence it deserves. Helping your small businesses
                      maintain a centralized location for your online customers.
                      Building beautiful, user-friendly apps every one of your
                      customers can use and enjoy is our ultimate goal. DR3 Web
                      Dev & Design also aims to oversee and maintain your apps
                      growth as time and your company's customer base grows.
                    </p>
                  </div>
                  <div>
                    <Link to="/contact">
                      <Button variant="outline-primary" className="web-select">
                        Let's Connect
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="mission-image-section">
                  <img src={laptopLogo} alt="laptop display" />
                </div>
              </section>
            </main>
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default IndexPage
