import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import { Col, Row, Card, Form, Button } from "react-bootstrap";
import apiDeputados from "../../services/apiDeputados";
import Link from "next/link";
import MeuCard from "../../components/MeuCard";

const Index = ({ deputados }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de pesquisa
  const [currentPage, setCurrentPage] = useState(1); // Estado para armazenar o número da página atual
  const [itemsPerPage, setItemsPerPage] = useState(19); // Estado para armazenar o número de itens por página

  const filteredDeputados = deputados.filter(
    (item) => item.nome.toLowerCase().includes(searchTerm.toLowerCase()) // Array filtrado de deputados com base no termo de pesquisa
  );

  const indexOfLastItem = currentPage * itemsPerPage; // Índice do último item na página atual
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Índice do primeiro item na página atual
  const currentItems = filteredDeputados.slice(
    // Array de itens para a página atual
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleSearch = (event) => {
    event.preventDefault();
    // Realize a ação de pesquisa aqui, se necessário
    console.log("Termo de pesquisa:", searchTerm);
  };

  function paginacao() {
    const totalPages = Math.ceil(filteredDeputados.length / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav style={{ display: "flex", justifyContent: "center" }}>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                href="#"
                className={`page-link ${
                  currentPage === number ? "active" : ""
                }`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <Pagina titulo="Deputados">
      <Card border="success" style={{ width: "100%" }}>
        <Form className="d-flex" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Pesquisar"
            className="me-1"
            aria-label="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
          />
        </Form>
      </Card>
      <br />
      <div className="paginacao">{paginacao()}</div>
      <Card>
        <Card.Body>
          <Row>
            {currentItems.map((item) => (
              <Col key={item.id} className="my-2" md={4}>
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
      <br />
      <div className="paginacao">{paginacao()}</div>
    </Pagina>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const resultado = await apiDeputados.get(`/deputados`);
  const deputados = await resultado.data.dados;
  return {
    props: { deputados }, // Será passado para o componente da página como props
  };
}
