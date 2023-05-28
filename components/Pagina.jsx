import React from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import { Card, Container } from "react-bootstrap";

const Pagina = (props) => {
  return (
    <div>
      <Cabecalho />
      <div
        className="py-3 text-white text-center mb-3"
        style={{ backgroundColor: "#17583B" }}
      >
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>
      <Container className="mb-5 pb-3">{props.children}</Container>

      <Rodape />
    </div>
  );
};

export default Pagina;
