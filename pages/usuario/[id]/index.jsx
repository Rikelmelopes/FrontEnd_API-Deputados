import Pagina from "../../../components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const index = () => {
  const { push, query } = useRouter();
  const [cliente, setCliente] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/usuarios/${query.id}`).then((res) => {
        setCliente(res.data);
        setLoading(false);
      });
    }
  }, [query.id]);

  function excluir() {
    setShow(true);
  }

  return (
    <Pagina titulo={cliente.nome}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja Exlcuir {cliente.nome}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tenha certeza disso, após essa ação o <strong>Cliente</strong> será
          exluido para sempre!
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "#0D8CFF" }} onClick={handleClose}>
            Sair
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              axios.delete(`/api/usuarios/${cliente.id}`);
              push("/clientes");
            }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col>
          <Card>
            <Card.Img src={cliente.foto} />
          </Card>
        </Col>
        <Col>
          <h3>Informações:</h3>

          <Row>
            <Col>
              <p>
                <strong>Animal:</strong> {cliente.animal}
              </p>
            </Col>
            <Col>
              <p>
                <strong>CPF:</strong> {cliente.cpf}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <strong>CEP:</strong> {cliente.cep}
              </p>
            </Col>
            <Col>
              <p>
                <strong>Email:</strong> {cliente.email}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <strong>Telefone:</strong> {cliente.telefone}
              </p>
            </Col>
            <Col>
              <p>
                <strong>Logradouro:</strong> {cliente.logradouro}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <strong>Bairro:</strong> {cliente.bairro}
              </p>
            </Col>
            <Col>
              <p>
                <strong>Número:</strong> {cliente.numero}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <strong>Cidade:</strong> {cliente.cidade}
              </p>
            </Col>
            <Col>
              <p>
                <strong>UF:</strong> {cliente.uf}
              </p>
            </Col>
          </Row>
          <div className="text-center">
            <Link
              className="btn"
              style={{ backgroundColor: "#0D8CFF" }}
              href={`${cliente.id}/form`}
            >
              Editar
            </Link>

            <Button onClick={excluir} className="btn btn-danger ms-2">
              Excluir
            </Button>
          </div>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
