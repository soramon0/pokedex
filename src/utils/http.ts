import Axios from "axios";

// TODO(): configure axios
const http = Axios.create({
  baseURL: "http://192.168.1.104:3000/api",
});

export default http;