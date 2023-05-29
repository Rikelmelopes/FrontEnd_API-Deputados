import React from "react";
import Pagina from "../../../components/Pagina";
import { Card, Col, ListGroup, Nav, Row, Table } from "react-bootstrap";
import apiDeputados from "../../../services/apiDeputados";
import Link from "next/link";

const index = ({ orgao }) => {
  return (
    <Pagina>
      <Row>
        <Col className="border p-3">
          <Nav
            fill
            variant="pills"
            defaultActiveKey={`/orgaos/${orgao.id}`}
            className="my-3"
          >
            <Nav.Item>
              <Nav.Link href={`/orgaos/${orgao.id}`}>Informações</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`/orgaos/${orgao.id}/membros`}>Membros</Nav.Link>
            </Nav.Item>
          </Nav>
          <h3>Informações</h3>
          <ListGroup>
            <ListGroup.Item action variant="dark">
              Nome: <strong>{orgao.nome}</strong>
            </ListGroup.Item>
            <ListGroup.Item action variant="dark">
              Apelido: <strong>{orgao.apelido}</strong>
            </ListGroup.Item>{" "}
            <ListGroup.Item action variant="dark">
              Sala: <strong>{orgao.sala}</strong>
            </ListGroup.Item>{" "}
            <ListGroup.Item action variant="dark">
              Sigla: <strong>{orgao.sigla}</strong>
            </ListGroup.Item>{" "}
            <ListGroup.Item action variant="dark">
              Tipo: <strong>{orgao.tipoOrgao}</strong>
            </ListGroup.Item>{" "}
          </ListGroup>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiDeputados.get(`/orgaos/${id}`);
  const orgao = await resultado.data.dados;
  return {
    props: { orgao }, // will be passed to the page component as props
  };
}
