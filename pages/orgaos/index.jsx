import React from "react";
import Pagina from "../../components/Pagina";
import apiDeputados from "../../services/apiDeputados";
import { Table } from "react-bootstrap";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import Link from "next/link";

const index = ({ orgaos }) => {
  return (
    <Pagina titulo={"Órgãos"}>
      <Table variant="dark" striped bordered hover className="my-3">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Sigla</th>
          </tr>
        </thead>
        <tbody>
          {orgaos.map((item) => (
            <tr key={item.id}>
              <td className="text-center" style={{ width: 70 }}>
                <Link href={`orgaos/${item.id}`}>
                  <BsFillArrowUpRightSquareFill color="#17583B" />
                </Link>
              </td>
              <td>{item.nome}</td>
              <td style={{ width: 150 }}>{item.sigla}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await apiDeputados.get(`/orgaos?itens=100`);
  const orgaos = await resultado.data.dados;
  return {
    props: { orgaos }, // will be passed to the page component as props
  };
}
