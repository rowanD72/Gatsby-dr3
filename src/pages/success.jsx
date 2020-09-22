import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"

const success = props => (
  <>
    <Layout>
      <SEO title="Success" />
      <Helmet>
        <title>Success Page</title>
        <meta name="description" content="Success Page" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Success! Thanks For Submitting.</h1>
            </header>
            <span className="image-main">
              <img src="" alt="" />
            </span>
            <p>Thank you for reaching out. We will contact you shortly.</p>
          </div>
        </section>
      </div>
    </Layout>
  </>
)

export default success
