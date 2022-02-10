import React, { useState } from "react"
import { navigate } from "gatsby-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "react-bootstrap"

import tabletLogo from "../images/tablet-logo1.png"

// const Container = styled.div`
//   margin: 3rem auto;
//   display: flex;
//   flex-direction: row;
//   font-family: "Montserrat", sans-serif;
// `

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    textarea: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/Contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute("name"), ...formState }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => console.log(error))
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
      <Layout>
        <SEO title='Contact' />
          <div className="row">
            <div className="col-12">
              <h1>Contact Us</h1>
              <p>
                Is your company in need of a web or mobile app? If so, please
                fill out the form below and let us know your company needs.
                We're more than glad to assist you.
              </p>
              <form
                method="post"
                data-netlify-honeypot="bot-field"
                data-netlify="true"
                action="/Success"
                name="contact"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="contact-section">
                  <div className="contact-wrapper">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        name="name"
                        className="name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Email"
                        name="email"
                        className="email"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="textarea"
                        id="message"
                        value={formState.textarea}
                        onChange={handleChange}
                        rows="1"
                        placeholder="Message"
                        className="message"
                        required
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
      </Layout>
  )
}

export default Contact
