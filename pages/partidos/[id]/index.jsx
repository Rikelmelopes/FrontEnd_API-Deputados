import React from "react";
import apiDeputados from "../../../services/apiDeputados";
import Pagina from "../../../components/Pagina";
import { Card, Col, Nav, Row } from "react-bootstrap";
import Link from "next/link";
import MeuCard from "../../../components/MeuCard";

const index = ({ partido, membros }) => {
  return (
    <Pagina titulo={partido.nome}>
      <Row className="my-3">
        <Col key={partido.id} md={3}>
          <div>
            <h3 style={{ color: "white", textAlign: "center" }}>Informações</h3>
          </div>
          <Card>
            {partido.urlLogo ? (
              <Card.Img variant="top" src={partido.urlLogo} />
            ) : (
              <></>
            )}
            <Card.Body>
              <p>Sigla: {partido.sigla}</p>
              <p>Líder: {partido.status.lider.nome}</p>
              <p>Situação: {partido.status.situacao}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <h3 style={{ color: "white", textAlign: "center" }}>Membros</h3>
          </div>
          <Card>
            <Card.Body>
              <Row>
                {membros.map((item) => (
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
  const resultado1 = await apiDeputados.get(`/partidos/${id}`);
  const partido = await resultado1.data.dados;

  const resultado2 = await apiDeputados.get(`/partidos/${id}/membros`);
  const membros = await resultado2.data.dados;

  return {
    props: { partido, membros }, // will be passed to the page component as props
  };
}
