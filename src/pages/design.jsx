import React from "react"
import Layout from "../components/layout"

import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import officeShot from "../images/dr3-office.jpeg"
import candleShot from "../images/von-candle.jpeg"
import steakShot from "../images/steak_potatoes.jpeg"

const design = () => (
  <>
    <Layout>
      <h1>Welcome To The Design Page</h1>
      <small>Where there is nothing more pleasing to the eye</small>
      <section className="mt-5">
        <div className="design-intro">
          <h5>Why Design Is So Important To Us!</h5>
          <p>
            It is highly important to us at DR3 Web Dev & Design that your
            website and/or mobile app have a nice design, look, and feel for a
            friendly user experience. We custom design each page, screen, logo,
            and icon for the fit of your company.
          </p>
        </div>
      </section>

      <h3>Web Apps</h3>
      <div className="card-group">
        <div className="card">
          <img
            src={steakShot}
            alt="Steak and Potatoes"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">MichLaTex</h5>
            <p className="card-text">
              MichLaTex is a local company providing meal preps. Site is built
              using HTML, CSS, and EJS on the front end. Node, Express, and
              MongoDB on the backend.
            </p>
          </div>
          <div className="card-footer">
            <a href="http://www.michlatex.com">
              <FontAwesomeIcon
                icon={faCode}
                className="design-site-icon"
              ></FontAwesomeIcon>
              <small className="text-muted px-1 design-footer-text">
                Click To View Site
              </small>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={officeShot} alt="haircut" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Black Label Barber Shop</h5>
            <p className="card-text">
              Black Label Barber Shop is a local Barber Shop serving the Mid
              Michigan area since the early 2000's. This site was built using
              React, Express, Node, and MongoDB.
            </p>
          </div>
          <div className="card-footer">
            <a href="https://www.dr3webdev.com">
              <FontAwesomeIcon
                icon={faCode}
                className="design-site-icon"
              ></FontAwesomeIcon>
              <small className="text-muted px-1">Click To View Site</small>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={candleShot} alt="Candle" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Tranquil Essence Candles</h5>
            <p className="card-text">
              For great smelling candles, Tranquil Essence has your order ready.
              Built using React, Node, Express, and MongoDB.
            </p>
          </div>
          <div className="card-footer">
            <a href="#">
              <FontAwesomeIcon
                icon={faCode}
                className="design-site-icon"
              ></FontAwesomeIcon>
              <small className="text-muted px-1">Click To View Site</small>
            </a>
          </div>
        </div>
      </div>
      <h3 className="mt-5">Mobile Apps</h3>
      <div className="card-group">
        <div className="card">
          <img src={officeShot} alt="Card Img Top" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Comng Soon</h5>
            <p className="card-text">Under Construction</p>
          </div>
          <div className="card-footer">
            <a href="#">
              <FontAwesomeIcon
                icon={faCode}
                className="design-site-icon"
              ></FontAwesomeIcon>
              <small className="text-muted px-1">Click To View Site</small>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={officeShot} alt="Card Img Top" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Coming Soon</h5>
            <p className="card-text">Under Construction</p>
          </div>
          <div className="card-footer">
            <a href="#">
              <FontAwesomeIcon
                icon={faCode}
                className="design-site-icon"
              ></FontAwesomeIcon>
              <small className="text-muted px-1">Click To View Site</small>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={officeShot} alt="Card Img Top" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Comning Soon</h5>
            <p className="card-text">Under Construction</p>
          </div>
          <div className="card-footer">
            <a href="#">
              <FontAwesomeIcon
                icon={faCode}
                className="design-site-icon"
              ></FontAwesomeIcon>
              <small className="text-muted px-1">Click To View Site</small>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default design
