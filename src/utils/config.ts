import axios from "axios"

export const Api = axios.create({
  // baseURL: `https://store-api.softclub.tj/`,
  baseURL: `http://37.27.29.18:8002/`,
})

Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config
})

Api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      window.location.href = "/Login"
    }
  }
)
