import React, { useState } from "react";
import Pagina from "../../../../components/Pagina";
import apiDeputados from "../../../../services/apiDeputados";
import { Button, Card, Col, Form, Nav, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const index = ({ deputado }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_mtcncns",
        "template_7e9138b",
        templateParams,
        "VfZRRjuWlsif8FCj6"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }
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
        <Col className="border p-3 rounded">
          <Nav
            fill
            variant="pills"
            defaultActiveKey={`/deputados/${deputado.id}/contatos`}
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
          <h3 className="text-white mb-4">Mande seu email:</h3>
          <form className="form mb-3" onSubmit={sendEmail}>
            <Row className="mb-3">
              <div className=" col">
                <label for="name" className="form-label text-white">
                  Nome:
                </label>
                <input
                  id="name"
                  className="form-control"
                  type="text"
                  placeholder="Digite seu nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className=" col">
                <label className="form-label text-white">Email:</label>
                <input
                  id="emaiil"
                  className="form-control"
                  type="text"
                  placeholder="Digite seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </Row>
            <div className="mb-3">
              <label className="form-label text-white">Mensagem:</label>
              <textarea
                className="form-control"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <input className="btn btn-success" type="submit" value="Enviar" />
          </form>
          <Row style={{ marginTop: 180 }}>
            <a href="https://wa.me//556184212998?text=Tenho%20interesse%20em%20comprar%20seu%20carro">
              <img src="https://media.discordapp.net/attachments/989658427410223114/1120081026950123731/WhatsAppButtonGreenLarge.png" />
            </a>
          </Row>
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
