import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import Logo from "../../../images/logo.png";
import ProfilePopper from "../ProfilePopper/ProfilePopper";

const NavBar = () => {
  const {
    loggedInUser: { isSignedIn },
  } = useContext(UserContext);
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
      className={isSticky || isCollapsed ? "shadow-sm bg-dark py-2" : "py-4"}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className="ml-md-5 text-white"
        style={{ fontSize: "30px" }}
      >
        <img
          alt="Logo"
          src={Logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{" "}
        <strong>Sam Motors</strong>
      </Navbar.Brand>

      <Navbar.Toggle
        onClick={() => setCollapsed(!isCollapsed ? "show" : null)}
        aria-controls="responsive-navbar-nav"
      />

      <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/"
            className="mr-md-5 text-white"
            onClick={() => window.scrollTo(500, 0)}
            active
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/explore"
            className="mr-md-5 text-white"
            active
          >
            Explore
          </Nav.Link>
          <Nav.Link href="#reviews" className="mr-md-5 text-white" active>
            Reviews
          </Nav.Link>
          <Nav.Link href="#contact" className="mr-md-5 text-white" active>
            Contact Us
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/profile"
            className="mr-md-5 text-white"
            active
          >
            Dashboard
          </Nav.Link>
          {isSignedIn ? (
            <div style={{ marginRight: "5.5rem" }}>
              <ProfilePopper />
            </div>
          ) : (
            <Nav.Link
              as={Link}
              to="/login"
              className="mr-md-5 px-4 btn btn-primary text-white"
              active
            >
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
