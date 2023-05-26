import React from "react";
import Cabecalho from "./Cabecalho";
import { Card, Container } from "react-bootstrap";

const Pagina = (props) => {
  return (
    <div>
      <Cabecalho />
      <div
        className="py-0 text-white text-center mb-3 "
        style={{ backgroundColor: "#800000" }}
      >
        <Container style={{ color: "white" }}>
          <h1>{props.titulo}</h1>
        </Container>
      </div>
      <Container className="mb-5 pb-3">{props.children}</Container>

      <div
        style={{
          width: "100%",
        }}
        className=" position-fixed bottom-0 py-0 text-white text-center bg-dark"
      >
        <p>
          Todos os direitos reservados® Feito por{" "}
          <a
            href="https://github.com/JoaoeduLS"
            style={{ textDecoration: "none", color: "#800000" }}
          >
            Joao Eduardo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Pagina;
