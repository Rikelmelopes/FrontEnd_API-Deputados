import React from "react";
import Pagina from "../../components/Pagina";
import { Col, Row, Card } from "react-bootstrap";
import apiDeputados from "../../services/apiDeputados";
import Link from "next/link";

const index = ({ deputados }) => {
  return (
    <Pagina titulo="Página Inicial">
      <Row>
        {deputados.map((item) => (
          <Col key={item.id} className="my-3">
            <Link
              href={`/deputados/${item.id}`}
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
              }}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.urlFoto} />
                <Card.Body>
                  <Card.Title>{item.nome}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await apiDeputados.get(`/deputados`);
  const deputados = await resultado.data.dados;
  return {
    props: { deputados }, // will be passed to the page component as props
  };
}
