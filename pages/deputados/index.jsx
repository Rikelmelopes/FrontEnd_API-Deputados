import React from "react";
import Pagina from "../../components/Pagina";
import { Col, Row, Card } from "react-bootstrap";
import apiDeputados from "../../services/apiDeputados";

const index = ({ deputados }) => {
  return (
    <Pagina>
      <Row>
        {deputados.map((item) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.urlFoto} />
              <Card.Body>
                <Card.Title>{item.nome}</Card.Title>
              </Card.Body>
            </Card>
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
