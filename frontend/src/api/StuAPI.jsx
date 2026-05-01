import axios from "axios";

const stuAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/school'
})

stuAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

export const listStu = () => {
    return stuAPI.get('/student/')
}