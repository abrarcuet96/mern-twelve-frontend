import axios from "axios";
const axios_instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});
