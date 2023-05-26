import React from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import { Card, Container } from "react-bootstrap";

const Pagina = (props) => {
  return (
    <div>
      <Cabecalho />

      <Container className="mb-5 pb-3">{props.children}</Container>

      <Rodape />
    </div>
  );
};

export default Pagina;
