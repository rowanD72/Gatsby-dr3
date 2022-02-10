import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import dr3logo from "../images/dr3weblogo1.1.png"
import candleShot from "../images/te-website-screenshot.png"
import mltWebsite from "../images/michlatex-website-screenshot.png"
import websiteImg39 from '../images/website-sceenshot.png'

const design = () => (
  <>
    <Layout>
      <SEO title='Design' />
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

      <h3 id='webApps'>Web Apps</h3>
      <div className="card-group">
        <div className="card">
          <img
            src={mltWebsite}
            alt="MichLaTex website screenshot"
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
            <a href="http://www.michlatex.com" target='_blank' rel='noreferrer'>
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
          <img src={websiteImg39} alt="comedian" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">39 Highway Tour</h5>
            <p className="card-text">
              The 39 Cents Highway Tour. Built using Gatsby JS. Very simple website that shows
              cities, venues, times and dates for his comedy tour.
            </p>
          </div>
          <div className="card-footer">
            <a href="https://www.39highwaytour.com" target='_blank' rel='noreferrer'>
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
              Built using Gatsby and Shopify.
            </p>
          </div>
          <div className="card-footer">
             <a href="https://www.tecandlecompany.com" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon
                icon={faCode}
                className="design-site-icon"
              ></FontAwesomeIcon>
              <small className="text-muted px-1">Click To View Site</small>
              </a>
          </div>
        </div>
      </div>

      
      <h3 className="mt-5" id='mobileApps'>Mobile Apps</h3>
      <div className="card-group">
        <div className="card">
          <img src={dr3logo} alt="Card Img Top" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Coming Soon</h5>
            <p className="card-text">Under Construction</p>
          </div>
          <div className="card-footer">
            <button href="#">
              <FontAwesomeIcon
                icon={faCode}
                className="design-site-icon"
              ></FontAwesomeIcon>
              <small className="text-muted px-1">Click To View Site</small>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={dr3logo} alt="Card Img Top" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Coming Soon</h5>
            <p className="card-text">Under Construction</p>
          </div>
          <div className="card-footer">
            <button href="#">
              <FontAwesomeIcon
                icon={faCode}
                className="design-site-icon"
              ></FontAwesomeIcon>
              <small className="text-muted px-1">Click To View Site</small>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={dr3logo} alt="Card Img Top" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Coming Soon</h5>
            <p className="card-text">Under Construction</p>
          </div>
          <div className="card-footer">
            <button href="#">
              <FontAwesomeIcon
                icon={faCode}
                className="design-site-icon"
              ></FontAwesomeIcon>
              <small className="text-muted px-1">Click To View Site</small>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default design
