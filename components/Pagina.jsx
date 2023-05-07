import React from "react";
import Cabecalho from "./Cabecalho";
import { Container } from "react-bootstrap";
import Rodape from "./Rodape";

const Pagina = (props) => {
  return (
    <>
      <Cabecalho />

      <Container>{props.children}</Container>

      <Rodape />
    </>
  );
};

export default Pagina;
