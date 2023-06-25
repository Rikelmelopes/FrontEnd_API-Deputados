import React, { useEffect, useState } from "react";
import apiDeputados from "../../../services/apiDeputados";
import Pagina from "../../../components/Pagina";
import { Button, Card, Col, Nav, Row, Table } from "react-bootstrap";
import DonutChart from "../../../components/DonutChart";
import MeuCard from "../../../components/MeuCard";
import axios from "axios";

const index = ({ deputado, gastos }) => {
  function getMonthName(monthNumber) {
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    // Verifica se o número do mês é válido
    if (monthNumber >= 1 && monthNumber <= 12) {
      return months[monthNumber - 1];
    } else {
      return "";
    }
  }
  const [forum, setForum] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios
      .get(`/api/forum/`)
      .then((res) => {
        setForum(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  function calculo(data) {
    let valorAnoAtual = 0;
    let valorAnoPassado = 0;

    gastos.map((item) => {
      if (item.ano == data) {
        valorAnoAtual += item.valorLiquido;
      }
      if (item.ano == data - 1) {
        valorAnoPassado += item.valorLiquido;
      }
    });
    return (
      <Row>
        <Col>
          <DonutChart
            data={{
              labels: [`Ano ${anoAtual}`, `Ano ${anoAtual - 1}`],
              datasets: [
                {
                  data: [
                    // 1, 2, 3,
                    valorAnoAtual,
                    valorAnoPassado,
                  ],
                  backgroundColor: ["#FF6384", "#36A2EB"],
                  hoverBackgroundColor: ["#FF6384", "#36A2EB"],
                },
              ],
            }}
          />
        </Col>
      </Row>
    );
  }

  return (
    <Pagina titulo={deputado.ultimoStatus.nome}>
      <Row className="my-3">
        <Col key={deputado.id} md={3}>
          <Card border="success">
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
        <Col className="border p-3 rounded">
          <Nav
            fill
            variant="pills"
            defaultActiveKey={`/deputados/${deputado.id}`}
            className="my-3"
          >
            <Nav.Item>
              <Nav.Link href={`/deputados/${deputado.id}`}>Despesas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`/deputados/${deputado.id}/contatos`}>
                Contatos
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Card>
            <Card.Body>
              {/* <Row>
                {gastos.map((item) => (
                  <Col key={item.id} className="my-3">
                    <MeuCard>
                      <div style={{ padding: 10 }}>
                        <Col style={{ marginBottom: 10 }}>
                          <Row>
                <Col>
                  <DonutChart
                                data={{
                                  labels: ["Documento", "Glosa"],
                                  datasets: [
                                    {
                                      data: [
                                        // 1, 2, 3,
                                        parseInt(item.valorDocumento),
                                        parseInt(item.valorGlosa),
                                      ],
                                      backgroundColor: ["#FF6384", "#36A2EB"],
                                      hoverBackgroundColor: [
                                        "#FF6384",
                                        "#36A2EB",
                                      ],
                                    },
                                  ],
                                }}
                              /> */}
              {calculo(anoAtual)}
              {/* </Col>
                <Col>
                  <strong style={{ fontSize: 30 }}>{item.ano}</strong>
                  <br /> {getMonthName(item.mes)}
                  <br /> R$
                  {item.valorLiquido.toFixed(2).replace(".", ",")}
                </Col>
                </Row>
                        </Col>
                        <Col>{item.tipoDespesa}</Col>
                      </div>
                    </MeuCard>
                  </Col>
                ))}
              </Row> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-5">
        <h2 className="text-white text-center">Fórum</h2>
        <Button className="btn btn-primary" href={`/forum/${deputado.id}`}>
          Novo
        </Button>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {forum.map((item) => (
              <tr key={item.id}>
                <td>{item.usuario}</td>
                <td>{item.menssagem}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiDeputados.get(`/deputados/${id}`);
  const deputado = await resultado.data.dados;
  const resultado2 = await apiDeputados.get(`/deputados/${id}/despesas`);
  const gastos = await resultado2.data.dados;

  return {
    props: { deputado, gastos }, // will be passed to the page component as props
  };
}
