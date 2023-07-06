import React from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import location from "../../Assets/images/location.png";
import call from "../../Assets/images/call.png";
import envelope from "../../Assets/images/envelope.png";
import "../../Assets/stylesheet/responsive.css";
// import envelope from "../../Assets/images/envelope.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="">
        <div className="header_section">
          <Container className="top-bar">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" />
              <span> Energym </span>
            </Link>

            <div class="contact_nav" id="">
              <ul class="nav-item-box">
                <li class="nav-item">
                  <Link class="nav-link-item" href="service.html">
                    <img src={location} alt="" />
                    <span>Location</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link-item" href="service.html">
                    <img src={call} alt="" />
                    <span>Call : + 01 1234567890</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link-item" to="service.html">
                    <img src={envelope} alt="" />
                    <span>demo@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
        </div>

        {["md"].map((expand) => (
          <Navbar key={expand} expand={expand} className="">
            <Container className="main-menu-header">
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="">
                  <Nav className="main_menu_body flex-grow-1 pe-3">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/login">Login</Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>
    </>
  );
};

export default Header;
