import React from "react";
import apiDeputados from "../../services/apiDeputados";
import Pagina from "../../components/Pagina";
import { Card, Col, Row } from "react-bootstrap";

const index = ({ deputado }) => {
  return (
    <Pagina>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={deputado.urlFoto} />
            <Card.Body>
              <Card.Title>{deputado.nome}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <h1>Despesas?</h1>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiDeputados.get(`/deputados/${id}`);
  const deputado = await resultado.data.dados.ultimoStatus;
  return {
    props: { deputado }, // will be passed to the page component as props
  };
}
