import Pagina from "../../components/Pagina";
import MeuCard from "../../components/MeuCard";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const index = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios
      .get("/api/usuarios")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Pagina titulo="Usuários">
      <Link href={"/usuario/form"} className="btn btn-primary mb-2">
        Novo
        <BsPlusCircle className="ms-1" />
      </Link>
      <Table variant="dark" striped bordered hover className="my-3">
        <thead>
          <tr>
            <th></th>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td
                className="text-center"
                style={{ width: 70, verticalAlign: "middle" }}
              >
                <Link href={`usuario/${item.id}`}>
                  <BsFillArrowUpRightSquareFill color="#17583B" />
                </Link>
              </td>
              <td style={{ width: 100 }}>
                <img
                  src={item.foto}
                  style={{ height: 80, width: 80, borderRadius: "50%" }}
                />
              </td>
              <td style={{ verticalAlign: "middle" }}>{item.nome}</td>
              <td style={{ width: 200, verticalAlign: "middle" }}>
                {item.telefone}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <Row>
        {users.map((item) => (
          <Col key={item.id}>
            <Link
              href={`/usuario/${item.id}`}
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
              }}
            >
              <MeuCard>
                <Card.Img src={item.foto} />
                <Card.Body>
                  <Card.Title>{item.nome}</Card.Title>
                </Card.Body>
              </MeuCard>
            </Link>
          </Col>
        ))}
      </Row> */}
    </Pagina>
  );
};

export default index;
