import React from "react";
import Pagina from "../../components/Pagina";
import apiDeputados from "../../services/apiDeputados";
import { Card, Col, Row } from "react-bootstrap";

const index = ({ partidos }) => {
  return (
    <Pagina titulo={partidos.nome}>
      <Row>
        <Col md={2}>
          <Card>
            <Card.Img src={partidos.urlLogo}></Card.Img>
          </Card>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiDeputados.get(`/partidos/${id}`);
  const partidos = await resultado.data.dados;
  return {
    props: { partidos }, // will be passed to the page component as props
  };
}
