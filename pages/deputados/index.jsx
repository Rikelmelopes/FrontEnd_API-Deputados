import React, { useState } from "react";
import Pagina from "../../components/Pagina";
import { Col, Row, Card, Form, Button } from "react-bootstrap";
import apiDeputados from "../../services/apiDeputados";
import Link from "next/link";
import MeuCard from "../../components/MeuCard";

const Index = ({ deputados }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredDeputados = deputados.filter((item) =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    event.preventDefault();
    // Realize a ação de pesquisa aqui, se necessário
    console.log("Termo de pesquisa:", searchTerm);
  };

  return (
    <Pagina titulo="Deputados">
      <Card border="success" style={{ width: "100%" }}>
        <Form className="d-flex" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-1"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
          />
          {/* <Button
            variant="success"
            type="submit"
            style={{ backgroundColor: "#17583B" }}
          >
            Busca
          </Button> */}
        </Form>
      </Card>
      <br></br>
      <Card>
        <Card.Body>
          <Row>
            {filteredDeputados.map((item) => (
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
    </Pagina>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const resultado = await apiDeputados.get(`/deputados`);
  const deputados = await resultado.data.dados;
  return {
    props: { deputados }, // será passado para o componente da página como props
  };
}
