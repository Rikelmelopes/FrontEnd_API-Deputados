import Pagina from "../../components/Pagina";
import MeuCard from "../../components/MeuCard";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

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
      <Row>
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
      </Row>
    </Pagina>
  );
};

export default index;
