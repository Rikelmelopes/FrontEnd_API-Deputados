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
          <Navbar.Brand href="/">
            <img
              src="https://cdn.discordapp.com/attachments/954503804676603998/1112479926805868625/DeputadexLogo.png"
              style={{ maxWidth: "300px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/deputados">Deputados</Nav.Link>
              <Nav.Link href="/partidos">Partidos</Nav.Link>
              <Nav.Link href="/orgaos">Órgãos</Nav.Link>
              <Nav.Link href="/usuario">Usuários</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Cabecalho;
