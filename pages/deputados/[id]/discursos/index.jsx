import React from "react";
import Pagina from "../../../../components/Pagina";
import apiDeputados from "../../../../services/apiDeputados";
import { Card, Col, ListGroup, Nav, Row, Table } from "react-bootstrap";

const index = ({ deputado, discurso }) => {
  return (
    <Pagina>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
            <Card.Body>
              <strong>Informações</strong>
              <br />
              Partido: {deputado.ultimoStatus.siglaPartido}
              <br />
              Uf: {deputado.ultimoStatus.siglaUf}
              <br />
              Condição Eleitoral: {deputado.ultimoStatus.condicaoEleitoral}
              <br />
              Gabinete:
              <ul>
                <li>
                  Predio{" "}
                  <strong>{deputado.ultimoStatus.gabinete.predio}</strong>
                </li>
                <li>
                  Andar <strong>{deputado.ultimoStatus.gabinete.andar}</strong>
                </li>
                <li>
                  Sala <strong>{deputado.ultimoStatus.gabinete.sala}</strong>
                </li>
                <li>
                  Telefone{" "}
                  <strong>{deputado.ultimoStatus.gabinete.telefone}</strong>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col className="border p-3">
          <Nav
            fill
            variant="pills"
            defaultActiveKey={`/deputados/${deputado.id}/discursos`}
            className="my-3"
          >
            <Nav.Item>
              <Nav.Link href={`/deputados/${deputado.id}`}>Despesas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`/deputados/${deputado.id}/discursos`}>
                Discursos
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <h3>Discursos</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Tipo de Discurso</th>
                <th>Inicio - Fim</th>
                <th>Transcrição</th>
              </tr>
            </thead>
            <tbody>
              {discurso.map((item) => (
                <tr>
                  <td>{item.tipoDiscurso}</td>
                  <td>
                    {new Date(item.dataHoraInicio).toTimeString()} -{" "}
                    {new Date(item.dataHoraFim).toTimeString()}
                  </td>
                  <td>{item.transcricao}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiDeputados.get(`/deputados/${id}`);
  const deputado = await resultado.data.dados;

  const resDiscurso = await apiDeputados.get(`/deputados/${id}/discursos`);
  const discurso = await resDiscurso.data.dados;
  return {
    props: { deputado, discurso }, // will be passed to the page component as props
  };
}
