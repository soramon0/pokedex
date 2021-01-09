import Axios from "axios";

// TODO(): configure axios
const http = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export default http;