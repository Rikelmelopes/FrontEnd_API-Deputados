import React from "react";
import Pagina from "../../components/Pagina";

const index = ({ orgaos }) => {
  return <Pagina>index</Pagina>;
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await apiDeputados.get(`/orgaos?itens=100`);
  const orgaos = await resultado.data.dados;
  return {
    props: { orgaos }, // will be passed to the page component as props
  };
}
