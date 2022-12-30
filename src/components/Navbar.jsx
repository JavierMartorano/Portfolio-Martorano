import React from "react";
import { Container, Nav, Navbar, Button} from "react-bootstrap";
import imgLogo from "../assets/img/logo.png";
import cv from "../assets/img/CV Javier Martorano.pdf";
import "../assets/css/navbar.css";

const navbar = () => {
  return (
    <Navbar
      className="navbar navbar-dark shadow-5-strong navbar-custom"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#header">
          <img
            src={imgLogo}
            width="50"
            height="45"
            className="d-inline-block align-top"
            alt="..."
          />
        </Navbar.Brand>
        <Navbar.Brand href={cv} download>
          <Button variant="outline-secondary">Descargar CV</Button>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" align="center">
          <Nav className="ms-auto" navbarScroll>
            <Nav.Link href="#aboutMe">Sobre mí</Nav.Link>
            <Nav.Link href="#proyects">Proyectos</Nav.Link>
            <Nav.Link href="#contactMe">Contacto </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
