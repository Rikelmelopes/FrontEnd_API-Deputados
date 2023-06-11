import React from "react";
import Pagina from "../../../components/Pagina";
import { Card, Col, ListGroup, Nav, Row, Table } from "react-bootstrap";
import apiDeputados from "../../../services/apiDeputados";
import Link from "next/link";

const index = ({ orgao }) => {
  return (
    <Pagina titulo={orgao.nome}>
      <Row>
        <Col className="border p-3 rounded">
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
            <ListGroup.Item>
              <div className="ms-2 me-auto">
                <div className="fw-bold" style={{ fontSize: 18 }}>
                  Nome
                </div>
                {orgao.nome}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="ms-2 me-auto">
                <div className="fw-bold" style={{ fontSize: 18 }}>
                  Apelido
                </div>
                {orgao.apelido}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="ms-2 me-auto">
                <div className="fw-bold" style={{ fontSize: 18 }}>
                  Sala
                </div>
                {orgao.sala}
              </div>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="ms-2 me-auto">
                <div className="fw-bold" style={{ fontSize: 18 }}>
                  Sigla
                </div>
                {orgao.sigla}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="ms-2 me-auto">
                <div className="fw-bold" style={{ fontSize: 18 }}>
                  Tipo
                </div>
                {orgao.tipoOrgao}
              </div>
            </ListGroup.Item>
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
