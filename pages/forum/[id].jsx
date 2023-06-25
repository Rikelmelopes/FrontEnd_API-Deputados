import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Pagina from "../../components/Pagina";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  BsArrowLeftCircleFill,
  BsCheck2,
  BsFillArrowDownRightSquareFill,
} from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import apiDeputados from "../../services/apiDeputados";

const novo = ({ deputado }) => {
  const { push } = useRouter();
  const [users, setUsers] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/usuarios").then((res) => {
      setUsers(res.data);
    });
  }

  function salvar(dados) {
    axios.post(`/api/forum/${deputado.id}`, dados);
    push(`/deputados/${deputado.id}`);
  }

  return (
    <Pagina>
      <Row>
        <Col>{}</Col>
      </Row>
      <Form className="text-white">
        <Form.Group controlId="user" className="mb-3">
          <Form.Label>Usuário</Form.Label>
          <Form.Select defaultValue={"..."} {...register("usuario")}>
            <option value={"..."}>...</option>
            {users?.map((item) => (
              <option value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Menssagem:</Form.Label>
          <Form.Control
            as={"textarea"}
            type="text"
            placeholder="Escreva sua menssagem..."
            {...register("menssagem")}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link href={"/deputados"} className="ms-2 btn btn-danger">
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default novo;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiDeputados.get(`/deputados/${id}`);
  const deputado = await resultado.data.dados;

  return {
    props: { deputado }, // will be passed to the page component as props
  };
}
