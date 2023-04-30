import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Rodape = () => {
  return (
    <Container
      style={{ width: "100%", backgroundColor: "#17583B" }}
      className="bottom-0 text-white text-center py-1"
      fluid
    >
      {/* <Row>
        <Col md={6}>
          <p>Desenvolvedores</p>
          <Row>
            <Col>
              <p>Diogo Sales</p>
              <p>Marcos Mendes</p>
              <p>Rikelme Lopes</p>
              <p>Hugo Loiola</p>
              <p>João Eduardo Lustosa</p>
            </Col>
          </Row>
        </Col> */}
      <Col>
        <p className="text-center" style={{ marginTop: "10px" }}>
          <strong>Desenvolvedores</strong>
        </p>
        <Row>
          <Col>
            <p className="text-end" style={{ marginBottom: "-2px" }}>
              <a
                href="https://github.com/digsales"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                Diogo Sales
              </a>
            </p>
            <p className="text-end" style={{ marginBottom: "-2px" }}>
              <a
                href="https://github.com/hugo-loiola"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                Hugo Loiola
              </a>
            </p>
            <p className="text-end" style={{ marginBottom: "-2px" }}>
              <a
                href="https://github.com/JoaoeduLS"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                João Eduardo
              </a>
            </p>
            <p className="text-end" style={{ marginBottom: "-2px" }}>
              <a
                href="https://github.com/MarkMaciel"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                Marcos Mendes
              </a>
            </p>
            <p className="text-end" style={{ marginBottom: "-2px" }}>
              <a
                href="https://github.com/Rikelmelopes"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                Rikelme Lopes
              </a>
            </p>
          </Col>
          <Col>
            <p className="text-start" style={{ marginBottom: "-2px" }}>
              21114290031
            </p>
            <p className="text-start" style={{ marginBottom: "-2px" }}>
              21114290036
            </p>
            <p className="text-start" style={{ marginBottom: "-2px" }}>
              21114290013
            </p>
            <p className="text-start" style={{ marginBottom: "-2px" }}>
              21114290020
            </p>
            <p className="text-start">21114290040</p>
          </Col>
        </Row>
      </Col>
      {/* </Row> */}
      <div
        style={{
          height: "30px",
          width: "100%",
          backgroundColor: "#004A2F",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "10px", margin: "0 auto" }}>
          TODOS DIREITOS RESERVADOS
        </p>
      </div>
    </Container>
  );
};

export default Rodape;
