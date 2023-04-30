import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Cabecalho = () => {
  return (
    <div>
      <Navbar
        variant="dark"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#004A2F ", color: "white" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">
              <img src="/img/image.png" alt="logo" />
            </Navbar.Brand>
            <Nav className="me-auto ">
              <Nav.Link href="/deputados">Deputados</Nav.Link>
              <Nav.Link href="/partidos">Partidos</Nav.Link>
              <Nav.Link href="/orgaos">Orgãos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Cabecalho;
