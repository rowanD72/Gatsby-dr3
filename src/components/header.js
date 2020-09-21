import React from "react"
import { Nav, Navbar } from "react-bootstrap"

/**where I can add navigation for all pages */
const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="nav-syles">
        <Navbar.Brand href="/" id="nav-logo">
          DR3WEBDEV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle-bar-style" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto
           justify-content-end"
          >
            <Nav.Link href="/" className="nav-link-style">
              Home
            </Nav.Link>
            <Nav.Link href="about" className="nav-link-style">
              About
            </Nav.Link>
            <Nav.Link href="contact" className="nav-link-style">
              Contact
            </Nav.Link>
            <Nav.Link href="services" className="nav-link-style">
              Services
            </Nav.Link>
            <Nav.Link href="design" className="nav-link-style">
              Design
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
