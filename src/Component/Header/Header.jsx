import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Header.scss";
// import loading from "../../Assets/Img/loading.gif";
import logo from "../../Assets/Img/logo.png";

const Header = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 header">
          <Container fluid>
            <Navbar.Brand href="/">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <Link to="/about">About</Link>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <Link to="/service">Service</Link>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <Link to="/contact">Contact</Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
