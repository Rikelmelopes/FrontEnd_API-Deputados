import Link from "next/link";
import { Container, Row } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container>
      <Row>
        <div>
          <h1>404</h1>
          <h3>Ops!</h3>
          <p>Parece que esta página não existe!</p>
          <img src="https://media.tenor.com/lmA7VALYIAsAAAAM/sad-pikachu.gif" />
          <br />
          <div className="my-5 text">
            <Link href="/" className="btn btn-primary">
              Voltar
            </Link>
          </div>
        </div>
      </Row>
    </Container>
  );
}
