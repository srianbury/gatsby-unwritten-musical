import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Navbar.Brand>
      <Link to="/" className="text-light">
        {siteTitle}
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" />
      <Nav>
        <NavItem to="/" title="Home" />
        <NavItem to="/about" title="About" />
        <NavItem to="/contact" title="Contact" />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const NavItem = ({ to, title }) => (
  <Link to={to} className="text-light ml-2 mb-2 mb-sm-1 mt-2 mt-sm-1">
    {title}
  </Link>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
