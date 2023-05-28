import React, { useEffect, useState } from "react";
import apiDeputados from "../services/apiDeputados";

const teste = () => {
  const [teste, setTeste] = useState([]);

  useEffect(() => {
    apiDeputados.get(`/deputados/220593/discursos`).then((resultado) => {
      console.log(resultado.data.dados);
    });
  }, []);

  return <div>teste</div>;
};

export default teste;
