import React from "react"
import Layout from "../components/layout"
import { Button } from "react-bootstrap"
import styled from "styled-components"

import tabletLogo from "../images/tablet-logo1.png"

const Container = styled.div`
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
  font-family: "Montserrat", sans-serif;
`

const contact = () => (
  <>
    <Layout>
      <Container>
        <div className="row">
          <div className="col-12">
            <h1>Contact Us</h1>
            <p>
              Is your company in need of a web or mobile app? If so, please fill
              out the form below and let us know your company needs. We're more
              than glad to assist you.
            </p>
            <form
              name="/contact"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              action="/success"
            >
              <div className="contact-section">
                <div className="contact-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      className="name"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="form-group">
                    <input type="text" className="email" placeholder="Email" />
                    <div></div>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="textarea"
                      className="message"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div>
                    <Button type="submit">Submit</Button>
                  </div>
                </div>
                <div className="contact-logo">
                  <img src={tabletLogo} alt="tablet logo" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Layout>
  </>
)

export default contact
