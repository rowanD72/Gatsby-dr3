import React from "react"
import Layout from "../components/layout"

import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCogs,
  faTerminal,
  faMobileAlt,
  faPaintBrush,
  faDatabase,
  faMailBulk,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons"

const services = () => (
  <>
    <Layout>
      <Row className="section-header">
        <Col sm={12} md={12}>
          <h1>
            Our Services
            <FontAwesomeIcon icon={faCogs} />
          </h1>
          <h6>
            <p>Let Us Help With Your Web and Mobile Presence</p>
          </h6>
        </Col>
        <hr />
      </Row>
      <Row>
        <Col className="section-logo-row" md={4}>
          <FontAwesomeIcon icon={faTerminal} className="section-logo-img" />
          <h3 className="service-icon-heading">Web Apps</h3>
          <div className="customer-heading">
            <ul>
              <li className="service-item">Mock Ups</li>
              <li className="service-item">Custom Design/Page Layout</li>
              <li className="service-item">Mobile Friendly Website</li>
              <li className="service-item">Landing Page</li>
              <li className="service-item">SPA/PWA</li>
              <li className="service-item">E-Commerce</li>
              <li className="service-item">Maintenance</li>
            </ul>
          </div>
        </Col>
        <Col className="section-logo-row" md={4}>
          <FontAwesomeIcon icon={faMobileAlt} className="section-logo-img" />
          <h3 className="service-icon-heading">Mobile Apps</h3>
          <div className="customer-heading">
            <ul>
              <li className="service-item">iOS/Android Platform</li>
              <li className="service-item">Custom Design/Screen Layout</li>
              <li className="service-item">Maintenance</li>
            </ul>
          </div>
        </Col>
        <Col className="section-logo-row" md={4}>
          <FontAwesomeIcon icon={faPaintBrush} className="section-logo-img" />
          <h3 className="service-icon-heading">Custom Design</h3>
          <div className="customer-heading">
            <ul>
              <li className="service-item">Adobe Illustrator Files</li>
              <li className="service-item">PDF Files</li>
              <li className="service-item">Custom Icons/Logos</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="section-logo-row" md={4}>
          <FontAwesomeIcon icon={faDatabase} className="section-logo-img" />
          <h3 className="service-icon-heading">Database Integration</h3>
          <div className="customer-heading">
            <ul>
              <li className="service-item">Cloud Base Performance</li>
              <li className="service-item">Scalability</li>
              <li className="service-item">Database Validation</li>
              <li className="service-item">NoSQL Approach</li>
            </ul>
          </div>
        </Col>
        <Col className="section-logo-row" md={4}>
          <FontAwesomeIcon icon={faChartLine} className="section-logo-img" />
          <h3 className="service-icon-heading">E-Commerce</h3>
          <div className="customer-heading">
            <ul>
              <li className="service-item">Online Sales</li>
              <li className="service-item">Database Integration</li>
              <li className="service-item">Centralized Online Store</li>
              <li className="service-item">Online Marketing</li>
            </ul>
          </div>
        </Col>
        <Col className="section-logo-row" md={4}>
          <FontAwesomeIcon icon={faMailBulk} className="section-logo-img" />
          <h3 className="service-icon-heading">Email Marketing</h3>
          <div className="customer-heading">
            <ul>
              <li className="service-item">
                Reach Current & Potential Clients
              </li>
              <li className="service-item">Email Automation</li>
              <li className="service-item">Engage With Your Community</li>
              <li className="service-item">Build Your Brand</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Layout>
  </>
)

export default services
