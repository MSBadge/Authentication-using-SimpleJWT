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

// List ALl Data
export const listStu = () => {
    return stuAPI.get('/student/')
}

// Delete Single Data
export const deletStu = (id) => {
  return stuAPI.delete(`/student/${id}/`)
}

// Post Data
export const postStu = (formData) => {
  return stuAPI.post('/student/',formData)
}

// Updata Single Data
export const updateStu = (id, formData) => {
  return stuAPI.put(`/student/${id}/`, formData)
}