import axios from "axios";

const http = axios.create({
  baseURL: 'https://listen-api.listennotes.com/api/v2/',
  headers: { 'X-ListenAPI-Key': 'b6c434f147314187801b2faf149a2bd4' }
});

export default http;