import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const api = axios.create({
    baseURL : 'http://127.0.0.1:8000'
})

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access')

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

// get data
export const listData = () => {
  return api.get('/register/')
}

// register form
export const register = (formData) => {
    return api.post('/register/', formData)
}

// login form
export const loginUser = (formData) => {
  return api.post('/get_token/', formData)
}

export const saveTokens = ({ access, refresh }) => {
  localStorage.setItem('access', access)
  localStorage.setItem('refresh', refresh)
}

export const saveLoggedInUser = (username) => {
  localStorage.setItem('username', username)
}

export const getLoggedInUser = () => {
  return localStorage.getItem('username')
}

export const logoutUser = () => {
  localStorage.removeItem('access')
  localStorage.removeItem('refresh')
  localStorage.removeItem('username')
}

export const isLoggedIn = () => {
  const accessToken = localStorage.getItem('access')

  if (!accessToken) {
    return false
  }

  try {
    const decoded = jwtDecode(accessToken)
    return decoded.exp * 1000 > Date.now()
  } catch {
    return false
  }
}
