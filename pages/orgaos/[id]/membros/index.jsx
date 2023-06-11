import React from "react";
import Pagina from "../../../../components/Pagina";
import { Card, Col, ListGroup, Nav, Row } from "react-bootstrap";
import apiDeputados from "../../../../services/apiDeputados";
import Link from "next/link";
import MeuCard from "../../../../components/MeuCard";

const index = ({ orgao, orgaos }) => {
  return (
    <Pagina>
      <Row>
        <Col className="border p-3 rounded">
          <Nav
            fill
            variant="pills"
            defaultActiveKey={`/orgaos/${orgaos.id}/membros`}
            className="my-3"
          >
            <Nav.Item>
              <Nav.Link href={`/orgaos/${orgaos.id}/`}>Informações</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`/orgaos/${orgaos.id}/membros`}>Membros</Nav.Link>
            </Nav.Item>
          </Nav>
          <h3>Membros</h3>
          <Card>
            <Card.Body>
              <Row>
                {orgao.map((item) => (
                  <Col key={item.id} className="my-3">
                    <Link
                      href={`/deputados/${item.id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      <MeuCard>
                        <Card.Img variant="top" src={item.urlFoto} />
                        <Card.Body>
                          <Card.Title>{item.nome}</Card.Title>
                        </Card.Body>
                      </MeuCard>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiDeputados.get(`/orgaos/${id}/membros`);
  const orgao = await resultado.data.dados;

  const res = await apiDeputados.get(`/orgaos/${id}`);
  const orgaos = await res.data.dados;
  return {
    props: { orgao, orgaos }, // will be passed to the page component as props
  };
}
