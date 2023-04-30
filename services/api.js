import axios from "axios";

const api = axios.create({
  baseURL: "https://dadosabertos.camara.leg.br/swagger/api.html",
});

export default api;
