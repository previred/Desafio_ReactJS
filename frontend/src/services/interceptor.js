import axios from 'axios';

const axiosApiInstance = axios.create();
axiosApiInstance.baseURL = 'http://localhost:5000/api';

const token = localStorage.getItem('token');

axiosApiInstance.interceptors.request.use(
  async config => {
    config.headers = {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

axiosApiInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    const { status } = error.response;

    if(status === 403)
        console.log('credenciales incorrectas');

    if(status === 400)
        console.log('el login ha fallado');

    if(status === 500)
        console.log('el backend no esta levantado');

    return Promise.reject(error);
  }
);

export default axiosApiInstance;

// const result = await axios.post(url, data)