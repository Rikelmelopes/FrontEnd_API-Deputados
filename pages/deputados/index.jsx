import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import { Col, Row, Card, Form, Button, Pagination } from "react-bootstrap";
import apiDeputados from "../../services/apiDeputados";
import Link from "next/link";
import MeuCard from "../../components/MeuCard";

const Index = ({ deputados }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(18);

  const filteredDeputados = deputados.filter((item) =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDeputados.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Termo de pesquisa:", searchTerm);
  };

  function paginacao() {
    const totalPages = Math.ceil(filteredDeputados.length / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <Pagination>
        {currentPage != 1 ? (
          <>
            <Pagination.First onClick={() => setCurrentPage(1)} />
            <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
          </>
        ) : (
          ""
        )}

        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </Pagination.Item>
        ))}

        {currentPage != totalPages ? (
          <>
            <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
            <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
          </>
        ) : (
          ""
        )}
      </Pagination>
    );
  }

  return (
    <Pagina titulo="Deputados">
      <Card border="success" style={{ width: "100%", marginBottom: 20 }}>
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
      <Card>
        <Card.Body>
          <Row>
            {currentItems.map((item) => (
              <Col key={item.id} className="my-3" md={3}>
                <Link
                  href={`/deputados/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {/* {item.nome == "Abilio Brunini" ? (
                    <></>
                  ) : ( */}
                  <MeuCard>
                    <Card.Img variant="top" src={item.urlFoto} />
                    <Card.Body>
                      <Card.Title>{item.nome}</Card.Title>
                    </Card.Body>
                  </MeuCard>
                  {/* )} */}
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
    props: { deputados },
  };
}
