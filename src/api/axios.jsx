import axios from "axios";

const AxiosClient = axios.create({
  // 1. Beddel 127.0.0.1 b localhost bach t-fada l-CORS
 baseURL: "http://127.0.0.1:8000/api", 
 withCredentials: true,
  headers: {
    "Accept": "application/json",
  },
});

AxiosClient.interceptors.request.use(
  (config) => {
    // 2. T-akked mn smya li khabiti biha l-token f onSubmit
    const token = localStorage.getItem("ACCESS_TOKEN"); 

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosClient;