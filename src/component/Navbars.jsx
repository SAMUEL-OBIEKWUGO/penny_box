import React, { useEffect, useState } from 'react';
import logo from "../assets/logoyellow-ClA0RuGE.png";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../style/navbar.css";

const Navbars = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`custom-navbar ${scrolled ? "scrolled" : ""}`} variant="dark">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={logo} alt="PennyBox Logo" height="30" className="me-2" />
          <span>PennyBox</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
